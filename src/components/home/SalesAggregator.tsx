'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ClockIcon, CalendarIcon } from '@heroicons/react/24/outline'

export function SalesAggregator() {
  const currentSales = [
    {
      id: 1,
      name: 'Independence Day Sale',
      event: 'Independence Sale',
      description: 'Flat 30% Off',
      discount: 'UP TO 70% OFF',
      brands: 'Outfitters, Lama, Breakout',
      endsIn: '2 days',
      color: 'bg-emerald-600',
      urgent: true,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop'
    },
    {
      id: 2,
      name: 'Summer Clearance',
      event: 'Summer Clearance',
      description: 'End of Season',
      discount: 'FLAT 50% OFF',
      brands: 'Nishat, Alkaram, Bonanza',
      endsIn: '5 days',
      color: 'bg-orange-500',
      urgent: false,
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=1000&fit=crop'
    },
    {
      id: 3,
      name: 'Back to School',
      event: 'Back to School',
      description: 'Kids Essentials',
      discount: 'UP TO 40% OFF',
      brands: 'Kids Zone, Little Darlings',
      endsIn: '1 week',
      color: 'bg-blue-600',
      urgent: false,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop'
    }
  ]

  const upcomingSales = [
    {
      id: 4,
      name: 'Eid Collection Preview',
      event: 'Eid Collection',
      description: 'Exclusive early access',
      startsIn: 'Next Week',
      brands: 'All Brands',
      color: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop'
    },
    {
      id: 5,
      name: 'Winter Collection Launch',
      event: 'Winter Launch',
      description: 'New arrivals from 200+ brands',
      startsIn: 'September',
      brands: '200+ Brands',
      color: 'bg-indigo-600',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=1000&fit=crop'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Current Sales Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentSales.map((sale) => (
          <div
            key={sale.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={sale.image}
                alt={sale.event}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${sale.color} mix-blend-multiply opacity-80`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="relative p-8 h-64 flex flex-col justify-between text-white">
              <div>
                {sale.urgent && (
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-black bg-yellow-400 rounded-full">
                    ENDING SOON
                  </span>
                )}
                <h3 className="text-2xl font-bold tracking-tight">{sale.event}</h3>
                <p className="mt-1 text-white/90 font-medium">{sale.description}</p>
              </div>

              <div className="space-y-4">
                <div className="text-4xl font-black tracking-tighter">
                  {sale.discount}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center text-sm font-medium">
                    <ClockIcon className="w-4 h-4 mr-1.5" />
                    {sale.endsIn} left
                  </div>
                  <Link
                    href={`/sales/${sale.event.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 text-sm font-bold text-black bg-white rounded-full transition-colors hover:bg-gray-100"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Sales Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-violet-600 font-bold tracking-wider uppercase text-sm">Coming Soon</span>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">Upcoming Sales</h3>
          </div>
          <Link href="/sales/all" className="text-violet-600 font-medium hover:underline">
            View All Sales →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingSales.map((sale) => (
            <Link
              key={sale.id}
              href={`/sales/${sale.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex">
                {/* Image */}
                <div className="relative w-1/3 min-h-[180px]">
                  <Image
                    src={sale.image}
                    alt={sale.event}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${sale.color} mix-blend-multiply opacity-60`} />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className={`inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white ${sale.color} rounded-full`}>
                      COMING SOON
                    </span>
                    <h4 className="text-xl font-bold text-slate-900">{sale.event}</h4>
                    <p className="text-slate-500 mt-1">{sale.description}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-600">
                      <CalendarIcon className="w-4 h-4 mr-1.5" />
                      Starts {sale.startsIn}
                    </div>
                    <span className="text-sm font-bold text-violet-600 group-hover:underline">
                      Get Notified
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
