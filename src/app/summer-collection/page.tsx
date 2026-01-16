'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon, HeartIcon, StarIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'
import toast from 'react-hot-toast'
import { products } from '@/data/products'

export default function SummerCollectionPage() {
    const { addItem } = useCart()
    const [wishlist, setWishlist] = useState<string[]>([])
    const [sortBy, setSortBy] = useState('featured')

    // Get summer collection products (all products that are on sale or recent)
    const summerProducts = products
        .filter(p => p.onSale || p.id > 50)
        .slice(0, 24)
        .map(p => ({
            id: String(p.id),
            name: p.name,
            brand: p.brand,
            price: p.price,
            originalPrice: p.originalPrice || Math.round(p.price * 1.3),
            image: p.image,
            rating: p.rating,
            reviewCount: p.reviews,
            discount: p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0
        }))

    const handleAddToCart = (product: typeof summerProducts[0]) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        })
        toast.success(`${product.name} added to cart!`)
    }

    const toggleWishlist = (productId: string) => {
        setWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
            {/* Hero Banner */}
            <div className="relative h-80 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop&auto=format"
                    alt="Summer Collection 2024"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/60 to-orange-500/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-4">
                        <h1 className="text-5xl font-bold mb-4">Summer Collection 2024</h1>
                        <p className="text-xl mb-6">Shop the latest summer fashion from top Pakistani brands</p>
                        <div className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full text-2xl font-bold">
                            Fresh Arrivals
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <FunnelIcon className="h-5 w-5 text-gray-500" />
                        <span className="font-medium text-gray-700">{summerProducts.length} Products</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="text-sm text-gray-600">Sort by:</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {summerProducts.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {product.discount > 0 && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                        -{product.discount}%
                                    </div>
                                )}
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                                >
                                    {wishlist.includes(product.id) ? (
                                        <HeartSolidIcon className="h-5 w-5 text-red-500" />
                                    ) : (
                                        <HeartIcon className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>

                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">{product.brand}</span>
                                    <div className="flex items-center">
                                        <StarSolidIcon className="h-4 w-4 text-yellow-400" />
                                        <span className="text-sm text-gray-600 ml-1">
                                            {product.rating} ({product.reviewCount})
                                        </span>
                                    </div>
                                </div>

                                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {product.name}
                                </h4>

                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-gray-900">
                                            PKR {product.price.toLocaleString()}
                                        </span>
                                        {product.originalPrice > product.price && (
                                            <span className="text-sm text-gray-500 line-through">
                                                PKR {product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        View Details
                                    </Link>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                                    >
                                        <ShoppingCartIcon className="h-4 w-4" />
                                        <span>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
