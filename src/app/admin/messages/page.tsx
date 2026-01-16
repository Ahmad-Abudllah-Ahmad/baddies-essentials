'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    MessageSquare,
    Search,
    Send,
    Inbox,
    Clock,
    CheckCircle,
    User,
    Store
} from 'lucide-react';

const mockMessages = [
    { id: 1, from: 'Ahmed Khan', type: 'customer', subject: 'Order delivery inquiry', preview: 'Hi, I wanted to ask about my order ORD-2024-156...', time: '2 hours ago', unread: true },
    { id: 2, from: 'Fashion Hub', type: 'seller', subject: 'Commission rate query', preview: 'We would like to discuss the current commission rates...', time: '4 hours ago', unread: true },
    { id: 3, from: 'Support Team', type: 'internal', subject: 'Weekly report ready', preview: 'The weekly analytics report is now available...', time: '1 day ago', unread: false },
    { id: 4, from: 'Fatima Ali', type: 'customer', subject: 'Return request', preview: 'I received the wrong size and would like to return...', time: '1 day ago', unread: false },
    { id: 5, from: 'Style Central', type: 'seller', subject: 'Product approval delay', preview: 'Our products have been pending for 3 days...', time: '2 days ago', unread: false },
];

const typeIcons: Record<string, any> = {
    customer: User,
    seller: Store,
    internal: MessageSquare,
};

const typeColors: Record<string, string> = {
    customer: 'bg-blue-100 text-blue-800',
    seller: 'bg-purple-100 text-purple-800',
    internal: 'bg-gray-100 text-gray-800',
};

export default function MessagesPage() {
    const [filter, setFilter] = useState('all');
    const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

    const filteredMessages = mockMessages.filter(msg =>
        filter === 'all' || msg.type === filter
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
                    <p className="text-gray-600 mt-1">Manage platform communications</p>
                </div>
                <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Compose
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                            <Inbox className="w-8 h-8 text-blue-500" />
                            <div>
                                <div className="text-2xl font-bold">156</div>
                                <p className="text-sm text-gray-500">Total Messages</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50">
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-red-600">12</div>
                        <p className="text-sm text-red-700">Unread Messages</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">89</div>
                        <p className="text-sm text-gray-500">From Customers</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">67</div>
                        <p className="text-sm text-gray-500">From Sellers</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                {['all', 'customer', 'seller', 'internal'].map((type) => (
                    <Button
                        key={type}
                        variant={filter === type ? 'default' : 'outline'}
                        onClick={() => setFilter(type)}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Button>
                ))}
            </div>

            {/* Messages List */}
            <Card>
                <CardHeader>
                    <CardTitle>Inbox</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="divide-y">
                        {filteredMessages.map((message) => {
                            const Icon = typeIcons[message.type];
                            return (
                                <div
                                    key={message.id}
                                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${message.unread ? 'bg-blue-50' : ''}`}
                                    onClick={() => setSelectedMessage(message.id)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-2 rounded-full ${typeColors[message.type]}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className={`font-medium ${message.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                                                        {message.from}
                                                    </span>
                                                    {message.unread && (
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-500">{message.time}</span>
                                            </div>
                                            <p className={`text-sm ${message.unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                                                {message.subject}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
