'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, StarIcon, ShoppingCartIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'

// All trending products from different brands
const allTrendingProducts = [
  // Khaadi products
  {
    id: '1',
    name: 'Elegant Summer Dress',
    brand: 'Khaadi',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 128,
    isNew: true,
    isSale: true,
    category: 'Dresses'
  },
  {
    id: '2',
    name: 'Traditional Lawn Suit',
    brand: 'Khaadi',
    price: 5999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 89,
    isNew: false,
    isSale: true,
    category: 'Suits'
  },
  // Outfitters products
  {
    id: '3',
    name: 'Graphic T-Shirts',
    brand: 'Outfitters',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 203,
    isNew: true,
    isSale: true,
    category: 'T-Shirts'
  },
  {
    id: '4',
    name: 'Denim Jackets',
    brand: 'Outfitters',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isSale: true,
    category: 'Jackets'
  },
  // Huda Beauty products
  {
    id: '5',
    name: 'Eyeshadow Palette',
    brand: 'Huda Beauty',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 234,
    isNew: true,
    isSale: true,
    category: 'Makeup'
  },
  // Servis products
  {
    id: '10',
    name: 'Running Shoes',
    brand: 'Servis',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 187,
    isNew: false,
    isSale: true,
    category: 'Footwear'
  },
  // Nike Pakistan products
  {
    id: '11',
    name: 'Nike Sneakers',
    brand: 'Nike Pakistan',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 245,
    isNew: true,
    isSale: true,
    category: 'Sneakers'
  },
  // Bata products
  {
    id: '7',
    name: 'Formal Shoes',
    brand: 'Bata',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 156,
    isNew: false,
    isSale: true,
    category: 'Formal Shoes'
  },
  // Additional trending products
  {
    id: '12',
    name: 'Casual Jeans',
    brand: 'Outfitters',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 178,
    isNew: true,
    isSale: true,
    category: 'Jeans'
  },
  {
    id: '13',
    name: 'Embroidered Kurta',
    brand: 'Khaadi',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 134,
    isNew: false,
    isSale: true,
    category: 'Kurtas'
  },
  {
    id: '14',
    name: 'Liquid Lipstick Set',
    brand: 'Huda Beauty',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 189,
    isNew: true,
    isSale: true,
    category: 'Lipsticks'
  },
  {
    id: '15',
    name: 'Casual Sneakers',
    brand: 'Servis',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 167,
    isNew: false,
    isSale: true,
    category: 'Sneakers'
  }
]

export default function TrendingPage() {
  const { addItem } = useCart()
  const [sortBy, setSortBy] = useState('popularity')
  const [filterBrand, setFilterBrand] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')
  
  const brands = ['all', ...Array.from(new Set(allTrendingProducts.map(p => p.brand)))]
  const categories = ['all', ...Array.from(new Set(allTrendingProducts.map(p => p.category)))]
  
  const filteredAndSortedProducts = allTrendingProducts
    .filter(product => filterBrand === 'all' || product.brand === filterBrand)
    .filter(product => filterCategory === 'all' || product.category === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.reviews - a.reviews
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return b.isNew ? 1 : -1
        default:
          return 0
      }
    })

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarSolidIcon
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Trending Products</h1>
          <p className="text-lg text-gray-600">Most popular items across all brands</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div className="flex flex-wrap items-center gap-4">
            <FunnelIcon className="h-5 w-5 text-gray-600" />
            <select
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'All Brands' : brand}
                </option>
              ))}
            </select>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="popularity">Most Popular</option>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square">
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                {product.isSale && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    SALE
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    NEW
                  </div>
                )}
                <button className="absolute bottom-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <HeartIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-4">
                <p className="text-primary-600 font-medium text-sm mb-1">{product.brand}</p>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-gray-900">
                    PKR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCartIcon className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  )
}
