'use client'

import { useState, useEffect, useRef } from 'react'
import { MagnifyingGlassIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface SearchSuggestion {
  query: string
  category: string
  brand?: string
  priceRange?: string
  reason: string
}

// Mock AI suggestions - in production this would use the Gemini API
const getAISuggestions = async (query: string, budget?: number): Promise<SearchSuggestion[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const suggestions: SearchSuggestion[] = []
  const lowerQuery = query.toLowerCase()
  
  // Budget-based suggestions
  if (budget) {
    if (budget < 3000) {
      suggestions.push({
        query: 'outfitters t-shirts',
        category: 'T-Shirts',
        brand: 'Outfitters',
        priceRange: 'PKR 1500-3000',
        reason: 'Affordable trendy t-shirts within your budget'
      })
    } else if (budget < 8000) {
      suggestions.push({
        query: 'khaadi lawn suits',
        category: 'Suits',
        brand: 'Khaadi',
        priceRange: 'PKR 4000-8000',
        reason: 'Premium quality suits in your price range'
      })
    } else {
      suggestions.push({
        query: 'nike sneakers',
        category: 'Footwear',
        brand: 'Nike Pakistan',
        priceRange: 'PKR 8000-15000',
        reason: 'Premium athletic footwear for your budget'
      })
    }
  }
  
  // Color-based suggestions
  if (lowerQuery.includes('red') || lowerQuery.includes('blue') || lowerQuery.includes('black')) {
    suggestions.push({
      query: `${lowerQuery} formal wear`,
      category: 'Formal Wear',
      reason: 'Formal clothing in your preferred color'
    })
  }
  
  // Style-based suggestions
  if (lowerQuery.includes('casual')) {
    suggestions.push({
      query: 'outfitters casual wear',
      category: 'Casual Wear',
      brand: 'Outfitters',
      reason: 'Trendy casual clothing for everyday wear'
    })
  }
  
  if (lowerQuery.includes('formal')) {
    suggestions.push({
      query: 'gul ahmed formal shirts',
      category: 'Formal Wear',
      brand: 'Gul Ahmed',
      reason: 'Professional formal wear for office'
    })
  }
  
  if (lowerQuery.includes('traditional')) {
    suggestions.push({
      query: 'khaadi traditional wear',
      category: 'Traditional Wear',
      brand: 'Khaadi',
      reason: 'Authentic Pakistani traditional clothing'
    })
  }
  
  // Makeup suggestions
  if (lowerQuery.includes('makeup') || lowerQuery.includes('lipstick')) {
    suggestions.push({
      query: 'huda beauty makeup',
      category: 'Beauty',
      brand: 'Huda Beauty',
      reason: 'Professional makeup products'
    })
  }
  
  // Footwear suggestions
  if (lowerQuery.includes('shoes') || lowerQuery.includes('sneakers')) {
    suggestions.push({
      query: 'bata formal shoes',
      category: 'Footwear',
      brand: 'Bata',
      reason: 'Quality leather shoes for formal occasions'
    })
  }
  
  // Generic suggestions if no specific matches
  if (suggestions.length === 0) {
    suggestions.push(
      {
        query: 'trending fashion',
        category: 'Trending',
        reason: 'Popular items across all brands'
      },
      {
        query: 'new arrivals',
        category: 'New Arrivals',
        reason: 'Latest fashion collections'
      }
    )
  }
  
  return suggestions.slice(0, 5)
}

interface AISearchBarProps {
  onSearch?: (query: string) => void
  placeholder?: string
  showBudgetInput?: boolean
}

export function AISearchBar({ onSearch, placeholder = "Search for products, brands, or styles...", showBudgetInput = true }: AISearchBarProps) {
  const [query, setQuery] = useState('')
  const [budget, setBudget] = useState<number | undefined>()
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const getSuggestions = async () => {
      if (query.length > 2) {
        setIsLoading(true)
        try {
          const aiSuggestions = await getAISuggestions(query, budget)
          setSuggestions(aiSuggestions)
          setShowSuggestions(true)
        } catch (error) {
          console.error('Error getting AI suggestions:', error)
        } finally {
          setIsLoading(false)
        }
      } else {
        setSuggestions([])
        setShowSuggestions(false)
      }
    }

    const debounceTimer = setTimeout(getSuggestions, 300)
    return () => clearTimeout(debounceTimer)
  }, [query, budget])

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    setShowSuggestions(false)
    if (onSearch) {
      onSearch(searchQuery)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      handleSearch(query)
    }
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Main Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length > 2 && setShowSuggestions(true)}
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <SparklesIcon className="h-5 w-5 text-primary-500" />
          </div>
        </div>

        {/* Budget Input */}
        {showBudgetInput && (
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Budget (PKR):</label>
            <input
              type="number"
              value={budget || ''}
              onChange={(e) => setBudget(e.target.value ? parseInt(e.target.value) : undefined)}
              placeholder="e.g. 5000"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent w-32"
            />
          </div>
        )}
      </form>

      {/* AI Suggestions Dropdown */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <SparklesIcon className="h-5 w-5 text-primary-500 animate-pulse" />
                <span className="text-gray-600">AI is thinking...</span>
              </div>
            </div>
          ) : suggestions.length > 0 ? (
            <>
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <SparklesIcon className="h-4 w-4 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">AI Suggestions</span>
                </div>
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(suggestion.query)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-gray-900">{suggestion.query}</span>
                        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                          {suggestion.category}
                        </span>
                        {suggestion.brand && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {suggestion.brand}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{suggestion.reason}</p>
                      {suggestion.priceRange && (
                        <p className="text-xs text-green-600 mt-1">{suggestion.priceRange}</p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </>
          ) : query.length > 2 ? (
            <div className="p-4 text-center text-gray-500">
              No AI suggestions available
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
