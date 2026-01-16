import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="text-center space-y-6 max-w-md mx-auto">
                {/* Animated 404 Text */}
                <h1 className="text-9xl font-black text-slate-100 relative select-none">
                    404
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse">404</span>
                </h1>

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Page Not Found</h2>
                    <p className="text-slate-500 mb-8">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20"
                    >
                        <HomeIcon className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
