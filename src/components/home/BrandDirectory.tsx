'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BuildingStorefrontIcon, StarIcon, TagIcon } from '@heroicons/react/24/outline'

export function BrandDirectory() {
  const brandCategories = [
    {
      name: 'Premium Fashion',
      brands: [
        { name: 'Khaadi', logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop', products: '2,500+', rating: 4.8, hasSale: true, id: 'khaadi' },
        { name: 'Gul Ahmed', logo: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop', products: '3,200+', rating: 4.7, hasSale: false, id: 'gul-ahmed' },
        { name: 'Nishat Linen', logo: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop', products: '2,800+', rating: 4.6, hasSale: true, id: 'nishat-linen' },
        { name: 'Alkaram Studio', logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop', products: '2,100+', rating: 4.5, hasSale: false, id: 'alkaram-studio' }
      ]
    },
    {
      name: 'Youth & Casual',
      brands: [
        { name: 'Outfitters', logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop', products: '1,800+', rating: 4.4, hasSale: true, id: 'outfitters' },
        { name: 'Lama', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop', products: '1,500+', rating: 4.3, hasSale: true, id: 'lama' },
        { name: 'Breakout', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop', products: '1,200+', rating: 4.2, hasSale: false, id: 'breakout' },
        { name: 'CrossStitch', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop', products: '900+', rating: 4.1, hasSale: true, id: 'crossstitch' }
      ]
    },
    {
      name: 'Beauty & Cosmetics',
      brands: [
        { name: 'Huda Beauty', logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop', products: '800+', rating: 4.9, hasSale: false, id: 'huda-beauty' },
        { name: 'Bata', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop', products: '800+', rating: 4.3, hasSale: false, id: 'bata' },
        { name: 'Servis', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop', products: '650+', rating: 4.2, hasSale: true, id: 'servis' },
        { name: 'Nike Pakistan', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop', products: '400+', rating: 4.7, hasSale: false, id: 'nike-pakistan' }
      ]
    }
  ]

  const featuredBrands = [
    { name: 'Outfitters', description: 'Trendy youth fashion', specialOffer: '40% off Independence Day Sale' },
    { name: 'Khaadi', description: 'Premium Pakistani fashion', specialOffer: 'New Eid Collection Preview' },
    { name: 'Lama', description: 'Contemporary streetwear', specialOffer: 'Buy 2 Get 1 Free' },
    { name: 'Breakout', description: 'Urban lifestyle brand', specialOffer: 'Free shipping on orders above PKR 3000' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BuildingStorefrontIcon className="h-8 w-8 text-primary-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Brand Directory</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover all your favorite Pakistani brands in one place. Each brand has its own mini-store within our digital mall.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-primary-600">500+</div>
            <div className="text-sm text-gray-600">Total Brands</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">150+</div>
            <div className="text-sm text-gray-600">Currently on Sale</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">New This Month</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600">1M+</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>
        </div>

        {/* Featured Brand Offers */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Featured Brand Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredBrands.map((brand) => (
              <div key={brand.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-1">{brand.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{brand.description}</p>
                <div className="bg-red-50 text-red-700 text-xs p-2 rounded">
                  {brand.specialOffer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Categories */}
        <div className="space-y-8">
          {brandCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.brands.map((brand) => (
                  <Link
                    key={brand.name}
                    href={`/store/${brand.id}`}
                    className="group relative bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {brand.hasSale && (
                      <div className="absolute top-2 right-2">
                        <TagIcon className="h-4 w-4 text-red-500" />
                      </div>
                    )}
                    
                    <div className="flex items-center mb-3">
                      <div className="relative w-12 h-12 mr-3">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-primary-600">
                          {brand.name}
                        </h4>
                        <p className="text-sm text-gray-600">{brand.products} products</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{brand.rating}</span>
                      </div>
                      {brand.hasSale && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                          Sale
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Brands */}
        <div className="mt-12 text-center">
          <Link
            href="/brands"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            <BuildingStorefrontIcon className="h-5 w-5 mr-2" />
            Browse All 500+ Brands
          </Link>
        </div>

        {/* Search by Brand */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a specific brand..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
