'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    CreditCard,
    Search,
    Download,
    Eye,
    CheckCircle,
    XCircle,
    Clock,
    DollarSign,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

const mockPayments = [
    { id: 'PAY-001', order: 'ORD-2024-890', seller: 'Fashion Hub', amount: 45000, commission: 4500, status: 'completed', method: 'Bank Transfer', date: '2024-01-16' },
    { id: 'PAY-002', order: 'ORD-2024-891', seller: 'Style Central', amount: 28000, commission: 2800, status: 'pending', method: 'JazzCash', date: '2024-01-16' },
    { id: 'PAY-003', order: 'ORD-2024-892', seller: 'Trendy Wear', amount: 15000, commission: 1500, status: 'completed', method: 'Easypaisa', date: '2024-01-15' },
    { id: 'PAY-004', order: 'ORD-2024-893', seller: 'Kids Corner', amount: 8500, commission: 850, status: 'failed', method: 'Bank Transfer', date: '2024-01-15' },
    { id: 'PAY-005', order: 'ORD-2024-894', seller: 'Urban Style', amount: 62000, commission: 6200, status: 'processing', method: 'Bank Transfer', date: '2024-01-14' },
];

const statusColors: Record<string, string> = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    failed: 'bg-red-100 text-red-800',
};

export default function PaymentsPage() {
    const [filter, setFilter] = useState('all');

    const filteredPayments = mockPayments.filter(payment =>
        filter === 'all' || payment.status === filter
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
                    <p className="text-gray-600 mt-1">Manage seller payouts and commissions</p>
                </div>
                <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Export Payments
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Total Processed</p>
                                <div className="text-2xl font-bold">PKR 28.4M</div>
                            </div>
                            <DollarSign className="w-8 h-8 text-green-500" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Platform Commission</p>
                                <div className="text-2xl font-bold">PKR 2.84M</div>
                            </div>
                            <div className="flex items-center text-green-600">
                                <ArrowUpRight className="w-4 h-4" />
                                <span className="text-sm">+15%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-yellow-600">12</div>
                        <p className="text-sm text-gray-500">Pending Payouts</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-red-600">3</div>
                        <p className="text-sm text-gray-500">Failed Transactions</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                {['all', 'completed', 'pending', 'processing', 'failed'].map((status) => (
                    <Button
                        key={status}
                        variant={filter === status ? 'default' : 'outline'}
                        onClick={() => setFilter(status)}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </Button>
                ))}
            </div>

            {/* Payments Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Payments</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4">Payment ID</th>
                                    <th className="text-left py-3 px-4">Order</th>
                                    <th className="text-left py-3 px-4">Seller</th>
                                    <th className="text-left py-3 px-4">Amount</th>
                                    <th className="text-left py-3 px-4">Commission</th>
                                    <th className="text-left py-3 px-4">Method</th>
                                    <th className="text-left py-3 px-4">Status</th>
                                    <th className="text-left py-3 px-4">Date</th>
                                    <th className="text-left py-3 px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPayments.map((payment) => (
                                    <tr key={payment.id} className="border-b hover:bg-gray-50">
                                        <td className="py-4 px-4 font-medium">{payment.id}</td>
                                        <td className="py-4 px-4">{payment.order}</td>
                                        <td className="py-4 px-4">{payment.seller}</td>
                                        <td className="py-4 px-4">PKR {payment.amount.toLocaleString()}</td>
                                        <td className="py-4 px-4 text-green-600">PKR {payment.commission.toLocaleString()}</td>
                                        <td className="py-4 px-4">{payment.method}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[payment.status]}`}>
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-500">{payment.date}</td>
                                        <td className="py-4 px-4">
                                            <Button variant="ghost" size="sm">
                                                <Eye className="w-4 h-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
