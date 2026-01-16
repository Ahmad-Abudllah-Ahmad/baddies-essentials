'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const popularSearches = [
    'Sneakers', 'Kurta', 'Jeans', 'Formal Shirts', 'Handbags', 'Watches'
  ]

  const handleSearch = (query: string) => {
    // This would integrate with the search functionality
    console.log('Searching for:', query)
  }

  return (
    <div className="w-full">
      {/* Main Search Bar */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
            placeholder="Search across all brands - Try 'sneakers', 'kurta', 'formal shirts'..."
            className="block w-full pl-10 pr-20 py-4 border border-gray-300 rounded-2xl text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-lg"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 text-gray-500 hover:text-gray-700 border-l border-gray-300"
            >
              <FunnelIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleSearch(searchQuery)}
              className="ml-2 mr-2 px-6 py-2 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition-colors shadow-lg"
            >
              Search
            </button>
          </div>
        </div>

        {/* Search Suggestions */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 mb-2">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => handleSearch(term)}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors shadow-sm"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Filters */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-2xl border shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm">
                  <option>All Categories</option>
                  <option>Men's Fashion</option>
                  <option>Women's Fashion</option>
                  <option>Kids</option>
                  <option>Shoes</option>
                  <option>Accessories</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm">
                  <option>All Brands</option>
                  <option>Outfitters</option>
                  <option>Lama</option>
                  <option>Breakout</option>
                  <option>Khaadi</option>
                  <option>Gul Ahmed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm">
                  <option>Any Price</option>
                  <option>Under PKR 2,000</option>
                  <option>PKR 2,000 - 5,000</option>
                  <option>PKR 5,000 - 10,000</option>
                  <option>Above PKR 10,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>On Sale</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Stats */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Search across <span className="font-semibold text-primary-600">500+ brands</span> • 
          <span className="font-semibold text-primary-600"> 1M+ products</span> • 
          Find everything in one place
        </p>
      </div>
    </div>
  )
}
