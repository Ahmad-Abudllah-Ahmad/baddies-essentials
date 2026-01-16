'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FunnelIcon, Squares2X2Icon, ListBulletIcon, StarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'

export default function NewArrivalsPage() {
  const { addItem } = useCart()

  const products = [
    {
      id: 1,
      name: 'Floral Summer Dress',
      brand: 'Khaadi',
      price: 4999,
      originalPrice: 7999,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 156,
      onSale: true,
      isNew: true
    },
    {
      id: 2,
      name: 'Premium Makeup Palette',
      brand: 'Huda Beauty',
      price: 8999,
      originalPrice: 12999,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      onSale: true,
      isNew: true
    },
    {
      id: 3,
      name: 'Designer Handbag',
      brand: 'Coach',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 203,
      onSale: false,
      isNew: true
    },
    {
      id: 4,
      name: 'Casual Denim Jacket',
      brand: 'Levi\'s',
      price: 6999,
      originalPrice: 9999,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 128,
      onSale: true,
      isNew: true
    },
    {
      id: 5,
      name: 'Luxury Lipstick Set',
      brand: 'MAC',
      price: 3999,
      originalPrice: 5999,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 87,
      onSale: true,
      isNew: true
    },
    {
      id: 6,
      name: 'Stylish Sunglasses',
      brand: 'Ray-Ban',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 234,
      onSale: false,
      isNew: true
    }
  ]

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarSolidIcon key={i} className="h-4 w-4 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <StarSolidIcon className="h-4 w-4 text-yellow-400 absolute top-0 left-0 w-1/2 overflow-hidden" />
        </div>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the latest fashion trends and must-have items from top Pakistani brands
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-2xl hover:bg-gray-50">
                <FunnelIcon className="h-5 w-5" />
                <span>Filters</span>
              </button>
              <select className="px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500">
                <option>All Categories</option>
                <option>Women's Fashion</option>
                <option>Men's Fashion</option>
                <option>Beauty & Makeup</option>
                <option>Accessories</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Squares2X2Icon className="h-5 w-5" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ListBulletIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {product.onSale && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    SALE
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <p className="text-sm text-primary-600 font-semibold">{product.brand}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">
                    PKR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-2xl font-semibold text-center block transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full border border-primary-600 text-primary-600 hover:bg-primary-50 py-3 rounded-2xl font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center pb-12">
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-2xl font-semibold transition-colors">
          Load More Products
        </button>
      </div>
    </div>
  )
}
