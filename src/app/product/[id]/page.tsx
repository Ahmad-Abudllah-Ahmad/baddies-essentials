'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  StarIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  SparklesIcon,
  CheckCircleIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon, HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import toast from 'react-hot-toast'
import { ProductReviews } from '@/components/product/ProductReviews'
import { VirtualTryOnModal } from '@/components/product/VirtualTryOnModal'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { clsx } from 'clsx'

// --- Mock Data ---
import { getProductById } from '@/data/products'

// Helper to enrich product data with details not in the main list
const getEnrichedProduct = (id: number) => {
  const baseProduct = getProductById(id)
  if (!baseProduct) return null

  // deterministically generate extra images/details based on ID
  const extraImages = [
    baseProduct.image,
    // Add slightly different crops or duplicates if we don't have real alt images
    baseProduct.image,
    baseProduct.image
  ]

  return {
    ...baseProduct,
    salePercentage: baseProduct.originalPrice ? Math.round(((baseProduct.originalPrice - baseProduct.price) / baseProduct.originalPrice) * 100) : 0,
    isOnSale: baseProduct.onSale, // Map onSale to isOnSale for compatibility
    reviewCount: baseProduct.reviews,
    images: extraImages,
    video: null,
    inStock: true,
    stockCount: (id % 20) + 5, // Random-ish stock
    description: baseProduct.description || 'Experience premium quality and style with this masterfully crafted piece. Designed for modern living, it offers both comfort and durability without compromising on elegance.',
    features: ['Premium Quality Material', 'Color Fade Resistant', 'Comfortable Fit', 'Durable Stitching', 'Easy Care'],
    specifications: {
      'Material': 'High-Grade Blend',
      'Fit': 'Regular Fit',
      'Care': 'Machine Washable',
      'Origin': 'Made in Pakistan'
    },
    colors: ['Black', 'Navy', 'Maroon', 'Beige'].slice(0, (id % 3) + 2), // 2-4 colors
    sizes: ['S', 'M', 'L', 'XL'],
    shipping: { free: true, estimatedDays: '2-4 business days', returnPolicy: '15-day return policy' },
    originalPrice: baseProduct.originalPrice || Math.round(baseProduct.price * 1.3)
  }
}

// --- Components ---

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem, isAuthenticated } = useCart()
  const { user } = useAuth()

  const product = getEnrichedProduct(Number(params.id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Product not found</h2>
          <Link href="/" className="text-violet-600 hover:underline mt-4 block">Return Home</Link>
        </div>
      </div>
    )
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [isTryOnOpen, setIsTryOnOpen] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState('details')

  // Parallax & Scroll Effects
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: scrollRef })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const handleAddToCart = () => {
    // Check if user is authenticated first
    if (!isAuthenticated) {
      toast.error('Please sign in to add items to your cart', {
        icon: '🔒',
        duration: 3000,
        style: {
          background: '#1e293b',
          color: '#fff',
        },
      })
      return
    }

    // Add item to cart 'quantity' times
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: String(product.id),
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
      })
    }
    toast.custom((t) => (
      <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <div className="h-10 w-10 relative rounded-lg overflow-hidden">
                <Image src={product.images[0]} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Added to Bag</p>
              <p className="mt-1 text-sm text-gray-500">{product.name}</p>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden relative" ref={scrollRef}>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-violet-200/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-indigo-200/20 blur-[150px] pointer-events-none rounded-full" />

      {/* Navigation Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/category/${(product.category || 'all').toLowerCase()}`} className="hover:text-violet-600 transition-colors">{product.category || 'Collection'}</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium truncate">{product.name}</span>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">

          {/* Image Gallery Section */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:sticky lg:top-24">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible py-2 lg:py-0 px-1 lg:px-0">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={clsx(
                    "relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300",
                    selectedImageIndex === idx ? "border-violet-600 shadow-xl scale-105" : "border-transparent hover:border-slate-300"
                  )}
                >
                  <Image src={img} alt={`View ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <motion.div
              layoutId={`product-image-${product.id}`}
              className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white group"
            >
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Image Overlay Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-red-500 transition-all shadow-lg"
                >
                  {isWishlisted ? <HeartSolidIcon className="w-6 h-6 text-red-500" /> : <HeartIcon className="w-6 h-6" />}
                </button>
                <button className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all shadow-lg">
                  <ShareIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Virtual Try-On Badge/Button Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] flex justify-center">
                <button
                  onClick={() => setIsTryOnOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-xl border border-white/40 rounded-full shadow-lg shadow-violet-500/20 text-slate-900 font-bold hover:scale-105 active:scale-95 transition-all group"
                >
                  <SparklesIcon className="w-5 h-5 text-violet-600 group-hover:rotate-12 transition-transform" />
                  <span>Virtual Try-On</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-600 rounded-full animate-ping" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-600 rounded-full" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Product Details Section */}
          <div className="mt-10 lg:mt-0 px-0 lg:px-4">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">{product.name}</h1>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href={`/brand/${product.brand.toLowerCase()}`} className="text-lg font-medium text-violet-600 hover:underline underline-offset-4">
                  {product.brand}
                </Link>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-1">
                  <StarSolidIcon className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold text-slate-700">{product.rating}</span>
                  <span className="text-slate-400 text-sm">({product.reviews} reviews)</span>
                </div>
              </div>
              {product.stockCount < 10 && (
                <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  Only {product.stockCount} left
                </span>
              )}
            </div>

            <div className="mt-8 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <div className="flex items-end gap-3">
                <p className="text-4xl font-extrabold text-slate-900">PKR {product.price.toLocaleString()}</p>
                {product.originalPrice > product.price && (
                  <>
                    <p className="text-xl text-slate-400 line-through decoration-2 mb-1">PKR {product.originalPrice.toLocaleString()}</p>
                    <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded-lg mb-2">-{discount}% OFF</span>
                  </>
                )}
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                  <span>Authentic Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TruckIcon className="w-4 h-4 text-violet-500" />
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>

            {/* Selectors */}
            <div className="mt-8 space-y-6">
              {/* Color Selector */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-3">Select Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={clsx(
                        "group relative flex items-center justify-center rounded-full border-2 px-4 py-2 text-sm font-medium hover:bg-slate-50 focus:outline-none sm:flex-1 sm:py-3 transition-all",
                        selectedColor === color
                          ? "border-violet-600 bg-violet-50 text-violet-600"
                          : "border-slate-200 text-slate-900"
                      )}
                    >
                      {color}
                      {selectedColor === color && (
                        <div className="absolute right-2 top-2 w-1.5 h-1.5 bg-violet-600 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-sm font-medium text-slate-900">Select Size</h3>
                  <button className="text-sm font-medium text-violet-600 hover:text-violet-500">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={!product.inStock}
                      className={clsx(
                        "relative flex items-center justify-center rounded-xl py-3 border text-sm font-medium uppercase hover:shadow-md transition-all focus:outline-none sm:py-4",
                        selectedSize === size
                          ? "bg-slate-900 text-white shadow-lg ring-2 ring-slate-900 ring-offset-2"
                          : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50",
                        !product.inStock && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <div className="flex items-center border border-slate-200 rounded-full bg-white px-2 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 font-bold transition-colors"
                  >-</button>
                  <span className="w-8 text-center font-medium text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 font-bold transition-colors"
                  >+</button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn btn-primary flex items-center justify-center gap-3 text-lg py-4 shadow-violet-500/25"
                >
                  <ShoppingCartIcon className="w-6 h-6" />
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Description & Specs Tabs */}
            <div className="mt-12 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="flex border-b border-slate-100">
                {['details', 'features', 'shipping'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={clsx(
                      "flex-1 py-4 text-sm font-medium capitalize transition-colors relative",
                      activeTab === tab ? "text-violet-600 bg-violet-50/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-violet-600" />}
                  </button>
                ))}
              </div>
              <div className="p-6">
                {activeTab === 'details' && (
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">{product.description}</p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{key}</span>
                          <span className="text-sm font-medium text-slate-900">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'features' && (
                  <ul className="space-y-2">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600">
                        <CheckCircleIcon className="w-5 h-5 text-violet-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <div className="text-sm text-slate-600 space-y-3">
                    <div className="flex items-start gap-3">
                      <TruckIcon className="w-5 h-5 text-violet-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">Estimated Delivery</p>
                        <p>{product.shipping.estimatedDays}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheckIcon className="w-5 h-5 text-violet-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">Return Policy</p>
                        <p>{product.shipping.returnPolicy}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Customer Reviews</h2>
          <ProductReviews productId={String(product.id)} averageRating={product.rating || 4.5} totalReviews={product.reviews || 0} />
        </div>

      </main>

      {/* Fixed Bottom Bar Mobile */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-4 lg:hidden z-40 safe-area-bottom">
        <button
          onClick={handleAddToCart}
          className="w-full btn btn-primary flex items-center justify-center gap-2 shadow-lg"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          Add to Bag - PKR {product.price.toLocaleString()}
        </button>
      </div>

      <VirtualTryOnModal
        isOpen={isTryOnOpen}
        onClose={() => setIsTryOnOpen(false)}
        productImage={product.images[selectedImageIndex]}
        productName={product.name}
      />
    </div>
  )
}
