'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { VirtualTryOnModal } from '@/components/product/VirtualTryOnModal'
import { products as allProducts } from '@/data/products'

export default function AccessoriesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // VTO - reusable
  const [isTryOnOpen, setIsTryOnOpen] = useState(false)
  const [selectedProductForVTO, setSelectedProductForVTO] = useState<{ name: string, image: string } | null>(null)

  const openVTO = (product: { name: string, image: string }) => {
    setSelectedProductForVTO(product)
    setIsTryOnOpen(true)
  }

  // Filter toggle functions
  const toggleCategory = (category: string) => {
    if (category === 'All Items') {
      setSelectedCategories([])
    } else {
      setSelectedCategories(prev =>
        prev.includes(category)
          ? prev.filter(c => c !== category)
          : [...prev, category]
      )
    }
  }

  const toggleBrand = (brand: string) => {
    if (brand === 'All Brands') {
      setSelectedBrands([])
    } else {
      setSelectedBrands(prev =>
        prev.includes(brand)
          ? prev.filter(b => b !== brand)
          : [...prev, brand]
      )
    }
  }

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges(prev =>
      prev.includes(range)
        ? prev.filter(r => r !== range)
        : [...prev, range]
    )
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedPriceRanges([])
    setSortBy('featured')
  }

  // Price range checker
  const isInPriceRange = (price: number, range: string): boolean => {
    switch (range) {
      case 'Under PKR 3,000': return price < 3000
      case 'PKR 3,000 - 7,000': return price >= 3000 && price <= 7000
      case 'PKR 7,000 - 15,000': return price >= 7000 && price <= 15000
      case 'Above PKR 15,000': return price > 15000
      default: return true
    }
  }

  // Category mapper (maps product types to filter categories)
  const getCategoryForProduct = (productName: string): string => {
    const name = productName.toLowerCase()
    if (name.includes('bag') || name.includes('handbag')) return 'Bags'
    if (name.includes('watch')) return 'Watches'
    if (name.includes('sunglasses') || name.includes('glasses')) return 'Sunglasses'
    if (name.includes('belt')) return 'Belts'
    if (name.includes('wallet')) return 'Wallets'
    if (name.includes('scarf') || name.includes('ring') || name.includes('necklace') || name.includes('bracelet')) return 'Jewelry'
    return 'All Items'
  }

  const products = allProducts.filter(p => p.id >= 200 && p.id < 300)

  const categories = ['All Items', 'Bags', 'Jewelry', 'Watches', 'Sunglasses', 'Belts', 'Wallets']
  const brands = ['All Brands', 'Gucci', 'Ray-Ban', 'Rolex', 'Hermes', 'Levis', 'Herschel']
  const priceRanges = ['Under PKR 3,000', 'PKR 3,000 - 7,000', 'PKR 7,000 - 15,000', 'Above PKR 15,000']

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Category filter
      if (selectedCategories.length > 0) {
        const productCategory = getCategoryForProduct(product.name)
        if (!selectedCategories.includes(productCategory)) return false
      }

      // Brand filter
      if (selectedBrands.length > 0) {
        if (!selectedBrands.includes(product.brand)) return false
      }

      // Price range filter
      if (selectedPriceRanges.length > 0) {
        const matchesAnyRange = selectedPriceRanges.some(range => isInPriceRange(product.price, range))
        if (!matchesAnyRange) return false
      }

      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'rating': return b.rating - a.rating
        case 'newest': return b.id - a.id
        default: return 0 // featured - keep original order
      }
    })

  const activeFilterCount = selectedCategories.length + selectedBrands.length + selectedPriceRanges.length

  return (
    <div className="min-h-screen bg-slate-50 -mt-28 lg:-mt-32">
      {/* Page Header with Parallax/Glass effect */}
      <div className="relative h-[50vh] min-h-[550px] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2165&auto=format&fit=crop"
            alt="Accessories"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wider uppercase mb-4"
          >
            Essentials
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-balance"
          >
            Accessories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto text-balance"
          >
            The perfect finishing touches. Discover our curated collection of jewelry, bags, and more.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-20">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">

          {/* Filters Sidebar - Sticky & Glassmorphic */}
          <div className="hidden lg:block">
            <div className="glass sticky top-32 rounded-3xl p-6 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-2 text-xs bg-violet-600 text-white px-2 py-0.5 rounded-full">{activeFilterCount}</span>
                  )}
                </h3>
                <button
                  onClick={resetFilters}
                  className="text-xs font-semibold text-violet-600 hover:text-violet-500"
                >
                  Reset
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isChecked = category === 'All Items'
                      ? selectedCategories.length === 0
                      : selectedCategories.includes(category)
                    return (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className="flex items-center group cursor-pointer w-full text-left"
                      >
                        <div className={clsx(
                          "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                          isChecked ? "bg-violet-600 border-violet-600" : "border-slate-300"
                        )}>
                          {isChecked && (
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                          )}
                        </div>
                        <span className={clsx(
                          "ml-3 text-sm font-medium transition-colors",
                          isChecked ? "text-violet-600" : "text-slate-600 group-hover:text-violet-600"
                        )}>{category}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => {
                    const isChecked = brand === 'All Brands'
                      ? selectedBrands.length === 0
                      : selectedBrands.includes(brand)
                    return (
                      <button
                        key={brand}
                        onClick={() => toggleBrand(brand)}
                        className="flex items-center group cursor-pointer w-full text-left"
                      >
                        <div className={clsx(
                          "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                          isChecked ? "bg-violet-600 border-violet-600" : "border-slate-300"
                        )}>
                          {isChecked && (
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                          )}
                        </div>
                        <span className={clsx(
                          "ml-3 text-sm font-medium transition-colors",
                          isChecked ? "text-violet-600" : "text-slate-600 group-hover:text-violet-600"
                        )}>{brand}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => {
                    const isChecked = selectedPriceRanges.includes(range)
                    return (
                      <button
                        key={range}
                        onClick={() => togglePriceRange(range)}
                        className="flex items-center group cursor-pointer w-full text-left"
                      >
                        <div className={clsx(
                          "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                          isChecked ? "bg-violet-600 border-violet-600" : "border-slate-300"
                        )}>
                          {isChecked && (
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                          )}
                        </div>
                        <span className={clsx(
                          "ml-3 text-sm font-medium transition-colors",
                          isChecked ? "text-violet-600" : "text-slate-600 group-hover:text-violet-600"
                        )}>{range}</span>
                      </button>
                    )
                  })}
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
                  className="lg:hidden btn btn-outline btn-sm rounded-full flex items-center gap-2 whitespace-nowrap relative"
                >
                  <FunnelIcon className="h-4 w-4" /> Filters
                  {activeFilterCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-violet-600 text-white text-[10px] rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <div className="text-sm font-semibold text-slate-500 whitespace-nowrap">
                  Showing <span className="text-slate-900">{filteredProducts.length} products</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none h-10">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none w-full bg-white pl-4 pr-10 py-2 rounded-full border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer hover:border-violet-300 transition-colors h-full"
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Best Rating</option>
                  </select>
                  <ChevronDownIcon className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <div className="flex bg-white rounded-full p-1 border border-slate-200 h-10 items-center">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={clsx("p-1.5 rounded-full transition-all", viewMode === 'grid' ? "bg-slate-100 text-violet-600 shadow-sm" : "text-slate-400 hover:text-slate-600")}
                  >
                    <Squares2X2Icon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={clsx("p-1.5 rounded-full transition-all", viewMode === 'list' ? "bg-slate-100 text-violet-600 shadow-sm" : "text-slate-400 hover:text-slate-600")}
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
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={clsx(
                    "group relative bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500",
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
                          {product.onSale && (
                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">SALE</span>
                          )}
                          {product.tag && (
                            <span className="bg-violet-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">{product.tag}</span>
                          )}
                        </div>

                        <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              openVTO(product)
                            }}
                            className="w-full btn btn-white text-xs font-bold py-2.5 rounded-full shadow-lg flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            Virtual Try-On
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className={clsx("flex flex-col", viewMode === 'grid' ? "p-5" : "flex-1 py-1 pr-4")}>
                    <div className="flex items-start justify-between mb-1">
                      <span className="text-xs font-bold text-violet-600 tracking-wide uppercase">{product.brand}</span>
                      <div className="flex items-center gap-1">
                        <StarIconSolid className="w-3.5 h-3.5 text-yellow-400" />
                        <span className="text-xs font-semibold text-slate-700">{product.rating}</span>
                        <span className="text-[10px] text-slate-400">({product.reviews})</span>
                      </div>
                    </div>

                    <Link href={`/product/${product.id}`} className="group-hover:text-violet-600 transition-colors">
                      <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2 line-clamp-1">{product.name}</h3>
                    </Link>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        {product.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
                        )}
                        <span className="text-lg font-black text-slate-900">PKR {product.price.toLocaleString()}</span>
                      </div>

                      {viewMode === 'list' ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => openVTO(product)}
                            className="px-4 py-2 rounded-full border border-violet-200 text-violet-600 font-bold text-sm hover:bg-violet-50 transition-colors"
                          >
                            Try On
                          </button>
                          <button className="btn btn-primary px-6 py-2 text-sm rounded-full shadow-violet-500/20">Add to Cart</button>
                        </div>
                      ) : (
                        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-violet-100 hover:text-violet-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-16 text-center">
              <button className="btn btn-outline rounded-full px-8 py-3 text-sm font-bold border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="ml-2 text-xs bg-violet-600 text-white px-2 py-0.5 rounded-full">{activeFilterCount}</span>
                    )}
                  </h3>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const isChecked = category === 'All Items'
                        ? selectedCategories.length === 0
                        : selectedCategories.includes(category)
                      return (
                        <button
                          key={category}
                          onClick={() => toggleCategory(category)}
                          className="flex items-center group cursor-pointer w-full text-left"
                        >
                          <div className={clsx(
                            "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                            isChecked ? "bg-violet-600 border-violet-600" : "border-slate-300"
                          )}>
                            {isChecked && (
                              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            )}
                          </div>
                          <span className={clsx(
                            "ml-3 text-sm font-medium transition-colors",
                            isChecked ? "text-violet-600" : "text-slate-600"
                          )}>{category}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Brands</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => {
                      const isChecked = brand === 'All Brands'
                        ? selectedBrands.length === 0
                        : selectedBrands.includes(brand)
                      return (
                        <button
                          key={brand}
                          onClick={() => toggleBrand(brand)}
                          className="flex items-center group cursor-pointer w-full text-left"
                        >
                          <div className={clsx(
                            "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                            isChecked ? "bg-violet-600 border-violet-600" : "border-slate-300"
                          )}>
                            {isChecked && (
                              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            )}
                          </div>
                          <span className={clsx(
                            "ml-3 text-sm font-medium transition-colors",
                            isChecked ? "text-violet-600" : "text-slate-600"
                          )}>{brand}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => {
                      const isChecked = selectedPriceRanges.includes(range)
                      return (
                        <button
                          key={range}
                          onClick={() => togglePriceRange(range)}
                          className="flex items-center group cursor-pointer w-full text-left"
                        >
                          <div className={clsx(
                            "w-5 h-5 border-2 rounded-md transition-all flex items-center justify-center",
                            isChecked ? "bg-violet-600 border-violet-600" : "border-slate-300"
                          )}>
                            {isChecked && (
                              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            )}
                          </div>
                          <span className={clsx(
                            "ml-3 text-sm font-medium transition-colors",
                            isChecked ? "text-violet-600" : "text-slate-600"
                          )}>{range}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={resetFilters}
                    className="flex-1 btn btn-outline rounded-full py-2.5 text-sm font-bold"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="flex-1 btn btn-primary rounded-full py-2.5 text-sm font-bold"
                  >
                    Apply ({filteredProducts.length})
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <VirtualTryOnModal
        isOpen={isTryOnOpen}
        onClose={() => setIsTryOnOpen(false)}
        productImage={selectedProductForVTO?.image || ''}
        productName={selectedProductForVTO?.name || ''}
      />
    </div>
  )
}
