'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  TrashIcon,
  PlusIcon,
  MinusIcon,
  ShoppingBagIcon,
  ArrowLeftIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'

export default function CartPage() {
  const { items, updateQuantity, removeItem, total: cartTotal, itemCount } = useCart()
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-dark rounded-3xl p-8 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-6">
            <ShoppingBagIcon className="h-10 w-10 text-violet-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Please login to view your cart</h3>
          <p className="text-slate-400 mb-8">You need to be logged in to access your shopping cart and complete your purchase.</p>
          <Link
            href="/login"
            className="btn btn-primary w-full py-4 text-lg shadow-violet-500/25"
          >
            Login to Continue
          </Link>
        </motion.div>
      </div>
    )
  }

  const subtotal = cartTotal
  const shipping = 299 // Default shipping cost
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Shopping Cart</h1>
            <p className="text-slate-500 font-medium">
              Review your items before checkout
            </p>
          </div>
          <div className="hidden sm:block text-right">
            <span className="block text-3xl font-black text-violet-600">{itemCount}</span>
            <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Items</span>
          </div>
        </div>

        {itemCount === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] shadow-xl border border-slate-100"
          >
            <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingBagIcon className="h-12 w-12 text-violet-200" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h3>
            <p className="text-slate-500 mb-8 max-w-xs text-center mx-auto">Looks like you haven't added anything to your cart yet.</p>
            <Link
              href="/"
              className="btn btn-outline border-slate-200 hover:border-violet-600 hover:text-violet-600 px-8"
            >
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">

            {/* Cart Items List */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence>
                {items.map((item, idx) => (
                  <motion.div
                    key={`${item.id}-${item.size || 'default'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 flex gap-4 sm:gap-6 relative overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h3>
                            <p className="text-violet-600 font-bold text-lg">Rs. {item.price.toLocaleString()}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-slate-300 hover:text-red-500 transition-colors p-2 -mr-2 -mt-2"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.size && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-xs font-semibold text-slate-600 border border-slate-100">
                              Size: {item.size}
                            </span>
                          )}
                          {item.color && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-xs font-semibold text-slate-600 border border-slate-100">
                              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color.toLowerCase() }} />
                              {item.color}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100 shadow-inner">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                            disabled={item.quantity <= 1}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-all font-bold"
                          >
                            <MinusIcon className="h-3 w-3" />
                          </button>
                          <span className="w-10 text-center text-sm font-bold text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-600 shadow-sm text-white hover:bg-violet-700 transition-all font-bold"
                          >
                            <PlusIcon className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-slate-500 hidden sm:block">
                          Total: <span className="text-slate-900">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary Sidebar */}
            <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="glass rounded-[2.5rem] p-8 mt-6 lg:mt-0 border border-white/50 shadow-2xl shadow-violet-500/5">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    Order Summary
                    <span className="text-xs font-normal text-slate-400 bg-white px-2 py-1 rounded-full border border-slate-100">Receipt</span>
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-900">Rs. {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Shipping Estimate</span>
                      <span className="font-semibold text-slate-900">Rs. {shipping.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Tax Estimate</span>
                      <span className="test-xs text-green-600 bg-green-50 px-2 rounded-full">Calculated at Checkout</span>
                    </div>

                    <div className="border-t border-dashed border-slate-200 my-4 pt-4">
                      <div className="flex justify-between items-end">
                        <span className="text-lg font-bold text-slate-900">Total</span>
                        <div className="text-right">
                          <span className="block text-2xl font-black text-violet-600 leading-none">Rs. {total.toLocaleString()}</span>
                          <span className="text-[10px] text-slate-400">Determined at checkout</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <button
                      onClick={() => router.push('/checkout')}
                      className="btn btn-primary w-full py-4 text-lg shadow-violet-500/25 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Proceed to Checkout <ArrowLeftIcon className="w-5 h-5 rotate-180 transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>

                    <button className="w-full py-3 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                      <span className="text-xl"></span> Pay with Apple Pay
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <ShieldCheckIcon className="w-4 h-4" />
                    <span>Secure SSL Encryption</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/"
                    className="text-sm font-semibold text-slate-500 hover:text-violet-600 transition-colors inline-flex items-center gap-1"
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
