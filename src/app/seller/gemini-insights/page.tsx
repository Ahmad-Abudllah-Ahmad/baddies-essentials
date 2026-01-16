'use client'

import { useState, useEffect } from 'react'
import { Brain, TrendingUp, Package, ShoppingCart, AlertTriangle, Lightbulb, RefreshCw, Download } from 'lucide-react'

export default function GeminiInsightsPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [insights, setInsights] = useState(null)
  const [geminiApiKey, setGeminiApiKey] = useState('')
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)

  const mockInsights = {
    salesAnalysis: {
      trend: 'increasing',
      growthRate: '+15.3%',
      bestSellingCategory: 'Summer Dresses',
      worstPerforming: 'Winter Coats',
      seasonalFactor: 'High demand for summer items due to current season'
    },
    productRecommendations: [
      {
        category: 'Summer Dresses',
        reason: 'High demand, low stock',
        suggestedQuantity: 50,
        expectedRevenue: 125000,
        priority: 'high'
      },
      {
        category: 'Casual Shirts',
        reason: 'Trending in market, good profit margin',
        suggestedQuantity: 30,
        expectedRevenue: 90000,
        priority: 'medium'
      },
      {
        category: 'Accessories',
        reason: 'Complementary items for existing inventory',
        suggestedQuantity: 100,
        expectedRevenue: 50000,
        priority: 'low'
      }
    ],
    marketTrends: [
      'Sustainable fashion is gaining 25% more interest',
      'Pastel colors are trending for summer 2024',
      'Oversized clothing continues to be popular',
      'Local brands are preferred by 60% of customers'
    ],
    customerBehavior: {
      peakShoppingHours: '2 PM - 6 PM',
      averageOrderValue: 2850,
      returnRate: 2.1,
      customerSatisfaction: 4.7,
      repeatCustomerRate: 68
    },
    recommendations: [
      {
        type: 'inventory',
        title: 'Restock Summer Dresses',
        description: 'Your summer dress inventory is running low while demand is high. Consider restocking immediately.',
        impact: 'High',
        urgency: 'Urgent'
      },
      {
        type: 'pricing',
        title: 'Adjust Pricing Strategy',
        description: 'Market analysis suggests you can increase prices by 8-12% on premium items.',
        impact: 'Medium',
        urgency: 'Medium'
      },
      {
        type: 'marketing',
        title: 'Target Evening Shoppers',
        description: 'Customer data shows peak activity between 2-6 PM. Focus marketing efforts during this time.',
        impact: 'Medium',
        urgency: 'Low'
      }
    ]
  }

  const analyzeWithGemini = async () => {
    setIsAnalyzing(true)
    
    // Simulate API call to Gemini
    setTimeout(() => {
      setInsights(mockInsights)
      setIsAnalyzing(false)
    }, 3000)
  }

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-orange-600 bg-orange-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'border-red-500 bg-red-50'
      case 'medium': return 'border-orange-500 bg-orange-50'
      case 'low': return 'border-green-500 bg-green-50'
      default: return 'border-gray-500 bg-gray-50'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Sales Insights</h1>
          <p className="text-gray-600">Powered by Google Gemini AI for intelligent business decisions</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowApiKeyInput(!showApiKeyInput)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Configure API
          </button>
          <button 
            onClick={analyzeWithGemini}
            disabled={isAnalyzing}
            className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:opacity-50"
          >
            {isAnalyzing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Brain className="w-4 h-4" />}
            {isAnalyzing ? 'Analyzing...' : 'Analyze with AI'}
          </button>
        </div>
      </div>

      {/* API Key Configuration */}
      {showApiKeyInput && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-medium text-blue-900 mb-2">Configure Gemini API Key</h3>
          <div className="flex gap-3">
            <input
              type="password"
              value={geminiApiKey}
              onChange={(e) => setGeminiApiKey(e.target.value)}
              placeholder="Enter your Gemini API key"
              className="flex-1 px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Save
            </button>
          </div>
          <p className="text-sm text-blue-700 mt-2">
            Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" className="underline">Google AI Studio</a>
          </p>
        </div>
      )}

      {!insights && !isAnalyzing && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Sales Analysis</h3>
          <p className="text-gray-600 mb-6">
            Get intelligent insights about your sales performance, inventory optimization, and market trends using Google Gemini AI.
          </p>
          <button 
            onClick={analyzeWithGemini}
            className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 mx-auto"
          >
            <Brain className="w-5 h-5" />
            Start AI Analysis
          </button>
        </div>
      )}

      {isAnalyzing && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <RefreshCw className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-spin" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Your Data</h3>
          <p className="text-gray-600">
            AI is processing your sales data, customer behavior, and market trends...
          </p>
        </div>
      )}

      {insights && (
        <div className="space-y-6">
          {/* Sales Analysis Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Performance Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Growth Rate</p>
                <p className="text-2xl font-bold text-green-600">{insights.salesAnalysis.growthRate}</p>
              </div>
              <div className="text-center">
                <Package className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Best Category</p>
                <p className="text-lg font-semibold text-gray-900">{insights.salesAnalysis.bestSellingCategory}</p>
              </div>
              <div className="text-center">
                <ShoppingCart className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Avg Order Value</p>
                <p className="text-2xl font-bold text-gray-900">PKR {insights.customerBehavior.averageOrderValue.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Return Rate</p>
                <p className="text-2xl font-bold text-red-600">{insights.customerBehavior.returnRate}%</p>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
              <button className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
            <div className="space-y-4">
              {insights.recommendations.map((rec, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{rec.title}</h4>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getImpactColor(rec.impact)}`}>
                        {rec.impact} Impact
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getImpactColor(rec.urgency)}`}>
                        {rec.urgency}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{rec.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Restocking Suggestions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Smart Inventory Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {insights.productRecommendations.map((product, index) => (
                <div key={index} className={`border-2 rounded-lg p-4 ${getPriorityColor(product.priority)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{product.category}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.priority === 'high' ? 'bg-red-100 text-red-800' :
                      product.priority === 'medium' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {product.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{product.reason}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Suggested Qty:</span>
                      <span className="font-medium">{product.suggestedQuantity} units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Revenue:</span>
                      <span className="font-medium text-green-600">PKR {product.expectedRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    Add to Order List
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Market Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Trends</h3>
              <div className="space-y-3">
                {insights.marketTrends.map((trend, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <p className="text-sm text-gray-700">{trend}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Insights</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Peak Shopping Hours</span>
                  <span className="font-medium">{insights.customerBehavior.peakShoppingHours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-medium">{insights.customerBehavior.customerSatisfaction}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Repeat Customer Rate</span>
                  <span className="font-medium">{insights.customerBehavior.repeatCustomerRate}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Recommended Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-opacity-30 transition-all">
                <Package className="w-6 h-6 mb-2" />
                <h4 className="font-medium mb-1">Restock Inventory</h4>
                <p className="text-sm opacity-90">Order 50 summer dresses</p>
              </button>
              <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-opacity-30 transition-all">
                <TrendingUp className="w-6 h-6 mb-2" />
                <h4 className="font-medium mb-1">Adjust Pricing</h4>
                <p className="text-sm opacity-90">Increase premium items by 10%</p>
              </button>
              <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-opacity-30 transition-all">
                <Brain className="w-6 h-6 mb-2" />
                <h4 className="font-medium mb-1">Schedule Analysis</h4>
                <p className="text-sm opacity-90">Set up weekly AI reports</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
