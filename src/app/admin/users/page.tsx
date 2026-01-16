'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Users as UsersIcon,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Calendar,
    ShoppingBag,
    Ban,
    CheckCircle
} from 'lucide-react';

const mockUsers = [
    { id: 1, name: 'Ahmed Khan', email: 'ahmed@example.com', phone: '+92 300 1234567', orders: 15, spent: 45000, status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Fatima Ali', email: 'fatima@example.com', phone: '+92 321 9876543', orders: 8, spent: 28000, status: 'active', joined: '2024-02-20' },
    { id: 3, name: 'Hassan Raza', email: 'hassan@example.com', phone: '+92 333 5551234', orders: 3, spent: 12000, status: 'inactive', joined: '2024-03-10' },
    { id: 4, name: 'Ayesha Malik', email: 'ayesha@example.com', phone: '+92 345 7778899', orders: 22, spent: 78000, status: 'active', joined: '2023-12-05' },
    { id: 5, name: 'Bilal Ahmed', email: 'bilal@example.com', phone: '+92 311 2223344', orders: 0, spent: 0, status: 'suspended', joined: '2024-04-01' },
];

export default function UsersPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const filteredUsers = mockUsers.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'all' || user.status === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
                    <p className="text-gray-600 mt-1">Manage all registered users on the platform</p>
                </div>
                <Button>
                    <UsersIcon className="w-4 h-4 mr-2" />
                    Export Users
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">15,420</div>
                        <p className="text-sm text-gray-500">Total Users</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-green-600">14,890</div>
                        <p className="text-sm text-gray-500">Active Users</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-yellow-600">485</div>
                        <p className="text-sm text-gray-500">Inactive Users</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-red-600">45</div>
                        <p className="text-sm text-gray-500">Suspended Users</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="px-4 py-2 border rounded-lg"
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="suspended">Suspended</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4">User</th>
                                    <th className="text-left py-3 px-4">Contact</th>
                                    <th className="text-left py-3 px-4">Orders</th>
                                    <th className="text-left py-3 px-4">Total Spent</th>
                                    <th className="text-left py-3 px-4">Status</th>
                                    <th className="text-left py-3 px-4">Joined</th>
                                    <th className="text-left py-3 px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="border-b hover:bg-gray-50">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <span className="text-primary-600 font-medium">{user.name.charAt(0)}</span>
                                                </div>
                                                <div>
                                                    <div className="font-medium">{user.name}</div>
                                                    <div className="text-sm text-gray-500">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-sm">{user.phone}</div>
                                        </td>
                                        <td className="py-4 px-4">{user.orders}</td>
                                        <td className="py-4 px-4">PKR {user.spent.toLocaleString()}</td>
                                        <td className="py-4 px-4">
                                            <Badge variant={user.status === 'active' ? 'default' : user.status === 'suspended' ? 'destructive' : 'secondary'}>
                                                {user.status}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-500">{user.joined}</td>
                                        <td className="py-4 px-4">
                                            <Button variant="ghost" size="sm">
                                                <MoreVertical className="w-4 h-4" />
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
