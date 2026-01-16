'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeartIcon, StarIcon, ShoppingCartIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import toast from 'react-hot-toast'
import { VirtualTryOnModal } from '@/components/product/VirtualTryOnModal'
import { products as allProducts } from '@/data/products'

const trendingProducts = allProducts.filter(p => p.id >= 700 && p.id < 800)

export function TrendingProducts() {
  const { addItem } = useCart()
  const { isAuthenticated } = useAuth()
  const [wishlist, setWishlist] = useState<number[]>([])
  const [selectedProductForVTO, setSelectedProductForVTO] = useState<typeof trendingProducts[0] | null>(null)

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleAddToCart = (product: typeof trendingProducts[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!isAuthenticated) {
      toast.error('Please login to add items to cart')
      return
    }

    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image
    })

    toast.success(`${product.name} added to cart!`)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trendingProducts.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay with Quick Actions */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex gap-2 justify-center pb-6">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedProductForVTO(product)
                  }}
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors shadow-lg"
                >
                  <SparklesIcon className="w-4 h-4 text-purple-600" />
                  Try On
                </button>
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="flex items-center gap-2 bg-primary-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors shadow-lg"
                >
                  <ShoppingCartIcon className="w-4 h-4" />
                  Add
                </button>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    HOT
                  </span>
                )}
                {product.onSale && (
                  <span className="bg-rose-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    SALE
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-3 right-3 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-90"
              >
                {wishlist.includes(product.id) ? (
                  <HeartSolidIcon className="h-5 w-5 text-rose-500" />
                ) : (
                  <HeartIcon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-md uppercase">{product.brand}</span>
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
                  <StarIcon className="h-3.5 w-3.5 text-yellow-500 fill-current" />
                  <span className="text-xs font-bold text-gray-700">
                    {product.rating}
                  </span>
                </div>
              </div>

              <Link href={`/product/${product.id}`} className="block group-hover:text-primary-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 truncate text-lg">
                  {product.name}
                </h3>
              </Link>

              <div className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold text-gray-900">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through decoration-red-400">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <VirtualTryOnModal
        isOpen={!!selectedProductForVTO}
        onClose={() => setSelectedProductForVTO(null)}
        productImage={selectedProductForVTO?.image || ''}
        productName={selectedProductForVTO?.name || ''}
      />
    </>
  )
}
