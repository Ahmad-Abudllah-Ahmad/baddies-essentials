'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Shield,
    Lock,
    Key,
    AlertTriangle,
    CheckCircle,
    Eye,
    UserX,
    Activity
} from 'lucide-react';

const securityLogs = [
    { id: 1, event: 'Failed login attempt', user: 'unknown@email.com', ip: '192.168.1.105', time: '5 minutes ago', severity: 'warning' },
    { id: 2, event: 'Password changed', user: 'admin@fashionpanda.pk', ip: '192.168.1.1', time: '2 hours ago', severity: 'info' },
    { id: 3, event: 'New admin user created', user: 'superadmin', ip: '192.168.1.1', time: '1 day ago', severity: 'info' },
    { id: 4, event: 'Multiple failed login attempts', user: 'test@test.com', ip: '45.33.32.156', time: '1 day ago', severity: 'critical' },
    { id: 5, event: 'Suspicious activity detected', user: 'seller_12345', ip: '103.21.244.0', time: '2 days ago', severity: 'warning' },
];

const severityColors: Record<string, string> = {
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
    critical: 'bg-red-100 text-red-800',
};

export default function SecurityPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Security Center</h1>
                    <p className="text-gray-600 mt-1">Monitor and manage platform security</p>
                </div>
            </div>

            {/* Security Status */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                            <div>
                                <div className="text-lg font-bold text-green-700">Secure</div>
                                <p className="text-sm text-green-600">System Status</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">256-bit</div>
                        <p className="text-sm text-gray-500">SSL Encryption</p>
                    </CardContent>
                </Card>
                <Card className="border-yellow-200 bg-yellow-50">
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-yellow-600">3</div>
                        <p className="text-sm text-yellow-700">Security Alerts</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">45</div>
                        <p className="text-sm text-gray-500">Blocked IPs</p>
                    </CardContent>
                </Card>
            </div>

            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Lock className="w-5 h-5" />
                            Two-Factor Auth
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span>Status</span>
                                <Badge variant="default">Enabled</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Admin Users</span>
                                <span className="font-medium">12/15 enabled</span>
                            </div>
                            <Button variant="outline" className="w-full">Configure</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Key className="w-5 h-5" />
                            API Keys
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span>Active Keys</span>
                                <span className="font-medium">8</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Last Generated</span>
                                <span className="text-sm text-gray-500">3 days ago</span>
                            </div>
                            <Button variant="outline" className="w-full">Manage Keys</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <UserX className="w-5 h-5" />
                            IP Blocking
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span>Blocked IPs</span>
                                <span className="font-medium">45</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Auto-block</span>
                                <Badge variant="default">Enabled</Badge>
                            </div>
                            <Button variant="outline" className="w-full">View Blocklist</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Security Logs */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Activity className="w-5 h-5" />
                        Security Logs
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4">Event</th>
                                    <th className="text-left py-3 px-4">User</th>
                                    <th className="text-left py-3 px-4">IP Address</th>
                                    <th className="text-left py-3 px-4">Severity</th>
                                    <th className="text-left py-3 px-4">Time</th>
                                    <th className="text-left py-3 px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {securityLogs.map((log) => (
                                    <tr key={log.id} className="border-b hover:bg-gray-50">
                                        <td className="py-4 px-4">{log.event}</td>
                                        <td className="py-4 px-4">{log.user}</td>
                                        <td className="py-4 px-4 font-mono text-sm">{log.ip}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${severityColors[log.severity]}`}>
                                                {log.severity}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-500">{log.time}</td>
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
