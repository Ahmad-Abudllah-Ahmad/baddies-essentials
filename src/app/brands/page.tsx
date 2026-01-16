'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FunnelIcon, Squares2X2Icon, ListBulletIcon, StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function BrandsPage() {
  const brands = [
    {
      id: 'khaadi',
      name: 'Khaadi',
      logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop',
      description: 'Premium Pakistani Fashion Brand',
      rating: 4.6,
      reviews: 2340,
      products: 450,
      onSale: true,
      category: 'Traditional',
      established: 1998
    },
    {
      id: 'outfitters',
      name: 'Outfitters',
      logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop',
      description: 'Trendy Youth Fashion',
      rating: 4.4,
      reviews: 1890,
      products: 380,
      onSale: true,
      category: 'Youth',
      established: 2003
    },
    {
      id: 'gul-ahmed',
      name: 'Gul Ahmed',
      logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop',
      description: 'Traditional & Modern Pakistani Clothing',
      rating: 4.5,
      reviews: 3120,
      products: 620,
      onSale: true,
      category: 'Traditional',
      established: 1953
    },
    {
      id: 'nishat-linen',
      name: 'Nishat Linen',
      logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop',
      description: 'Quality Fabrics & Fashion',
      rating: 4.3,
      reviews: 1560,
      products: 520,
      onSale: false,
      category: 'Traditional',
      established: 1951
    },
    {
      id: 'alkaram-studio',
      name: 'Alkaram Studio',
      logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop',
      description: 'Elegant Pakistani Fashion',
      rating: 4.4,
      reviews: 1780,
      products: 340,
      onSale: true,
      category: 'Traditional',
      established: 1986
    },
    {
      id: 'huda-beauty',
      name: 'Huda Beauty',
      logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop',
      description: 'Professional Makeup & Beauty',
      rating: 4.8,
      reviews: 1240,
      products: 180,
      onSale: true,
      category: 'Beauty',
      established: 2013
    },
    {
      id: 'lama',
      name: 'Lama',
      logo: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop',
      description: 'Contemporary Streetwear',
      rating: 4.2,
      reviews: 980,
      products: 280,
      onSale: true,
      category: 'Streetwear',
      established: 2015
    },
    {
      id: 'breakout',
      name: 'Breakout',
      logo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=200&h=200&fit=crop',
      description: 'Urban Lifestyle Brand',
      rating: 4.3,
      reviews: 1120,
      products: 320,
      onSale: false,
      category: 'Urban',
      established: 2010
    },
    {
      id: 'crossstitch',
      name: 'CrossStitch',
      logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=200&fit=crop',
      description: 'Contemporary Fashion',
      rating: 4.4,
      reviews: 1450,
      products: 290,
      onSale: true,
      category: 'Contemporary',
      established: 2009
    },
    {
      id: 'bata',
      name: 'Bata',
      logo: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop',
      description: 'Quality Footwear',
      rating: 4.3,
      reviews: 2100,
      products: 450,
      onSale: true,
      category: 'Footwear',
      established: 1894
    },
    {
      id: 'servis',
      name: 'Servis',
      logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&h=200&fit=crop',
      description: 'Sports & Casual Footwear',
      rating: 4.2,
      reviews: 1890,
      products: 380,
      onSale: false,
      category: 'Sports',
      established: 1941
    },
    {
      id: 'nike-pakistan',
      name: 'Nike Pakistan',
      logo: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=200&h=200&fit=crop',
      description: 'Premium Sports Brand',
      rating: 4.7,
      reviews: 2340,
      products: 520,
      onSale: true,
      category: 'Sports',
      established: 1971
    }
  ]

  const categories = [
    'All Categories', 'Traditional', 'Youth', 'Beauty', 'Streetwear', 'Urban', 'Contemporary', 'Footwear', 'Sports'
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarIconSolid key="half" className="h-4 w-4 text-yellow-400" />)
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
            <h1 className="text-4xl font-bold text-gray-900">Brand Directory</h1>
            <p className="mt-2 text-lg text-gray-600">
              Discover 500+ brands in Pakistan's largest fashion marketplace
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

              {/* Rating */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Rating</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                    <span className="ml-2 text-sm text-gray-600">4.5+ Stars</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                    <span className="ml-2 text-sm text-gray-600">4.0+ Stars</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                    <span className="ml-2 text-sm text-gray-600">3.5+ Stars</span>
                  </label>
                </div>
              </div>

              {/* On Sale */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
                  <span className="ml-2 text-sm text-gray-600">Currently on Sale</span>
                </label>
              </div>
            </div>
          </div>

          {/* Brands Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button className="lg:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <FunnelIcon className="h-4 w-4 mr-2" />
                  Filters
                </button>
                <p className="text-sm text-gray-600">{brands.length} brands</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>A-Z</option>
                  <option>Z-A</option>
                  <option>Highest Rated</option>
                  <option>Most Products</option>
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

            {/* Brands */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {brands.map((brand) => (
                <div key={brand.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                      {brand.onSale && (
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          SALE
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {brand.name}
                        </h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {brand.category}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {brand.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center">
                          <div className="flex items-center mr-1">
                            {renderStars(brand.rating)}
                          </div>
                          <span className="text-sm text-gray-600">
                            {brand.rating} ({brand.reviews.toLocaleString()})
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {brand.products} products
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Est. {brand.established}
                        </span>
                        <Link
                          href={`/store/${brand.id}`}
                          className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
                        >
                          Visit Store
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Load More Brands
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
