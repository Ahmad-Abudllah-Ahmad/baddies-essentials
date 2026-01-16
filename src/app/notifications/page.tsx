'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    BellIcon,
    CheckCircleIcon,
    ShoppingBagIcon,
    TagIcon,
    ClockIcon,
    ChevronLeftIcon
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'order', title: 'Order Shipped', desc: 'Your order #12345 has been shipped via TCS. Track it here.', time: '2 mins ago', unread: true },
        { id: 2, type: 'promo', title: 'New Arrival', desc: 'Check out the new summer collection! 20% off for early birds.', time: '1 hour ago', unread: true },
        { id: 3, type: 'sale', title: 'Flash Sale', desc: '50% off on all accessories. Sale ends in 2 hours!', time: '5 hours ago', unread: true },
        { id: 4, type: 'system', title: 'Account Security', desc: 'We noticed a login from a new device. Was this you?', time: '1 day ago', unread: false },
        { id: 5, type: 'order', title: 'Order Delivered', desc: 'Your order #12340 has been delivered. Please rate your experience.', time: '2 days ago', unread: false },
        { id: 6, type: 'promo', title: 'Weekend Special', desc: 'Free shipping on all orders above PKR 5000 this weekend.', time: '3 days ago', unread: false },
    ])

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, unread: false })))
    }

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, unread: false } : n))
    }

    const getIcon = (type: string) => {
        switch (type) {
            case 'order': return <ShoppingBagIcon className="w-6 h-6 text-blue-600" />
            case 'promo': return <TagIcon className="w-6 h-6 text-violet-600" />
            case 'sale': return <ClockIcon className="w-6 h-6 text-red-600" />
            default: return <BellIcon className="w-6 h-6 text-slate-600" />
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-white hover:shadow-sm transition-all text-slate-500 hover:text-slate-900">
                            <ChevronLeftIcon className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
                            <p className="text-slate-500 text-sm mt-1">Stay updated with your latest activities</p>
                        </div>
                    </div>
                    <button
                        onClick={markAllAsRead}
                        className="text-sm font-semibold text-violet-600 hover:text-violet-700 bg-violet-50 hover:bg-violet-100 px-4 py-2 rounded-full transition-colors"
                    >
                        Mark all as read
                    </button>
                </div>

                {/* List */}
                <div className="space-y-4">
                    {notifications.map((notification, idx) => (
                        <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => markAsRead(notification.id)}
                            className={clsx(
                                "group relative bg-white rounded-2xl p-6 transition-all duration-300 border border-transparent cursor-pointer",
                                notification.unread ? "shadow-lg shadow-violet-100 border-violet-100" : "shadow-sm hover:shadow-md hover:border-slate-200"
                            )}
                        >
                            <div className="flex gap-5">
                                {/* Icon */}
                                <div className={clsx(
                                    "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                                    notification.unread ? "bg-violet-50" : "bg-slate-100"
                                )}>
                                    {getIcon(notification.type)}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className={clsx("text-base font-bold pr-4", notification.unread ? "text-slate-900" : "text-slate-600")}>
                                            {notification.title}
                                        </h3>
                                        <span className="text-xs font-medium text-slate-400 whitespace-nowrap bg-slate-50 px-2 py-1 rounded-full">
                                            {notification.time}
                                        </span>
                                    </div>
                                    <p className={clsx("text-sm leading-relaxed", notification.unread ? "text-slate-700 font-medium" : "text-slate-500")}>
                                        {notification.desc}
                                    </p>
                                </div>

                                {/* Unread Indicator */}
                                {notification.unread && (
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2">
                                        <div className="h-2 w-2 rounded-full bg-violet-600 ring-4 ring-violet-50" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State (if needed in future logic) */}
                {notifications.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BellIcon className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">All caught up!</h3>
                        <p className="text-slate-500 mt-2">You have no new notifications at the moment.</p>
                    </div>
                )}

            </div>
        </div>
    )
}
