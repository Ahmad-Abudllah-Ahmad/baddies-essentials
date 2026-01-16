'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FireIcon, 
  TagIcon, 
  ClockIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const allSales = [
  {
    id: 'independence-day-sale',
    name: 'Independence Day Sale',
    description: 'Celebrate 14th August with massive discounts',
    discount: 'Up to 70% Off',
    brands: ['Outfitters', 'Lama', 'Breakout', 'Khaadi', 'Gul Ahmed'],
    endsIn: '2 days',
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=200&fit=crop&auto=format',
    theme: 'bg-green-600',
    isActive: true
  },
  {
    id: 'end-of-summer-sale',
    name: 'End of Summer Sale',
    description: 'Clear out summer collections',
    discount: 'Up to 50% Off',
    brands: ['Nishat', 'Alkaram', 'Bonanza', 'Diners'],
    endsIn: '5 days',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=200&fit=crop&auto=format',
    theme: 'bg-orange-600',
    isActive: true
  },
  {
    id: 'back-to-school',
    name: 'Back to School',
    description: 'Kids & teens fashion essentials',
    discount: 'Up to 40% Off',
    brands: ['Juniors', 'Kids Zone', 'Little Darlings'],
    endsIn: '1 week',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop&auto=format',
    theme: 'bg-blue-600',
    isActive: true
  },
  {
    id: 'eid-collection-preview',
    name: 'Eid Collection Preview',
    description: 'Get ready for Eid with exclusive previews',
    discount: 'Coming Soon',
    brands: ['All Brands'],
    endsIn: 'Next Week',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop&auto=format',
    theme: 'bg-purple-600',
    isActive: false
  },
  {
    id: 'winter-collection-launch',
    name: 'Winter Collection Launch',
    description: 'New winter arrivals from 200+ brands',
    discount: 'Coming Soon',
    brands: ['200+ Brands'],
    endsIn: 'September',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=200&fit=crop&auto=format',
    theme: 'bg-indigo-600',
    isActive: false
  }
]

export default function AllSalesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all') // all, active, upcoming

  const filteredSales = allSales.filter(sale => {
    const matchesSearch = sale.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sale.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'active' && sale.isActive) ||
                         (filterStatus === 'upcoming' && !sale.isActive)
    
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <FireIcon className="h-8 w-8 text-red-500 mr-2" />
              <h1 className="text-3xl font-bold text-gray-900">All Sales</h1>
            </div>
            <p className="text-lg text-gray-600">
              Browse all current and upcoming sales across MegaMall Online
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search sales..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter */}
            <div className="flex items-center space-x-2">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Sales</option>
                <option value="active">Active Sales</option>
                <option value="upcoming">Upcoming Sales</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSales.map((sale) => (
            <Link
              key={sale.id}
              href={`/sales/${sale.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Sale Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={sale.image}
                  alt={sale.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute top-4 left-4">
                  <span className={`${sale.theme} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                    {sale.discount}
                  </span>
                </div>
                {!sale.isActive && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Sale Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sale.name}</h3>
                <p className="text-gray-600 mb-4">{sale.description}</p>
                
                {/* Brands */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Participating Brands:</p>
                  <div className="flex flex-wrap gap-1">
                    {sale.brands.slice(0, 3).map((brand) => (
                      <span key={brand} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {brand}
                      </span>
                    ))}
                    {sale.brands.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        +{sale.brands.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Time Left */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{sale.isActive ? 'Ends in' : 'Starts in'} {sale.endsIn}</span>
                  </div>
                  <span className={`${sale.theme} text-white px-4 py-2 rounded-lg text-sm font-medium`}>
                    {sale.isActive ? 'Shop Now' : 'View Details'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredSales.length === 0 && (
          <div className="text-center py-12">
            <TagIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No sales found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
