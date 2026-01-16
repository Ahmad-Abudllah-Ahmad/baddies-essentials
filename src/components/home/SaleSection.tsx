'use client'

import Link from 'next/link'
import Image from 'next/image'

export function SaleSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-4">
              Mega Sale
            </h2>
            <p className="text-2xl mb-2 font-semibold">
              Up to 70% Off
            </p>
            <p className="text-lg mb-8 opacity-90">
              Limited time offer on selected fashion items. Don't miss out on incredible deals from top brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sale"
                className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center"
              >
                Shop Sale Now
              </Link>
              <Link
                href="/clearance"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center"
              >
                Clearance Items
              </Link>
            </div>
            
            {/* Countdown Timer */}
            <div className="mt-8">
              <p className="text-sm uppercase tracking-wider mb-2 opacity-80">
                Sale Ends In:
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">05</div>
                    <div className="text-xs uppercase">Days</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">14</div>
                    <div className="text-xs uppercase">Hours</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">32</div>
                    <div className="text-xs uppercase">Min</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">18</div>
                    <div className="text-xs uppercase">Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop"
                    alt="Sale Item 1"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    50% OFF
                  </div>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop"
                    alt="Sale Item 2"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    70% OFF
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop&auto=format"
                    alt="Sale Item 3"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    60% OFF
                  </div>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop&auto=format"
                    alt="Sale Item 4"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    40% OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
