'use client'

import { useState } from 'react'
import { Check, X, Eye, Calendar, Clock, User, Package, AlertCircle, CheckCircle } from 'lucide-react'

interface Sale {
  id: string
  storeName: string
  sellerName: string
  saleName: string
  description: string
  discountType: string
  discountValue: number
  startDate: string
  endDate: string
  theme: string
  status: string
  submittedAt: string
  estimatedRevenue: number
  productsCount: number
  autoLive: boolean
  approvedAt?: string
}

export default function SalesApprovalPage() {
  const [filter, setFilter] = useState('pending')
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null)

  const pendingSales = [
    {
      id: 'SALE-001',
      storeName: 'Fashion Store',
      sellerName: 'Ahmad Abdullah',
      saleName: 'Summer Mega Sale',
      description: 'Huge discounts on summer collection including dresses, shirts, and accessories',
      discountType: 'percentage',
      discountValue: 40,
      startDate: '2024-01-25',
      endDate: '2024-02-05',
      theme: 'summer',
      status: 'pending',
      submittedAt: '2024-01-20 10:30 AM',
      estimatedRevenue: 250000,
      productsCount: 45,
      autoLive: true
    },
    {
      id: 'SALE-002',
      storeName: 'Elite Boutique',
      sellerName: 'Fatima Khan',
      saleName: 'Winter Clearance',
      description: 'Clear out winter inventory with massive discounts',
      discountType: 'percentage',
      discountValue: 60,
      startDate: '2024-01-22',
      endDate: '2024-01-30',
      theme: 'winter',
      status: 'pending',
      submittedAt: '2024-01-19 2:15 PM',
      estimatedRevenue: 180000,
      productsCount: 32,
      autoLive: false
    },
    {
      id: 'SALE-003',
      storeName: 'Urban Style',
      sellerName: 'Hassan Ali',
      saleName: 'Independence Day Special',
      description: 'Celebrate Pakistan with green and white themed clothing',
      discountType: 'fixed',
      discountValue: 500,
      startDate: '2024-08-14',
      endDate: '2024-08-16',
      theme: 'independence',
      status: 'approved',
      submittedAt: '2024-01-18 9:45 AM',
      approvedAt: '2024-01-19 11:20 AM',
      estimatedRevenue: 150000,
      productsCount: 28,
      autoLive: true
    }
  ]

  const handleApprove = (saleId: string) => {
    // Handle approval logic
    alert(`Sale ${saleId} approved successfully!`)
  }

  const handleReject = (saleId: string) => {
    // Handle rejection logic
    alert(`Sale ${saleId} rejected.`)
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-orange-100 text-orange-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      live: 'bg-blue-100 text-blue-800'
    }
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800'
  }

  const filteredSales = pendingSales.filter(sale => {
    if (filter === 'all') return true
    return sale.status === filter
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Approval</h1>
          <p className="text-gray-600">Review and approve seller sale campaigns</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-orange-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Pending Approval</p>
              <p className="text-2xl font-bold text-gray-900">
                {pendingSales.filter(s => s.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Approved Today</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Rejected</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Package className="w-8 h-8 text-blue-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Live Sales</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex gap-2">
          {[
            { id: 'all', label: 'All Sales' },
            { id: 'pending', label: 'Pending' },
            { id: 'approved', label: 'Approved' },
            { id: 'rejected', label: 'Rejected' }
          ].map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === filterOption.id
                  ? 'bg-pink-100 text-pink-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sales List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Sale Campaigns</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredSales.map((sale) => (
            <div key={sale.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">{sale.saleName}</h4>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(sale.status)}`}>
                      {sale.status.toUpperCase()}
                    </span>
                    {sale.autoLive && (
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        AUTO-LIVE
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      {sale.storeName} by {sale.sellerName}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {sale.startDate} to {sale.endDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Package className="w-4 h-4 mr-2" />
                      {sale.productsCount} products
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{sale.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-medium">
                      Discount: {sale.discountValue}{sale.discountType === 'percentage' ? '%' : ' PKR'} off
                    </span>
                    <span className="text-gray-500">
                      Est. Revenue: PKR {sale.estimatedRevenue.toLocaleString()}
                    </span>
                    <span className="text-gray-500">
                      Submitted: {sale.submittedAt}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button 
                    onClick={() => setSelectedSale(sale)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  
                  {sale.status === 'pending' && (
                    <>
                      <button 
                        onClick={() => handleApprove(sale.id)}
                        className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                      >
                        <Check className="w-4 h-4" />
                        Approve
                      </button>
                      <button 
                        onClick={() => handleReject(sale.id)}
                        className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                      >
                        <X className="w-4 h-4" />
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Detail Modal */}
      {selectedSale && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Sale Details</h3>
              <button 
                onClick={() => setSelectedSale(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sale Name</label>
                  <p className="text-gray-900">{selectedSale.saleName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Store</label>
                  <p className="text-gray-900">{selectedSale.storeName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Seller</label>
                  <p className="text-gray-900">{selectedSale.sellerName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Theme</label>
                  <p className="text-gray-900 capitalize">{selectedSale.theme}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Discount</label>
                  <p className="text-gray-900">
                    {selectedSale.discountValue}{selectedSale.discountType === 'percentage' ? '%' : ' PKR'} off
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Duration</label>
                  <p className="text-gray-900">{selectedSale.startDate} to {selectedSale.endDate}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <p className="text-gray-900">{selectedSale.description}</p>
              </div>
              
              {selectedSale.status === 'pending' && (
                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => {
                      handleApprove(selectedSale.id)
                      setSelectedSale(null)
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Check className="w-4 h-4" />
                    Approve Sale
                  </button>
                  <button 
                    onClick={() => {
                      handleReject(selectedSale.id)
                      setSelectedSale(null)
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <X className="w-4 h-4" />
                    Reject Sale
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
