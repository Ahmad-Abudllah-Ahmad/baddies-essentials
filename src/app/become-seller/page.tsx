'use client'

import { useState } from 'react'
import {
  ShoppingBagIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function BecomeSellerPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    category: '',
    experience: '',
    monthlyVolume: '',
    website: '',
    description: ''
  })

  const benefits = [
    {
      icon: ShoppingBagIcon,
      title: 'Reach Millions of Customers',
      description: 'Access our growing customer base of over 1 million active shoppers across Pakistan.',
      color: 'blue'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into your sales performance, customer behavior, and market trends.',
      color: 'green'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Commission',
      description: 'Enjoy industry-leading commission rates and transparent pricing with no hidden fees.',
      color: 'purple'
    },
    {
      icon: UserGroupIcon,
      title: 'Dedicated Support',
      description: 'Get personalized support from our seller success team to help grow your business.',
      color: 'orange'
    }
  ]

  const features = [
    {
      title: 'Easy Store Setup',
      description: 'Create your branded store in minutes with our intuitive seller dashboard.',
      icon: '🏪'
    },
    {
      title: 'Inventory Management',
      description: 'Manage your products, stock levels, and pricing from one central location.',
      icon: '📦'
    },
    {
      title: 'Order Processing',
      description: 'Streamlined order management with automated notifications and tracking.',
      icon: '📋'
    },
    {
      title: 'Marketing Tools',
      description: 'Promote your products with our built-in marketing and advertising tools.',
      icon: '📢'
    },
    {
      title: 'Payment Processing',
      description: 'Secure and fast payment processing with multiple payment options.',
      icon: '💳'
    },
    {
      title: 'Mobile App',
      description: 'Manage your business on the go with our dedicated seller mobile app.',
      icon: '📱'
    }
  ]

  const requirements = [
    'Valid business registration or trade license',
    'Tax registration (NTN/STRN) where applicable',
    'Bank account for payment processing',
    'Quality product images and descriptions',
    'Commitment to customer service excellence',
    'Compliance with Baddies Essentials policies'
  ]

  const successStories = [
    {
      name: 'Zara Boutique',
      category: 'Women\'s Fashion',
      growth: '300% increase in sales',
      quote: 'Baddies Essentials helped us reach customers nationwide. Our online sales have tripled since joining.',
      rating: 5
    },
    {
      name: 'Urban Threads',
      category: 'Men\'s Casual Wear',
      growth: '250% increase in revenue',
      quote: 'The platform is user-friendly and the support team is amazing. Highly recommended!',
      rating: 5
    },
    {
      name: 'Kids Corner',
      category: 'Children\'s Clothing',
      growth: '400% increase in orders',
      quote: 'We went from local to national in just 6 months. The analytics help us make better decisions.',
      rating: 5
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your interest! Our team will contact you within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Seller</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join Pakistan's fastest-growing fashion marketplace and reach millions of customers nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-2xl font-medium hover:bg-primary-700 transition-colors">
                Start Selling Today
              </button>
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
                Download Seller Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Baddies Essentials?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful sellers who have grown their business with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600',
                orange: 'from-orange-500 to-orange-600'
              }

              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Seller Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage and grow your online fashion business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how other fashion brands have grown their business with Baddies Essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-2">{story.category}</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {story.growth}
                </div>
                <p className="text-gray-600 text-sm italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Seller Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apply to Become a Seller</h2>
              <p className="text-gray-600">
                Fill out the form below and our team will review your application within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select business type</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="wholesaler">Wholesaler</option>
                    <option value="retailer">Retailer</option>
                    <option value="brand">Brand</option>
                    <option value="individual">Individual Seller</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="womens-fashion">Women's Fashion</option>
                    <option value="mens-fashion">Men's Fashion</option>
                    <option value="kids-fashion">Kids Fashion</option>
                    <option value="shoes">Shoes</option>
                    <option value="accessories">Accessories</option>
                    <option value="bags">Bags</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience in Fashion
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="new">New to fashion business</option>
                    <option value="1-2-years">1-2 years</option>
                    <option value="3-5-years">3-5 years</option>
                    <option value="5-plus-years">5+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Sales Volume
                  </label>
                  <select
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select volume</option>
                    <option value="under-100k">Under PKR 100,000</option>
                    <option value="100k-500k">PKR 100,000 - 500,000</option>
                    <option value="500k-1m">PKR 500,000 - 1,000,000</option>
                    <option value="1m-plus">PKR 1,000,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website/Social Media
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://your-website.com or Instagram handle"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your business
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Describe your products, target audience, and what makes your brand unique..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-8 py-3 rounded-2xl font-medium hover:bg-primary-700 transition-colors"
                >
                  Submit Application
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Have questions about becoming a seller? Our team is here to help you every step of the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6">
                <GlobeAltIcon className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Seller Support</h3>
                <p className="text-primary-100 text-sm">sellers@fashionpanda.com</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <ShieldCheckIcon className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Account Manager</h3>
                <p className="text-primary-100 text-sm">+92 21 1234 5678</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <UserGroupIcon className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-primary-100 text-sm">Available 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
