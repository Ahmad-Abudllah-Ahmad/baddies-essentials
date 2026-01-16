export default function Loading() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-pulse space-y-8">
                    {/* Header Skeleton */}
                    <div className="h-8 bg-slate-100 rounded-full w-1/3 mb-12 mx-auto" />

                    {/* Hero/Content Skeleton */}
                    <div className="h-[60vh] bg-slate-100 rounded-[3rem] w-full mb-12" />

                    {/* Grid Skeleton */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="aspect-[3/4] bg-slate-100 rounded-2xl" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
