'use client'

import Link from 'next/link'
import Image from 'next/image'

interface BrandOffer {
  id: string
  name: string
  discount: string
  description: string
  image: string
  logo: string
  saleUrl: string
  bgColor: string
  textColor: string
  rating: number
}

const brandOffers: BrandOffer[] = [
  {
    id: 'khaadi-sale',
    name: 'Khaadi',
    discount: 'Up to 50% OFF',
    description: 'Summer Collection Sale',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=80&h=80&fit=crop',
    saleUrl: '/store/khaadi/sale',
    bgColor: 'from-purple-600 to-pink-600',
    textColor: 'text-white',
    rating: 4.8
  },
  {
    id: 'outfitters-sale',
    name: 'Outfitters',
    discount: 'Up to 40% OFF',
    description: 'Youth Fashion Sale',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=80&h=80&fit=crop',
    saleUrl: '/store/outfitters/sale',
    bgColor: 'from-blue-600 to-indigo-600',
    textColor: 'text-white',
    rating: 4.5
  },
  {
    id: 'huda-beauty-sale',
    name: 'Huda Beauty',
    discount: 'Up to 30% OFF',
    description: 'Makeup & Beauty Sale',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop',
    saleUrl: '/store/huda-beauty/sale',
    bgColor: 'from-rose-600 to-pink-600',
    textColor: 'text-white',
    rating: 4.9
  },
  {
    id: 'gul-ahmed-sale',
    name: 'Gul Ahmed',
    discount: 'Up to 60% OFF',
    description: 'Lawn Collection Sale',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=80&h=80&fit=crop',
    saleUrl: '/store/gul-ahmed/sale',
    bgColor: 'from-green-600 to-teal-600',
    textColor: 'text-white',
    rating: 4.7
  }
]

export function FeaturedBrandOffers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Brand Offers</h2>
          <p className="text-lg text-gray-600">
            Exclusive deals and discounts from your favorite brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandOffers.map((offer) => (
            <Link
              key={offer.id}
              href={offer.saleUrl}
              className="group block"
            >
              <div className={`relative bg-gradient-to-br ${offer.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <Image
                    src={offer.image}
                    alt={`${offer.name} sale`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 h-64 flex flex-col justify-between">
                  {/* Brand Logo */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/20 backdrop-blur-sm">
                      <Image
                        src={offer.logo}
                        alt={`${offer.name} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className={`text-xl font-bold ${offer.textColor}`}>
                      {offer.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-6 right-6 flex items-center bg-white/20 backdrop-blur-md rounded-full px-2 py-1">
                    <span className="text-yellow-400 text-xs mr-1">★</span>
                    <span className={`text-xs font-bold ${offer.textColor}`}>{offer.rating}</span>
                  </div>

                  {/* Offer Details */}
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${offer.textColor} mb-2`}>
                      {offer.discount}
                    </div>
                    <p className={`text-sm ${offer.textColor} opacity-90 mb-4`}>
                      {offer.description}
                    </p>

                    {/* CTA Button */}
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:scale-105">
                      Shop Now →
                    </button>
                  </div>

                  {/* Sale Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      SALE
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Sales Button */}
        <div className="text-center mt-12">
          <Link
            href="/sales"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors"
          >
            View All Brand Sales
          </Link>
        </div>
      </div>
    </section>
  )
}
