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
import { motion } from 'framer-motion'
import { products as allProducts } from '@/data/products'

const newArrivals = allProducts.filter(p => p.id >= 600 && p.id < 700)

export function NewArrivals() {
  const { addItem } = useCart()
  const { isAuthenticated } = useAuth()
  const [wishlist, setWishlist] = useState<number[]>([])
  const [selectedProductForVTO, setSelectedProductForVTO] = useState<typeof newArrivals[0] | null>(null)

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleAddToCart = (product: typeof newArrivals[0], e: React.MouseEvent) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newArrivals.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gray-100 mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay with VTO Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedProductForVTO(product)
                  }}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:scale-105 shadow-2xl"
                >
                  <SparklesIcon className="w-5 h-5 text-purple-600" />
                  Virtual Try-On
                </button>
              </div>

              <div className="absolute top-4 left-4">
                <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {product.tag}
                </span>
              </div>

              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-90"
              >
                {wishlist.includes(product.id) ? (
                  <HeartSolidIcon className="h-5 w-5 text-rose-500" />
                ) : (
                  <HeartIcon className="h-5 w-5 text-gray-900" />
                )}
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">{product.brand}</p>
                  <Link href={`/product/${product.id}`} className="block group-hover:text-primary-600 transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                  </Link>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
                  <StarIcon className="h-3.5 w-3.5 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xl font-extrabold text-gray-900">
                  PKR {product.price.toLocaleString()}
                </span>
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white transition-all hover:shadow-lg hover:scale-110 active:scale-95"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
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
