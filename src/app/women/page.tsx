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
import { motion } from 'framer-motion'
import { VirtualTryOnModal } from '@/components/product/VirtualTryOnModal'
import { products as allProducts } from '@/data/products'

export default function WomenPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // VTO State - reusable
  const [isTryOnOpen, setIsTryOnOpen] = useState(false)
  const [selectedProductForVTO, setSelectedProductForVTO] = useState<{ name: string, image: string } | null>(null)

  const openVTO = (product: { name: string, image: string }) => {
    setSelectedProductForVTO(product)
    setIsTryOnOpen(true)
  }

  const products = allProducts.filter(p => p.id >= 1 && p.id < 100)

  const categories = [
    'All Items', 'Lawn Suits', 'Kurtas', 'Formal Wear', 'Casual Wear', 'Dupattas', 'Scarves', 'Accessories'
  ]

  const brands = [
    'All Brands', 'Khaadi', 'Gul Ahmed', 'Nishat', 'Sana Safinaz', 'Outfitters', 'Bonanza'
  ]

  return (
    <div className="min-h-screen bg-slate-50 -mt-28 lg:-mt-32">
      {/* Page Header with Parallax/Glass effect */}
      <div className="relative h-[50vh] min-h-[550px] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Women's Fashion"
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
            Collection 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-balance"
          >
            Women&apos;s Fashion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto text-balance"
          >
            Elegant designs from Pakistan&apos;s finest fashion houses. Experience the future of style with our curated selection.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-20">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">

          {/* Filters Sidebar - Sticky & Glassmorphic */}
          <div className="hidden lg:block">
            <div className="glass sticky top-32 rounded-3xl p-6 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Filters</h3>
                <button className="text-xs font-semibold text-violet-600 hover:text-violet-500">Reset</button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center group cursor-pointer">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer h-4 w-4 opacity-0 absolute" />
                        <div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-violet-600 peer-checked:border-violet-600 transition-all flex items-center justify-center">
                          <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                      </div>
                      <span className="ml-3 text-sm text-slate-600 group-hover:text-violet-600 transition-colors font-medium">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center group cursor-pointer">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer h-4 w-4 opacity-0 absolute" />
                        <div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-violet-600 peer-checked:border-violet-600 transition-all flex items-center justify-center">
                          <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                      </div>
                      <span className="ml-3 text-sm text-slate-600 group-hover:text-violet-600 transition-colors font-medium">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Price Range</h4>
                <div className="space-y-2">
                  {['Under PKR 3,000', 'PKR 3,000 - 7,000', 'PKR 7,000 - 15,000', 'Above PKR 15,000'].map((range, idx) => (
                    <label key={idx} className="flex items-center group cursor-pointer">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer h-4 w-4 opacity-0 absolute" />
                        <div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-violet-600 peer-checked:border-violet-600 transition-all flex items-center justify-center">
                          <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                      </div>
                      <span className="ml-3 text-sm text-slate-600 group-hover:text-violet-600 transition-colors font-medium">{range}</span>
                    </label>
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
                <button className="lg:hidden btn btn-outline btn-sm rounded-full flex items-center gap-2 whitespace-nowrap">
                  <FunnelIcon className="h-4 w-4" /> Filters
                </button>
                <div className="text-sm font-semibold text-slate-500 whitespace-nowrap">
                  Running <span className="text-slate-900">{products.length} products</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none h-10">
                  <select className="appearance-none w-full bg-white pl-4 pr-10 py-2 rounded-full border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer hover:border-violet-300 transition-colors h-full">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Rating</option>
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
              {products.map((product, idx) => (
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

                    {/* Overlays (Only in Grid) */}
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
                          <button className="btn btn-primary px-6 py-2 text-sm rounded-full shadow-violet-500/20" onClick={() => console.log('Add to cart', product.id)}>Add to Cart</button>
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

      <VirtualTryOnModal
        isOpen={isTryOnOpen}
        onClose={() => setIsTryOnOpen(false)}
        productImage={selectedProductForVTO?.image || ''}
        productName={selectedProductForVTO?.name || ''}
      />
    </div>
  )
}
