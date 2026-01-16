'use client'

import { useState } from 'react'
import { Search, MessageCircle, Phone, Mail, Book, Video, FileText, ChevronDown, ChevronRight } from 'lucide-react'

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        'Setting up your store',
        'Adding your first product',
        'Store verification process',
        'Understanding seller dashboard'
      ]
    },
    {
      title: 'Product Management',
      icon: '📦',
      articles: [
        'Adding product images',
        'Setting up inventory',
        'Product categories',
        'Pricing strategies'
      ]
    },
    {
      title: 'Orders & Shipping',
      icon: '🚚',
      articles: [
        'Processing orders',
        'Shipping options',
        'Order tracking',
        'Handling returns'
      ]
    },
    {
      title: 'Payments & Earnings',
      icon: '💰',
      articles: [
        'Payment methods',
        'Payout schedule',
        'Commission structure',
        'Tax information'
      ]
    },
    {
      title: 'Marketing & Promotion',
      icon: '📈',
      articles: [
        'Creating sales campaigns',
        'Sponsored listings',
        'Social media integration',
        'Customer engagement'
      ]
    },
    {
      title: 'Account & Settings',
      icon: '⚙️',
      articles: [
        'Profile settings',
        'Security options',
        'Notification preferences',
        'Store customization'
      ]
    }
  ]

  const faqs = [
    {
      id: 1,
      question: 'How do I set up my store for the first time?',
      answer: 'To set up your store, go to Settings > Store Settings. Add your store name, description, logo, and banner. Complete your profile information and verify your account to start selling.'
    },
    {
      id: 2,
      question: 'What are the commission rates for sellers?',
      answer: 'Our commission structure is competitive: 8.5% for regular sellers, 7% for premium sellers, and 5.5% for enterprise sellers. Premium and enterprise tiers are available based on sales volume and performance.'
    },
    {
      id: 3,
      question: 'How do I create a sale campaign?',
      answer: 'Navigate to Marketing > Create Sale. Choose your sale type, set timing and countdown, upload theme banners, and submit for admin approval. Once approved, your sale will go live automatically.'
    },
    {
      id: 4,
      question: 'When do I receive my payments?',
      answer: 'Payments are processed according to your payout schedule (weekly, bi-weekly, or monthly). You can set your minimum payout amount in Settings > Payment Methods.'
    },
    {
      id: 5,
      question: 'How can I track my store performance?',
      answer: 'Use the Analytics dashboard to track revenue, orders, customer insights, and performance metrics. You can also view live customer tracking and visitor analytics.'
    },
    {
      id: 6,
      question: 'What should I do if I have a dispute with a customer?',
      answer: 'Use the Messages section to communicate with customers. For serious disputes, contact our support team through the help center or email support@fashionpanda.com.'
    }
  ]

  const contactOptions = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      available: true
    },
    {
      title: 'Phone Support',
      description: '+92 21 1234 5678',
      icon: Phone,
      action: 'Call Now',
      available: true
    },
    {
      title: 'Email Support',
      description: 'support@fashionpanda.com',
      icon: Mail,
      action: 'Send Email',
      available: true
    }
  ]

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help Center</h1>
        <p className="text-gray-600">Find answers to your questions and get support</p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for help articles, FAQs, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option) => (
          <div key={option.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg mb-4">
              <option.icon className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <button className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
              {option.action}
            </button>
          </div>
        ))}
      </div>

      {/* Help Categories */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.articles.map((article) => (
                  <li key={article}>
                    <a href="#" className="text-sm text-gray-600 hover:text-pink-600 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'How to optimize product listings for better visibility',
            'Understanding the seller dashboard analytics',
            'Best practices for customer communication',
            'Setting up automated responses',
            'Managing inventory effectively',
            'Creating compelling product descriptions'
          ].map((article, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Book className="w-5 h-5 text-pink-600 mr-3" />
              <span className="text-gray-700">{article}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Video Tutorials */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Video Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Store Setup Guide',
              duration: '5:30',
              thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop'
            },
            {
              title: 'Product Upload Tutorial',
              duration: '8:15',
              thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop'
            },
            {
              title: 'Marketing Campaigns',
              duration: '12:45',
              thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
            }
          ].map((video, index) => (
            <div key={index} className="cursor-pointer group">
              <div className="relative rounded-lg overflow-hidden mb-3">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Video className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-medium text-gray-900">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedFaq === faq.id ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedFaq === faq.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Still Need Help */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Still Need Help?</h2>
        <p className="mb-6">Our support team is here to help you succeed</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-pink-600 rounded-lg font-medium hover:bg-gray-100">
            Contact Support
          </button>
          <button className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-pink-600">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  )
}
