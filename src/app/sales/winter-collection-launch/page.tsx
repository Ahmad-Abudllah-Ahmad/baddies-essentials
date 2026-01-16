'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ClockIcon, 
  BellIcon,
  CheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

export default function WinterCollectionLaunchPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 45,
    seconds: 20
  })
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = () => {
    setIsSubscribed(true)
    toast.success('You will be notified when the Winter Collection launches!')
  }

  const featuredBrands = [
    { name: 'Khaadi', logo: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=100&h=100&fit=crop&auto=format' },
    { name: 'Gul Ahmed', logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&auto=format' },
    { name: 'Alkaram', logo: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=100&h=100&fit=crop&auto=format' },
    { name: 'Nishat', logo: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop&auto=format' },
    { name: 'Outfitters', logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format' },
    { name: 'Bonanza', logo: 'https://images.unsplash.com/photo-1564257577-4f0e2c8b9e3e?w=100&h=100&fit=crop&auto=format' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-90" />
        <Image
          src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=1200&h=600&fit=crop&auto=format"
          alt="Winter Collection Launch"
          width={1200}
          height={600}
          className="w-full h-96 object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center justify-center mb-4">
              <SparklesIcon className="h-12 w-12 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Winter Collection Launch</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              New winter arrivals from 200+ brands
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4">Collection Launches In:</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm opacity-80">Days</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm opacity-80">Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm opacity-80">Minutes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm opacity-80">Seconds</div>
                </div>
              </div>
            </div>

            {/* Subscribe Button */}
            <button
              onClick={handleSubscribe}
              disabled={isSubscribed}
              className={`${
                isSubscribed 
                  ? 'bg-green-500 cursor-not-allowed' 
                  : 'bg-white text-indigo-600 hover:bg-gray-100'
              } px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              {isSubscribed ? (
                <span className="flex items-center">
                  <CheckIcon className="h-5 w-5 mr-2" />
                  Subscribed!
                </span>
              ) : (
                <span className="flex items-center">
                  <BellIcon className="h-5 w-5 mr-2" />
                  Notify Me When It Launches
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* What to Expect */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Winter Essentials</h3>
              <p className="text-gray-600">Cozy sweaters, jackets, and warm clothing for the season</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Early Access</h3>
              <p className="text-gray-600">Be the first to shop the latest winter fashion trends</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BellIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
              <p className="text-gray-600">Exclusive launch discounts and bundle deals</p>
            </div>
          </div>
        </div>

        {/* Participating Brands */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">200+ Participating Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredBrands.map((brand) => (
              <div key={brand.name} className="text-center group">
                <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{brand.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">And 194+ more brands joining the winter collection!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
