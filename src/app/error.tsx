'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error('App Error:', error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 text-gray-900">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl w-full border border-red-100">
                <p className="text-red-600 font-mono text-sm mb-4 break-words">
                    {error.message || 'Unknown error occurred'}
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => reset()}
                        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                    >
                        Try again
                    </button>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Reload Page
                    </button>
                </div>
            </div>
        </div>
    )
}
