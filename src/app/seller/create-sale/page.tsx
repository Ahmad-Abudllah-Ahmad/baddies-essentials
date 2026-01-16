'use client'

import { useState } from 'react'
import { Upload, Calendar, Clock, Zap, Send, Eye, Star, Timer, CheckCircle, AlertCircle } from 'lucide-react'

export default function CreateSalePage() {
  const [saleData, setSaleData] = useState({
    name: '',
    description: '',
    discountType: 'percentage',
    discountValue: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    theme: 'summer',
    banner: null,
    products: [],
    autoLive: true,
    needsApproval: true
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const saleThemes = [
    {
      id: 'summer',
      name: 'Summer Sale',
      colors: 'from-orange-400 to-red-500',
      preview: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=200&fit=crop'
    },
    {
      id: 'winter',
      name: 'Winter Collection',
      colors: 'from-blue-400 to-purple-500',
      preview: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=200&fit=crop'
    },
    {
      id: 'eid',
      name: 'Eid Special',
      colors: 'from-green-400 to-teal-500',
      preview: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop'
    },
    {
      id: 'independence',
      name: 'Independence Day',
      colors: 'from-green-500 to-white',
      preview: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=200&fit=crop'
    },
    {
      id: 'blackfriday',
      name: 'Black Friday',
      colors: 'from-gray-800 to-black',
      preview: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=200&fit=crop'
    },
    {
      id: 'custom',
      name: 'Custom Theme',
      colors: 'from-pink-400 to-purple-500',
      preview: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop'
    }
  ]

  const handleSubmitForApproval = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Show success message
      alert('Sale submitted for admin approval! You will be notified once approved.')
    }, 2000)
  }

  const handleGoLive = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Show success message
      alert('Sale is now live!')
    }, 1500)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Sale Campaign</h1>
        <p className="text-gray-600">Design and launch your promotional campaign</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          {[
            { step: 1, label: 'Sale Details' },
            { step: 2, label: 'Theme & Design' },
            { step: 3, label: 'Schedule & Launch' },
            { step: 4, label: 'Review & Submit' }
          ].map((item) => (
            <div key={item.step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= item.step ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > item.step ? <CheckCircle className="w-4 h-4" /> : item.step}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">{item.label}</span>
              {item.step < 4 && <div className="w-8 h-0.5 bg-gray-200 ml-4"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Sale Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sale Name *</label>
                <input
                  type="text"
                  value={saleData.name}
                  onChange={(e) => setSaleData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Summer Mega Sale"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type *</label>
                <select 
                  value={saleData.discountType}
                  onChange={(e) => setSaleData(prev => ({ ...prev, discountType: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed Amount (PKR)</option>
                  <option value="buy_one_get_one">Buy One Get One</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Discount Value * {saleData.discountType === 'percentage' ? '(%)' : '(PKR)'}
              </label>
              <input
                type="number"
                value={saleData.discountValue}
                onChange={(e) => setSaleData(prev => ({ ...prev, discountValue: e.target.value }))}
                placeholder={saleData.discountType === 'percentage' ? '25' : '500'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sale Description *</label>
              <textarea
                rows={4}
                value={saleData.description}
                onChange={(e) => setSaleData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your sale, what products are included, and why customers should buy..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Next: Theme & Design
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Theme & Design</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Choose Sale Theme</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {saleThemes.map((theme) => (
                  <div
                    key={theme.id}
                    onClick={() => setSaleData(prev => ({ ...prev, theme: theme.id }))}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      saleData.theme === theme.id ? 'border-pink-500 ring-2 ring-pink-200' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`h-24 bg-gradient-to-r ${theme.colors}`}></div>
                    <div className="p-3">
                      <h4 className="font-medium text-gray-900">{theme.name}</h4>
                    </div>
                    {saleData.theme === theme.id && (
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Custom Sale Banner</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Upload Sale Banner</h4>
                <p className="text-sm text-gray-600 mb-4">PNG, JPG up to 5MB (1200x400px recommended)</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && setSaleData(prev => ({ ...prev, banner: e.target.files[0] }))}
                  className="hidden"
                  id="banner-upload"
                />
                <label htmlFor="banner-upload" className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg cursor-pointer hover:bg-pink-700">
                  Choose Banner
                </label>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              <button 
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Next: Schedule
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Schedule & Launch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                <input
                  type="date"
                  value={saleData.startDate}
                  onChange={(e) => setSaleData(prev => ({ ...prev, startDate: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date *</label>
                <input
                  type="date"
                  value={saleData.endDate}
                  onChange={(e) => setSaleData(prev => ({ ...prev, endDate: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time *</label>
                <input
                  type="time"
                  value={saleData.startTime}
                  onChange={(e) => setSaleData(prev => ({ ...prev, startTime: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time *</label>
                <input
                  type="time"
                  value={saleData.endTime}
                  onChange={(e) => setSaleData(prev => ({ ...prev, endTime: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Countdown Preview */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">Countdown Preview</h4>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">05</div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-sm">Minutes</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm">Seconds</div>
                </div>
              </div>
            </div>

            {/* Auto-Live Options */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Auto-Live Sale</h4>
                  <p className="text-sm text-gray-500">Automatically make sale live at scheduled time</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={saleData.autoLive}
                    onChange={(e) => setSaleData(prev => ({ ...prev, autoLive: e.target.checked }))}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Require Admin Approval</h4>
                  <p className="text-sm text-gray-500">Submit sale for admin review before going live</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={saleData.needsApproval}
                    onChange={(e) => setSaleData(prev => ({ ...prev, needsApproval: e.target.checked }))}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              <button 
                onClick={() => setCurrentStep(4)}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Next: Review
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Review & Submit</h3>
            
            {/* Sale Preview */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Sale Preview</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-700">Sale Name</h5>
                  <p className="text-gray-900">{saleData.name || 'Not specified'}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Discount</h5>
                  <p className="text-gray-900">
                    {saleData.discountValue}{saleData.discountType === 'percentage' ? '%' : ' PKR'} off
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Duration</h5>
                  <p className="text-gray-900">
                    {saleData.startDate} to {saleData.endDate}
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Theme</h5>
                  <p className="text-gray-900 capitalize">{saleData.theme}</p>
                </div>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg border ${saleData.autoLive ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center">
                  <Zap className={`w-5 h-5 mr-2 ${saleData.autoLive ? 'text-green-600' : 'text-gray-400'}`} />
                  <span className="font-medium">Auto-Live: {saleData.autoLive ? 'Enabled' : 'Disabled'}</span>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border ${saleData.needsApproval ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center">
                  <AlertCircle className={`w-5 h-5 mr-2 ${saleData.needsApproval ? 'text-orange-600' : 'text-gray-400'}`} />
                  <span className="font-medium">Admin Approval: {saleData.needsApproval ? 'Required' : 'Not Required'}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              
              <div className="flex gap-3">
                {saleData.needsApproval ? (
                  <button 
                    onClick={handleSubmitForApproval}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Submitting...' : 'Submit for Approval'}
                  </button>
                ) : (
                  <button 
                    onClick={handleGoLive}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                  >
                    <Zap className="w-4 h-4" />
                    {isSubmitting ? 'Going Live...' : 'Go Live Now'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
