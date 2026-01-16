'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    AlertTriangle,
    Search,
    Eye,
    CheckCircle,
    XCircle,
    Clock,
    MessageSquare
} from 'lucide-react';

const mockDisputes = [
    { id: 'DSP-001', order: 'ORD-2024-156', customer: 'Ahmed Khan', seller: 'Fashion Hub', reason: 'Product not as described', status: 'open', priority: 'high', date: '2024-01-15' },
    { id: 'DSP-002', order: 'ORD-2024-189', customer: 'Fatima Ali', seller: 'Style Central', reason: 'Delayed delivery', status: 'in_progress', priority: 'medium', date: '2024-01-14' },
    { id: 'DSP-003', order: 'ORD-2024-201', customer: 'Hassan Raza', seller: 'Trendy Wear', reason: 'Wrong size received', status: 'resolved', priority: 'low', date: '2024-01-13' },
    { id: 'DSP-004', order: 'ORD-2024-215', customer: 'Ayesha Malik', seller: 'Kids Corner', reason: 'Damaged product', status: 'open', priority: 'high', date: '2024-01-16' },
];

const statusColors: Record<string, string> = {
    open: 'bg-red-100 text-red-800',
    in_progress: 'bg-yellow-100 text-yellow-800',
    resolved: 'bg-green-100 text-green-800',
};

const priorityColors: Record<string, string> = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500',
};

export default function DisputesPage() {
    const [filter, setFilter] = useState('all');

    const filteredDisputes = mockDisputes.filter(dispute =>
        filter === 'all' || dispute.status === filter
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Disputes Management</h1>
                    <p className="text-gray-600 mt-1">Resolve customer and seller disputes</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="border-red-200 bg-red-50">
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-red-600">5</div>
                        <p className="text-sm text-red-700">Open Disputes</p>
                    </CardContent>
                </Card>
                <Card className="border-yellow-200 bg-yellow-50">
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-yellow-600">3</div>
                        <p className="text-sm text-yellow-700">In Progress</p>
                    </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-green-600">156</div>
                        <p className="text-sm text-green-700">Resolved</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">2.3 days</div>
                        <p className="text-sm text-gray-500">Avg Resolution Time</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                {['all', 'open', 'in_progress', 'resolved'].map((status) => (
                    <Button
                        key={status}
                        variant={filter === status ? 'default' : 'outline'}
                        onClick={() => setFilter(status)}
                    >
                        {status === 'all' ? 'All' : status.replace('_', ' ').charAt(0).toUpperCase() + status.replace('_', ' ').slice(1)}
                    </Button>
                ))}
            </div>

            {/* Disputes List */}
            <div className="space-y-4">
                {filteredDisputes.map((dispute) => (
                    <Card key={dispute.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className={`w-2 h-full rounded-full ${priorityColors[dispute.priority]}`} />
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold">{dispute.id}</span>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[dispute.status]}`}>
                                                {dispute.status.replace('_', ' ')}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-2">{dispute.reason}</p>
                                        <div className="flex gap-4 text-sm text-gray-500">
                                            <span>Order: {dispute.order}</span>
                                            <span>Customer: {dispute.customer}</span>
                                            <span>Seller: {dispute.seller}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-sm text-gray-500">{dispute.date}</span>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm">
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            View Details
                                        </Button>
                                        {dispute.status !== 'resolved' && (
                                            <Button size="sm">
                                                <CheckCircle className="w-4 h-4 mr-2" />
                                                Resolve
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
