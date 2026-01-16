'use client'

import { useState } from 'react'
import { ArrowPathIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ReturnsPage() {
  const [activeTab, setActiveTab] = useState('policy')

  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Contact us within 7 days of delivery',
      icon: ArrowPathIcon
    },
    {
      step: 2,
      title: 'Package Item',
      description: 'Pack item in original condition with tags',
      icon: ShieldCheckIcon
    },
    {
      step: 3,
      title: 'Schedule Pickup',
      description: 'We arrange free pickup from your location',
      icon: ClockIcon
    },
    {
      step: 4,
      title: 'Get Refund',
      description: 'Refund processed within 5-7 business days',
      icon: CurrencyDollarIcon
    }
  ]

  const returnReasons = [
    { reason: 'Wrong size', eligible: true, timeLimit: '7 days' },
    { reason: 'Defective product', eligible: true, timeLimit: '30 days' },
    { reason: 'Wrong item received', eligible: true, timeLimit: '7 days' },
    { reason: 'Not as described', eligible: true, timeLimit: '7 days' },
    { reason: 'Changed mind', eligible: true, timeLimit: '7 days' },
    { reason: 'Damaged in transit', eligible: true, timeLimit: '7 days' }
  ]

  const nonReturnableItems = [
    'Undergarments and intimate wear',
    'Customized or personalized items',
    'Items worn or washed',
    'Items without original tags',
    'Sale items (unless defective)',
    'Gift cards and vouchers'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Easy returns and exchanges with our hassle-free 7-day return policy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-3xl p-2 shadow-lg">
            {[
              { id: 'policy', label: 'Return Policy' },
              { id: 'process', label: 'Return Process' },
              { id: 'exchange', label: 'Exchanges' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-2xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Return Policy Tab */}
        {activeTab === 'policy' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Return Conditions */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Return Conditions</h3>
                <div className="space-y-4">
                  {returnReasons.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{item.reason}</span>
                      </div>
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {item.timeLimit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Returnable Items */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Non-Returnable Items</h3>
                <div className="space-y-3">
                  {nonReturnableItems.map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-red-50 rounded-2xl">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-2xl">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> All items must be in original condition with tags attached and in original packaging.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-4 mb-3">
                    <ClockIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">7-Day Return</h4>
                  <p className="text-sm opacity-90">Return items within 7 days of delivery</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-4 mb-3">
                    <ArrowPathIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">Free Pickup</h4>
                  <p className="text-sm opacity-90">We collect returns from your doorstep</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-4 mb-3">
                    <CurrencyDollarIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">Quick Refunds</h4>
                  <p className="text-sm opacity-90">Refunds processed within 5-7 days</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Return Process Tab */}
        {activeTab === 'process' && (
          <div className="space-y-8">
            {/* Step by Step Process */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Return Your Order</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {returnSteps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Initiate Return</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <h4 className="font-semibold text-blue-900 mb-2">Call Us</h4>
                    <p className="text-blue-700">+92 21 111 123 456</p>
                    <p className="text-sm text-blue-600">Mon-Fri: 9 AM - 8 PM</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-2xl">
                    <h4 className="font-semibold text-green-900 mb-2">Email Us</h4>
                    <p className="text-green-700">returns@fashionpanda.com</p>
                    <p className="text-sm text-green-600">Response within 24 hours</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-2xl">
                    <h4 className="font-semibold text-purple-900 mb-2">WhatsApp</h4>
                    <p className="text-purple-700">+92 300 123 4567</p>
                    <p className="text-sm text-purple-600">Quick support available</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-2xl">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Order number</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-2xl">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Item name and size</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-2xl">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Reason for return</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-2xl">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Photos (if damaged/defective)</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-2xl">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Preferred refund method</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exchange Tab */}
        {activeTab === 'exchange' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Exchange Policy */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Exchange Policy</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-2xl">
                    <h4 className="font-semibold text-green-900 mb-2">Size Exchange</h4>
                    <p className="text-green-700 text-sm">Free size exchange within 7 days. Same product, different size only.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <h4 className="font-semibold text-blue-900 mb-2">Color Exchange</h4>
                    <p className="text-blue-700 text-sm">Exchange for different color if available. Subject to price difference.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-2xl">
                    <h4 className="font-semibold text-purple-900 mb-2">Product Exchange</h4>
                    <p className="text-purple-700 text-sm">Exchange for different product of equal or higher value.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-2xl">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Exchanges are subject to stock availability and same terms as returns.
                  </p>
                </div>
              </div>

              {/* Exchange Process */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Exchange Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact Support</h4>
                      <p className="text-gray-600 text-sm">Inform us about the exchange within 7 days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Choose Replacement</h4>
                      <p className="text-gray-600 text-sm">Select size, color, or different product</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Simultaneous Exchange</h4>
                      <p className="text-gray-600 text-sm">We deliver new item and collect the old one</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Payment Adjustment</h4>
                      <p className="text-gray-600 text-sm">Pay difference if applicable, or get refund</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchange Benefits */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Exchange?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-4 mb-3">
                    <ArrowPathIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">Faster Process</h4>
                  <p className="text-sm opacity-90">Get your replacement faster than return + new order</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-4 mb-3">
                    <CurrencyDollarIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">No Extra Shipping</h4>
                  <p className="text-sm opacity-90">Free exchange delivery for size changes</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-4 mb-3">
                    <ShieldCheckIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">Guaranteed Stock</h4>
                  <p className="text-sm opacity-90">We reserve your preferred item during exchange</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
