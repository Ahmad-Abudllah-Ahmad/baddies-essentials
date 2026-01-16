'use client'

import { TruckIcon, ClockIcon, MapPinIcon, CurrencyDollarIcon, ShieldCheckIcon, GiftIcon } from '@heroicons/react/24/outline'

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: 'Standard Delivery',
      time: '3-5 Business Days',
      cost: 'PKR 150',
      description: 'Reliable delivery to your doorstep',
      icon: TruckIcon,
      color: 'blue'
    },
    {
      name: 'Express Delivery',
      time: '1-2 Business Days',
      cost: 'PKR 300',
      description: 'Fast delivery for urgent orders',
      icon: ClockIcon,
      color: 'green'
    },
    {
      name: 'Same Day Delivery',
      time: 'Within 24 Hours',
      cost: 'PKR 500',
      description: 'Available in major cities only',
      icon: MapPinIcon,
      color: 'purple'
    },
    {
      name: 'Free Delivery',
      time: '5-7 Business Days',
      cost: 'Free on orders above PKR 2,999',
      description: 'No shipping charges on qualifying orders',
      icon: GiftIcon,
      color: 'pink'
    }
  ]

  const cities = [
    { name: 'Karachi', standard: '2-3 days', express: '1 day', sameDay: true },
    { name: 'Lahore', standard: '3-4 days', express: '1-2 days', sameDay: true },
    { name: 'Islamabad', standard: '3-4 days', express: '1-2 days', sameDay: true },
    { name: 'Rawalpindi', standard: '3-4 days', express: '1-2 days', sameDay: false },
    { name: 'Faisalabad', standard: '4-5 days', express: '2-3 days', sameDay: false },
    { name: 'Multan', standard: '4-5 days', express: '2-3 days', sameDay: false },
    { name: 'Peshawar', standard: '5-6 days', express: '3-4 days', sameDay: false },
    { name: 'Quetta', standard: '6-7 days', express: '4-5 days', sameDay: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, reliable delivery across Pakistan with multiple shipping options to suit your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Shipping Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingOptions.map((option, index) => {
              const IconComponent = option.icon
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600',
                pink: 'from-pink-500 to-pink-600'
              }
              
              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${colorClasses[option.color as keyof typeof colorClasses]} rounded-2xl p-4 mb-4 inline-block`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                  <p className="text-2xl font-bold text-primary-600 mb-2">{option.time}</p>
                  <p className="text-lg font-semibold text-gray-700 mb-3">{option.cost}</p>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Delivery Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Delivery Coverage</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 font-semibold text-gray-900">City</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Standard</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Express</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Same Day</th>
                  </tr>
                </thead>
                <tbody>
                  {cities.map((city, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 font-medium text-gray-900">{city.name}</td>
                      <td className="py-3 text-gray-600">{city.standard}</td>
                      <td className="py-3 text-gray-600">{city.express}</td>
                      <td className="py-3">
                        {city.sameDay ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Available
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                            Not Available
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-8">
            {/* Shipping Policy */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Shipping Policy</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Orders are processed within 24 hours on business days
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Free shipping on orders above PKR 2,999
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Cash on Delivery (COD) available nationwide
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Tracking information provided for all orders
                </li>
              </ul>
            </div>

            {/* Special Services */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Special Services</h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-semibold mb-2">Gift Wrapping</h4>
                  <p className="text-sm opacity-90">Beautiful gift wrapping available for PKR 100</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-semibold mb-2">Scheduled Delivery</h4>
                  <p className="text-sm opacity-90">Choose your preferred delivery date and time</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-semibold mb-2">Signature Required</h4>
                  <p className="text-sm opacity-90">Secure delivery with signature confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shipping FAQ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">How can I track my order?</h4>
                <p className="text-gray-600 text-sm">You'll receive a tracking number via SMS and email once your order is shipped. Use our track order page for real-time updates.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">What if I'm not home during delivery?</h4>
                <p className="text-gray-600 text-sm">Our delivery partner will attempt delivery 3 times. You can also reschedule delivery or arrange pickup from the nearest hub.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Do you deliver on weekends?</h4>
                <p className="text-gray-600 text-sm">Yes, we deliver on Saturdays. Sunday delivery is available for express and same-day orders in major cities.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Are there any hidden charges?</h4>
                <p className="text-gray-600 text-sm">No hidden charges. The shipping cost shown at checkout is final. COD orders may have a small handling fee.</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Can I change my delivery address?</h4>
                <p className="text-gray-600 text-sm">Yes, you can change the delivery address before the order is shipped. Contact customer support immediately after placing your order.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">What about international shipping?</h4>
                <p className="text-gray-600 text-sm">Currently, we only ship within Pakistan. International shipping will be available soon for select countries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
