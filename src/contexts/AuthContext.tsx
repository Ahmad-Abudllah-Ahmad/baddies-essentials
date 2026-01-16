'use client'

import { createContext, useContext, useReducer, useEffect, useState, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'customer' | 'seller' | 'admin'
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'LOGOUT' }

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
    default:
      return state
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false)
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  })

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    // Only access localStorage after component mounts on client
    if (!hasMounted) return

    // Check for existing auth token on load
    const token = localStorage.getItem('auth_token')
    if (token) {
      // Mock user data - in real app, validate token with API
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'customer',
      }
      dispatch({ type: 'SET_USER', payload: mockUser })
    } else {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }, [hasMounted])

  const login = async (email: string, _password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    try {
      // Mock login - replace with actual API call
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'customer',
      }
      localStorage.setItem('auth_token', 'mock_token')
      dispatch({ type: 'SET_USER', payload: mockUser })
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false })
      throw error
    }
  }

  const register = async (name: string, email: string, _password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      // Mock registration - replace with actual API call
      const mockUser: User = {
        id: '1',
        name,
        email,
        role: 'customer',
      }
      localStorage.setItem('auth_token', 'mock_token')
      dispatch({ type: 'SET_USER', payload: mockUser })
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false })
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    dispatch({ type: 'LOGOUT' })
  }

  const value: AuthContextType = {
    ...state,
    login,
    logout,
    register,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
