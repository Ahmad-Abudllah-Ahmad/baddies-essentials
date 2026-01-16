'use client'

import { useState } from 'react'
import { Upload, Save, Eye, Calendar, Clock, Zap, Send, CheckCircle } from 'lucide-react'

export default function StoreSetupPage() {
  const [activeTab, setActiveTab] = useState('basic')
  const [storeData, setStoreData] = useState({
    name: '',
    description: '',
    category: '',
    logo: null,
    banner: null,
    address: '',
    phone: '',
    email: ''
  })

  const tabs = [
    { id: 'basic', label: 'Basic Information' },
    { id: 'branding', label: 'Branding & Media' },
    { id: 'contact', label: 'Contact Details' },
    { id: 'verification', label: 'Verification' }
  ]

  const handleFileUpload = (type: 'logo' | 'banner', file: File) => {
    setStoreData(prev => ({ ...prev, [type]: file }))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Setup</h1>
        <p className="text-gray-600">Set up your store to start selling on Fashion Panda</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                activeTab === tab.id ? 'bg-pink-600 text-white' : 
                index < tabs.findIndex(t => t.id === activeTab) ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {index < tabs.findIndex(t => t.id === activeTab) ? <CheckCircle className="w-4 h-4" /> : index + 1}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">{tab.label}</span>
              {index < tabs.length - 1 && <div className="w-8 h-0.5 bg-gray-200 ml-4"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        {activeTab === 'basic' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Basic Store Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Name *</label>
                <input
                  type="text"
                  value={storeData.name}
                  onChange={(e) => setStoreData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your store name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Category *</label>
                <select 
                  value={storeData.category}
                  onChange={(e) => setStoreData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  <option value="fashion">Fashion & Clothing</option>
                  <option value="accessories">Accessories</option>
                  <option value="footwear">Footwear</option>
                  <option value="beauty">Beauty & Cosmetics</option>
                  <option value="home">Home & Living</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Description *</label>
              <textarea
                rows={4}
                value={storeData.description}
                onChange={(e) => setStoreData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your store, products, and what makes you unique..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setActiveTab('branding')}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Next: Branding
              </button>
            </div>
          </div>
        )}

        {activeTab === 'branding' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Branding & Media</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Store Logo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload your store logo</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 2MB (200x200px recommended)</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload('logo', e.target.files[0])}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="mt-2 inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200">
                    Choose File
                  </label>
                </div>
              </div>

              {/* Banner Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Store Banner</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload your store banner</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 5MB (1200x400px recommended)</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload('banner', e.target.files[0])}
                    className="hidden"
                    id="banner-upload"
                  />
                  <label htmlFor="banner-upload" className="mt-2 inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200">
                    Choose File
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={() => setActiveTab('basic')}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Next: Contact Details
              </button>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Contact Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Email *</label>
                <input
                  type="email"
                  value={storeData.email}
                  onChange={(e) => setStoreData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="business@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Phone *</label>
                <input
                  type="tel"
                  value={storeData.phone}
                  onChange={(e) => setStoreData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Address *</label>
              <textarea
                rows={3}
                value={storeData.address}
                onChange={(e) => setStoreData(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Enter your complete business address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-between">
              <button 
                onClick={() => setActiveTab('branding')}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              <button 
                onClick={() => setActiveTab('verification')}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Next: Verification
              </button>
            </div>
          </div>
        )}

        {activeTab === 'verification' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Account Verification</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Required Documents</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Valid CNIC or Passport</li>
                <li>• Business registration certificate (if applicable)</li>
                <li>• Bank account details for payments</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Identity Document</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Upload CNIC or Passport</p>
                  <input type="file" accept="image/*,.pdf" className="hidden" id="id-upload" />
                  <label htmlFor="id-upload" className="mt-2 inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200">
                    Choose File
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Registration (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Upload business certificate</p>
                  <input type="file" accept="image/*,.pdf" className="hidden" id="business-upload" />
                  <label htmlFor="business-upload" className="mt-2 inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200">
                    Choose File
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Save className="w-4 h-4" />
                Complete Setup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
