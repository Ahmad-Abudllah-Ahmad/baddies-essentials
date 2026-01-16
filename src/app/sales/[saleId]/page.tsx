'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ClockIcon,
  FireIcon,
  TagIcon,
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  BellIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'
import toast from 'react-hot-toast'

interface SaleData {
  id: string
  name: string
  description: string
  discount: string
  brands: string[]
  endDate: Date
  startDate?: Date
  isActive: boolean
  theme: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  banner: string
  products: Array<{
    id: string
    name: string
    brand: string
    price: number
    originalPrice: number
    image: string
    rating: number
    reviewCount: number
    salePercentage: number
  }>
}

import { products } from '@/data/products'

// ... existing interfaces ...

const getSaleData = (saleId: string): SaleData | null => {
  // Helper to fetch and map products from central store
  const getSaleItems = (brands: string[] | 'all', limit = 12) => {
    let filtered = products.filter(p => p.onSale)

    if (brands !== 'all') {
      filtered = filtered.filter(p => brands.includes(p.brand))
    }

    return filtered.slice(0, limit).map(p => ({
      id: String(p.id),
      name: p.name,
      brand: p.brand,
      price: p.price,
      originalPrice: p.originalPrice || Math.round(p.price * 1.3),
      image: p.image,
      rating: p.rating,
      reviewCount: p.reviews,
      salePercentage: p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 20
    }))
  }

  const sales: Record<string, SaleData> = {
    'independence-day-sale': {
      id: 'independence-day-sale',
      name: 'Independence Day Sale',
      description: 'Celebrate 14th August with massive discounts across all brands',
      discount: 'Up to 70% Off',
      brands: ['Khaadi', 'Gul Ahmed', 'Outfitters', 'Sana Safinaz', 'J.'],
      endDate: new Date('2026-08-14T23:59:59'),
      isActive: true,
      theme: {
        primary: 'bg-green-600',
        secondary: 'bg-white',
        accent: 'text-green-600',
        background: 'bg-gradient-to-br from-green-50 to-emerald-100',
        text: 'text-green-900'
      },
      banner: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&h=400&fit=crop&auto=format',
      products: getSaleItems(['Khaadi', 'Gul Ahmed', 'Outfitters', 'Sana Safinaz', 'J.'])
    },
    // Alias for shorter URL from SalesAggregator
    'independence-sale': {
      id: 'independence-sale',
      name: 'Independence Day Sale',
      description: 'Celebrate 14th August with massive discounts across all brands',
      discount: 'Up to 70% Off',
      brands: ['Khaadi', 'Gul Ahmed', 'Outfitters', 'Sana Safinaz', 'J.'],
      endDate: new Date('2026-08-14T23:59:59'),
      isActive: true,
      theme: {
        primary: 'bg-green-600',
        secondary: 'bg-white',
        accent: 'text-green-600',
        background: 'bg-gradient-to-br from-green-50 to-emerald-100',
        text: 'text-green-900'
      },
      banner: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&h=400&fit=crop&auto=format',
      products: getSaleItems(['Khaadi', 'Gul Ahmed', 'Outfitters', 'Sana Safinaz', 'J.'])
    },
    'end-of-summer-sale': {
      id: 'end-of-summer-sale',
      name: 'End of Summer Sale',
      description: 'Clear out summer collections with amazing deals',
      discount: 'Up to 50% Off',
      brands: ['Nishat', 'Bonanza', 'Sapphire', 'Limelight'],
      endDate: new Date('2026-09-30T23:59:59'),
      isActive: true,
      theme: {
        primary: 'bg-orange-600',
        secondary: 'bg-white',
        accent: 'text-orange-600',
        background: 'bg-gradient-to-br from-orange-50 to-amber-100',
        text: 'text-orange-900'
      },
      banner: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=400&fit=crop&auto=format',
      products: getSaleItems(['Nishat', 'Bonanza', 'Sapphire', 'Limelight'])
    },
    // Alias for shorter URL from SalesAggregator
    'summer-clearance': {
      id: 'summer-clearance',
      name: 'Summer Clearance',
      description: 'End of Season - Clear out summer collections with amazing deals',
      discount: 'Flat 50% Off',
      brands: ['Nishat', 'Alkaram', 'Bonanza', 'Sapphire', 'Limelight'],
      endDate: new Date('2026-09-30T23:59:59'),
      isActive: true,
      theme: {
        primary: 'bg-orange-500',
        secondary: 'bg-white',
        accent: 'text-orange-600',
        background: 'bg-gradient-to-br from-orange-50 to-amber-100',
        text: 'text-orange-900'
      },
      banner: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=400&fit=crop&auto=format',
      products: getSaleItems(['Nishat', 'Alkaram', 'Bonanza', 'Sapphire', 'Limelight'])
    },
    'back-to-school': {
      id: 'back-to-school',
      name: 'Back to School',
      description: 'Kids & teens fashion essentials for the new school year',
      discount: 'Up to 40% Off',
      brands: ['Juniors', 'Outfitters Junior', 'Khaadi Kids', 'Gul Ahmed Kids'],
      endDate: new Date('2026-09-01T23:59:59'),
      isActive: true,
      theme: {
        primary: 'bg-blue-600',
        secondary: 'bg-white',
        accent: 'text-blue-600',
        background: 'bg-gradient-to-br from-blue-50 to-indigo-100',
        text: 'text-blue-900'
      },
      banner: 'https://images.unsplash.com/photo-1503913006387-9551c4c61946?w=1200&h=400&fit=crop&auto=format',
      products: getSaleItems(['Juniors', 'Outfitters Junior', 'Khaadi Kids', 'Gul Ahmed Kids'])
    },
    'eid-collection-preview': {
      id: 'eid-collection-preview',
      name: 'Eid Collection Preview',
      description: 'Get ready for Eid with exclusive previews and early access',
      discount: 'Coming Soon',
      brands: ['All Brands'],
      startDate: new Date('2026-03-10T00:00:00'),
      endDate: new Date('2026-04-10T23:59:59'),
      isActive: false,
      theme: {
        primary: 'bg-purple-600',
        secondary: 'bg-white',
        accent: 'text-purple-600',
        background: 'bg-gradient-to-br from-purple-50 to-pink-100',
        text: 'text-purple-900'
      },
      banner: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=400&fit=crop&auto=format',
      products: []
    },
    // Alias for URL from SalesAggregator
    'eid-collection': {
      id: 'eid-collection',
      name: 'Eid Collection Preview',
      description: 'Get ready for Eid with exclusive previews and early access',
      discount: 'Coming Soon',
      brands: ['All Brands'],
      startDate: new Date('2026-03-10T00:00:00'),
      endDate: new Date('2026-04-10T23:59:59'),
      isActive: false,
      theme: {
        primary: 'bg-purple-600',
        secondary: 'bg-white',
        accent: 'text-purple-600',
        background: 'bg-gradient-to-br from-purple-50 to-pink-100',
        text: 'text-purple-900'
      },
      banner: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=400&fit=crop&auto=format',
      products: []
    },
    // Alias for Winter Launch
    'winter-launch': {
      id: 'winter-launch',
      name: 'Winter Collection Launch',
      description: 'New arrivals from 200+ brands - Get ready for winter!',
      discount: 'Coming Soon',
      brands: ['All Brands'],
      startDate: new Date('2026-11-01T00:00:00'),
      endDate: new Date('2027-02-28T23:59:59'),
      isActive: false,
      theme: {
        primary: 'bg-indigo-600',
        secondary: 'bg-white',
        accent: 'text-indigo-600',
        background: 'bg-gradient-to-br from-indigo-50 to-blue-100',
        text: 'text-indigo-900'
      },
      banner: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=400&fit=crop&auto=format',
      products: []
    },
    // Summer Collection from Hero Section
    'summer-collection': {
      id: 'summer-collection',
      name: 'Summer Collection 2024',
      description: 'Shop the latest summer fashion from top Pakistani brands',
      discount: 'New Arrivals',
      brands: ['Khaadi', 'Gul Ahmed', 'Nishat', 'Sapphire', 'Limelight', 'Alkaram'],
      endDate: new Date('2026-08-31T23:59:59'),
      isActive: true,
      theme: {
        primary: 'bg-amber-500',
        secondary: 'bg-white',
        accent: 'text-amber-600',
        background: 'bg-gradient-to-br from-amber-50 to-orange-100',
        text: 'text-amber-900'
      },
      banner: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&h=400&fit=crop&auto=format',
      products: getSaleItems('all', 12)
    }
  }

  return sales[saleId] || null
}

export default function SalePage() {
  const params = useParams()
  const saleId = params.saleId as string
  const { addItem, isAuthenticated } = useCart()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [wishlist, setWishlist] = useState<string[]>([])

  const saleData = getSaleData(saleId)

  useEffect(() => {
    if (!saleData) return

    const targetDate = saleData.isActive ? saleData.endDate : saleData.startDate!

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [saleData])

  const handleSubscribe = () => {
    setIsSubscribed(true)
    toast.success('You\'ll be notified when this sale starts!')
  }

  const handleAddToCart = (product: any) => {
    if (!isAuthenticated) {
      toast.error('Please sign in to add items to your cart', {
        icon: '🔒',
        duration: 3000,
      })
      return
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
    toast.success(`${product.name} added to cart!`)
  }

  const toggleWishlist = (productId: string) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  if (!saleData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Sale Not Found</h1>
          <Link href="/" className="text-primary-600 hover:text-primary-700">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${saleData.theme.background}`}>
      {/* Sale Banner */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={saleData.banner}
          alt={saleData.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">{saleData.name}</h1>
            <p className="text-xl mb-6">{saleData.description}</p>
            <div className={`inline-block ${saleData.theme.primary} text-white px-8 py-3 rounded-full text-2xl font-bold`}>
              {saleData.discount}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Countdown Timer */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold ${saleData.theme.text} mb-4`}>
              {saleData.isActive ? 'Sale Ends In' : 'Sale Starts In'}
            </h2>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className={`${saleData.theme.primary} text-white rounded-xl p-4`}>
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-sm capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe Button for Upcoming Sales */}
          {!saleData.isActive && (
            <div className="text-center">
              <button
                onClick={handleSubscribe}
                disabled={isSubscribed}
                className={`${saleData.theme.primary} hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto space-x-2 ${isSubscribed ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                <BellIcon className="h-5 w-5" />
                <span>{isSubscribed ? 'Subscribed!' : 'Notify Me When Sale Starts'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Participating Brands */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className={`text-2xl font-bold ${saleData.theme.text} mb-6`}>Participating Brands</h3>
          <div className="flex flex-wrap gap-3">
            {saleData.brands.map((brand) => (
              <span
                key={brand}
                className={`${saleData.theme.primary} text-white px-4 py-2 rounded-full font-medium`}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Sale Products */}
        {saleData.products.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className={`text-2xl font-bold ${saleData.theme.text} mb-8`}>Featured Sale Items</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {saleData.products.map((product) => (
                <div key={product.id} className="group relative bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.salePercentage}%
                    </div>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      {wishlist.includes(product.id) ? (
                        <HeartSolidIcon className="h-5 w-5 text-red-500" />
                      ) : (
                        <HeartIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{product.brand}</span>
                      <div className="flex items-center">
                        <StarSolidIcon className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating} ({product.reviewCount})
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h4>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">
                          PKR {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          PKR {product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        href={`/product/${product.id}`}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`flex-1 ${saleData.theme.primary} hover:opacity-90 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1`}
                      >
                        <ShoppingCartIcon className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
