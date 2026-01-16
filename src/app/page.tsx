import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { FeaturedCategories } from '@/components/home/FeaturedCategories'
import { HeroSection } from '@/components/home/HeroSection'
import { Metadata } from 'next'

// All client-heavy components with animations/browser APIs - disable SSR to prevent hydration mismatch
// HeroSection is now SSR-enabled for better LCP


const SalesAggregator = dynamic(() => import('@/components/home/SalesAggregator').then(mod => ({ default: mod.SalesAggregator })), {
  loading: () => <div className="h-96 bg-slate-100 animate-pulse rounded-2xl" />,
  ssr: false
})

const TrendingProducts = dynamic(() => import('@/components/home/TrendingProducts').then(mod => ({ default: mod.TrendingProducts })), {
  loading: () => <div className="h-80 bg-slate-100 animate-pulse rounded-2xl" />,
  ssr: false
})

const ProductSlider = dynamic(() => import('@/components/home/ProductSlider').then(mod => ({ default: mod.ProductSlider })), {
  loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-3xl" />,
  ssr: false
})

const NewArrivals = dynamic(() => import('@/components/home/NewArrivals').then(mod => ({ default: mod.NewArrivals })), {
  loading: () => <div className="h-80 bg-slate-100 animate-pulse rounded-2xl" />,
  ssr: false
})

const BrandStoresGrid = dynamic(() => import('@/components/home/BrandStoresGrid').then(mod => ({ default: mod.BrandStoresGrid })), {
  loading: () => <div className="h-64 bg-slate-100 animate-pulse rounded-2xl" />,
  ssr: false
})

const Newsletter = dynamic(() => import('@/components/home/Newsletter').then(mod => ({ default: mod.Newsletter })), {
  loading: () => <div className="h-48 bg-slate-100 animate-pulse rounded-3xl" />,
  ssr: false
})

export const metadata: Metadata = {
  title: 'Baddies Essentials - Future of Fashion',
  description: 'Experience the next generation of fashion shopping with AI Virtual Try-On and curated collections.',
  openGraph: {
    title: 'Baddies Essentials - Future of Fashion',
    description: 'Experience the next generation of fashion shopping.',
    images: ['/og-home.jpg'],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Viewport (Critical - No Lazy Load) */}
      <HeroSection />

      <div className="space-y-24 py-24">

        {/* Featured Categories - Above Fold (No Lazy Load) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Shop by Category</h2>
            <p className="mt-4 text-lg text-slate-500">Explore our wide range of premium collections.</p>
          </div>
          <FeaturedCategories />
        </section>

        {/* Live Sales Section - Lazy Loaded */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Live Events</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">Current Promotions</h2>
            </div>
          </div>
          <Suspense fallback={<div className="h-96 bg-slate-100 animate-pulse rounded-2xl" />}>
            <SalesAggregator />
          </Suspense>
        </section>

        {/* Trending Section - Lazy Loaded */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Trending Now</h2>
                <p className="mt-4 text-lg text-slate-500 max-w-2xl">Curated picks setting the trends this season.</p>
              </div>
              <a href="/trending" className="hidden md:flex items-center gap-2 text-violet-600 font-bold hover:gap-4 transition-all">
                View Collection <span className="text-xl">→</span>
              </a>
            </div>
            <Suspense fallback={<div className="h-80 bg-slate-200 animate-pulse rounded-2xl" />}>
              <TrendingProducts />
            </Suspense>
          </div>
        </section>

        {/* Product Slider - Lazy Loaded */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white py-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 px-8">
              <Suspense fallback={<div className="h-64 bg-slate-700 animate-pulse rounded-2xl" />}>
                <ProductSlider
                  title="Fashion Essentials"
                  subtitle="Must-have pieces starting from PKR 2,999"
                />
              </Suspense>
            </div>
          </div>
        </section>

        {/* New Arrivals - Lazy Loaded */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-violet-600 font-bold tracking-wider uppercase text-sm">Just Dropped</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-2 sm:text-4xl">Fresh Arrivals</h2>
            </div>
            <a href="/new" className="btn btn-outline rounded-full">Explore New In</a>
          </div>
          <Suspense fallback={<div className="h-80 bg-slate-100 animate-pulse rounded-2xl" />}>
            <NewArrivals />
          </Suspense>
        </section>

        {/* Brand Stores - Lazy Loaded */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Official Brand Stores</h2>
              <p className="mt-4 text-lg text-slate-500">Shop directly from your favorite brands.</p>
            </div>
            <Suspense fallback={<div className="h-64 bg-slate-200 animate-pulse rounded-2xl" />}>
              <BrandStoresGrid />
            </Suspense>
          </div>
        </section>

        {/* Newsletter - Lazy Loaded */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="glass p-12 rounded-[3rem] text-center border border-slate-200 shadow-xl">
            <Suspense fallback={<div className="h-32 bg-slate-100 animate-pulse rounded-2xl" />}>
              <Newsletter />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
