'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon, 
  HeartIcon, 
  ShoppingCartIcon,
  ArrowLeftIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon, HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'

interface SaleProduct {
  id: string
  name: string
  brand: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  reviewCount: number
  image: string
  category: string
  inStock: boolean
}

// Mock sale products data
const getSaleProductsByBrand = (brandId: string): SaleProduct[] => {
  const allSaleProducts: Record<string, SaleProduct[]> = {
    'khaadi': [
      {
        id: '1',
        name: 'Elegant Summer Dress',
        brand: 'Khaadi',
        price: 4999,
        originalPrice: 7999,
        discount: 37,
        rating: 4.5,
        reviewCount: 128,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
        category: 'Dresses',
        inStock: true
      },
      {
        id: '2',
        name: 'Traditional Lawn Suit',
        brand: 'Khaadi',
        price: 5999,
        originalPrice: 8999,
        discount: 33,
        rating: 4.8,
        reviewCount: 89,
        image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop',
        category: 'Suits',
        inStock: true
      },
      {
        id: '3',
        name: 'Embroidered Kurta',
        brand: 'Khaadi',
        price: 3999,
        originalPrice: 5999,
        discount: 33,
        rating: 4.6,
        reviewCount: 156,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
        category: 'Kurtas',
        inStock: true
      }
    ],
    'outfitters': [
      {
        id: '4',
        name: 'Graphic T-Shirts',
        brand: 'Outfitters',
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        rating: 4.5,
        reviewCount: 203,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        category: 'T-Shirts',
        inStock: true
      },
      {
        id: '5',
        name: 'Denim Jackets',
        brand: 'Outfitters',
        price: 4999,
        originalPrice: 6999,
        discount: 29,
        rating: 4.7,
        reviewCount: 145,
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
        category: 'Jackets',
        inStock: true
      },
      {
        id: '6',
        name: 'Casual Jeans',
        brand: 'Outfitters',
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        rating: 4.4,
        reviewCount: 178,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
        category: 'Jeans',
        inStock: true
      }
    ],
    'huda-beauty': [
      {
        id: '7',
        name: 'Eyeshadow Palette',
        brand: 'Huda Beauty',
        price: 3999,
        originalPrice: 4999,
        discount: 20,
        rating: 4.8,
        reviewCount: 234,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
        category: 'Makeup',
        inStock: true
      },
      {
        id: '8',
        name: 'Liquid Lipstick Set',
        brand: 'Huda Beauty',
        price: 2999,
        originalPrice: 3999,
        discount: 25,
        rating: 4.6,
        reviewCount: 189,
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
        category: 'Lipsticks',
        inStock: true
      }
    ],
    'gul-ahmed': [
      {
        id: '9',
        name: 'Lawn Collection',
        brand: 'Gul Ahmed',
        price: 2999,
        originalPrice: 4999,
        discount: 40,
        rating: 4.5,
        reviewCount: 167,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
        category: 'Lawn',
        inStock: true
      },
      {
        id: '10',
        name: 'Formal Shirts',
        brand: 'Gul Ahmed',
        price: 1999,
        originalPrice: 3999,
        discount: 50,
        rating: 4.3,
        reviewCount: 134,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
        category: 'Shirts',
        inStock: true
      }
    ]
  }
  
  return allSaleProducts[brandId] || []
}

const getBrandInfo = (brandId: string) => {
  const brands: Record<string, any> = {
    'khaadi': {
      name: 'Khaadi',
      description: 'Premium Pakistani Fashion Brand',
      saleTitle: 'Summer Collection Sale',
      saleSubtitle: 'Up to 50% OFF on selected items'
    },
    'outfitters': {
      name: 'Outfitters',
      description: 'Trendy Youth Fashion',
      saleTitle: 'Youth Fashion Sale',
      saleSubtitle: 'Up to 40% OFF on trendy items'
    },
    'huda-beauty': {
      name: 'Huda Beauty',
      description: 'Professional Makeup & Beauty',
      saleTitle: 'Beauty Sale',
      saleSubtitle: 'Up to 30% OFF on makeup & beauty'
    },
    'gul-ahmed': {
      name: 'Gul Ahmed',
      description: 'Traditional & Modern Pakistani Clothing',
      saleTitle: 'Lawn Collection Sale',
      saleSubtitle: 'Up to 60% OFF on lawn collection'
    }
  }
  
  return brands[brandId] || {
    name: 'Brand',
    description: 'Fashion Brand',
    saleTitle: 'Sale',
    saleSubtitle: 'Great discounts available'
  }
}

export default function BrandSalePage() {
  const params = useParams()
  const { addItem } = useCart()
  const brandId = params.brandId as string
  const brandInfo = getBrandInfo(brandId)
  const saleProducts = getSaleProductsByBrand(brandId)
  
  const [sortBy, setSortBy] = useState('discount')
  const [filterCategory, setFilterCategory] = useState('all')
  
  const categories = ['all', ...Array.from(new Set(saleProducts.map(p => p.category)))]
  
  const filteredAndSortedProducts = saleProducts
    .filter(product => filterCategory === 'all' || product.category === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'discount':
          return b.discount - a.discount
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

  const handleAddToCart = (product: SaleProduct) => {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/store/${brandId}`}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to {brandInfo.name} Store
          </Link>
        </div>
      </div>

      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{brandInfo.name} {brandInfo.saleTitle}</h1>
          <p className="text-xl mb-6">{brandInfo.saleSubtitle}</p>
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-lg">
            LIMITED TIME OFFER
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <FunnelIcon className="h-5 w-5 text-gray-600" />
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
            <option value="discount">Highest Discount</option>
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
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                  -{product.discount}%
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
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
                  <span className="text-sm text-gray-600">({product.reviewCount})</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-gray-900">
                    PKR {product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
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

        {saleProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No sale items available</h3>
            <p className="text-gray-600">Check back later for exciting deals from {brandInfo.name}!</p>
          </div>
        )}
      </div>
    </div>
  )
}
