'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon, HeartIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'
import toast from 'react-hot-toast'
import { products } from '@/data/products'

function SearchContent() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q') || ''
    const { addItem, isAuthenticated } = useCart()
    const [wishlist, setWishlist] = useState<string[]>([])
    const [sortBy, setSortBy] = useState('relevance')

    // Filter products based on search query
    const searchResults = useMemo(() => {
        if (!query.trim()) return []
        const q = query.toLowerCase().trim()

        // Synonym Logic
        const isGeneric = ['cloths', 'clothes', 'clothing', 'products', 'wear', 'outfit', 'garment', 'apparel'].some(t => q.includes(t))

        // Shirt synonyms
        const isShirt = ['shirt', 'shirts', 'tshirt', 'tee', 'top'].some(t => q === t || q.endsWith(t))
        const shirtTerms = ['shirt', 'kurta', 'kameez', 'top', 'blouse', 'tunic']

        return products.filter(p => {
            if (isGeneric) return true

            const name = p.name.toLowerCase()
            const brand = p.brand.toLowerCase()
            const category = p.category?.toLowerCase() || ''
            const tag = p.tag?.toLowerCase() || ''

            if (name.includes(q) || brand.includes(q) || category.includes(q) || tag.includes(q)) return true

            if (isShirt) {
                return shirtTerms.some(term => name.includes(term) || category.includes(term))
            }

            return false
        })
    }, [query])

    // Sort results
    const sortedResults = useMemo(() => {
        const sorted = [...searchResults]
        switch (sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price)
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price)
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating)
            default:
                return sorted
        }
    }, [searchResults, sortBy])

    const handleAddToCart = (product: typeof products[0]) => {
        if (!isAuthenticated) {
            toast.error('Please sign in to add items to cart')
            return
        }
        const success = addItem({
            id: String(product.id),
            name: product.name,
            price: product.price,
            image: product.image
        })
        if (success) {
            toast.success(`${product.name} added to cart!`)
        }
    }

    const toggleWishlist = (productId: string) => {
        if (!isAuthenticated) {
            toast.error('Please sign in to save items')
            return
        }
        setWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }

    if (!query.trim()) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <MagnifyingGlassIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Search Baddies Essentials</h1>
                    <p className="text-slate-500">Enter a search term to find products</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Search Results for &quot;{query}&quot;
                    </h1>
                    <p className="text-slate-600 mt-2">
                        {sortedResults.length} {sortedResults.length === 1 ? 'product' : 'products'} found
                    </p>
                </div>

                {sortedResults.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                        <MagnifyingGlassIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                        <h2 className="text-xl font-bold text-slate-900 mb-2">No products found</h2>
                        <p className="text-slate-500 mb-6">
                            We couldn&apos;t find any products matching &quot;{query}&quot;
                        </p>
                        <Link
                            href="/"
                            className="inline-block px-6 py-3 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition-colors"
                        >
                            Browse All Products
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Filters Bar */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <FunnelIcon className="h-5 w-5 text-gray-500" />
                                <span className="font-medium text-gray-700">{sortedResults.length} Products</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="text-sm text-gray-600">Sort by:</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                                >
                                    <option value="relevance">Relevance</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Top Rated</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {sortedResults.map((product) => (
                                <div key={product.id} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {product.onSale && product.originalPrice && (
                                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                                            </div>
                                        )}
                                        <button
                                            onClick={() => toggleWishlist(String(product.id))}
                                            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                                        >
                                            {wishlist.includes(String(product.id)) ? (
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
                                                    {product.rating} ({product.reviews})
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
                                                {product.originalPrice && product.originalPrice > product.price && (
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
                                                View
                                            </Link>
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                                            >
                                                <ShoppingCartIcon className="h-4 w-4" />
                                                <span>Add</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default function SearchPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-slate-600">Loading search results...</p>
                </div>
            </div>
        }>
            <SearchContent />
        </Suspense>
    )
}
