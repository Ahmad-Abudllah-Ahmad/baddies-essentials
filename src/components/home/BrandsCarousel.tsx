'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const brands = [
  {
    id: 1,
    name: 'Khaadi',
    logo: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=150&h=80&fit=crop&auto=format',
    href: '/store/khaadi'
  },
  {
    id: 2,
    name: 'Gul Ahmed',
    logo: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=150&h=80&fit=crop&auto=format',
    href: '/store/gul-ahmed'
  },
  {
    id: 3,
    name: 'Nishat Linen',
    logo: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=150&h=80&fit=crop&auto=format',
    href: '/store/nishat-linen'
  },
  {
    id: 4,
    name: 'Alkaram Studio',
    logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=80&fit=crop&auto=format',
    href: '/store/alkaram'
  },
  {
    id: 5,
    name: 'Huda Beauty',
    logo: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=150&h=80&fit=crop&auto=format',
    href: '/store/huda-beauty'
  },
  {
    id: 6,
    name: 'Outfitters',
    logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=80&fit=crop&auto=format',
    href: '/store/outfitters'
  },
  {
    id: 7,
    name: 'Lama',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&auto=format',
    href: '/store/lama'
  },
  {
    id: 8,
    name: 'Breakout',
    logo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=150&h=80&fit=crop&auto=format',
    href: '/store/breakout'
  },
  {
    id: 9,
    name: 'Servis',
    logo: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=80&fit=crop&auto=format',
    href: '/store/servis'
  },
  {
    id: 10,
    name: 'Nike Pakistan',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=80&fit=crop&auto=format',
    href: '/store/nike-pakistan'
  }
]

export function BrandsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(brands.length / 4))
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {brands.slice(slideIndex * 4, (slideIndex + 1) * 4).map((brand) => (
                <Link
                  key={brand.id}
                  href={brand.href}
                  className="group flex items-center justify-center p-6 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-16">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
