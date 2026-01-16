'use client'

import Image from 'next/image'
import { UserGroupIcon, GlobeAltIcon, HeartIcon, TrophyIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  const stats = [
    { label: 'Happy Customers', value: '500K+', icon: UserGroupIcon },
    { label: 'Brand Partners', value: '500+', icon: GlobeAltIcon },
    { label: 'Cities Covered', value: '100+', icon: HeartIcon },
    { label: 'Years of Excellence', value: '5+', icon: TrophyIcon }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We partner only with brands that meet our high standards for quality and craftsmanship.',
      icon: ShieldCheckIcon,
      color: 'blue'
    },
    {
      title: 'Customer Delight',
      description: 'Every decision we make is centered around creating the best shopping experience for our customers.',
      icon: HeartIcon,
      color: 'pink'
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate to bring you the latest in fashion technology and shopping convenience.',
      icon: SparklesIcon,
      color: 'purple'
    },
    {
      title: 'Trust & Transparency',
      description: 'We believe in honest pricing, clear policies, and transparent communication with our community.',
      icon: TrophyIcon,
      color: 'green'
    }
  ]

  const team = [
    {
      name: 'Ahmed Hassan',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 10+ years in fashion retail and e-commerce.'
    },
    {
      name: 'Fatima Khan',
      role: 'Head of Fashion',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Fashion expert with deep knowledge of Pakistani and international trends.'
    },
    {
      name: 'Ali Raza',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Tech innovator building the future of online fashion retail.'
    },
    {
      name: 'Zara Ahmed',
      role: 'Head of Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Customer advocate ensuring every interaction exceeds expectations.'
    }
  ]

  const milestones = [
    { year: '2019', title: 'Baddies Essentials Founded', description: 'Started as a small fashion marketplace in Karachi' },
    { year: '2020', title: 'First 100 Brands', description: 'Reached our first major milestone of brand partnerships' },
    { year: '2021', title: 'Nationwide Expansion', description: 'Extended delivery to all major cities across Pakistan' },
    { year: '2022', title: 'Mobile App Launch', description: 'Launched our mobile app for iOS and Android' },
    { year: '2023', title: 'MegaMall Transformation', description: 'Evolved into Pakistan\'s largest digital fashion mall' },
    { year: '2024', title: '500+ Brands', description: 'Became home to over 500 fashion brands and counting' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-100">
      {/* Hero Section */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Baddies Essentials</h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Pakistan's premier digital fashion mall, connecting you with 500+ brands and endless style possibilities.
            </p>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white max-w-2xl">
                <p className="text-lg leading-relaxed">
                  "We believe fashion should be accessible, authentic, and inspiring. Our mission is to create
                  Pakistan's most trusted fashion destination where every customer finds their perfect style."
                </p>
                <p className="mt-4 font-semibold">- Ahmed Hassan, Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-4 inline-block mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Baddies Essentials began in 2019 with a simple vision: to make fashion accessible to everyone across Pakistan.
                  What started as a small online marketplace has grown into the country's largest digital fashion mall.
                </p>
                <p>
                  We recognized that Pakistani fashion lovers deserved better than scattered shopping experiences.
                  So we created a unified platform where customers can discover, compare, and shop from hundreds of
                  brands all in one place.
                </p>
                <p>
                  Today, we're proud to serve over 500,000 customers and partner with 500+ brands, from emerging
                  local designers to established fashion houses. Our journey is just beginning.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Baddies Essentials?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Curated collection from 500+ brands</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Nationwide delivery across Pakistan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Secure payments & easy returns</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Authentic products guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                pink: 'from-pink-500 to-pink-600',
                purple: 'from-purple-500 to-purple-600',
                green: 'from-green-500 to-green-600'
              }

              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                  <div className={`bg-gradient-to-r ${colorClasses[value.color as keyof typeof colorClasses]} rounded-2xl p-4 inline-block mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl px-4 py-2 font-bold text-lg mr-6 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary-200 to-transparent ml-8 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Baddies Essentials Family</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether you're a fashion lover looking for the latest trends or a brand wanting to reach more customers,
            we'd love to have you on board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              Start Shopping
            </a>
            <a
              href="/seller/register"
              className="bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/30 transition-colors border border-white/30"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
