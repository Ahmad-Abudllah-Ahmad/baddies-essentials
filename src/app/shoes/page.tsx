'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FunnelIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline'

export default function ShoesPage() {
  const products = [
    {
      id: 1,
      name: 'Running Sneakers',
      brand: 'Nike',
      price: 12000,
      originalPrice: 15000,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 342,
      onSale: true,
      category: 'Sports'
    },
    {
      id: 2,
      name: 'Formal Leather Shoes',
      brand: 'Bata',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 156,
      onSale: false,
      category: 'Formal'
    },
    {
      id: 3,
      name: 'Casual Loafers',
      brand: 'Servis',
      price: 4500,
      originalPrice: 5500,
      image: 'https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 89,
      onSale: true,
      category: 'Casual'
    },
    {
      id: 4,
      name: 'High Heels',
      brand: 'Metro',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 234,
      onSale: false,
      category: 'Heels'
    },
    {
      id: 5,
      name: 'Canvas Sneakers',
      brand: 'Converse',
      price: 7200,
      originalPrice: 8500,
      image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 178,
      onSale: true,
      category: 'Casual'
    },
    {
      id: 6,
      name: 'Sandals',
      brand: 'Ndure',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
      rating: 4.2,
      reviews: 67,
      onSale: false,
      category: 'Sandals'
    }
  ]

  const categories = [
    'All Categories', 'Sports', 'Formal', 'Casual', 'Heels', 'Sandals', 'Boots', 'Flats'
  ]

  const brands = [
    'All Brands', 'Nike', 'Adidas', 'Bata', 'Servis', 'Metro', 'Converse', 'Ndure'
  ]

  const sizes = [
    'All Sizes', '6', '7', '8', '9', '10', '11', '12'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Shoes Collection</h1>
            <p className="mt-2 text-lg text-gray-600">
              Step into style with our premium footwear collection
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                      <span className="ml-2 text-sm text-gray-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.slice(1).map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-md px-3 py-2 text-sm text-center hover:border-primary-500 hover:text-primary-600"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                      <span className="ml-2 text-sm text-gray-600">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                    <span className="ml-2 text-sm text-gray-600">Under PKR 5,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                    <span className="ml-2 text-sm text-gray-600">PKR 5,000 - 10,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                    <span className="ml-2 text-sm text-gray-600">PKR 10,000 - 15,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                    <span className="ml-2 text-sm text-gray-600">Above PKR 15,000</span>
                  </label>
                </div>
              </div>

              {/* On Sale */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                  <span className="ml-2 text-sm text-gray-600">On Sale</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button className="lg:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <FunnelIcon className="h-4 w-4 mr-2" />
                  Filters
                </button>
                <p className="text-sm text-gray-600">{products.length} products</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Rating</option>
                </select>
                
                <div className="flex border border-gray-300 rounded-md">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Squares2X2Icon className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 border-l border-gray-300">
                    <ListBulletIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    {product.onSale && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        SALE
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{product.brand}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">
                          PKR {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            PKR {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
