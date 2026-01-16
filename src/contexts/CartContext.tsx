'use client'

import { createContext, useContext, useReducer, ReactNode, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, 'quantity'>) => boolean
  removeItem: (id: string, size?: string, color?: string) => void
  updateQuantity: (id: string, quantity: number, size?: string, color?: string) => void
  clearCart: () => void
  isAuthenticated: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: { id: string; size?: string; color?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number; size?: string; color?: string } }
  | { type: 'CLEAR_CART' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { id, size, color } = action.payload
      const existingItemIndex = state.items.findIndex(
        item => item.id === id && item.size === size && item.color === color
      )

      let newItems: CartItem[]
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }]
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case 'REMOVE_ITEM': {
      const { id, size, color } = action.payload
      const newItems = state.items.filter(
        item => !(item.id === id && item.size === size && item.color === color)
      )

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity, size, color } = action.payload
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { id, size, color } })
      }

      const newItems = state.items.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuth()
  const [hasMounted, setHasMounted] = useState(false)
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  })

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Load cart from localStorage when user logs in
  useEffect(() => {
    // Only access localStorage after component mounts on client
    if (!hasMounted) return

    if (isAuthenticated && user) {
      const savedCart = localStorage.getItem(`cart_${user.id}`)
      if (savedCart) {
        try {
          const cartData = JSON.parse(savedCart)
          // Clear cart first, then restore items
          dispatch({ type: 'CLEAR_CART' })
          cartData.items.forEach((item: CartItem) => {
            const { quantity, ...itemWithoutQuantity } = item
            for (let i = 0; i < quantity; i++) {
              dispatch({ type: 'ADD_ITEM', payload: itemWithoutQuantity })
            }
          })
        } catch (error) {
          console.error('Error loading cart:', error)
        }
      }
    } else if (!isAuthenticated) {
      // Clear cart when user logs out
      dispatch({ type: 'CLEAR_CART' })
    }
  }, [hasMounted, isAuthenticated, user])

  // Save cart to localStorage when it changes (for authenticated users)
  useEffect(() => {
    // Only access localStorage after component mounts on client
    if (!hasMounted) return

    if (isAuthenticated && user && state.items.length > 0) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(state))
    }
  }, [state, hasMounted, isAuthenticated, user])

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    if (!isAuthenticated) {
      // This will be caught by the component calling addItem
      // Components should check isAuthenticated before calling and show their own login prompt
      return false
    }
    dispatch({ type: 'ADD_ITEM', payload: item })
    return true
  }

  const removeItem = (id: string, size?: string, color?: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, size, color } })
  }

  const updateQuantity = (id: string, quantity: number, size?: string, color?: string) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, size, color } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const value: CartContextType = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isAuthenticated,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
