'use client'

import { CogIcon, EyeIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: CogIcon,
      color: 'blue',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication and login status',
        'Shopping cart contents',
        'Security and fraud prevention',
        'Website functionality and navigation'
      ]
    },
    {
      title: 'Analytics Cookies',
      icon: ChartBarIcon,
      color: 'green',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Page views and traffic sources',
        'User behavior and navigation patterns',
        'Popular products and categories',
        'Website performance metrics'
      ]
    },
    {
      title: 'Marketing Cookies',
      icon: EyeIcon,
      color: 'purple',
      description: 'These cookies are used to deliver personalized advertisements and marketing content.',
      examples: [
        'Personalized product recommendations',
        'Targeted advertising campaigns',
        'Social media integration',
        'Email marketing preferences'
      ]
    },
    {
      title: 'Preference Cookies',
      icon: ShieldCheckIcon,
      color: 'orange',
      description: 'These cookies remember your choices and preferences to enhance your experience.',
      examples: [
        'Language and region settings',
        'Display preferences and themes',
        'Recently viewed products',
        'Saved filters and search preferences'
      ]
    }
  ]

  const thirdPartyServices = [
    { name: 'Google Analytics', purpose: 'Website analytics and performance tracking', type: 'Analytics' },
    { name: 'Facebook Pixel', purpose: 'Social media advertising and tracking', type: 'Marketing' },
    { name: 'Google Ads', purpose: 'Online advertising and remarketing', type: 'Marketing' },
    { name: 'Hotjar', purpose: 'User behavior analysis and heatmaps', type: 'Analytics' },
    { name: 'Intercom', purpose: 'Customer support and live chat', type: 'Functional' },
    { name: 'Stripe', purpose: 'Payment processing and fraud prevention', type: 'Essential' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Learn about how we use cookies and similar technologies to improve your shopping experience.
            </p>
            <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-2xl inline-block">
              <p className="text-sm font-medium">Last updated: August 21, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <CogIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-6">
            Cookies are small text files that are stored on your device when you visit our website. They help us
            provide you with a better, faster, and more personalized shopping experience.
          </p>
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Why We Use Cookies</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Remember your login status and preferences</li>
              <li>• Keep items in your shopping cart between visits</li>
              <li>• Analyze website traffic and user behavior</li>
              <li>• Provide personalized product recommendations</li>
              <li>• Deliver relevant advertisements and offers</li>
            </ul>
          </div>
        </div>

        {/* Cookie Types */}
        <div className="space-y-8 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Types of Cookies We Use</h2>
          {cookieTypes.map((type, index) => {
            const IconComponent = type.icon
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              green: 'from-green-500 to-green-600',
              purple: 'from-purple-500 to-purple-600',
              orange: 'from-orange-500 to-orange-600'
            }

            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${colorClasses[type.color as keyof typeof colorClasses]} px-6 py-4`}>
                  <div className="flex items-center">
                    <IconComponent className="h-6 w-6 text-white mr-3" />
                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{type.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We work with trusted third-party services that may also set cookies on your device.
            These services help us provide better functionality and analyze our website performance.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Service</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                </tr>
              </thead>
              <tbody>
                {thirdPartyServices.map((service, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-900">{service.name}</td>
                    <td className="py-3 px-4 text-gray-600">{service.purpose}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${service.type === 'Essential' ? 'bg-blue-100 text-blue-800' :
                          service.type === 'Analytics' ? 'bg-green-100 text-green-800' :
                            service.type === 'Marketing' ? 'bg-purple-100 text-purple-800' :
                              'bg-orange-100 text-orange-800'
                        }`}>
                        {service.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cookie Management */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <h4 className="font-semibold text-blue-900 mb-2">Browser Settings</h4>
                <p className="text-blue-700 text-sm">
                  You can control cookies through your browser settings. Most browsers allow you to
                  block or delete cookies, but this may affect website functionality.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-2xl">
                <h4 className="font-semibold text-green-900 mb-2">Cookie Preferences</h4>
                <p className="text-green-700 text-sm">
                  Use our cookie preference center to choose which types of cookies you want to allow.
                  Essential cookies cannot be disabled.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-2xl">
                <h4 className="font-semibold text-purple-900 mb-2">Opt-Out Tools</h4>
                <p className="text-purple-700 text-sm">
                  You can opt out of targeted advertising through industry opt-out tools like
                  the Digital Advertising Alliance's opt-out page.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-2xl">
                <h4 className="font-semibold text-orange-900 mb-2">Mobile Devices</h4>
                <p className="text-orange-700 text-sm">
                  On mobile devices, you can control tracking through your device's privacy settings
                  and limit ad tracking options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Consent */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Consent</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            By continuing to use our website, you consent to our use of cookies as described in this policy.
            You can withdraw your consent at any time by adjusting your cookie preferences or browser settings.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We will ask for your consent before setting non-essential cookies and provide clear information
            about what each type of cookie does.
          </p>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
            <h4 className="font-semibold mb-2">Cookie Preference Center</h4>
            <p className="text-primary-100 text-sm mb-4">
              Manage your cookie preferences and see exactly what cookies are active on your device.
            </p>
            <button className="bg-white text-primary-600 px-4 py-2 rounded-xl font-medium hover:bg-gray-100 transition-colors">
              Manage Cookie Preferences
            </button>
          </div>
        </div>

        {/* Updates to Policy */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or
            applicable laws. When we make changes, we will update the "Last Updated" date at the top
            of this policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We encourage you to review this policy periodically to stay informed about how we use cookies
            and similar technologies.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About Cookies?</h3>
            <p className="text-primary-100 mb-6">
              If you have any questions about our use of cookies or this policy, we're here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="mailto:privacy@fashionpanda.com"
                className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
              >
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-sm opacity-90">privacy@fashionpanda.com</p>
              </a>
              <a
                href="/contact"
                className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
              >
                <h4 className="font-semibold mb-2">Contact Form</h4>
                <p className="text-sm opacity-90">Send us a message</p>
              </a>
              <div className="bg-white/20 rounded-2xl p-4">
                <h4 className="font-semibold mb-2">Privacy Office</h4>
                <p className="text-sm opacity-90">Baddies Essentials Privacy Team<br />Block 5, Clifton, Karachi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
