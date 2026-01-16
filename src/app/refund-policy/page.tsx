'use client'

import { CurrencyDollarIcon, ClockIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

export default function RefundPolicyPage() {
  const refundReasons = [
    {
      title: 'Defective Products',
      icon: ExclamationCircleIcon,
      color: 'red',
      description: 'Items received with manufacturing defects or damage',
      timeframe: '30 days',
      process: 'Full refund including shipping costs'
    },
    {
      title: 'Wrong Item Received',
      icon: CheckCircleIcon,
      color: 'blue',
      description: 'When you receive a different item than what you ordered',
      timeframe: '30 days',
      process: 'Full refund or free exchange'
    },
    {
      title: 'Size/Fit Issues',
      icon: ClockIcon,
      color: 'green',
      description: 'Items that don\'t fit as expected (unworn with tags)',
      timeframe: '14 days',
      process: 'Refund minus return shipping'
    },
    {
      title: 'Change of Mind',
      icon: CurrencyDollarIcon,
      color: 'purple',
      description: 'Standard returns for unwanted items (unworn with tags)',
      timeframe: '7 days',
      process: 'Refund minus return shipping'
    }
  ]

  const refundProcess = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Contact our customer service or use the returns portal to start your return request.',
      icon: '📞'
    },
    {
      step: 2,
      title: 'Get Return Label',
      description: 'We\'ll provide a prepaid return label for eligible returns or shipping instructions.',
      icon: '📋'
    },
    {
      step: 3,
      title: 'Package & Ship',
      description: 'Pack the item securely with all original packaging and ship using our return label.',
      icon: '📦'
    },
    {
      step: 4,
      title: 'Quality Check',
      description: 'We inspect the returned item to ensure it meets our return conditions.',
      icon: '🔍'
    },
    {
      step: 5,
      title: 'Process Refund',
      description: 'Once approved, your refund is processed within 3-5 business days.',
      icon: '💰'
    }
  ]

  const nonRefundableItems = [
    'Underwear and intimate apparel',
    'Swimwear and activewear',
    'Personalized or customized items',
    'Items worn, washed, or damaged by customer',
    'Items without original tags or packaging',
    'Sale items marked as final sale',
    'Gift cards and digital products'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              We want you to be completely satisfied with your purchase. Learn about our hassle-free refund process.
            </p>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-2xl inline-block">
              <p className="text-sm font-medium">Updated: August 21, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <CurrencyDollarIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Our Refund Guarantee</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-6">
            At Baddies Essentials, your satisfaction is our priority. We offer flexible refund options to ensure
            you're happy with every purchase. Our refund policy is designed to be fair, transparent, and customer-friendly.
          </p>
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="font-semibold text-green-900 mb-2">Quick Overview</h3>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• 30-day refund window for defective items</li>
              <li>• 14-day refund window for size/fit issues</li>
              <li>• 7-day refund window for change of mind</li>
              <li>• Free returns for our mistakes</li>
              <li>• Fast refund processing (3-5 business days)</li>
            </ul>
          </div>
        </div>

        {/* Refund Reasons */}
        <div className="space-y-8 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Refund Eligibility</h2>
          {refundReasons.map((reason, index) => {
            const IconComponent = reason.icon
            const colorClasses = {
              red: 'from-red-500 to-red-600',
              blue: 'from-blue-500 to-blue-600',
              green: 'from-green-500 to-green-600',
              purple: 'from-purple-500 to-purple-600'
            }

            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${colorClasses[reason.color as keyof typeof colorClasses]} px-6 py-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IconComponent className="h-6 w-6 text-white mr-3" />
                      <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                    </div>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {reason.timeframe}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-3">{reason.description}</p>
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Refund Process:</h4>
                    <p className="text-gray-600 text-sm">{reason.process}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Refund Process */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Refunds Work</h3>
          <div className="space-y-6">
            {refundProcess.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full mr-3">
                      Step {step.step}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Refund Methods */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Refund Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <h4 className="font-semibold text-blue-900 mb-2">Original Payment Method</h4>
                <p className="text-blue-700 text-sm">
                  Refunds are typically processed back to your original payment method.
                  This includes credit cards, debit cards, and mobile wallets.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-2xl">
                <h4 className="font-semibold text-green-900 mb-2">Cash on Delivery</h4>
                <p className="text-green-700 text-sm">
                  For COD orders, refunds are processed via bank transfer or mobile wallet
                  to the account details you provide.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-2xl">
                <h4 className="font-semibold text-purple-900 mb-2">Store Credit</h4>
                <p className="text-purple-700 text-sm">
                  You can choose to receive store credit instead of a refund,
                  which never expires and can be used for future purchases.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-2xl">
                <h4 className="font-semibold text-orange-900 mb-2">Processing Time</h4>
                <p className="text-orange-700 text-sm">
                  Refunds are processed within 3-5 business days after we receive
                  and approve your returned item.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Refundable Items */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Items Not Eligible for Refund</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For hygiene and safety reasons, certain items cannot be returned or refunded.
            Please review this list before making your purchase:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nonRefundableItems.map((item, index) => (
              <div key={index} className="flex items-center p-3 bg-red-50 rounded-2xl">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-red-800 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Circumstances */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Special Circumstances</h3>
          <div className="space-y-6">
            <div className="p-6 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-900 mb-2">Damaged in Transit</h4>
              <p className="text-yellow-800 text-sm">
                If your item arrives damaged due to shipping, we'll provide a full refund including
                shipping costs. Please report damage within 48 hours of delivery with photos.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2">Late Delivery</h4>
              <p className="text-blue-800 text-sm">
                If your order arrives significantly later than the estimated delivery date due to our error,
                you may be eligible for a partial refund or shipping cost refund.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2">Bulk Orders</h4>
              <p className="text-green-800 text-sm">
                Special refund terms may apply to bulk orders over PKR 50,000.
                Please contact our sales team for specific terms and conditions.
              </p>
            </div>
          </div>
        </div>

        {/* International Orders */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">International Orders</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            For international orders, additional terms may apply due to customs and shipping regulations.
            Customers are responsible for any customs duties or taxes imposed by their country.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Return shipping costs for international orders are typically borne by the customer unless
            the return is due to our error (wrong item, defective product, etc.).
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with a Refund?</h3>
            <p className="text-primary-100 mb-6">
              Our customer service team is here to make your refund process as smooth as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="mailto:refunds@fashionpanda.com"
                className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
              >
                <h4 className="font-semibold mb-2">Refunds Team</h4>
                <p className="text-sm opacity-90">refunds@fashionpanda.com</p>
              </a>
              <a
                href="/contact"
                className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
              >
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-sm opacity-90">Get instant help</p>
              </a>
              <a
                href="/track-order"
                className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
              >
                <h4 className="font-semibold mb-2">Return Portal</h4>
                <p className="text-sm opacity-90">Track your return</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
