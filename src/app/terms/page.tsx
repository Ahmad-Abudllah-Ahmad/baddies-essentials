'use client'

import { DocumentTextIcon, ScaleIcon, ExclamationTriangleIcon, CreditCardIcon } from '@heroicons/react/24/outline'

export default function TermsOfServicePage() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: DocumentTextIcon,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using Baddies Essentials, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms.'
        }
      ]
    },
    {
      title: 'User Accounts and Responsibilities',
      icon: ScaleIcon,
      content: [
        {
          subtitle: 'Account Registration',
          text: 'You must provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.'
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'You may not use our service for any unlawful purpose, to transmit harmful content, attempt to gain unauthorized access, or engage in any activity that interferes with or disrupts our services.'
        },
        {
          subtitle: 'Content Guidelines',
          text: 'Any content you submit must be appropriate, lawful, and not infringe on third-party rights. We reserve the right to remove content that violates these guidelines.'
        }
      ]
    },
    {
      title: 'Orders and Payments',
      icon: CreditCardIcon,
      content: [
        {
          subtitle: 'Order Processing',
          text: 'All orders are subject to acceptance and availability. We reserve the right to refuse or cancel orders at our discretion. Prices are subject to change without notice.'
        },
        {
          subtitle: 'Payment Terms',
          text: 'Payment is due at the time of order placement. We accept various payment methods including cash on delivery, mobile wallets, and credit/debit cards. All transactions are processed securely.'
        },
        {
          subtitle: 'Refunds and Returns',
          text: 'Returns and refunds are governed by our separate Return Policy. Generally, items can be returned within 7 days of delivery in original condition with tags attached.'
        }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: ExclamationTriangleIcon,
      content: [
        {
          subtitle: 'Our Content',
          text: 'All content on Baddies Essentials, including text, graphics, logos, images, and software, is owned by us or our licensors and is protected by copyright and other intellectual property laws.'
        },
        {
          subtitle: 'User Content',
          text: 'By submitting content to our platform, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display such content in connection with our services.'
        },
        {
          subtitle: 'Trademark Usage',
          text: 'Baddies Essentials and related marks are our trademarks. You may not use our trademarks without our prior written consent.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Please read these terms carefully before using our services. By using Baddies Essentials, you agree to these terms.
            </p>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-2xl inline-block">
              <p className="text-sm font-medium">Effective Date: August 21, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <ScaleIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Welcome to Baddies Essentials</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            These Terms of Service ("Terms") govern your use of the Baddies Essentials website, mobile application, and related services.
            By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                  <div className="flex items-center">
                    <IconComponent className="h-6 w-6 text-white mr-3" />
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Limitation of Liability */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h3>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-900 mb-2">Service Availability</h4>
              <p className="text-yellow-800 text-sm">
                We strive to maintain service availability but cannot guarantee uninterrupted access.
                We are not liable for any damages resulting from service interruptions.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-2xl border-l-4 border-red-400">
              <h4 className="font-semibold text-red-900 mb-2">Product Information</h4>
              <p className="text-red-800 text-sm">
                While we strive for accuracy, product descriptions, prices, and availability are subject to change.
                We are not liable for any errors or omissions in product information.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2">Third-Party Content</h4>
              <p className="text-blue-800 text-sm">
                Our platform may contain links to third-party websites or content. We are not responsible
                for the content, privacy policies, or practices of third-party sites.
              </p>
            </div>
          </div>
        </div>

        {/* Shipping and Delivery */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Shipping and Delivery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-2xl">
                <h4 className="font-semibold text-green-900 mb-2">Delivery Timeframes</h4>
                <p className="text-green-700 text-sm">
                  Delivery times are estimates and may vary based on location and product availability.
                  We are not liable for delays beyond our control.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-2xl">
                <h4 className="font-semibold text-purple-900 mb-2">Shipping Costs</h4>
                <p className="text-purple-700 text-sm">
                  Shipping costs are calculated at checkout and may vary based on location and order value.
                  Free shipping thresholds are subject to change.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-2xl">
                <h4 className="font-semibold text-orange-900 mb-2">Risk of Loss</h4>
                <p className="text-orange-700 text-sm">
                  Risk of loss and title for products pass to you upon delivery to the shipping address
                  you provide during checkout.
                </p>
              </div>
              <div className="p-4 bg-teal-50 rounded-2xl">
                <h4 className="font-semibold text-teal-900 mb-2">Damaged Items</h4>
                <p className="text-teal-700 text-sm">
                  If you receive damaged items, please contact us within 48 hours of delivery
                  with photos for prompt resolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Disputes</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms are governed by the laws of Pakistan. Any disputes arising from these Terms or your use
            of our services will be resolved through binding arbitration in Karachi, Pakistan, except where
            prohibited by law.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Before initiating any legal proceedings, you agree to first attempt to resolve disputes through
            our customer service team. Most issues can be resolved quickly through direct communication.
          </p>
        </div>

        {/* Severability */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Severability and Entire Agreement</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue
            in full force and effect. These Terms, together with our Privacy Policy and any other policies
            referenced herein, constitute the entire agreement between you and Baddies Essentials.
          </p>
          <p className="text-gray-700 leading-relaxed">
            No waiver of any term or condition will be deemed a further or continuing waiver of such term or
            any other term or condition.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
            <p className="text-primary-100 mb-6">
              If you have any questions about these Terms of Service, please don't hesitate to contact us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="mailto:legal@fashionpanda.com"
                className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
              >
                <h4 className="font-semibold mb-2">Legal Team</h4>
                <p className="text-sm opacity-90">legal@fashionpanda.com</p>
              </a>
              <a
                href="/contact"
                className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
              >
                <h4 className="font-semibold mb-2">Customer Support</h4>
                <p className="text-sm opacity-90">General inquiries</p>
              </a>
              <div className="bg-white/20 rounded-2xl p-4">
                <h4 className="font-semibold mb-2">Legal Address</h4>
                <p className="text-sm opacity-90">Baddies Essentials Legal Dept.<br />Block 5, Clifton, Karachi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
