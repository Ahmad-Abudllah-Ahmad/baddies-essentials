'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Settings as SettingsIcon,
    Bell,
    Mail,
    Globe,
    Palette,
    CreditCard,
    Truck,
    Save,
    Upload
} from 'lucide-react';

export default function SettingsPage() {
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        sms: false,
        orderUpdates: true,
        sellerAlerts: true,
        marketingEmails: false,
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                    <p className="text-gray-600 mt-1">Configure platform settings</p>
                </div>
                <Button>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* General Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            General Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Platform Name</label>
                            <input
                                type="text"
                                defaultValue="Baddies Essentials"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Support Email</label>
                            <input
                                type="email"
                                defaultValue="support@fashionpanda.pk"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Contact Phone</label>
                            <input
                                type="tel"
                                defaultValue="+92 21 1234567"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Default Currency</label>
                            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500">
                                <option value="PKR">PKR - Pakistani Rupee</option>
                                <option value="USD">USD - US Dollar</option>
                            </select>
                        </div>
                    </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="w-5 h-5" />
                            Notification Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { key: 'email', label: 'Email Notifications' },
                            { key: 'push', label: 'Push Notifications' },
                            { key: 'sms', label: 'SMS Notifications' },
                            { key: 'orderUpdates', label: 'Order Updates' },
                            { key: 'sellerAlerts', label: 'Seller Alerts' },
                            { key: 'marketingEmails', label: 'Marketing Emails' },
                        ].map((item) => (
                            <div key={item.key} className="flex items-center justify-between">
                                <span>{item.label}</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notifications[item.key as keyof typeof notifications]}
                                        onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Commission Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            Commission Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Default Commission Rate (%)</label>
                            <input
                                type="number"
                                defaultValue="10"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Premium Seller Rate (%)</label>
                            <input
                                type="number"
                                defaultValue="8"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Minimum Payout Amount (PKR)</label>
                            <input
                                type="number"
                                defaultValue="1000"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Shipping Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Truck className="w-5 h-5" />
                            Shipping Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Free Shipping Threshold (PKR)</label>
                            <input
                                type="number"
                                defaultValue="2500"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Standard Shipping Cost (PKR)</label>
                            <input
                                type="number"
                                defaultValue="200"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Express Shipping Cost (PKR)</label>
                            <input
                                type="number"
                                defaultValue="500"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Appearance Settings */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Palette className="w-5 h-5" />
                            Appearance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Logo</label>
                                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                                    <p className="text-xs text-gray-400">PNG, JPG up to 2MB</p>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Favicon</label>
                                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                                    <p className="text-xs text-gray-400">ICO, PNG 32x32</p>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Primary Color</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="color"
                                        defaultValue="#8b5cf6"
                                        className="w-12 h-12 rounded cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        defaultValue="#8b5cf6"
                                        className="flex-1 px-4 py-2 border rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Secondary Color</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="color"
                                        defaultValue="#1e293b"
                                        className="w-12 h-12 rounded cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        defaultValue="#1e293b"
                                        className="flex-1 px-4 py-2 border rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
