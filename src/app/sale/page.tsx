'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ChevronDownIcon,
  FireIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { VirtualTryOnModal } from '@/components/product/VirtualTryOnModal'
import { products as allProducts, Product } from '@/data/products'

export default function SalePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // VTO
  const [isTryOnOpen, setIsTryOnOpen] = useState(false)
  const [selectedProductForVTO, setSelectedProductForVTO] = useState<{ name: string, image: string } | null>(null)

  const openVTO = (product: { name: string, image: string }) => {
    setSelectedProductForVTO(product)
    setIsTryOnOpen(true)
  }

  const products = allProducts.filter((p: Product) => p.id >= 300 && p.id < 400)

  const categories = ['Unstitched', 'Ready to Wear', 'Footwear', 'Accessories', 'Western', 'Bottoms', 'Luxury']
  const discounts = ['30% OFF', '35% OFF', '40% OFF', '50% OFF']

  // Filter Functions
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(prev => prev.filter(c => c !== category))
    } else {
      setSelectedCategories(prev => [...prev, category])
    }
  }

  const toggleDiscount = (discount: string) => {
    if (selectedDiscounts.includes(discount)) {
      setSelectedDiscounts(prev => prev.filter(d => d !== discount))
    } else {
      setSelectedDiscounts(prev => [...prev, discount])
    }
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedDiscounts([])
    setSortBy('featured')
  }

  // Derived State
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || (product.category ? selectedCategories.includes(product.category) : false)
    const matchesDiscount = selectedDiscounts.length === 0 || (product.discount ? selectedDiscounts.includes(product.discount) : false)
    return matchesCategory && matchesDiscount
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0
  })

  // Scroll to Content
  const scrollToContent = () => {
    const element = document.getElementById('sale-products')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-50 -mt-28 lg:-mt-32">
      {/* Page Header with Parallax/Glass effect */}
      <div className="relative h-[50vh] min-h-[550px] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555529771-83ae9289299f?q=80&w=2070&auto=format&fit=crop"
            alt="Sale"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30 text-sm font-bold tracking-wider uppercase mb-4"
          >
            <FireIcon className="w-4 h-4" /> Limited Time Only
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-balance"
          >
            End of Season Sale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto text-balance mb-10"
          >
            Huge savings on your favorite brands. Up to 70% off on selected items. Don&apos;t miss out!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={scrollToContent}
            className="px-8 py-3 bg-white text-red-600 rounded-full font-bold text-lg shadow-xl shadow-black/20 hover:bg-slate-100 hover:scale-105 transition-all active:scale-95"
          >
            Shop Now
          </motion.button>
        </div>
      </div>

      <div id="sale-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-20">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">

          {/* Filters Sidebar - Sticky & Glassmorphic */}
          <div className="hidden lg:block">
            <div className="glass sticky top-32 rounded-3xl p-6 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Filters</h3>
                <button onClick={resetFilters} className="text-xs font-semibold text-red-600 hover:text-red-500">Reset</button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className="flex items-center group cursor-pointer w-full text-left"
                    >
                      <div className="relative flex items-center">
                        <div className={clsx(
                          "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                          selectedCategories.includes(category) ? "bg-red-600 border-red-600" : "border-slate-300 group-hover:border-red-400"
                        )}>
                          <svg className={clsx("w-3 h-3 text-white transition-opacity", selectedCategories.includes(category) ? "opacity-100" : "opacity-0")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                      </div>
                      <span className={clsx("ml-3 text-sm transition-colors font-medium", selectedCategories.includes(category) ? "text-red-600" : "text-slate-600 group-hover:text-red-600")}>
                        {category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Discount Range */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Discount</h4>
                <div className="space-y-2">
                  {discounts.map((discount) => (
                    <button
                      key={discount}
                      onClick={() => toggleDiscount(discount)}
                      className="flex items-center group cursor-pointer w-full text-left"
                    >
                      <div className="relative flex items-center">
                        <div className={clsx(
                          "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                          selectedDiscounts.includes(discount) ? "bg-red-600 border-red-600" : "border-slate-300 group-hover:border-red-400"
                        )}>
                          <svg className={clsx("w-3 h-3 text-white transition-opacity", selectedDiscounts.includes(discount) ? "opacity-100" : "opacity-0")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                      </div>
                      <span className={clsx("ml-3 text-sm transition-colors font-medium", selectedDiscounts.includes(discount) ? "text-red-600" : "text-slate-600 group-hover:text-red-600")}>
                        {discount}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="glass rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden btn btn-outline btn-sm rounded-full flex items-center gap-2 whitespace-nowrap"
                >
                  <FunnelIcon className="h-4 w-4" /> Filters
                  {(selectedCategories.length + selectedDiscounts.length) > 0 && (
                    <span className="bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                      {selectedCategories.length + selectedDiscounts.length}
                    </span>
                  )}
                </button>
                <div className="text-sm font-semibold text-slate-500 whitespace-nowrap">
                  Showing <span className="text-slate-900">{filteredProducts.length} deals</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none h-10">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none w-full bg-white pl-4 pr-10 py-2 rounded-full border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer hover:border-red-300 transition-colors h-full"
                  >
                    <option value="featured">Sort by: Featured Deal</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="price-low">Price: Low to High</option>
                  </select>
                  <ChevronDownIcon className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <div className="flex bg-white rounded-full p-1 border border-slate-200 h-10 items-center">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={clsx("p-1.5 rounded-full transition-all", viewMode === 'grid' ? "bg-slate-100 text-red-600 shadow-sm" : "text-slate-400 hover:text-slate-600")}
                  >
                    <Squares2X2Icon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={clsx("p-1.5 rounded-full transition-all", viewMode === 'list' ? "bg-slate-100 text-red-600 shadow-sm" : "text-slate-400 hover:text-slate-600")}
                  >
                    <ListBulletIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={clsx(
              "grid gap-6",
              viewMode === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            )}>
              {filteredProducts.length === 0 ? (
                <div className="col-span-full py-20 text-center">
                  <p className="text-xl text-slate-500 font-medium">No products found matching your filters.</p>
                  <button onClick={resetFilters} className="mt-4 text-red-600 font-bold hover:underline">Reset Filters</button>
                </div>
              ) : (
                filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={clsx(
                      "group relative bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500",
                      viewMode === 'list' && "flex items-center gap-6 p-4"
                    )}
                  >
                    {/* Image Area */}
                    <div className={clsx("relative overflow-hidden bg-slate-100", viewMode === 'grid' ? "aspect-[3/4]" : "w-48 h-full rounded-2xl flex-shrink-0")}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={clsx("object-cover transition-transform duration-700 group-hover:scale-110", viewMode === 'list' && "rounded-2xl")}
                      />

                      {viewMode === 'grid' && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-3 left-3 flex flex-col gap-2">
                            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">{product.tag}</span>
                          </div>
                          {/* VTO Button - Optional on Sale items? Adding anyway */}
                          <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                openVTO(product)
                              }}
                              className="w-full btn btn-white text-xs font-bold py-2.5 rounded-full shadow-lg flex items-center justify-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                              Try On
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className={clsx("flex flex-col", viewMode === 'grid' ? "p-5" : "flex-1 py-1 pr-4")}>
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-xs font-bold text-red-600 tracking-wide uppercase">{product.brand}</span>
                        <div className="flex items-center gap-1">
                          <StarIconSolid className="w-3.5 h-3.5 text-yellow-400" />
                          <span className="text-xs font-semibold text-slate-700">{product.rating}</span>
                          <span className="text-[10px] text-slate-400">({product.reviews})</span>
                        </div>
                      </div>

                      <Link href={`/product/${product.id}`} className="group-hover:text-red-600 transition-colors">
                        <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2 line-clamp-1">{product.name}</h3>
                      </Link>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex flex-col">
                          {product.originalPrice && (
                            <span className="text-xs text-slate-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
                          )}
                          <span className="text-lg font-black text-red-600">PKR {product.price.toLocaleString()}</span>
                        </div>

                        {viewMode === 'list' ? (
                          <div className="flex gap-2">
                            <button className="btn btn-primary bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 px-6 py-2 text-sm rounded-full shadow-red-500/20">Add to Cart</button>
                          </div>
                        ) : (
                          <button className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-100 transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

          </div>
        </div>
      </div>

      <VirtualTryOnModal
        isOpen={isTryOnOpen}
        onClose={() => setIsTryOnOpen(false)}
        productImage={selectedProductForVTO?.image || ''}
        productName={selectedProductForVTO?.name || ''}
      />

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white z-[101] shadow-2xl p-6 overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-900">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-slate-500" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Categories */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className="flex items-center group cursor-pointer w-full text-left"
                      >
                        <div className="relative flex items-center">
                          <div className={clsx(
                            "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                            selectedCategories.includes(category) ? "bg-red-600 border-red-600" : "border-slate-300 group-hover:border-red-400"
                          )}>
                            <svg className={clsx("w-3 h-3 text-white transition-opacity", selectedCategories.includes(category) ? "opacity-100" : "opacity-0")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                          </div>
                        </div>
                        <span className={clsx("ml-3 text-sm transition-colors font-medium", selectedCategories.includes(category) ? "text-red-600" : "text-slate-600 group-hover:text-red-600")}>
                          {category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Discount Range */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Discount</h4>
                  <div className="space-y-2">
                    {discounts.map((discount) => (
                      <button
                        key={discount}
                        onClick={() => toggleDiscount(discount)}
                        className="flex items-center group cursor-pointer w-full text-left"
                      >
                        <div className="relative flex items-center">
                          <div className={clsx(
                            "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                            selectedDiscounts.includes(discount) ? "bg-red-600 border-red-600" : "border-slate-300 group-hover:border-red-400"
                          )}>
                            <svg className={clsx("w-3 h-3 text-white transition-opacity", selectedDiscounts.includes(discount) ? "opacity-100" : "opacity-0")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                          </div>
                        </div>
                        <span className={clsx("ml-3 text-sm transition-colors font-medium", selectedDiscounts.includes(discount) ? "text-red-600" : "text-slate-600 group-hover:text-red-600")}>
                          {discount}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-slate-100 flex gap-4">
                  <button
                    onClick={resetFilters}
                    className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
