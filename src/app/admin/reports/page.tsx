'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    FileText,
    Flag,
    Eye,
    CheckCircle,
    XCircle,
    AlertTriangle
} from 'lucide-react';

const mockReports = [
    { id: 'RPT-001', type: 'Product', target: 'Fake Designer Handbag', reporter: 'Ayesha M.', reason: 'Copyright violation', status: 'pending', date: '2024-01-16' },
    { id: 'RPT-002', type: 'Seller', target: 'QuickFashion Store', reporter: 'Ali K.', reason: 'Fraudulent activity', status: 'investigating', date: '2024-01-15' },
    { id: 'RPT-003', type: 'Review', target: 'Review #4521', reporter: 'Seller Hub', reason: 'Fake review', status: 'resolved', date: '2024-01-14' },
    { id: 'RPT-004', type: 'Product', target: 'Counterfeit Perfume', reporter: 'Brand Authority', reason: 'Counterfeit product', status: 'pending', date: '2024-01-16' },
];

const typeColors: Record<string, string> = {
    Product: 'bg-blue-100 text-blue-800',
    Seller: 'bg-purple-100 text-purple-800',
    Review: 'bg-orange-100 text-orange-800',
};

const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    investigating: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    dismissed: 'bg-gray-100 text-gray-800',
};

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
                    <p className="text-gray-600 mt-1">Review and manage reported content</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="border-yellow-200 bg-yellow-50">
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-yellow-600">8</div>
                        <p className="text-sm text-yellow-700">Pending Review</p>
                    </CardContent>
                </Card>
                <Card className="border-blue-200 bg-blue-50">
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-blue-600">3</div>
                        <p className="text-sm text-blue-700">Under Investigation</p>
                    </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-green-600">245</div>
                        <p className="text-sm text-green-700">Resolved</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">89</div>
                        <p className="text-sm text-gray-500">Dismissed</p>
                    </CardContent>
                </Card>
            </div>

            {/* Reports Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4">Report ID</th>
                                    <th className="text-left py-3 px-4">Type</th>
                                    <th className="text-left py-3 px-4">Target</th>
                                    <th className="text-left py-3 px-4">Reason</th>
                                    <th className="text-left py-3 px-4">Reporter</th>
                                    <th className="text-left py-3 px-4">Status</th>
                                    <th className="text-left py-3 px-4">Date</th>
                                    <th className="text-left py-3 px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockReports.map((report) => (
                                    <tr key={report.id} className="border-b hover:bg-gray-50">
                                        <td className="py-4 px-4 font-medium">{report.id}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[report.type]}`}>
                                                {report.type}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">{report.target}</td>
                                        <td className="py-4 px-4">{report.reason}</td>
                                        <td className="py-4 px-4">{report.reporter}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[report.status]}`}>
                                                {report.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-500">{report.date}</td>
                                        <td className="py-4 px-4">
                                            <div className="flex gap-1">
                                                <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                                                <Button variant="ghost" size="sm"><CheckCircle className="w-4 h-4 text-green-500" /></Button>
                                                <Button variant="ghost" size="sm"><XCircle className="w-4 h-4 text-red-500" /></Button>
                                            </div>
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
