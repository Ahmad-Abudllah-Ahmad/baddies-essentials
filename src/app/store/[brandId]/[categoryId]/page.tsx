'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon, FunnelIcon, StarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'

// Product interface
interface Product {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  sizes: string[]
  colors: string[]
}

// Mock category products data
const categoryProducts: Record<string, Record<string, Product[]>> = {
  'khaadi': {
    'new-arrivals': [
      { id: '1', name: 'Elegant Summer Dress', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop', price: 4999, originalPrice: 7999, rating: 4.5, reviews: 128, sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Blue', 'Pink', 'White'] },
      { id: '2', name: 'Traditional Lawn Suit', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop', price: 5999, originalPrice: 8999, rating: 4.8, reviews: 89, sizes: ['S', 'M', 'L', 'XL'], colors: ['Green', 'Blue', 'Red'] },
      { id: '16', name: 'Floral Print Maxi Dress', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop', price: 6999, originalPrice: 8999, rating: 4.7, reviews: 45, sizes: ['XS', 'S', 'M', 'L'], colors: ['Floral', 'Navy', 'Black'] },
      { id: '17', name: 'Embroidered Cotton Shirt', image: 'https://images.unsplash.com/photo-1564257577-4f0e2c8b9e3e?w=400&h=400&fit=crop', price: 4999, originalPrice: 6499, rating: 4.5, reviews: 32, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Cream', 'Light Blue'] }
    ],
    'womens-wear': [
      { id: '1', name: 'Elegant Summer Dress', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop', price: 4999, originalPrice: 7999, rating: 4.5, reviews: 128, sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Blue', 'Pink', 'White'] },
      { id: '2', name: 'Traditional Lawn Suit', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop', price: 5999, originalPrice: 8999, rating: 4.8, reviews: 89, sizes: ['S', 'M', 'L', 'XL'], colors: ['Green', 'Blue', 'Red'] },
      { id: '27', name: 'Printed Lawn Dupatta', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop', price: 1999, originalPrice: 2999, rating: 4.4, reviews: 56, sizes: ['One Size'], colors: ['Multi', 'Blue', 'Pink'] }
    ],
    'mens-wear': [
      { id: '3', name: 'Premium Cotton T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', price: 1999, originalPrice: 2999, rating: 4.5, reviews: 203, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Black', 'Navy', 'Gray'] }
    ],
    'accessories': [
      { id: '8', name: 'Designer Handbag', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', price: 1999, originalPrice: 2999, rating: 4.3, reviews: 67, sizes: ['One Size'], colors: ['Black', 'Brown', 'Beige'] }
    ]
  },
  'outfitters': {
    'new-arrivals': [
      { id: '18', name: 'Oversized Hoodie', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop', price: 3999, originalPrice: 4999, rating: 4.6, reviews: 67, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Gray', 'Black', 'Navy'] },
      { id: '19', name: 'Cargo Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop', price: 4499, originalPrice: 5999, rating: 4.4, reviews: 54, sizes: ['28', '30', '32', '34', '36', '38'], colors: ['Khaki', 'Black', 'Olive'] }
    ],
    'mens-wear': [
      { id: '3', name: 'Graphic T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', price: 1999, originalPrice: 2999, rating: 4.5, reviews: 203, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Black', 'Navy', 'Gray'] },
      { id: '4', name: 'Denim Jackets', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop', price: 4999, originalPrice: 6999, rating: 4.7, reviews: 156, sizes: ['S', 'M', 'L', 'XL'], colors: ['Blue', 'Black', 'Light Blue'] }
    ],
    'womens-wear': [
      { id: '12', name: 'Casual Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop', price: 3499, originalPrice: 4999, rating: 4.4, reviews: 178, sizes: ['24', '26', '28', '30', '32'], colors: ['Blue', 'Black', 'Light Blue'] }
    ]
  },
  'nike-pakistan': {
    'athletic-wear': [
      { id: '11', name: 'Nike Sneakers', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop', price: 12999, originalPrice: 15999, rating: 4.8, reviews: 245, sizes: ['7', '8', '9', '10', '11', '12'], colors: ['Red', 'Black', 'White'] },
      { id: '22', name: 'Air Max 2024', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', price: 18999, originalPrice: 21999, rating: 4.9, reviews: 123, sizes: ['7', '8', '9', '10', '11', '12'], colors: ['Black', 'White', 'Blue'] },
      { id: '23', name: 'Dri-FIT Training Top', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop', price: 5999, originalPrice: 7499, rating: 4.6, reviews: 98, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'] }
    ]
  },
  'huda-beauty': {
    'makeup-palettes': [
      { id: '5', name: 'Eyeshadow Palette', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop', price: 3999, originalPrice: 4999, rating: 4.8, reviews: 234, sizes: ['One Size'], colors: ['Multi', 'Neutral', 'Bold'] },
      { id: '20', name: 'Glow Foundation', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop', price: 4999, originalPrice: 5999, rating: 4.8, reviews: 89, sizes: ['One Size'], colors: ['Light', 'Medium', 'Dark'] }
    ],
    'lipsticks': [
      { id: '21', name: 'Highlighter Palette', image: 'https://images.unsplash.com/photo-1631214540242-6b6e1b0c0e1e?w=400&h=400&fit=crop', price: 3499, originalPrice: 4499, rating: 4.7, reviews: 76, sizes: ['One Size'], colors: ['Gold', 'Rose Gold', 'Bronze'] },
      { id: '14', name: 'Liquid Lipstick Set', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop', price: 2999, originalPrice: 3999, rating: 4.6, reviews: 189, sizes: ['One Size'], colors: ['Red', 'Pink', 'Nude'] }
    ]
  }
}

const brandNames = {
  'khaadi': 'Khaadi',
  'outfitters': 'Outfitters',
  'nike-pakistan': 'Nike Pakistan',
  'huda-beauty': 'Huda Beauty'
}

const categoryNames = {
  'new-arrivals': 'New Arrivals',
  'womens-wear': "Women's Wear",
  'mens-wear': "Men's Wear",
  'accessories': 'Accessories',
  'athletic-wear': 'Athletic Wear',
  'makeup-palettes': 'Makeup Palettes',
  'lipsticks': 'Lipsticks'
}

export default function BrandCategoryPage() {
  const params = useParams()
  const brandId = params.brandId as string
  const categoryId = params.categoryId as string
  const { addItem } = useCart()

  const [sortBy, setSortBy] = useState('featured')
  const [filterSize, setFilterSize] = useState('all')
  const [filterColor, setFilterColor] = useState('all')

  const products = categoryProducts[brandId as keyof typeof categoryProducts]?.[categoryId as keyof typeof categoryProducts[keyof typeof categoryProducts]] || []
  const brandName = brandNames[brandId as keyof typeof brandNames] || brandId
  const categoryName = categoryNames[categoryId as keyof typeof categoryNames] || categoryId

  // Get unique sizes and colors
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes)))
  const allColors = Array.from(new Set(products.flatMap(p => p.colors)))

  const filteredProducts = products
    .filter(product => filterSize === 'all' || product.sizes.includes(filterSize))
    .filter(product => filterColor === 'all' || product.colors.includes(filterColor))
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'rating': return b.rating - a.rating
        case 'newest': return parseInt(b.id) - parseInt(a.id)
        default: return 0
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
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <Link href={`/store/${brandId}`} className="text-gray-500 hover:text-gray-700">{brandName}</Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{categoryName}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{brandName} - {categoryName}</h1>
          <p className="mt-2 text-gray-600">{products.length} products available</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div className="flex flex-wrap items-center gap-4">
            <FunnelIcon className="h-5 w-5 text-gray-600" />
            <select
              value={filterSize}
              onChange={(e) => setFilterSize(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Sizes</option>
              {allSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <select
              value={filterColor}
              onChange={(e) => setFilterColor(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Colors</option>
              {allColors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                {product.originalPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    SALE
                  </div>
                )}
              </div>
              
              <div className="p-4">
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

                {/* Size and Color Info */}
                <div className="mb-3 text-xs text-gray-600">
                  <div>Sizes: {product.sizes.slice(0, 3).join(', ')}{product.sizes.length > 3 && '...'}</div>
                  <div>Colors: {product.colors.slice(0, 2).join(', ')}{product.colors.length > 2 && '...'}</div>
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            {products.length === 0 ? (
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon!</h3>
                <p className="text-gray-600 mb-4">
                  We're working hard to bring you amazing {categoryName.toLowerCase()} from {brandName}. 
                  This category will be available soon with exciting new products.
                </p>
                <p className="text-sm text-primary-600 font-medium">
                  Stay tuned for updates!
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
