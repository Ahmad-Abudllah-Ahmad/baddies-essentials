'use client'

import { useState, useEffect } from 'react'
import { Brain, TrendingUp, Target, DollarSign, Zap, Star, Crown, Award } from 'lucide-react'

export default function AIAdvertisingPage() {
  const [aiEnabled, setAiEnabled] = useState(false)
  const [budget, setBudget] = useState(5000)
  interface StoreRanking {
    rank: number
    store: string
    spend: number
    badge: string
    color: string
  }

  const [storeRanking, setStoreRanking] = useState<StoreRanking | null>(null)

  // Mock AI analysis data
  const aiInsights = {
    recommendedBudget: 7500,
    targetAudience: ['Fashion enthusiasts', 'Young professionals', 'Students'],
    bestPerformingProducts: ['Summer Dresses', 'Casual Shirts', 'Accessories'],
    optimalBidding: {
      keywords: [
        { keyword: 'summer fashion', bid: 15, competition: 'High' },
        { keyword: 'casual wear', bid: 12, competition: 'Medium' },
        { keyword: 'trendy clothes', bid: 18, competition: 'High' }
      ]
    },
    predictedROI: '320%',
    estimatedReach: '45,000 users'
  }

  // Store ranking system based on marketing spend
  const storeRankings = [
    { rank: 1, store: 'Fashion Hub', spend: 25000, badge: 'Platinum Sponsor', color: 'bg-purple-600' },
    { rank: 2, store: 'Style Central', spend: 18000, badge: 'Gold Sponsor', color: 'bg-yellow-500' },
    { rank: 3, store: 'Trendy Closet', spend: 12000, badge: 'Silver Sponsor', color: 'bg-gray-400' },
    { rank: 4, store: 'Your Store', spend: 5000, badge: 'Bronze Sponsor', color: 'bg-orange-500' },
    { rank: 5, store: 'Casual Wear Co', spend: 3000, badge: 'Basic', color: 'bg-gray-300' }
  ]

  const handleEnableAI = () => {
    setAiEnabled(!aiEnabled)
    if (!aiEnabled) {
      // Simulate AI analysis
      setTimeout(() => {
        const yourStore = storeRankings.find(s => s.store === 'Your Store')
        setStoreRanking(yourStore || null)
      }, 2000)
    }
  }

  const handleBudgetIncrease = (amount: number) => {
    const newBudget = budget + amount
    setBudget(newBudget)
    
    // Update store ranking based on new spend
    const newRank = storeRankings.find(s => s.spend <= newBudget)
    setStoreRanking(newRank || null)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI-Powered Advertising</h1>
          <p className="text-gray-600">Automated marketing optimization with intelligent bidding</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleEnableAI}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              aiEnabled 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-pink-600 text-white hover:bg-pink-700'
            }`}
          >
            <Brain className="w-4 h-4" />
            {aiEnabled ? 'AI Active' : 'Enable AI'}
          </button>
        </div>
      </div>

      {/* AI Status */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-8 h-8" />
          <div>
            <h2 className="text-xl font-bold">AI Advertising Assistant</h2>
            <p className="opacity-90">
              {aiEnabled ? 'Actively optimizing your campaigns' : 'Ready to boost your marketing performance'}
            </p>
          </div>
        </div>
        
        {aiEnabled && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Smart Targeting</span>
              </div>
              <p className="text-sm opacity-90 mt-1">AI analyzing audience behavior</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Bid Optimization</span>
              </div>
              <p className="text-sm opacity-90 mt-1">Real-time bid adjustments</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Auto Scaling</span>
              </div>
              <p className="text-sm opacity-90 mt-1">Budget allocation optimization</p>
            </div>
          </div>
        )}
      </div>

      {/* Store Ranking System */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Store Rankings & Sponsor Badges</h3>
        <p className="text-gray-600 mb-6">Higher marketing spend = better visibility and sponsor badges</p>
        
        <div className="space-y-4">
          {storeRankings.map((store) => (
            <div 
              key={store.rank} 
              className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                store.store === 'Your Store' ? 'border-pink-500 bg-pink-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {store.rank === 1 && <Crown className="w-5 h-5 text-purple-600" />}
                  {store.rank === 2 && <Award className="w-5 h-5 text-yellow-500" />}
                  {store.rank === 3 && <Star className="w-5 h-5 text-gray-400" />}
                  <span className="font-bold text-lg">#{store.rank}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{store.store}</h4>
                  <p className="text-sm text-gray-600">Monthly Spend: PKR {store.spend.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${store.color}`}>
                  {store.badge}
                </span>
                {store.store === 'Your Store' && (
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleBudgetIncrease(2000)}
                      className="px-3 py-1 bg-pink-600 text-white rounded text-sm hover:bg-pink-700"
                    >
                      +PKR 2K
                    </button>
                    <button 
                      onClick={() => handleBudgetIncrease(5000)}
                      className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700"
                    >
                      +PKR 5K
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      {aiEnabled && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Budget Recommendations */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI Budget Recommendations</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Current Budget:</span>
                <span className="font-bold">PKR {budget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">AI Recommended:</span>
                <span className="font-bold text-green-600">PKR {aiInsights.recommendedBudget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Predicted ROI:</span>
                <span className="font-bold text-green-600">{aiInsights.predictedROI}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Reach:</span>
                <span className="font-bold">{aiInsights.estimatedReach}</span>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI Target Audience</h3>
            <div className="space-y-3">
              {aiInsights.targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">{audience}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Performing Products */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Products</h3>
            <div className="space-y-3">
              {aiInsights.bestPerformingProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{product}</span>
                  <span className="text-green-600 font-medium">High ROI</span>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword Bidding */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI Keyword Bidding</h3>
            <div className="space-y-3">
              {aiInsights.optimalBidding.keywords.map((keyword, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-700">{keyword.keyword}</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${
                      keyword.competition === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {keyword.competition}
                    </span>
                  </div>
                  <span className="font-bold text-pink-600">PKR {keyword.bid}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => handleBudgetIncrease(1000)}
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <DollarSign className="w-5 h-5 text-green-600" />
            <div className="text-left">
              <h4 className="font-medium">Increase Budget</h4>
              <p className="text-sm text-gray-600">Boost visibility</p>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Target className="w-5 h-5 text-blue-600" />
            <div className="text-left">
              <h4 className="font-medium">Optimize Targeting</h4>
              <p className="text-sm text-gray-600">AI audience analysis</p>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <div className="text-left">
              <h4 className="font-medium">Performance Report</h4>
              <p className="text-sm text-gray-600">Detailed analytics</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
