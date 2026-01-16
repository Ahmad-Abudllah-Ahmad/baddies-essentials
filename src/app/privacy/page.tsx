'use client'

import { ShieldCheckIcon, EyeIcon, LockClosedIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      icon: EyeIcon,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes your name, email address, phone number, shipping address, and payment information.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about how you use our website and mobile app, including your IP address, browser type, device information, pages visited, and time spent on our platform.'
        },
        {
          subtitle: 'Cookies and Tracking',
          text: 'We use cookies and similar technologies to enhance your experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: UserGroupIcon,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to process orders, deliver products, provide customer support, and communicate with you about your purchases and account.'
        },
        {
          subtitle: 'Personalization',
          text: 'We personalize your shopping experience by showing relevant products, recommendations, and offers based on your preferences and browsing history.'
        },
        {
          subtitle: 'Marketing Communications',
          text: 'With your consent, we send promotional emails, SMS, and notifications about new products, sales, and special offers. You can opt out at any time.'
        }
      ]
    },
    {
      title: 'Information Sharing',
      icon: LockClosedIcon,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We share information with trusted third-party service providers who help us operate our business, such as payment processors, shipping companies, and technology providers.'
        },
        {
          subtitle: 'Brand Partners',
          text: 'We may share relevant information with our brand partners to fulfill orders and provide customer service, but only as necessary for these purposes.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information when required by law, to protect our rights, or to ensure the safety and security of our users and platform.'
        }
      ]
    },
    {
      title: 'Data Security',
      icon: ShieldCheckIcon,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, and regular security audits.'
        },
        {
          subtitle: 'Payment Security',
          text: 'All payment information is processed through secure, PCI-compliant payment gateways. We do not store your complete credit card information on our servers.'
        },
        {
          subtitle: 'Data Breach Response',
          text: 'In the unlikely event of a data breach, we will notify affected users and relevant authorities as required by law and take immediate steps to secure the breach.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-2xl inline-block">
              <p className="text-sm font-medium">Last updated: August 21, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <ShieldCheckIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            At Baddies Essentials, we are committed to protecting your privacy and ensuring the security of your personal information.
            This Privacy Policy describes how we collect, use, share, and protect information about you when you use our website,
            mobile application, and services.
          </p>
        </div>

        {/* Policy Sections */}
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

        {/* Your Rights */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-2xl">
                <h4 className="font-semibold text-green-900 mb-2">Access Your Data</h4>
                <p className="text-green-700 text-sm">You can request a copy of the personal information we have about you.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl">
                <h4 className="font-semibold text-blue-900 mb-2">Update Information</h4>
                <p className="text-blue-700 text-sm">You can update your account information at any time through your profile settings.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-2xl">
                <h4 className="font-semibold text-purple-900 mb-2">Delete Account</h4>
                <p className="text-purple-700 text-sm">You can request deletion of your account and associated data by contacting us.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-2xl">
                <h4 className="font-semibold text-orange-900 mb-2">Marketing Opt-out</h4>
                <p className="text-orange-700 text-sm">You can unsubscribe from marketing communications at any time.</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-2xl">
                <h4 className="font-semibold text-pink-900 mb-2">Cookie Control</h4>
                <p className="text-pink-700 text-sm">You can manage cookie preferences through your browser settings.</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-2xl">
                <h4 className="font-semibold text-teal-900 mb-2">Data Portability</h4>
                <p className="text-teal-700 text-sm">You can request your data in a portable format for transfer to another service.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal
            information from children under 13. If we become aware that we have collected personal information from
            a child under 13, we will take steps to delete such information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you are a parent or guardian and believe your child has provided us with personal information,
            please contact us immediately so we can take appropriate action.
          </p>
        </div>

        {/* International Transfers */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your information may be transferred to and processed in countries other than Pakistan. When we transfer
            your information internationally, we ensure appropriate safeguards are in place to protect your data
            in accordance with this Privacy Policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We only work with service providers who provide adequate protection for your personal information and
            comply with applicable data protection laws.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.
            When we make changes, we will update the "Last Updated" date at the top of this policy and notify you
            through our website or by email.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
            <p className="text-primary-100 mb-6">
              If you have any questions about this Privacy Policy or our data practices, we're here to help.
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
                <h4 className="font-semibold mb-2">Mailing Address</h4>
                <p className="text-sm opacity-90">Baddies Essentials Privacy Office<br />Block 5, Clifton, Karachi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
