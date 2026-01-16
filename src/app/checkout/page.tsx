'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  CreditCardIcon,
  BanknotesIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  TruckIcon,
  CheckCircleIcon,
  ClockIcon,
  BoltIcon,
  EyeSlashIcon,
  MapPinIcon,
  LockClosedIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import Link from 'next/link'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    province: 'Punjab'
  })

  const [deliveryType, setDeliveryType] = useState('standard')
  const [shippingType, setShippingType] = useState('regular')
  const [privacyShipping, setPrivacyShipping] = useState(false)

  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  })

  // Confetti effect state could go here, but keeping it simple with Framer Motion

  // Delivery type charges
  const deliveryCharges = {
    standard: 0,
    express: 299,
    overnight: 599
  }

  // Shipping type charges
  const shippingCharges = {
    regular: 199,
    premium: 399,
    fragile: 499
  }

  // Privacy shipping additional charge
  const privacyCharge = privacyShipping ? 150 : 0

  const baseShippingCost = total > 5000 ? 0 : shippingCharges[shippingType as keyof typeof shippingCharges]
  const deliveryCost = deliveryCharges[deliveryType as keyof typeof deliveryCharges]
  const totalShippingCost = baseShippingCost + deliveryCost + privacyCharge
  const tax = Math.round(total * 0.17) // 17% tax
  const finalTotal = total + totalShippingCost + tax

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCardIcon,
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'jazzcash',
      name: 'JazzCash',
      icon: DevicePhoneMobileIcon,
      description: 'Pay with JazzCash mobile wallet'
    },
    {
      id: 'easypaisa',
      name: 'EasyPaisa',
      icon: DevicePhoneMobileIcon,
      description: 'Pay with EasyPaisa mobile wallet'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: BanknotesIcon,
      description: 'Pay when you receive your order'
    }
  ]

  const [orderId, setOrderId] = useState('')

  const generateOrderId = () => {
    const timestamp = Date.now().toString()
    const random = Math.random().toString(36).substring(2, 8).toUpperCase()
    return `FP${timestamp.slice(-6)}${random}`
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)

    // Generate order ID
    const newOrderId = generateOrderId()
    setOrderId(newOrderId)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setOrderPlaced(true)
    clearCart()

    // Store order in localStorage for tracking
    const orderData = {
      id: newOrderId,
      items,
      total: finalTotal,
      shippingInfo,
      deliveryType,
      shippingType,
      privacyShipping,
      paymentMethod,
      timestamp: new Date().toISOString(),
      status: 'confirmed'
    }

    const existingOrders = JSON.parse(localStorage.getItem('user_orders') || '[]')
    existingOrders.push(orderData)
    localStorage.setItem('user_orders', JSON.stringify(existingOrders))

    // Redirect to success page after 5 seconds
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-dark rounded-[2.5rem] p-10 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-6">
            <BanknotesIcon className="h-10 w-10 text-violet-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Checkout is empty</h1>
          <p className="text-slate-400 mb-8">Add something to your cart!</p>
          <button
            onClick={() => router.push('/')}
            className="btn btn-primary w-full py-4 text-lg"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-2xl p-8 max-w-md w-full mx-4 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircleIcon className="h-12 w-12 text-green-500" />
          </motion.div>

          <h1 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed!</h1>
          <p className="text-slate-600 mb-8">
            Thank you for shopping with us. Your fashion upgrade is on its way.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order ID</p>
            <p className="text-2xl font-mono font-bold text-slate-900">{orderId}</p>
            <p className="text-xs text-slate-400 mt-2">Save this ID to track your order</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center bg-violet-50 p-4 rounded-xl border border-violet-100">
              <span className="text-sm text-violet-700 font-medium">Total Paid</span>
              <span className="text-lg font-bold text-violet-900">Rs. {finalTotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center text-sm text-slate-500">
              <span>Estimated Delivery</span>
              <span className="font-semibold text-slate-900">
                {deliveryType === 'overnight' ? '1 business day' :
                  deliveryType === 'express' ? '2-3 business days' : '5-7 business days'}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-400 animate-pulse">Redirecting to homepage...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Checkout</h1>
          <p className="text-slate-500 mt-2 font-medium">Secured by industry standard encryption</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Forms */}
          <div className="lg:col-span-7 space-y-8">
            {/* Shipping Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">1</div>
                <h2 className="text-xl font-bold text-slate-900">Shipping Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={shippingInfo.firstName}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={shippingInfo.lastName}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Address</label>
                  <textarea
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    placeholder="House/Flat No, Street, Area"
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none resize-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">City</label>
                  <select
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none"
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Gujranwala">Gujranwala</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Postal Code</label>
                  <input
                    type="text"
                    placeholder="e.g. 54000"
                    value={shippingInfo.postalCode}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>
            </motion.div>

            {/* Delivery Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">2</div>
                <h2 className="text-xl font-bold text-slate-900">Delivery Method</h2>
              </div>

              {/* Delivery Speed */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Speed</h3>
                <div className="space-y-3">
                  {[
                    { id: 'standard', icon: TruckIcon, title: 'Standard Delivery', time: '5-7 business days', price: 0 },
                    { id: 'express', icon: ClockIcon, title: 'Express Delivery', time: '2-3 business days', price: 299 },
                    { id: 'overnight', icon: BoltIcon, title: 'Overnight Delivery', time: 'Next business day', price: 599 }
                  ].map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setDeliveryType(option.id)}
                      className={clsx(
                        "group relative flex items-center justify-between p-4 rounded-2xl cursor-pointer border-2 transition-all duration-200",
                        deliveryType === option.id
                          ? "border-violet-500 bg-violet-50"
                          : "border-slate-100 hover:border-violet-200"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={clsx(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                          deliveryType === option.id ? "bg-violet-100 text-violet-600" : "bg-slate-100 text-slate-500 group-hover:text-violet-500"
                        )}>
                          <option.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{option.title}</p>
                          <p className="text-sm text-slate-500">{option.time}</p>
                        </div>
                      </div>
                      <span className={clsx("font-bold", deliveryType === option.id ? "text-violet-700" : "text-slate-900")}>
                        {option.price === 0 ? 'Free' : `Rs. ${option.price}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Type */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Handling</h3>
                <div className="space-y-3">
                  {[
                    { id: 'regular', icon: TruckIcon, title: 'Regular Handling', desc: 'Standard packaging', price: 199 },
                    { id: 'premium', icon: ShieldCheckIcon, title: 'Premium Handling', desc: 'Extra protection + tracking', price: 399 },
                    { id: 'fragile', icon: ShieldCheckIcon, title: 'Fragile Handling', desc: 'Special care for delicate items', price: 499 }
                  ].map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setShippingType(option.id)}
                      className={clsx(
                        "group relative flex items-center justify-between p-4 rounded-2xl cursor-pointer border-2 transition-all duration-200",
                        shippingType === option.id
                          ? "border-violet-500 bg-violet-50"
                          : "border-slate-100 hover:border-violet-200"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={clsx(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                          shippingType === option.id ? "bg-violet-100 text-violet-600" : "bg-slate-100 text-slate-500 group-hover:text-violet-500"
                        )}>
                          <option.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{option.title}</p>
                          <p className="text-sm text-slate-500">{option.desc}</p>
                        </div>
                      </div>
                      <span className={clsx("font-bold", shippingType === option.id ? "text-violet-700" : "text-slate-900")}>
                        Rs. {option.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Shipping */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <EyeSlashIcon className="h-6 w-6 text-slate-600" />
                    <div>
                      <p className="font-bold text-slate-900">Privacy-Maintained Shipping</p>
                      <p className="text-sm text-slate-500">Discreet packaging without branding</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-slate-900">+ Rs. 150</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacyShipping}
                        onChange={(e) => setPrivacyShipping(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-violet-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">3</div>
                <h2 className="text-xl font-bold text-slate-900">Payment</h2>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={clsx(
                      "flex items-center gap-4 p-4 rounded-2xl cursor-pointer border-2 transition-all",
                      paymentMethod === method.id
                        ? "border-violet-500 bg-violet-50"
                        : "border-slate-100 hover:border-slate-200"
                    )}
                  >
                    <div className={clsx(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      paymentMethod === method.id ? "bg-white shadow-sm" : "bg-slate-100"
                    )}>
                      <method.icon className={clsx("w-6 h-6", paymentMethod === method.id ? "text-violet-600" : "text-slate-500")} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{method.name}</p>
                      <p className="text-sm text-slate-500">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Details Form */}
              <AnimatePresence>
                {paymentMethod === 'card' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-6 overflow-hidden"
                  >
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            value={cardInfo.number}
                            onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
                          />
                          <CreditCardIcon className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                          <div className="absolute right-4 top-3.5 flex gap-2">
                            {/* Icons for Visa/Mastercard could live here */}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Expiry</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={cardInfo.expiry}
                            onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">CVV</label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="123"
                              value={cardInfo.cvv}
                              onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
                            />
                            <LockClosedIcon className="absolute right-4 top-3.5 h-4 w-4 text-slate-400" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          value={cardInfo.name}
                          onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-[2.5rem] p-8 border border-white/50 shadow-2xl shadow-violet-500/10"
              >
                <h2 className="text-2xl font-black text-slate-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-8">
                  {items.map((item, index) => (
                    <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-slate-100 relative overflow-hidden flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 truncate">{item.name}</h3>
                        <p className="text-sm text-slate-500">
                          {item.quantity} x <span className="text-slate-900">Rs. {item.price.toLocaleString()}</span>
                        </p>
                        {(item.size || item.color) && (
                          <p className="text-xs text-slate-400 mt-0.5">
                            {item.size} {item.color ? `• ${item.color}` : ''}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-900">Rs. {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery</span>
                    <span className="font-semibold text-slate-900">
                      {deliveryCost === 0 ? 'Free' : `Rs. ${deliveryCost}`}
                    </span>
                  </div>
                  {(baseShippingCost > 0 || shippingType !== 'regular') && (
                    <div className="flex justify-between text-slate-600">
                      <span>Handling</span>
                      <span className="font-semibold text-slate-900">Rs. {baseShippingCost}</span>
                    </div>
                  )}
                  {privacyCharge > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Privacy</span>
                      <span className="font-semibold text-slate-900">Rs. {privacyCharge}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Tax (17%)</span>
                    <span className="font-semibold text-slate-900">Rs. {tax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 mt-6 text-white">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-slate-400">Total Amount</span>
                    <span className="text-3xl font-black">Rs. {finalTotal.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-slate-500 text-right">Including all taxes & duties</p>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full mt-6 btn btn-primary py-5 text-xl shadow-lg shadow-violet-500/25 group relative overflow-hidden"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Confirm Order <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
