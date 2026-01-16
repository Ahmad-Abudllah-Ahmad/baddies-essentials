'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  SparklesIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { products } from '@/data/products'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'New Arrivals', href: '/new' },
  { name: 'Women', href: '/women' },
  { name: 'Men', href: '/men' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'Sale', href: '/sale' },
]

export function Header() {
  const { user, isAuthenticated, logout } = useAuth()
  const { itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showMessages, setShowMessages] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedNotification, setSelectedNotification] = useState<{ id: number, title: string, desc: string, time: string, unread: boolean, fullDetails?: string } | null>(null)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const profileMenuRef = useRef<HTMLDivElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  // Search results based on query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase().trim()

    // Synonym Logic
    const isGeneric = ['cloths', 'clothes', 'clothing', 'products', 'wear', 'outfit', 'garment', 'apparel'].some(t => query.includes(t))

    // Shirt synonyms
    const isShirt = ['shirt', 'shirts', 'tshirt', 'tee', 'top'].some(t => query === t || query.endsWith(t))
    const shirtTerms = ['shirt', 'kurta', 'kameez', 'top', 'blouse', 'tunic']

    return products
      .filter(p => {
        // 1. Generic terms match everything (sorted by relevance/popularity implied by order)
        if (isGeneric) return true

        const name = p.name.toLowerCase()
        const brand = p.brand.toLowerCase()
        const category = p.category?.toLowerCase() || ''
        const tag = p.tag?.toLowerCase() || ''

        // 2. Direct match
        if (name.includes(query) || brand.includes(query) || category.includes(query) || tag.includes(query)) {
          return true
        }

        // 3. Synonym matching (e.g., "shirts" -> matches "Kurta")
        if (isShirt) {
          return shirtTerms.some(term => name.includes(term) || category.includes(term))
        }

        return false
      })
      .slice(0, 8) // Limit to 8 results
  }, [searchQuery])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSearch(false)
      setSearchQuery('')
    }
  }

  // Dummy Notification Count
  const unreadNotifications = 3
  const unreadMessages = 2

  // Handle scroll for sticky glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    setMounted(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close profile menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false)
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
      if (messageRef.current && !messageRef.current.contains(event.target as Node)) {
        setShowMessages(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [profileMenuRef])

  return (
    <>
      {/* Spacer to prevent content overlap - Adjusted height matches header + banner */}
      <div className="h-28 lg:h-32" />

      <div className="fixed top-0 inset-x-0 z-[100] w-full pointer-events-none transition-all duration-300">
        {/* Top Announcement Banner */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isScrolled ? -40 : 0, opacity: isScrolled ? 0 : 1 }}
          className="pointer-events-auto bg-slate-950 text-white text-center py-2 text-xs font-medium tracking-wide relative overflow-hidden h-10 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-indigo-600/50 opacity-20" />
          <p className="relative z-10 flex items-center justify-center gap-2">
            <SparklesIcon className="w-3 h-3 text-yellow-400" />
            Experience the Future of Fashion with AI Virtual Try-On
            <SparklesIcon className="w-3 h-3 text-yellow-400" />
          </p>
        </motion.div>

        <header className={clsx(
          "pointer-events-auto flex justify-center w-full transition-all duration-500 ease-in-out px-4",
          isScrolled ? "py-2" : "py-4"
        )}>
          <motion.nav
            layout
            initial={{ y: 0 }}
            className={clsx(
              "w-full max-w-7xl rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border relative z-50",
              isScrolled
                ? "glass bg-white/80 backdrop-blur-xl shadow-lg border-white/40 py-2.5 px-6"
                : "bg-white/50 backdrop-blur-md border-white/20 py-4 px-8 shadow-sm"
            )}
          >
            <div className="flex items-center justify-between">

              {/* Logo Section */}
              <div className="flex lg:flex-1 items-center gap-4">
                <Link href="/" className="group flex items-center gap-2">
                  <div className="relative w-8 h-8 md:w-10 md:h-10">
                    <div className="absolute inset-0 bg-violet-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                    <SparklesIcon className="relative z-10 w-6 h-6 md:w-8 md:h-8 text-violet-600" />
                  </div>
                  <span className="hidden sm:inline font-bold text-xl md:text-2xl tracking-tighter text-slate-900">
                    Mega<span className="text-violet-600">Mall</span>
                  </span>
                </Link>
              </div>



              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:gap-x-1 xl:gap-x-2 items-center bg-slate-100/50 rounded-full px-2 py-1 border border-slate-200/50 backdrop-blur-sm mx-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        "relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full",
                        isActive ? "text-slate-900 bg-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      )}
                    >
                      {item.name}
                      {item.name === 'New Arrivals' && (
                        <span className="absolute top-1 right-1 w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Right Side Actions */}
              <div className="flex flex-1 justify-end items-center gap-1 sm:gap-2">
                {/* Search - Visible on Mobile */}
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={clsx("p-2 sm:p-3 rounded-full hover:bg-slate-100 text-slate-600 transition-colors", showSearch && "bg-slate-100 text-slate-900")}
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>

                {/* Notifications */}
                <div className="relative" ref={notificationRef}>
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className={clsx("p-2 sm:p-3 rounded-full hover:bg-slate-100 text-slate-600 transition-colors relative", showNotifications && "bg-slate-100 text-slate-900")}
                  >
                    <BellIcon className="w-5 h-5" />
                    {unreadNotifications > 0 && (
                      <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white ring-1 ring-red-500/20" />
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-72 sm:w-80 transform rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden z-50 origin-top-right"
                      >
                        {mounted && isAuthenticated ? (
                          <>
                            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                              <p className="text-sm font-bold text-slate-900">Notifications</p>
                              <button className="text-xs text-violet-600 hover:text-violet-700 font-medium">Mark all as read</button>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                              {[
                                { id: 1, title: 'Order Shipped', desc: 'Your order #12345 has been shipped.', time: '2 mins ago', unread: true, fullDetails: 'Your order #12345 containing "Khaadi Blue Kurta" and "Silk Dupatta" has been shipped via TCS Express. Expected delivery: 3-5 business days. Tracking ID: TCS-987654321' },
                                { id: 2, title: 'New Arrival', desc: 'Check out the new summer collection!', time: '1 hour ago', unread: true, fullDetails: 'Exciting news! Our new Summer 2024 Collection is now live. Featuring over 200 new styles including lawn suits, casual wear, and accessories. Shop now and get 15% off on your first purchase from the new collection!' },
                                { id: 3, title: 'Flash Sale', desc: '50% off on all accessories ends soon.', time: '5 hours ago', unread: true, fullDetails: 'FLASH SALE ALERT! Get 50% off on all accessories including handbags, jewelry, scarves, and more. This offer is valid for the next 6 hours only. Use code FLASH50 at checkout. Don\'t miss out!' },
                              ].map((notification) => (
                                <div
                                  key={notification.id}
                                  onClick={() => setSelectedNotification(notification)}
                                  className={clsx("p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer", notification.unread ? "bg-white" : "bg-slate-50/50")}
                                >
                                  <div className="flex justify-between items-start mb-1">
                                    <p className={clsx("text-sm text-slate-900", notification.unread && "font-semibold")}>{notification.title}</p>
                                    <span className="text-[10px] text-slate-400">{notification.time}</span>
                                  </div>
                                  <p className="text-xs text-slate-600 line-clamp-2">{notification.desc}</p>
                                </div>
                              ))}
                            </div>
                            <Link
                              href="/notifications"
                              onClick={() => setShowNotifications(false)}
                              className="w-full block p-3 text-center text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors border-t border-slate-100"
                            >
                              View all notifications
                            </Link>
                          </>
                        ) : (
                          <div className="p-6 text-center">
                            <BellIcon className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                            <p className="text-sm font-medium text-slate-900 mb-1">Sign in to view notifications</p>
                            <p className="text-xs text-slate-500 mb-4">Stay updated with your orders and offers</p>
                            <Link
                              href="/login"
                              onClick={() => setShowNotifications(false)}
                              className="inline-block px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors"
                            >
                              Sign In
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Messages */}
                <div className="relative" ref={messageRef}>
                  <button
                    onClick={() => setShowMessages(!showMessages)}
                    className={clsx("p-2 sm:p-3 rounded-full hover:bg-slate-100 text-slate-600 transition-colors relative", showMessages && "bg-slate-100 text-slate-900")}
                  >
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                    {unreadMessages > 0 && (
                      <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-violet-600 rounded-full border-2 border-white" />
                    )}
                  </button>

                  {/* Messages Dropdown */}
                  <AnimatePresence>
                    {showMessages && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-72 sm:w-80 transform rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden z-50 origin-top-right"
                      >
                        {mounted && isAuthenticated ? (
                          <>
                            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                              <p className="text-sm font-bold text-slate-900">Messages</p>
                              <button className="text-xs text-violet-600 hover:text-violet-700 font-medium">New Message</button>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                              {[
                                { id: 1, user: 'Alice Smith', msg: 'Hi, is this item still available?', time: '5m', avatar: null, unread: true },
                                { id: 2, user: 'Bob Jones', msg: 'Thanks for the quick delivery!', time: '2h', avatar: null, unread: true },
                                { id: 3, user: 'Support Team', msg: 'Your refund has been processed.', time: '1d', avatar: null, unread: false },
                              ].map((msg) => (
                                <div
                                  key={msg.id}
                                  onClick={() => {
                                    setShowMessages(false);
                                    router.push(`/messages?chatId=${msg.id}`);
                                  }}
                                  className={clsx("p-3 flex items-start gap-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer", msg.unread ? "bg-white" : "bg-slate-50/50")}
                                >
                                  <div className="w-10 h-10 rounded-full bg-violet-100 flex-shrink-0 flex items-center justify-center text-violet-600 font-bold text-sm">
                                    {msg.user.charAt(0)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-0.5">
                                      <p className={clsx("text-sm text-slate-900 truncate", msg.unread && "font-bold")}>{msg.user}</p>
                                      <span className="text-[10px] text-slate-400 whitespace-nowrap">{msg.time}</span>
                                    </div>
                                    <p className={clsx("text-xs text-slate-600 truncate", msg.unread && "font-medium")}>{msg.msg}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <Link
                              href="/messages"
                              onClick={() => setShowMessages(false)}
                              className="w-full block p-3 text-center text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors border-t border-slate-100"
                            >
                              View all messages
                            </Link>
                          </>
                        ) : (
                          <div className="p-6 text-center">
                            <ChatBubbleOvalLeftEllipsisIcon className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                            <p className="text-sm font-medium text-slate-900 mb-1">Sign in to view messages</p>
                            <p className="text-xs text-slate-500 mb-4">Chat with sellers and support</p>
                            <Link
                              href="/login"
                              onClick={() => setShowMessages(false)}
                              className="inline-block px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors"
                            >
                              Sign In
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Cart */}
                <Link href="/cart" className="p-2 sm:p-3 rounded-full hover:bg-slate-100 text-slate-600 transition-colors relative mr-1 sm:mr-2">
                  <ShoppingBagIcon className="w-5 h-5" />
                  {mounted && itemCount > 0 && (
                    <span className="absolute top-1 right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-slate-900 rounded-full shadow-sm animate-in fade-in zoom-in duration-200">
                      {itemCount}
                    </span>
                  )}
                </Link>

                {/* Auth/Profile (Desktop Only) */}
                <div className="hidden lg:block relative" ref={profileMenuRef}>
                  {!mounted ? (
                    // Server/Initial Render: Placeholder to prevent hydration mismatch
                    <div className="w-[88px] h-[42px]" />
                  ) : isAuthenticated && user ? (
                    <>
                      <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer group"
                      >
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 p-0.5 shadow-sm group-hover:shadow-md transition-shadow">
                          {user.avatar ?
                            <Image src={user.avatar} alt={user.name} width={36} height={36} className="rounded-full bg-white object-cover" />
                            : <UserIcon className="w-full h-full p-2 text-white" />
                          }
                        </div>
                        <div className="text-left hidden xl:block">
                          <p className="text-xs font-bold text-slate-900 leading-none mb-0.5">{user.name.split(' ')[0]}</p>
                          <p className="text-[10px] text-slate-500 leading-none">Member</p>
                        </div>
                        <ChevronDownIcon className={clsx("w-4 h-4 text-slate-400 transition-transform duration-300", showProfileMenu && "rotate-180")} />
                      </button>

                      <AnimatePresence>
                        {showProfileMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-56 transform rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                          >
                            <div className="p-4 bg-slate-50 border-b border-slate-100">
                              <p className="text-sm font-bold text-slate-900">{user.name}</p>
                              <p className="text-xs text-slate-500 truncate">{user.email}</p>
                            </div>
                            <div className="p-2 space-y-1">
                              <Link href="/profile" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors">
                                <UserIcon className="w-4 h-4" /> Profile
                              </Link>
                              <Link href="/orders" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors">
                                <ShoppingBagIcon className="w-4 h-4" /> Orders
                              </Link>
                              <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors">
                                <Cog6ToothIcon className="w-4 h-4" /> Settings
                              </Link>
                            </div>
                            <div className="p-2 border-t border-slate-100">
                              <button
                                onClick={logout}
                                className="flex w-full items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
                              >
                                <ArrowRightOnRectangleIcon className="w-4 h-4" /> Sign out
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href="/login" className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-0.5 transition-all active:scale-95 active:translate-y-0 whitespace-nowrap">
                      Sign In
                    </Link>
                  )}
                </div>

                {/* Mobile Menu Button - Moved Here */}
                <div className="flex lg:hidden ml-2 relative z-50">
                  <button
                    type="button"
                    className="p-2.5 text-slate-700 bg-white rounded-full shadow-md border border-slate-100 hover:bg-slate-50 active:scale-95 transition-all"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Search Bar Overlay - Collapsible */}
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  ref={searchRef}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="absolute inset-x-0 top-full mt-2 bg-white rounded-2xl shadow-xl overflow-hidden z-40 border border-slate-100 mx-4"
                >
                  <form onSubmit={handleSearchSubmit} className="p-4 relative">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for products, brands, or categories..."
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-900 placeholder:text-slate-400"
                      autoFocus
                    />
                    <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-7 top-7 -translate-y-1/2" />
                    <button
                      type="button"
                      onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                      className="absolute right-7 top-7 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200 text-slate-400 transition-colors"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Search Results */}
                  {searchQuery.trim() && (
                    <div className="border-t border-slate-100">
                      {searchResults.length > 0 ? (
                        <>
                          <p className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50">
                            {searchResults.length} Results for &quot;{searchQuery}&quot;
                          </p>
                          <div className="max-h-96 overflow-y-auto">
                            {searchResults.map((product) => (
                              <Link
                                key={product.id}
                                href={`/product/${product.id}`}
                                onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                                className="flex items-center gap-4 p-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                              >
                                <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-slate-900 truncate">{product.name}</p>
                                  <p className="text-sm text-slate-500">{product.brand}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="font-bold text-slate-900">PKR {product.price.toLocaleString()}</p>
                                  {product.originalPrice && product.originalPrice > product.price && (
                                    <p className="text-xs text-red-500 line-through">PKR {product.originalPrice.toLocaleString()}</p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <Link
                            href={`/search?q=${encodeURIComponent(searchQuery)}`}
                            onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                            className="block p-3 text-center text-sm font-medium text-violet-600 hover:bg-violet-50 transition-colors border-t border-slate-100"
                          >
                            View all results for &quot;{searchQuery}&quot; →
                          </Link>
                        </>
                      ) : (
                        <div className="p-6 text-center">
                          <MagnifyingGlassIcon className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                          <p className="text-sm text-slate-500">No products found for &quot;{searchQuery}&quot;</p>
                          <p className="text-xs text-slate-400 mt-1">Try a different search term</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quick Suggestions - only show when no search query */}
                  {!searchQuery.trim() && (
                    <div className="p-4 pt-0 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-3">Trending Now</p>
                      <div className="flex flex-wrap gap-2">
                        {['Summer Sale', 'Kurtas', 'Lawn Suits', 'Watches', 'Handbags'].map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => setSearchQuery(tag)}
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-violet-100 hover:text-violet-600 transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] lg:hidden"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[201] w-full max-w-sm overflow-y-auto bg-white/90 backdrop-blur-2xl shadow-2xl p-6 border-l border-white/20"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-xl font-bold text-slate-900 tracking-tight">Mega<span className="text-violet-600">Mall</span></span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-full p-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-xl px-3 py-4 text-lg font-semibold leading-7 text-slate-900 hover:bg-violet-50 hover:text-violet-600 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    {mounted && isAuthenticated ? (
                      <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-lg">
                          {user?.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{user?.name}</p>
                          <button onClick={logout} className="text-sm text-red-500 font-medium">Log out</button>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href="/login"
                        className="flex items-center justify-center w-full rounded-full bg-slate-900 px-3 py-4 text-base font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Detail Modal */}
      <AnimatePresence>
        {selectedNotification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedNotification(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2 py-1 bg-violet-100 text-violet-700 text-xs font-bold rounded-full mb-2">
                      {selectedNotification.time}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{selectedNotification.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedNotification(null)}
                    className="p-2 rounded-full hover:bg-white/80 text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed">{selectedNotification.fullDetails || selectedNotification.desc}</p>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="flex-1 px-4 py-2.5 bg-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-300 transition-colors"
                >
                  Dismiss
                </button>
                <Link
                  href={selectedNotification.title === 'Order Shipped' ? '/orders' : selectedNotification.title === 'Flash Sale' ? '/sale' : '/new'}
                  onClick={() => setSelectedNotification(null)}
                  className="flex-1 px-4 py-2.5 bg-violet-600 text-white font-medium rounded-xl hover:bg-violet-700 transition-colors text-center"
                >
                  {selectedNotification.title === 'Order Shipped' ? 'Track Order' : 'Shop Now'}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
