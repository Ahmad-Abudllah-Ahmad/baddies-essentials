'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    TrendingUp,
    TrendingDown,
    Users,
    ShoppingBag,
    DollarSign,
    Eye,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const revenueData = [
    { name: 'Jan', revenue: 4500000, orders: 890 },
    { name: 'Feb', revenue: 5200000, orders: 1020 },
    { name: 'Mar', revenue: 4800000, orders: 945 },
    { name: 'Apr', revenue: 6100000, orders: 1250 },
    { name: 'May', revenue: 5500000, orders: 1100 },
    { name: 'Jun', revenue: 6700000, orders: 1380 },
    { name: 'Jul', revenue: 7200000, orders: 1450 },
];

const categoryData = [
    { name: 'Women', value: 35, color: '#e91e63' },
    { name: 'Men', value: 28, color: '#2196f3' },
    { name: 'Kids', value: 15, color: '#4caf50' },
    { name: 'Footwear', value: 12, color: '#ff9800' },
    { name: 'Accessories', value: 10, color: '#9c27b0' },
];

const trafficData = [
    { name: 'Mon', visitors: 12500, pageViews: 45000 },
    { name: 'Tue', visitors: 14200, pageViews: 52000 },
    { name: 'Wed', visitors: 13800, pageViews: 48000 },
    { name: 'Thu', visitors: 15600, pageViews: 58000 },
    { name: 'Fri', visitors: 18900, pageViews: 72000 },
    { name: 'Sat', visitors: 22100, pageViews: 85000 },
    { name: 'Sun', visitors: 19500, pageViews: 76000 },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                    <p className="text-gray-600 mt-1">Platform performance and insights</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Last 7 Days</Button>
                    <Button variant="outline">Last 30 Days</Button>
                    <Button>Export Report</Button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Total Revenue</p>
                                <div className="text-2xl font-bold">PKR 45.2M</div>
                            </div>
                            <div className="flex items-center text-green-600">
                                <ArrowUpRight className="w-4 h-4" />
                                <span className="text-sm">+12.5%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Total Orders</p>
                                <div className="text-2xl font-bold">8,956</div>
                            </div>
                            <div className="flex items-center text-green-600">
                                <ArrowUpRight className="w-4 h-4" />
                                <span className="text-sm">+8.2%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Avg Order Value</p>
                                <div className="text-2xl font-bold">PKR 5,045</div>
                            </div>
                            <div className="flex items-center text-red-600">
                                <ArrowDownRight className="w-4 h-4" />
                                <span className="text-sm">-2.1%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Conversion Rate</p>
                                <div className="text-2xl font-bold">3.2%</div>
                            </div>
                            <div className="flex items-center text-green-600">
                                <ArrowUpRight className="w-4 h-4" />
                                <span className="text-sm">+0.5%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value: number) => `PKR ${(value / 1000000).toFixed(1)}M`} />
                                <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Sales by Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    dataKey="value"
                                    label={({ name, value }) => `${name}: ${value}%`}
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Website Traffic</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={trafficData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="visitors" fill="#3b82f6" name="Visitors" />
                                <Bar dataKey="pageViews" fill="#10b981" name="Page Views" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Orders Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="orders" stroke="#f59e0b" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
