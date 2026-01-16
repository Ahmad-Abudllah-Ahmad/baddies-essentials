'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, TruckIcon, CheckCircleIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Demo tracking data
  const demoOrders = {
    'FP123456': {
      orderNumber: 'FP123456',
      status: 'delivered',
      estimatedDelivery: '2024-08-20',
      actualDelivery: '2024-08-20',
      items: [
        { name: 'Cotton Kurta Set', quantity: 1, size: 'M' },
        { name: 'Embroidered Dupatta', quantity: 1, size: 'One Size' }
      ],
      timeline: [
        { status: 'Order Placed', date: '2024-08-17', time: '10:30 AM', completed: true },
        { status: 'Payment Confirmed', date: '2024-08-17', time: '10:35 AM', completed: true },
        { status: 'Order Processing', date: '2024-08-17', time: '2:00 PM', completed: true },
        { status: 'Shipped', date: '2024-08-18', time: '9:00 AM', completed: true },
        { status: 'Out for Delivery', date: '2024-08-20', time: '8:00 AM', completed: true },
        { status: 'Delivered', date: '2024-08-20', time: '3:30 PM', completed: true }
      ],
      shippingAddress: 'House 123, Block A, Gulshan-e-Iqbal, Karachi',
      courier: 'TCS Express',
      trackingNumber: 'TCS789012345'
    },
    'FP789012': {
      orderNumber: 'FP789012',
      status: 'shipped',
      estimatedDelivery: '2024-08-22',
      actualDelivery: null,
      items: [
        { name: 'Casual T-Shirt', quantity: 2, size: 'L' },
        { name: 'Denim Jeans', quantity: 1, size: '32' }
      ],
      timeline: [
        { status: 'Order Placed', date: '2024-08-19', time: '2:15 PM', completed: true },
        { status: 'Payment Confirmed', date: '2024-08-19', time: '2:20 PM', completed: true },
        { status: 'Order Processing', date: '2024-08-19', time: '5:00 PM', completed: true },
        { status: 'Shipped', date: '2024-08-21', time: '11:00 AM', completed: true },
        { status: 'Out for Delivery', date: '2024-08-22', time: 'Expected 9:00 AM', completed: false },
        { status: 'Delivered', date: '2024-08-22', time: 'Expected 5:00 PM', completed: false }
      ],
      shippingAddress: 'Flat 45, DHA Phase 2, Lahore',
      courier: 'Leopards Courier',
      trackingNumber: 'LEO456789123'
    }
  }

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const order = demoOrders[orderNumber as keyof typeof demoOrders]
      if (order) {
        setTrackingResult(order)
      } else {
        setTrackingResult({ error: 'Order not found. Please check your order number and email.' })
      }
      setIsLoading(false)
    }, 1500)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100'
      case 'shipped': return 'text-blue-600 bg-blue-100'
      case 'processing': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return CheckCircleIcon
      case 'shipped': return TruckIcon
      default: return ClockIcon
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Order</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your order details to get real-time updates on your delivery status.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tracking Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <form onSubmit={handleTrackOrder} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g., FP123456"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium py-4 px-6 rounded-2xl hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Tracking Order...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Track Order
                </div>
              )}
            </button>
          </form>

          {/* Demo Orders */}
          <div className="mt-8 p-4 bg-blue-50 rounded-2xl">
            <h4 className="font-semibold text-blue-900 mb-2">Try Demo Orders:</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setOrderNumber('FP123456')}
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                FP123456 (Delivered)
              </button>
              <span className="text-blue-400">•</span>
              <button
                onClick={() => setOrderNumber('FP789012')}
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                FP789012 (Shipped)
              </button>
            </div>
          </div>
        </div>

        {/* Tracking Results */}
        {trackingResult && (
          <div className="space-y-8">
            {trackingResult.error ? (
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                <div className="text-red-500 mb-4">
                  <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Not Found</h3>
                <p className="text-gray-600">{trackingResult.error}</p>
              </div>
            ) : (
              <>
                {/* Order Status */}
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Order #{trackingResult.orderNumber}</h3>
                      <p className="text-gray-600">Courier: {trackingResult.courier}</p>
                      <p className="text-gray-600">Tracking: {trackingResult.trackingNumber}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-2xl font-medium ${getStatusColor(trackingResult.status)}`}>
                      {trackingResult.status.charAt(0).toUpperCase() + trackingResult.status.slice(1)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Delivery Address</h4>
                      <p className="text-gray-600">{trackingResult.shippingAddress}</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {trackingResult.status === 'delivered' ? 'Delivered On' : 'Expected Delivery'}
                      </h4>
                      <p className="text-gray-600">
                        {trackingResult.actualDelivery || trackingResult.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Order Items</h3>
                  <div className="space-y-4">
                    {trackingResult.items.map((item: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-gray-600">Size: {item.size}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Tracking Timeline</h3>
                  <div className="space-y-6">
                    {trackingResult.timeline.map((event: any, index: number) => {
                      const StatusIcon = getStatusIcon(event.status.toLowerCase())
                      return (
                        <div key={index} className="flex items-start">
                          <div className={`rounded-full p-2 mr-4 ${
                            event.completed ? 'bg-green-100' : 'bg-gray-100'
                          }`}>
                            <StatusIcon className={`h-5 w-5 ${
                              event.completed ? 'text-green-600' : 'text-gray-400'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-medium ${
                                event.completed ? 'text-gray-900' : 'text-gray-500'
                              }`}>
                                {event.status}
                              </h4>
                              <div className="text-right">
                                <p className={`text-sm ${
                                  event.completed ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                  {event.date}
                                </p>
                                <p className={`text-sm ${
                                  event.completed ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                  {event.time}
                                </p>
                              </div>
                            </div>
                            {index < trackingResult.timeline.length - 1 && (
                              <div className={`w-0.5 h-6 ml-2.5 mt-2 ${
                                event.completed ? 'bg-green-200' : 'bg-gray-200'
                              }`}></div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Contact Support */}
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-8 text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Need Help with Your Order?</h3>
                    <p className="text-teal-100 mb-6">
                      Our customer support team is here to assist you with any questions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <a
                        href="/contact"
                        className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
                      >
                        <h4 className="font-semibold mb-2">Contact Support</h4>
                        <p className="text-sm opacity-90">Get help with your order</p>
                      </a>
                      <a
                        href="tel:+922111123456"
                        className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
                      >
                        <h4 className="font-semibold mb-2">Call Us</h4>
                        <p className="text-sm opacity-90">+92 21 111 123 456</p>
                      </a>
                      <a
                        href="https://wa.me/923001234567"
                        className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
                      >
                        <h4 className="font-semibold mb-2">WhatsApp</h4>
                        <p className="text-sm opacity-90">Quick support chat</p>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
