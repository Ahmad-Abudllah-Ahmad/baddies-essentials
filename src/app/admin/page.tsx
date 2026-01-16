'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Store,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Package,
  Star
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface AdminStats {
  totalUsers: number;
  totalSellers: number;
  totalOrders: number;
  totalRevenue: number;
  pendingSellerApprovals: number;
  reportedProducts: number;
  activeDisputes: number;
  platformCommission: number;
}

const mockRevenueData = [
  { name: 'Jan', revenue: 45000, commission: 4500 },
  { name: 'Feb', revenue: 52000, commission: 5200 },
  { name: 'Mar', revenue: 48000, commission: 4800 },
  { name: 'Apr', revenue: 61000, commission: 6100 },
  { name: 'May', revenue: 55000, commission: 5500 },
  { name: 'Jun', revenue: 67000, commission: 6700 },
];

const mockCategoryData = [
  { name: 'Dresses', value: 35, color: '#e91e63' },
  { name: 'Shirts', value: 25, color: '#2196f3' },
  { name: 'Jeans', value: 20, color: '#4caf50' },
  { name: 'Accessories', value: 15, color: '#ff9800' },
  { name: 'Others', value: 5, color: '#9c27b0' },
];

const mockRecentActivity = [
  { id: 1, type: 'seller_approval', message: 'New seller "Fashion Hub" pending approval', time: '2 hours ago' },
  { id: 2, type: 'dispute', message: 'Order dispute reported for order #ORD-2024-156', time: '4 hours ago' },
  { id: 3, type: 'product_report', message: 'Product "Fake Designer Bag" reported for copyright', time: '6 hours ago' },
  { id: 4, type: 'seller_approved', message: 'Seller "Style Central" has been approved', time: '1 day ago' },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalSellers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingSellerApprovals: 0,
    reportedProducts: 0,
    activeDisputes: 0,
    platformCommission: 0,
  });

  useEffect(() => {
    // Simulate API call
    setStats({
      totalUsers: 15420,
      totalSellers: 342,
      totalOrders: 8956,
      totalRevenue: 2845000,
      pendingSellerApprovals: 12,
      reportedProducts: 8,
      activeDisputes: 5,
      platformCommission: 284500,
    });
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'seller_approval':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'dispute':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'product_report':
        return <Package className="w-4 h-4 text-yellow-500" />;
      case 'seller_approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage the Baddies Essentials marketplace platform</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Users className="w-4 h-4 mr-2" />
            Manage Users
          </Button>
          <Button>
            <Store className="w-4 h-4 mr-2" />
            Seller Approvals
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+18.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sellers</CardTitle>
            <Store className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSellers}</div>
            <p className="text-xs text-muted-foreground">+12 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+24.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">PKR {stats.platformCommission.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">10% commission rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.pendingSellerApprovals > 0 && (
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-orange-600 mr-2" />
                <div>
                  <p className="font-medium text-orange-800">Pending Approvals</p>
                  <p className="text-sm text-orange-600">
                    {stats.pendingSellerApprovals} sellers waiting for approval
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {stats.activeDisputes > 0 && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                <div>
                  <p className="font-medium text-red-800">Active Disputes</p>
                  <p className="text-sm text-red-600">
                    {stats.activeDisputes} disputes need resolution
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {stats.reportedProducts > 0 && (
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Package className="h-5 w-5 text-yellow-600 mr-2" />
                <div>
                  <p className="font-medium text-yellow-800">Reported Products</p>
                  <p className="text-sm text-yellow-600">
                    {stats.reportedProducts} products need review
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Commission</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#2196f3" strokeWidth={2} name="Total Revenue" />
                <Line type="monotone" dataKey="commission" stroke="#e91e63" strokeWidth={2} name="Platform Commission" />
              </LineChart>
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
                  data={mockCategoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {mockCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  {getActivityIcon(activity.type)}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Review Seller Applications
                {stats.pendingSellerApprovals > 0 && (
                  <Badge variant="destructive" className="ml-auto">
                    {stats.pendingSellerApprovals}
                  </Badge>
                )}
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Resolve Disputes
                {stats.activeDisputes > 0 && (
                  <Badge variant="destructive" className="ml-auto">
                    {stats.activeDisputes}
                  </Badge>
                )}
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <Package className="w-4 h-4 mr-2" />
                Review Reported Products
                {stats.reportedProducts > 0 && (
                  <Badge variant="destructive" className="ml-auto">
                    {stats.reportedProducts}
                  </Badge>
                )}
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                Platform Analytics
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <Star className="w-4 h-4 mr-2" />
                Manage Categories
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
