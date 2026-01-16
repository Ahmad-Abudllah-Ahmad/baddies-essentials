'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  TruckIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

interface OrderItem {
  id: string
  name: string
  image: string
  price: number
  quantity: number
  brand: string
  canReview: boolean
  hasReviewed: boolean
}

interface TrackingEvent {
  status: string
  description: string
  date: string
  time: string
  location?: string
  completed: boolean
}

interface Order {
  id: string
  date: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  total: number
  items: OrderItem[]
  shippingAddress: {
    name: string
    address: string
    city: string
    postalCode: string
    phone: string
  }
  paymentMethod: string
  estimatedDelivery?: string
  trackingNumber?: string
  tracking: TrackingEvent[]
}

// Mock order data
const getOrderById = (id: string): Order | null => {
  const orders: { [key: string]: Order } = {
    'ORD-001': {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 8999,
      items: [
        {
          id: '1',
          name: 'Elegant Summer Dress',
          image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop&auto=format',
          price: 4999,
          quantity: 1,
          brand: 'Khaadi',
          canReview: true,
          hasReviewed: false
        },
        {
          id: '2',
          name: 'Traditional Lawn Suit',
          image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=150&h=150&fit=crop&auto=format',
          price: 3999,
          quantity: 1,
          brand: 'Khaadi',
          canReview: true,
          hasReviewed: true
        }
      ],
      shippingAddress: {
        name: 'John Doe',
        address: '123 Main Street, Block A',
        city: 'Karachi',
        postalCode: '75500',
        phone: '+92 300 1234567'
      },
      paymentMethod: 'Cash on Delivery',
      trackingNumber: 'TRK-001-2024',
      tracking: [
        {
          status: 'Order Placed',
          description: 'Your order has been placed successfully',
          date: '2024-01-15',
          time: '10:30 AM',
          completed: true
        },
        {
          status: 'Order Confirmed',
          description: 'Order confirmed and being prepared',
          date: '2024-01-15',
          time: '11:45 AM',
          completed: true
        },
        {
          status: 'Shipped',
          description: 'Package shipped from warehouse',
          date: '2024-01-16',
          time: '2:15 PM',
          location: 'Karachi Warehouse',
          completed: true
        },
        {
          status: 'Out for Delivery',
          description: 'Package is out for delivery',
          date: '2024-01-17',
          time: '9:00 AM',
          location: 'Karachi Hub',
          completed: true
        },
        {
          status: 'Delivered',
          description: 'Package delivered successfully',
          date: '2024-01-17',
          time: '3:30 PM',
          location: 'Delivered to customer',
          completed: true
        }
      ]
    },
    'ORD-002': {
      id: 'ORD-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 12999,
      items: [
        {
          id: '3',
          name: 'Eyeshadow Palette',
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&auto=format',
          price: 8999,
          quantity: 1,
          brand: 'Huda Beauty',
          canReview: false,
          hasReviewed: false
        }
      ],
      shippingAddress: {
        name: 'Jane Smith',
        address: '456 Oak Avenue, Gulshan',
        city: 'Karachi',
        postalCode: '75300',
        phone: '+92 301 9876543'
      },
      paymentMethod: 'Credit Card',
      estimatedDelivery: '2024-01-25',
      trackingNumber: 'TRK-002-2024',
      tracking: [
        {
          status: 'Order Placed',
          description: 'Your order has been placed successfully',
          date: '2024-01-20',
          time: '2:15 PM',
          completed: true
        },
        {
          status: 'Order Confirmed',
          description: 'Order confirmed and being prepared',
          date: '2024-01-20',
          time: '3:30 PM',
          completed: true
        },
        {
          status: 'Shipped',
          description: 'Package shipped from warehouse',
          date: '2024-01-21',
          time: '11:00 AM',
          location: 'Lahore Warehouse',
          completed: true
        },
        {
          status: 'In Transit',
          description: 'Package is in transit to your city',
          date: '2024-01-22',
          time: '8:30 AM',
          location: 'En route to Karachi',
          completed: false
        },
        {
          status: 'Out for Delivery',
          description: 'Package will be out for delivery soon',
          date: '2024-01-25',
          time: 'Expected',
          location: 'Karachi Hub',
          completed: false
        }
      ]
    }
  }
  
  return orders[id] || null
}

export default function OrderDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('details')
  
  const order = getOrderById(params.id as string)

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-6">The order you're looking for doesn't exist.</p>
          <Link
            href="/profile"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Orders
          </Link>
        </div>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100'
      case 'shipped': return 'text-blue-600 bg-blue-100'
      case 'processing': return 'text-yellow-600 bg-yellow-100'
      case 'pending': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircleIcon className="h-5 w-5" />
      case 'shipped': return <TruckIcon className="h-5 w-5" />
      default: return <ClockIcon className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Orders
            </button>
            
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">Order {order.id}</h1>
              <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Order Status */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 capitalize">{order.status}</h2>
                {order.estimatedDelivery && order.status !== 'delivered' && (
                  <p className="text-gray-600">Expected delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
                )}
              </div>
            </div>
            {order.trackingNumber && (
              <div className="text-right">
                <p className="text-sm text-gray-600">Tracking Number</p>
                <p className="font-mono text-lg font-semibold">{order.trackingNumber}</p>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['details', 'tracking'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'details' && (
              <div className="space-y-8">
                {/* Order Items */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-gray-600">{item.brand}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">PKR {item.price.toLocaleString()}</p>
                          {item.canReview && !item.hasReviewed && order.status === 'delivered' && (
                            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1">
                              Write Review
                            </button>
                          )}
                          {item.hasReviewed && (
                            <div className="flex items-center mt-1">
                              <StarSolidIcon className="h-4 w-4 text-yellow-400" />
                              <span className="text-sm text-gray-600 ml-1">Reviewed</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="font-semibold text-gray-900">{order.shippingAddress.name}</p>
                      <p className="text-gray-600">{order.shippingAddress.address}</p>
                      <p className="text-gray-600">{order.shippingAddress.city} {order.shippingAddress.postalCode}</p>
                      <p className="text-gray-600">{order.shippingAddress.phone}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment & Total</h3>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Payment Method:</span>
                        <span className="font-semibold">{order.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span>PKR {order.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tracking' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Tracking</h3>
                <div className="space-y-6">
                  {order.tracking.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        event.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {event.completed ? (
                          <CheckCircleIcon className="h-5 w-5" />
                        ) : (
                          <ClockIcon className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${event.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {event.status}
                          </h4>
                          <div className="text-sm text-gray-500">
                            {event.date} at {event.time}
                          </div>
                        </div>
                        <p className={`text-sm ${event.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                          {event.description}
                        </p>
                        {event.location && (
                          <div className="flex items-center mt-1">
                            <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">{event.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
