'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  UserIcon,
  BuildingStorefrontIcon,
  XMarkIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

interface RoleBasedSignupProps {
  isOpen: boolean
  onClose: () => void
  onRoleSelect: (role: 'customer' | 'brand') => void
}

export function RoleBasedSignup({ isOpen, onClose, onRoleSelect }: RoleBasedSignupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Join Baddies Essentials</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <p className="text-gray-600 mb-8 text-center">
            Choose how you want to join Pakistan's Digital Fashion Mall
          </p>

          {/* Role Selection */}
          <div className="space-y-4">
            {/* Customer Option */}
            <button
              onClick={() => onRoleSelect('customer')}
              className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserIcon className="h-12 w-12 text-primary-600 group-hover:text-primary-700" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Shop as Customer</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Browse and shop from 500+ brands
                  </p>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                      Search across all brands
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                      Track orders & wishlist
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                      Exclusive customer deals
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Brand Option */}
            <button
              onClick={() => onRoleSelect('brand')}
              className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BuildingStorefrontIcon className="h-12 w-12 text-primary-600 group-hover:text-primary-700" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Sell as Brand</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Create your brand outlet in our digital mall
                  </p>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                      Your own mini-store
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                      Manage products & sales
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                      Access to mall traffic
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
