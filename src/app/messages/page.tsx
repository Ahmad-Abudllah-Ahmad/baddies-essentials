'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import {
    PaperAirplaneIcon,
    PaperClipIcon,
    FaceSmileIcon,
    ChevronLeftIcon,
    MagnifyingGlassIcon,
    EllipsisVerticalIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

export default function MessagesPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedChatId = searchParams.get('chatId')
    const selectedChat = selectedChatId ? Number(selectedChatId) : null

    const [messageInput, setMessageInput] = useState('')

    // Mock Data
    const chatsData = [
        {
            id: 1,
            user: 'Alice Smith',
            status: 'online',
            lastMsg: 'Hi, is this item still available?',
            time: '5m',
            unread: 2,
            avatar: null,
            messages: [
                { id: 1, sender: 'them', text: 'Hi! I saw the blue kurta you listed.', time: '2:15 PM' },
                { id: 2, sender: 'them', text: 'Hi, is this item still available?', time: '2:16 PM' },
            ]
        },
        {
            id: 2,
            user: 'Bob Jones',
            status: 'offline',
            lastMsg: 'Thanks for the quick delivery!',
            time: '2h',
            unread: 0,
            avatar: null,
            messages: [
                { id: 1, sender: 'me', text: 'Your order has been shipped!', time: '10:30 AM' },
                { id: 2, sender: 'me', text: 'Tracking ID: TCS-987654321', time: '10:30 AM' },
                { id: 3, sender: 'them', text: 'Thanks for the quick delivery!', time: '11:45 AM' },
            ]
        },
        {
            id: 3,
            user: 'Support Team',
            status: 'online',
            lastMsg: 'Your refund has been processed.',
            time: '1d',
            unread: 0,
            avatar: null,
            messages: [
                { id: 1, sender: 'me', text: 'Hi, I would like to request a refund for order #12345', time: '9:00 AM' },
                { id: 2, sender: 'them', text: 'Hello! We have received your refund request.', time: '9:15 AM' },
                { id: 3, sender: 'them', text: 'Your refund has been processed. Amount: PKR 4,500', time: '11:00 AM' },
                { id: 4, sender: 'them', text: 'It will reflect in your account within 3-5 business days.', time: '11:01 AM' },
            ]
        },
        {
            id: 4,
            user: 'Fashion Hub',
            status: 'offline',
            lastMsg: 'When will the new stock arrive?',
            time: '2d',
            unread: 0,
            avatar: null,
            messages: [
                { id: 1, sender: 'them', text: 'Hello! I am interested in bulk ordering.', time: '3:00 PM' },
                { id: 2, sender: 'me', text: 'Hi! We offer great discounts on bulk orders.', time: '3:30 PM' },
                { id: 3, sender: 'them', text: 'When will the new stock arrive?', time: '4:00 PM' },
            ]
        },
        {
            id: 5,
            user: 'Sarah Wilson',
            status: 'online',
            lastMsg: 'Can I change the shipping address?',
            time: '3d',
            unread: 0,
            avatar: null,
            messages: [
                { id: 1, sender: 'them', text: 'Hi, I made an order yesterday.', time: '1:00 PM' },
                { id: 2, sender: 'them', text: 'Can I change the shipping address?', time: '1:01 PM' },
                { id: 3, sender: 'me', text: 'Sure! Please share the new address.', time: '1:15 PM' },
            ]
        },
    ]

    const chats = chatsData.map(({ messages: _, ...chat }) => chat)

    const currentMessages = selectedChat
        ? chatsData.find(c => c.id === selectedChat)?.messages || []
        : []

    return (
        <div className="h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)] bg-slate-50 pt-6 pb-6 px-4 sm:px-6 lg:px-8 flex gap-6">

            {/* Sidebar - Chat List */}
            <div className={clsx(
                "bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col overflow-hidden transition-all duration-300 h-full",
                selectedChat ? "hidden lg:flex lg:w-96" : "w-full lg:w-96"
            )}>
                {/* Sidebar Header */}
                <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="lg:hidden p-2 -ml-2 rounded-full hover:bg-slate-50 text-slate-500">
                                <ChevronLeftIcon className="w-5 h-5" />
                            </Link>
                            <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
                        </div>
                        <div className="text-xs font-medium px-2 py-1 bg-violet-100 text-violet-700 rounded-full">
                            {chats.filter(c => c.unread > 0).length} New
                        </div>
                    </div>

                    <div className="relative">
                        <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all font-medium placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => router.push(`/messages?chatId=${chat.id}`)}
                            className={clsx(
                                "p-4 rounded-2xl cursor-pointer transition-all flex gap-4 group hover:bg-slate-50",
                                selectedChat === chat.id ? "bg-violet-50 shadow-sm ring-1 ring-violet-100" : "bg-transparent"
                            )}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                                    {chat.user.charAt(0)}
                                </div>
                                {chat.status === 'online' && (
                                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className={clsx("font-bold truncate", selectedChat === chat.id ? "text-violet-900" : "text-slate-900")}>
                                        {chat.user}
                                    </h3>
                                    <span className="text-xs text-slate-400 font-medium">{chat.time}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className={clsx("text-sm truncate pr-4", chat.unread > 0 ? "text-slate-900 font-semibold" : "text-slate-500")}>
                                        {chat.lastMsg}
                                    </p>
                                    {chat.unread > 0 && (
                                        <span className="min-w-[1.25rem] h-5 flex items-center justify-center bg-violet-600 text-white text-[10px] font-bold rounded-full px-1.5">
                                            {chat.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className={clsx(
                "flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex-col h-full",
                selectedChat ? "flex" : "hidden lg:flex"
            )}>
                {selectedChat ? (
                    <>
                        {/* Header */}
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white z-10">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => router.push('/messages')}
                                    className="lg:hidden p-2 -ml-2 rounded-full hover:bg-slate-50 text-slate-600"
                                >
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                                    {chats.find(c => c.id === selectedChat)?.user.charAt(0)}
                                </div>
                                <div>
                                    <h2 className="font-bold text-slate-900">{chats.find(c => c.id === selectedChat)?.user}</h2>
                                    <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href="/" className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">
                                    Back to Home
                                </Link>
                                <button className="p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900">
                                    <EllipsisVerticalIcon className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                            {currentMessages.map((msg) => (
                                <div key={msg.id} className={clsx("flex", msg.sender === 'me' ? "justify-end" : "justify-start")}>
                                    <div className={clsx(
                                        "max-w-[75%] rounded-2xl p-4 shadow-sm relative group",
                                        msg.sender === 'me'
                                            ? "bg-violet-600 text-white rounded-tr-none"
                                            : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
                                    )}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                        <span className={clsx(
                                            "text-[10px] opacity-70 mt-1 block text-right",
                                            msg.sender === 'me' ? "text-violet-100" : "text-slate-400"
                                        )}>
                                            {msg.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <div className="flex items-end gap-2 bg-slate-50 p-2 rounded-3xl border border-slate-200 focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-500/10 transition-all">
                                <button className="p-2 text-slate-400 hover:text-violet-600 transition-colors rounded-full hover:bg-white">
                                    <FaceSmileIcon className="w-6 h-6" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-violet-600 transition-colors rounded-full hover:bg-white">
                                    <PaperClipIcon className="w-6 h-6" />
                                </button>
                                <textarea
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-900 placeholder:text-slate-400 resize-none max-h-32 py-2.5"
                                    rows={1}
                                />
                                <button className="p-2.5 bg-violet-600 text-white rounded-full hover:bg-violet-700 shadow-lg shadow-violet-500/30 transition-all hover:scale-105 active:scale-95">
                                    <PaperAirplaneIcon className="w-5 h-5 -ml-0.5 mt-0.5 -rotate-45" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Empty State */
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50/30">
                        <div className="w-32 h-32 bg-violet-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                            <ChatBubbleLeftRightIcon className="w-16 h-16 text-violet-400 opacity-50" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Select a Conversation</h2>
                        <p className="text-slate-500 max-w-sm mx-auto">Choose a chat from the sidebar to start messaging directly with sellers or support.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
