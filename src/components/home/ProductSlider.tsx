'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, SparklesIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { VirtualTryOnModal } from '@/components/product/VirtualTryOnModal'
import toast from 'react-hot-toast'
import { useCart } from '@/contexts/CartContext'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  brand: string
  discount?: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Floral Summer Maxi',
    brand: 'Sapphire',
    price: 4500,
    originalPrice: 6500,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: 'Embroidered Kurta',
    brand: 'Khaddi',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&h=1000&fit=crop',
    rating: 4.6,
    reviews: 98
  },
  {
    id: 3,
    name: 'Designer Lawn Suit',
    brand: 'Maria.B',
    price: 8500,
    originalPrice: 10500,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop',
    rating: 4.9,
    reviews: 245
  },
  {
    id: 4,
    name: 'Casual Denim Shirt',
    brand: 'Outfitters',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop',
    rating: 4.5,
    reviews: 120
  },
  {
    id: 5,
    name: 'Evening Silk Gown',
    brand: 'Sana Safinaz',
    price: 12000,
    originalPrice: 15000,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=1000&fit=crop',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 6,
    name: 'Printed Tunic',
    brand: 'Limelight',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1589810635657-232948472d98?w=800&h=1000&fit=crop',
    rating: 4.4,
    reviews: 76
  }
]

interface ProductSliderProps {
  title: string
  subtitle?: string
}

export function ProductSlider({ title, subtitle }: ProductSliderProps) {
  const [selectedProductForVTO, setSelectedProductForVTO] = useState<Product | null>(null)
  const [wishlist, setWishlist] = useState<number[]>([])
  const { addItem } = useCart()

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image
    })
    toast.success('Added to cart')
  }

  return (
    <div className="py-8">
      <div className="flex items-end justify-between mb-8 px-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          {subtitle && (
            <p className="text-gray-200 text-lg">{subtitle}</p>
          )}
        </div>
        <div className="flex gap-2">
          <button className="swiper-button-prev-custom p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-900 transition-all">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="swiper-button-next-custom p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-900 transition-all">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom'
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        className="!px-4 !overflow-visible"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="pt-2 pb-8">
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100/50">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with Quick Actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex gap-2 justify-center pb-6">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setSelectedProductForVTO(product)
                    }}
                    className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-white transition-all shadow-lg hover:scale-105"
                  >
                    <SparklesIcon className="w-4 h-4 text-purple-600" />
                    Try On
                  </button>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="flex items-center gap-2 bg-primary-600/95 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-primary-500 transition-all shadow-lg hover:scale-105"
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    Add
                  </button>
                </div>

                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-rose-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    -{product.discount}% OFF
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white transition-all hover:scale-110 active:scale-90"
                >
                  {wishlist.includes(product.id) ? (
                    <HeartSolidIcon className="w-5 h-5 text-rose-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{product.brand}</span>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                    <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                  </div>
                </div>

                <Link href={`/product/${product.id}`} className="block group-hover:text-primary-600 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2 truncate text-lg">{product.name}</h3>
                </Link>

                <div className="flex items-baseline gap-2 mt-auto">
                  <span className="text-xl font-extrabold text-gray-900">PKR {product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through decoration-rose-300">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <VirtualTryOnModal
        isOpen={!!selectedProductForVTO}
        onClose={() => setSelectedProductForVTO(null)}
        productImage={selectedProductForVTO?.image || ''}
        productName={selectedProductForVTO?.name || ''}
      />
    </div>
  )
}
