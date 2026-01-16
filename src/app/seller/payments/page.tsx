'use client'

import { useState } from 'react'
import { TrendingUp, DollarSign, CreditCard, Calendar, Download, MoreVertical, Eye, Plus, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function PaymentsPage() {
  const [timeRange, setTimeRange] = useState('30d')
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false)

  const paymentStats = [
    {
      title: 'Total Earnings',
      value: 'PKR 2,45,000',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Pending Payouts',
      value: 'PKR 45,600',
      change: '+8.2%',
      trend: 'up',
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      title: 'This Month',
      value: 'PKR 67,800',
      change: '+15.3%',
      trend: 'up',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Commission Rate',
      value: '8.5%',
      change: '0%',
      trend: 'neutral',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ]

  const transactions = [
    {
      id: 'TXN001',
      type: 'sale',
      amount: 4500,
      commission: 382.5,
      net: 4117.5,
      date: '2024-01-20',
      status: 'completed',
      customer: 'Ayesha Khan',
      orderId: 'ORD-2024-001'
    },
    {
      id: 'TXN002',
      type: 'sale',
      amount: 2800,
      commission: 238,
      net: 2562,
      date: '2024-01-19',
      status: 'completed',
      customer: 'Muhammad Ali',
      orderId: 'ORD-2024-002'
    },
    {
      id: 'TXN003',
      type: 'refund',
      amount: -1200,
      commission: -102,
      net: -1098,
      date: '2024-01-18',
      status: 'processed',
      customer: 'Fatima Ahmed',
      orderId: 'ORD-2024-003'
    },
    {
      id: 'TXN004',
      type: 'sale',
      amount: 6700,
      commission: 569.5,
      net: 6130.5,
      date: '2024-01-17',
      status: 'pending',
      customer: 'Hassan Sheikh',
      orderId: 'ORD-2024-004'
    }
  ]

  const payoutHistory = [
    {
      id: 'PAY001',
      amount: 125000,
      date: '2024-01-15',
      status: 'completed',
      method: 'Bank Transfer',
      reference: 'BT-2024-001'
    },
    {
      id: 'PAY002',
      amount: 98500,
      date: '2024-01-01',
      status: 'completed',
      method: 'JazzCash',
      reference: 'JC-2024-001'
    },
    {
      id: 'PAY003',
      amount: 156000,
      date: '2023-12-15',
      status: 'completed',
      method: 'Bank Transfer',
      reference: 'BT-2023-012'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'pending':
        return <Clock className="w-4 h-4 text-orange-500" />
      case 'processed':
        return <CheckCircle className="w-4 h-4 text-blue-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-red-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-orange-100 text-orange-800',
      processed: 'bg-blue-100 text-blue-800',
      failed: 'bg-red-100 text-red-800'
    }
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments & Earnings</h1>
          <p className="text-gray-600">Track your earnings, payouts, and transaction history</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button 
            onClick={() => setShowAddPaymentModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            <Plus className="w-4 h-4" />
            Add Payment Method
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                {stat.trend !== 'neutral' && (
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`w-4 h-4 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'} ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span className={`text-sm ml-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                )}
              </div>
              <div className={`p-3 rounded-lg bg-gray-50`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-pink-300 cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <CreditCard className="w-6 h-6 text-gray-600" />
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Primary</span>
            </div>
            <h4 className="font-medium text-gray-900">Bank Transfer</h4>
            <p className="text-sm text-gray-500">HBL - ****1234</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-pink-300 cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <CreditCard className="w-6 h-6 text-gray-600" />
            </div>
            <h4 className="font-medium text-gray-900">JazzCash</h4>
            <p className="text-sm text-gray-500">03XX-XXXXXXX</p>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-pink-300 cursor-pointer flex items-center justify-center">
            <div className="text-center">
              <CreditCard className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Add Payment Method</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Earning
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{transaction.orderId}</div>
                      <div className="text-sm text-gray-500">{transaction.customer}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${transaction.amount < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                      PKR {Math.abs(transaction.amount).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 capitalize">{transaction.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${transaction.commission < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                      PKR {Math.abs(transaction.commission).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${transaction.net < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      PKR {Math.abs(transaction.net).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(transaction.status)}
                      <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payout History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Payout History</h3>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 text-sm">
            Request Payout
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payout ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payoutHistory.map((payout) => (
                <tr key={payout.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payout.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    PKR {payout.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payout.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payout.reference}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(payout.status)}`}>
                      {payout.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payout.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Payment Method Modal */}
      {showAddPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Add Payment Method</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Bank Account</option>
                  <option>JazzCash</option>
                  <option>Easypaisa</option>
                  <option>Credit Card</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                <input type="text" placeholder="Enter account number" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                <input type="text" placeholder="Enter account holder name" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowAddPaymentModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setShowAddPaymentModal(false)
                  alert('Payment method added successfully!')
                }}
                className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Add Method
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
