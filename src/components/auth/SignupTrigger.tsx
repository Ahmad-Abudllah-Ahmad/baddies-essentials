'use client'

import { useState } from 'react'
import { RoleBasedSignup } from './RoleBasedSignup'

interface SignupTriggerProps {
  trigger: React.ReactNode
  className?: string
}

export function SignupTrigger({ trigger, className = '' }: SignupTriggerProps) {
  const [showSignup, setShowSignup] = useState(false)

  const handleRoleSelect = (role: 'customer' | 'brand') => {
    // Redirect to appropriate signup flow
    if (role === 'customer') {
      window.location.href = '/signup/customer'
    } else {
      window.location.href = '/signup/brand'
    }
  }

  return (
    <>
      <div className={className} onClick={() => setShowSignup(true)}>
        {trigger}
      </div>
      
      <RoleBasedSignup
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        onRoleSelect={handleRoleSelect}
      />
    </>
  )
}
