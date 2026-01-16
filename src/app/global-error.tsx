'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 text-gray-900">
                    <h2 className="text-2xl font-bold mb-4">Critical System Error</h2>
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl w-full border border-red-100">
                        <p className="text-red-600 font-mono text-sm mb-4 break-words">
                            {error.message || 'Unknown critical error occurred'}
                        </p>
                        <button
                            onClick={() => reset()}
                            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </body>
        </html>
    )
}
