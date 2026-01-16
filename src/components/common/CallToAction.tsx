'use client'

import { SignupTrigger } from '@/components/auth/SignupTrigger'

interface CallToActionProps {
  context: 'checkout' | 'wishlist' | 'brand-inquiry' | 'seller-onboard'
  children?: React.ReactNode
}

export function CallToAction({ context, children }: CallToActionProps) {
  const getContextMessage = () => {
    switch (context) {
      case 'checkout':
        return 'Sign up to complete your purchase and track orders'
      case 'wishlist':
        return 'Create an account to save your favorite items'
      case 'brand-inquiry':
        return 'Join as a customer to contact brands directly'
      case 'seller-onboard':
        return 'Ready to sell? Create your brand outlet'
      default:
        return 'Join Baddies Essentials today'
    }
  }

  const getButtonText = () => {
    switch (context) {
      case 'checkout':
        return 'Sign Up to Continue'
      case 'wishlist':
        return 'Save to Wishlist'
      case 'brand-inquiry':
        return 'Contact Brand'
      case 'seller-onboard':
        return 'Start Selling'
      default:
        return 'Join Now'
    }
  }

  return (
    <SignupTrigger
      trigger={
        <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
          {getButtonText()}
        </button>
      }
    />
  )
}
