'use client'

import Link from 'next/link'
import Image from 'next/image'

interface BrandStore {
  id: string
  name: string
  description: string
  logo: string
  image: string
  categories: string[]
  featured: boolean
  rating: number
}

const brandStores: BrandStore[] = [
  {
    id: 'khaadi',
    name: 'Khaadi',
    description: 'Premium Pakistani Fashion Brand',
    logo: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop',
    categories: ['new-arrivals', 'womens-wear', 'mens-wear', 'accessories'],
    featured: true,
    rating: 4.8
  },
  {
    id: 'gul-ahmed',
    name: 'Gul Ahmed',
    description: 'Traditional & Modern Pakistani Clothing',
    logo: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop',
    categories: ['lawn-collection', 'formal-wear', 'casual-wear', 'home-textiles'],
    featured: true,
    rating: 4.7
  },
  {
    id: 'nishat-linen',
    name: 'Nishat Linen',
    description: 'Quality Fabrics & Fashion',
    logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    categories: ['new-arrivals', 'womens-wear', 'kids-wear', 'unstitched'],
    featured: true,
    rating: 4.6
  },
  {
    id: 'alkaram',
    name: 'Alkaram Studio',
    description: 'Elegant Pakistani Fashion',
    logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
    categories: ['formal-collection', 'casual-wear', 'bridal-wear', 'accessories'],
    featured: true,
    rating: 4.5
  },
  {
    id: 'junaid-jamshed',
    name: 'J.',
    description: 'Mens Fashion & Fragrances',
    logo: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=300&fit=crop',
    categories: ['mens-wear', 'fragrances', 'formal-wear', 'accessories'],
    featured: true,
    rating: 4.9
  },
  {
    id: 'outfitters',
    name: 'Outfitters',
    description: 'Trendy Youth Fashion',
    logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    categories: ['new-arrivals', 'mens-wear', 'womens-wear', 'accessories'],
    featured: true,
    rating: 4.4
  },
  {
    id: 'sapphire',
    name: 'Sapphire',
    description: 'Contemporary Fashion',
    logo: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop',
    categories: ['ready-to-wear', 'unstitched', 'accessories'],
    featured: true,
    rating: 4.8
  },
  {
    id: 'limelight',
    name: 'Limelight',
    description: 'Affordable Fashion',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    categories: ['casual-wear', 'formal-wear'],
    featured: true,
    rating: 4.3
  },
  {
    id: 'bonanza',
    name: 'Bonanza Satrangi',
    description: 'Colorful Fashion',
    logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop',
    categories: ['lawn', 'winter-collection'],
    featured: true,
    rating: 4.5
  },
  {
    id: 'bata',
    name: 'Bata',
    description: 'Quality Footwear',
    logo: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    categories: ['mens-shoes', 'womens-shoes'],
    featured: true,
    rating: 4.6
  },
  {
    id: 'servis',
    name: 'Servis',
    description: 'Sports & Casual Footwear',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    categories: ['sports-shoes'],
    featured: true,
    rating: 4.4
  },
  {
    id: 'ndure',
    name: 'Ndure',
    description: 'Trendy Footwear',
    logo: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=120&h=120&fit=crop',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop',
    categories: ['sneakers', 'casual-shoes'],
    featured: true,
    rating: 4.2
  }
]

export function BrandStoresGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Brand Stores</h2>
          <p className="text-lg text-gray-600">
            Explore collections from Pakistan's top fashion brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandStores.map((brand) => (
            <Link
              key={brand.id}
              href={`/store/${brand.id}`}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
                {/* Brand Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-center">
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-4 overflow-hidden">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                  <p className="text-sm text-gray-600">{brand.description}</p>
                  {brand.featured && (
                    <span className="inline-block mt-2 bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Categories */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(brand.rating) ? 'fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600">({brand.rating})</span>
                  </div>

                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Categories:</h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.categories.slice(0, 4).map((category) => (
                      <span
                        key={category}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700">
                      Visit Store →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Stores */}
        <div className="text-center mt-12">
          <Link
            href="/stores"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-2xl font-semibold transition-colors"
          >
            View All Brand Stores
          </Link>
        </div>
      </div>
    </section>
  )
}
