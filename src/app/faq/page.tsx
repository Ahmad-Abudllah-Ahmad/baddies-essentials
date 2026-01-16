'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'All Questions', count: 24 },
    { id: 'orders', name: 'Orders & Payment', count: 8 },
    { id: 'shipping', name: 'Shipping & Delivery', count: 6 },
    { id: 'returns', name: 'Returns & Exchanges', count: 5 },
    { id: 'account', name: 'Account & Profile', count: 3 },
    { id: 'products', name: 'Products & Sizing', count: 2 }
  ]

  const faqs = [
    {
      id: 1,
      category: 'orders',
      question: 'How do I place an order?',
      answer: 'Simply browse our products, add items to your cart, and proceed to checkout. You can pay using cash on delivery, JazzCash, EasyPaisa, or credit/debit cards.'
    },
    {
      id: 2,
      category: 'orders',
      question: 'What payment methods do you accept?',
      answer: 'We accept Cash on Delivery (COD), JazzCash, EasyPaisa, Visa, MasterCard, and other major credit/debit cards. All online payments are secured with SSL encryption.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'Can I modify or cancel my order?',
      answer: 'You can modify or cancel your order within 2 hours of placing it. After that, the order goes into processing and cannot be changed. Contact customer support immediately if needed.'
    },
    {
      id: 4,
      category: 'orders',
      question: 'Do you offer discounts for bulk orders?',
      answer: 'Yes, we offer special discounts for bulk orders above PKR 50,000. Contact our sales team at bulk@fashionpanda.com for custom pricing.'
    },
    {
      id: 5,
      category: 'shipping',
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 3-5 business days, Express delivery takes 1-2 days, and Same-day delivery is available in major cities. Free delivery is available on orders above PKR 2,999.'
    },
    {
      id: 6,
      category: 'shipping',
      question: 'Do you deliver nationwide?',
      answer: 'Yes, we deliver to all major cities and towns across Pakistan. Delivery times may vary based on location. Remote areas may take 5-7 business days.'
    },
    {
      id: 7,
      category: 'shipping',
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you\'ll receive a tracking number via SMS and email. You can track your order on our website or call customer support.'
    },
    {
      id: 8,
      category: 'shipping',
      question: 'What if I\'m not available during delivery?',
      answer: 'Our delivery partner will attempt delivery 3 times. You can reschedule delivery or arrange pickup from the nearest hub through the tracking link.'
    },
    {
      id: 9,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy for most items. Items must be in original condition with tags attached. We provide free pickup for returns.'
    },
    {
      id: 10,
      category: 'returns',
      question: 'How do I return an item?',
      answer: 'Contact customer support within 7 days of delivery. We\'ll arrange free pickup from your location. Refunds are processed within 5-7 business days.'
    },
    {
      id: 11,
      category: 'returns',
      question: 'Can I exchange items?',
      answer: 'Yes, you can exchange items for different sizes or colors within 7 days. We offer simultaneous exchange where we deliver the new item and collect the old one.'
    },
    {
      id: 12,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click on "Sign Up" in the header, choose your role (Customer or Brand), fill in your details, and verify your email address. Account creation is free and takes less than 2 minutes.'
    },
    {
      id: 13,
      category: 'account',
      question: 'I forgot my password. What should I do?',
      answer: 'Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.'
    },
    {
      id: 14,
      category: 'products',
      question: 'How do I find the right size?',
      answer: 'Use our comprehensive size guide which includes measurements for all categories. When in doubt, contact customer support or check individual product descriptions for specific sizing information.'
    },
    {
      id: 15,
      category: 'products',
      question: 'Are the product images accurate?',
      answer: 'We strive to show accurate product images. However, colors may vary slightly due to screen settings and lighting. Check product descriptions for detailed information.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Find quick answers to common questions about shopping, shipping, returns, and more.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  {activeCategory === 'all' ? 'All Questions' : categories.find(c => c.id === activeCategory)?.name}
                </h3>
                <p className="text-primary-100 text-sm">
                  {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredFAQs.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="text-gray-400 mb-4">
                      <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
                    <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
                  </div>
                ) : (
                  filteredFAQs.map((faq) => (
                    <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          {expandedFAQ === faq.id ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {expandedFAQ === faq.id && (
                        <div className="px-6 pb-6">
                          <div className="bg-gray-50 rounded-2xl p-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Still Need Help */}
            <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
                <p className="text-purple-100 mb-6">
                  Can't find what you're looking for? Our customer support team is here to help.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="/contact"
                    className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">Contact Us</h4>
                    <p className="text-sm opacity-90">Get personalized support</p>
                  </a>
                  <a
                    href="tel:+922111123456"
                    className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">Call Support</h4>
                    <p className="text-sm opacity-90">+92 21 111 123 456</p>
                  </a>
                  <a
                    href="https://wa.me/923001234567"
                    className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">WhatsApp</h4>
                    <p className="text-sm opacity-90">Quick chat support</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
