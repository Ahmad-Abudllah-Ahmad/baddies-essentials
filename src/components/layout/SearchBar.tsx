'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

interface SearchBarProps {
  onClose?: () => void
}

interface SearchSuggestion {
  id: string
  type: 'product' | 'brand' | 'category'
  name: string
  image?: string
  url: string
}

// Mock search suggestions data
const searchData: SearchSuggestion[] = [
  // Products
  { id: '1', type: 'product', name: 'Elegant Summer Dress', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=50&h=50&fit=crop&auto=format', url: '/product/1' },
  { id: '2', type: 'product', name: 'Traditional Lawn Suit', image: 'https://images.unsplash.com/photo-1564257577-4f0e2c8b9e3e?w=50&h=50&fit=crop&auto=format', url: '/product/2' },
  { id: '3', type: 'product', name: 'Graphic T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=50&h=50&fit=crop&auto=format', url: '/product/3' },
  { id: '4', type: 'product', name: 'Formal Shirt', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&auto=format', url: '/product/4' },
  
  // Brands
  { id: 'khaadi', type: 'brand', name: 'Khaadi', url: '/store/khaadi' },
  { id: 'outfitters', type: 'brand', name: 'Outfitters', url: '/store/outfitters' },
  { id: 'gul-ahmed', type: 'brand', name: 'Gul Ahmed', url: '/store/gul-ahmed' },
  { id: 'nishat', type: 'brand', name: 'Nishat', url: '/store/nishat' },
  { id: 'lama', type: 'brand', name: 'Lama', url: '/store/lama' },
  
  // Categories
  { id: 'mens-fashion', type: 'category', name: "Men's Fashion", url: '/category/mens-fashion' },
  { id: 'womens-fashion', type: 'category', name: "Women's Fashion", url: '/category/womens-fashion' },
  { id: 'kids-fashion', type: 'category', name: "Kids Fashion", url: '/category/kids-fashion' },
  { id: 'accessories', type: 'category', name: 'Accessories', url: '/category/accessories' },
  { id: 'footwear', type: 'category', name: 'Footwear', url: '/category/footwear' }
]

export function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = searchData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8) // Limit to 8 suggestions
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setShowSuggestions(false)
      onClose?.()
    }
  }

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    router.push(suggestion.url)
    setQuery('')
    setShowSuggestions(false)
    onClose?.()
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product': return '🛍️'
      case 'brand': return '🏪'
      case 'category': return '📂'
      default: return '🔍'
    }
  }

  return (
    <div ref={searchRef} className="relative">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length > 0 && setShowSuggestions(true)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            placeholder={t('Search for products, brands, or categories...')}
          />
          {onClose && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </form>

      {/* Search Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center space-x-3 flex-1">
                {suggestion.image ? (
                  <img
                    src={suggestion.image}
                    alt={suggestion.name}
                    className="w-8 h-8 rounded object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm">
                    {getTypeIcon(suggestion.type)}
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{suggestion.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{suggestion.type}</div>
                </div>
              </div>
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
