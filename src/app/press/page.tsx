'use client'

import { NewspaperIcon, CalendarIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function PressPage() {
  const pressReleases = [
    {
      title: 'Baddies Essentials Raises $10M Series A to Revolutionize Fashion E-commerce in Pakistan',
      date: 'August 15, 2024',
      category: 'Funding',
      excerpt: 'Leading fashion marketplace secures funding to expand operations and enhance AI-powered shopping experience across Pakistan.',
      image: '/api/placeholder/400/200'
    },
    {
      title: 'Baddies Essentials Partners with 500+ Local Brands to Support Pakistani Fashion Industry',
      date: 'July 28, 2024',
      category: 'Partnership',
      excerpt: 'New initiative aims to digitize local fashion brands and provide them with advanced e-commerce tools and nationwide reach.',
      image: '/api/placeholder/400/200'
    },
    {
      title: 'Baddies Essentials Launches AI-Powered Personal Styling Service',
      date: 'June 20, 2024',
      category: 'Product',
      excerpt: 'Revolutionary AI technology provides personalized fashion recommendations based on individual style preferences and body type.',
      image: '/api/placeholder/400/200'
    },
    {
      title: 'Baddies Essentials Achieves Carbon Neutral Shipping Across Pakistan',
      date: 'May 10, 2024',
      category: 'Sustainability',
      excerpt: 'Company becomes first fashion e-commerce platform in Pakistan to achieve carbon neutral shipping through green logistics partnerships.',
      image: '/api/placeholder/400/200'
    }
  ]

  const mediaKit = [
    {
      title: 'Company Logos',
      description: 'High-resolution Baddies Essentials logos in various formats',
      items: ['PNG (Transparent)', 'SVG (Vector)', 'JPG (White Background)', 'Brand Guidelines PDF'],
      icon: DocumentTextIcon
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of our leadership team',
      items: ['CEO Portrait', 'CTO Portrait', 'CMO Portrait', 'Team Photos'],
      icon: UserGroupIcon
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our platform and mobile app',
      items: ['Website Screenshots', 'Mobile App Screenshots', 'Feature Highlights', 'User Interface'],
      icon: NewspaperIcon
    },
    {
      title: 'Company Facts',
      description: 'Key statistics and information about Baddies Essentials',
      items: ['Company Overview', 'Key Statistics', 'Timeline', 'Awards & Recognition'],
      icon: CalendarIcon
    }
  ]

  const awards = [
    {
      title: 'Best E-commerce Platform 2024',
      organization: 'Pakistan Digital Awards',
      year: '2024',
      description: 'Recognized for innovation in fashion e-commerce and customer experience.'
    },
    {
      title: 'Startup of the Year',
      organization: 'TechCrunch Pakistan',
      year: '2024',
      description: 'Awarded for rapid growth and impact on the Pakistani fashion industry.'
    },
    {
      title: 'Excellence in Customer Service',
      organization: 'Pakistan Retailers Association',
      year: '2023',
      description: 'Honored for outstanding customer service and satisfaction ratings.'
    },
    {
      title: 'Innovation in AI Technology',
      organization: 'Pakistan Software Houses Association',
      year: '2023',
      description: 'Recognized for pioneering AI-powered fashion recommendations in Pakistan.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Press Center</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Stay updated with the latest news, announcements, and media resources from Baddies Essentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:press@fashionpanda.com"
                className="bg-primary-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-primary-700 transition-colors"
              >
                Contact Press Team
              </a>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
                Download Media Kit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Latest News */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Press Releases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the latest updates on Baddies Essentials milestones, partnerships, and industry impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {release.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {release.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {release.excerpt}
                  </p>
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    Read Full Release →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Kit & Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download high-quality assets, photos, and information for your stories about Baddies Essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaKit.map((kit, index) => {
              const IconComponent = kit.icon
              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-2xl mr-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{kit.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{kit.description}</p>
                  <ul className="space-y-2 mb-6">
                    {kit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-primary-600 text-white py-3 rounded-2xl font-medium hover:bg-primary-700 transition-colors">
                    Download Package
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Baddies Essentials has been recognized by leading industry organizations for innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{award.title}</h3>
                    <p className="text-primary-600 font-medium">{award.organization}</p>
                  </div>
                  <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                    {award.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Facts */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Baddies Essentials at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Partner Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1M+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2019</div>
                <div className="text-gray-600">Founded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Press Contacts */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Press Contacts</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              For media inquiries, interview requests, or additional information, please contact our press team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">General Media Inquiries</h3>
              <div className="space-y-2">
                <p className="text-primary-100">
                  <strong>Email:</strong> press@fashionpanda.com
                </p>
                <p className="text-primary-100">
                  <strong>Phone:</strong> +92 21 1234 5678
                </p>
                <p className="text-primary-100">
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Executive Interviews</h3>
              <div className="space-y-2">
                <p className="text-primary-100">
                  <strong>Contact:</strong> Sarah Ahmed, PR Manager
                </p>
                <p className="text-primary-100">
                  <strong>Email:</strong> sarah.ahmed@fashionpanda.com
                </p>
                <p className="text-primary-100">
                  <strong>Phone:</strong> +92 21 1234 5679
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-primary-100 text-sm">
              Follow us on social media for real-time updates:
              <a href="#" className="text-white hover:underline ml-1">Twitter</a> |
              <a href="#" className="text-white hover:underline ml-1">LinkedIn</a> |
              <a href="#" className="text-white hover:underline ml-1">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
