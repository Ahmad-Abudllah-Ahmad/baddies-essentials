'use client'

import { useState } from 'react'
import { TrendingUp, Target, DollarSign, Eye, Users, Calendar, CreditCard, Star, Zap } from 'lucide-react'

export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState('campaigns')
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<SponsorshipPlan | null>(null)

  const marketingStats = [
    { label: 'Active Campaigns', value: '5', change: '+2', icon: Target },
    { label: 'Total Reach', value: '45.2K', change: '+12%', icon: Eye },
    { label: 'Conversion Rate', value: '3.8%', change: '+0.5%', icon: TrendingUp },
    { label: 'Marketing Spend', value: 'PKR 15,000', change: '-5%', icon: DollarSign }
  ]

  const sponsorshipPlans = [
    {
      id: 'basic',
      name: 'Basic Promotion',
      price: 5000,
      duration: '7 days',
      features: [
        'Featured in search results',
        'Homepage banner placement',
        'Basic analytics',
        'Email support'
      ],
      boost: '2x visibility',
      color: 'border-blue-200 bg-blue-50'
    },
    {
      id: 'premium',
      name: 'Premium Sponsorship',
      price: 12000,
      duration: '15 days',
      features: [
        'Top search ranking',
        'Prime homepage placement',
        'Social media promotion',
        'Advanced analytics',
        'Priority support',
        'Mobile app featuring'
      ],
      boost: '5x visibility',
      color: 'border-purple-200 bg-purple-50',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      price: 25000,
      duration: '30 days',
      features: [
        'Guaranteed top position',
        'Multi-platform promotion',
        'Dedicated account manager',
        'Custom marketing campaigns',
        'Influencer partnerships',
        'Real-time optimization',
        'Exclusive event participation'
      ],
      boost: '10x visibility',
      color: 'border-gold-200 bg-yellow-50'
    }
  ]

  const activeCampaigns = [
    {
      id: 1,
      name: 'Summer Collection Boost',
      type: 'Premium Sponsorship',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-01-30',
      budget: 12000,
      spent: 8500,
      impressions: 45200,
      clicks: 1820,
      conversions: 68
    },
    {
      id: 2,
      name: 'New Arrivals Feature',
      type: 'Basic Promotion',
      status: 'active',
      startDate: '2024-01-20',
      endDate: '2024-01-27',
      budget: 5000,
      spent: 3200,
      impressions: 18500,
      clicks: 740,
      conversions: 28
    }
  ]

  const liveTracking = {
    todayVisitors: 1247,
    yesterdayVisitors: 1156,
    weeklyGrowth: '+7.8%',
    hourlyData: [
      { hour: '00:00', visitors: 45 },
      { hour: '04:00', visitors: 23 },
      { hour: '08:00', visitors: 156 },
      { hour: '12:00', visitors: 234 },
      { hour: '16:00', visitors: 189 },
      { hour: '20:00', visitors: 167 },
      { hour: '24:00', visitors: 98 }
    ]
  }

  interface SponsorshipPlan {
    id: string
    name: string
    price: number
    duration: string
    features: string[]
    boost: string
    color: string
    popular?: boolean
  }

  const handlePurchasePlan = (plan: SponsorshipPlan) => {
    setSelectedPlan(plan)
    setShowPaymentModal(true)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Marketing & Promotion</h1>
          <p className="text-gray-600">Boost your store visibility and reach more customers</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => {
              alert('Quick Boost activated! Your store will be featured for the next 24 hours.')
              // In real app: trigger quick boost API
            }}
            className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            <Zap className="w-4 h-4" />
            Quick Boost
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketingStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm ml-1 text-green-600">{stat.change}</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50">
                <stat.icon className="w-6 h-6 text-pink-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'campaigns', label: 'Active Campaigns' },
              { id: 'sponsorship', label: 'Sponsorship Plans' },
              { id: 'tracking', label: 'Live Tracking' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'campaigns' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Active Marketing Campaigns</h3>
              <div className="space-y-4">
                {activeCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{campaign.name}</h4>
                        <p className="text-sm text-gray-500">{campaign.type}</p>
                      </div>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {campaign.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Budget</p>
                        <p className="font-medium">PKR {campaign.budget.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Spent</p>
                        <p className="font-medium">PKR {campaign.spent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Impressions</p>
                        <p className="font-medium">{campaign.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Clicks</p>
                        <p className="font-medium">{campaign.clicks.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Conversions</p>
                        <p className="font-medium">{campaign.conversions}</p>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-pink-600 h-2 rounded-full" 
                        style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {Math.round((campaign.spent / campaign.budget) * 100)}% of budget used
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sponsorship' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Choose Your Sponsorship Plan</h3>
                <p className="text-gray-600">Get your store featured and increase visibility</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sponsorshipPlans.map((plan) => (
                  <div key={plan.id} className={`relative border-2 rounded-xl p-6 ${plan.color}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-gray-900">PKR {plan.price.toLocaleString()}</span>
                        <span className="text-gray-500">/{plan.duration}</span>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <Star className="w-4 h-4 mr-1" />
                          {plan.boost}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => handlePurchasePlan(plan)}
                      className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
                    >
                      Start Campaign
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tracking' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Live Customer Tracking</h3>
              
              {/* Today's Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Today's Visitors</p>
                      <p className="text-3xl font-bold">{liveTracking.todayVisitors.toLocaleString()}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-200" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Yesterday</p>
                      <p className="text-3xl font-bold">{liveTracking.yesterdayVisitors.toLocaleString()}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-green-200" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Weekly Growth</p>
                      <p className="text-3xl font-bold">{liveTracking.weeklyGrowth}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-200" />
                  </div>
                </div>
              </div>

              {/* Hourly Chart */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Today's Hourly Traffic</h4>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {liveTracking.hourlyData.map((data, index) => (
                    <div key={data.hour} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-pink-500 rounded-t-md relative"
                        style={{ height: `${(data.visitors / 250) * 200}px` }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600">
                          {data.visitors}
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">{data.hour}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Complete Payment</h3>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{selectedPlan?.name}</h3>
              <p className="text-2xl font-bold text-pink-600">PKR {selectedPlan?.price.toLocaleString()}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                  <input type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input type="text" placeholder="123" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                <CreditCard className="w-4 h-4 inline mr-2" />
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
