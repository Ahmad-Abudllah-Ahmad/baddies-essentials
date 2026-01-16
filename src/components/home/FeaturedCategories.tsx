'use client'

import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 1,
    name: 'Men',
    href: '/men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
    itemCount: 'Expore Collection'
  },
  {
    id: 2,
    name: 'Women',
    href: '/women',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop',
    itemCount: 'Expore Collection'
  },
  {
    id: 3,
    name: 'Kids',
    href: '/kids',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=800&fit=crop',
    itemCount: 'Expore Collection'
  },
  {
    id: 4,
    name: 'Footwear',
    href: '/shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
    itemCount: 'Expore Collection'
  },
  {
    id: 5,
    name: 'Accessories',
    href: '/accessories',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=800&fit=crop',
    itemCount: 'Expore Collection'
  },
  {
    id: 6,
    name: 'Bags',
    href: '/bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    itemCount: 'Expore Collection'
  }
]

export function FeaturedCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100"
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity group-hover:opacity-70" />

          <div className="absolute bottom-0 p-6">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {category.name}
            </h3>
            <p className="mt-1 text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {category.itemCount} &rarr;
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
