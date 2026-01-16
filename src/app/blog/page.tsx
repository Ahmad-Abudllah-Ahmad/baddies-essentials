'use client'

import { useState } from 'react'
import { CalendarIcon, UserIcon, TagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Fashion Trends', 'Style Tips', 'Brand Spotlights', 'Industry News', 'Sustainability']

  const blogPosts = [
    {
      title: 'Summer 2024 Fashion Trends: What\'s Hot This Season',
      excerpt: 'Discover the must-have pieces and trending styles that are defining summer fashion this year. From vibrant colors to sustainable fabrics.',
      author: 'Sarah Khan',
      date: 'August 18, 2024',
      category: 'Fashion Trends',
      readTime: '5 min read',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      title: 'How to Build a Capsule Wardrobe on a Budget',
      excerpt: 'Learn the art of creating a versatile wardrobe with fewer pieces that work together seamlessly. Smart shopping tips included.',
      author: 'Ahmed Ali',
      date: 'August 15, 2024',
      category: 'Style Tips',
      readTime: '7 min read',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'Brand Spotlight: The Rise of Sustainable Fashion in Pakistan',
      excerpt: 'Meet the Pakistani brands leading the sustainable fashion movement and making a positive impact on the environment.',
      author: 'Fatima Sheikh',
      date: 'August 12, 2024',
      category: 'Brand Spotlights',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'The Future of E-commerce: AI and Personalization',
      excerpt: 'Explore how artificial intelligence is revolutionizing online shopping and creating personalized experiences for customers.',
      author: 'Hassan Malik',
      date: 'August 10, 2024',
      category: 'Industry News',
      readTime: '8 min read',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'Styling Tips: Transitioning Your Wardrobe from Summer to Fall',
      excerpt: 'Master the art of seasonal dressing with these expert tips for transitioning your summer pieces into fall-ready outfits.',
      author: 'Ayesha Rahman',
      date: 'August 8, 2024',
      category: 'Style Tips',
      readTime: '4 min read',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      title: 'Eco-Friendly Fashion: Small Changes, Big Impact',
      excerpt: 'Discover simple ways to make your fashion choices more sustainable and contribute to a greener planet.',
      author: 'Omar Siddiqui',
      date: 'August 5, 2024',
      category: 'Sustainability',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Baddies Essentials Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Stay updated with the latest fashion trends, style tips, and industry insights from our expert team.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-r from-primary-400 to-primary-600"></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-2xl font-medium transition-colors ${selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-primary-400 to-primary-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    <TagIcon className="h-3 w-3 inline mr-1" />
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className="w-full bg-primary-600 text-white py-2 rounded-2xl font-medium hover:bg-primary-700 transition-colors">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest fashion trends, style tips, and exclusive content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-primary-200 text-sm mt-4">
              Join 50,000+ fashion enthusiasts who trust our insights.
            </p>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Tags</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Summer Fashion', 'Sustainable Style', 'Pakistani Brands', 'Wardrobe Essentials',
              'Fashion Week', 'Street Style', 'Accessories', 'Color Trends', 'Styling Tips',
              'Fashion Technology', 'Local Designers', 'Seasonal Trends'
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-2xl text-sm hover:bg-primary-100 hover:text-primary-800 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
