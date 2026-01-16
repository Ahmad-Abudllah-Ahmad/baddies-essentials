'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Filter, 
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Store,
  User,
  FileText,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star
} from 'lucide-react';

interface Seller {
  id: string;
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  businessType: string;
  registrationNumber: string;
  taxId: string;
  bankDetails: {
    accountName: string;
    accountNumber: string;
    bankName: string;
  };
  documents: {
    businessLicense: string;
    taxCertificate: string;
    bankStatement: string;
    ownerCnic: string;
  };
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  appliedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  rejectionReason?: string;
  rating?: number;
  totalSales?: number;
  totalProducts?: number;
}

const mockSellers: Seller[] = [
  {
    id: '1',
    businessName: 'Fashion Hub',
    ownerName: 'Ahmed Ali',
    email: 'ahmed@fashionhub.com',
    phone: '+92 300 1234567',
    address: 'Shop 15, Tariq Road, Karachi',
    businessType: 'Retail Store',
    registrationNumber: 'REG-2024-001',
    taxId: 'TAX-123456789',
    bankDetails: {
      accountName: 'Fashion Hub',
      accountNumber: '1234567890',
      bankName: 'HBL Bank',
    },
    documents: {
      businessLicense: '/documents/license-1.pdf',
      taxCertificate: '/documents/tax-1.pdf',
      bankStatement: '/documents/bank-1.pdf',
      ownerCnic: '/documents/cnic-1.pdf',
    },
    status: 'pending',
    appliedAt: '2024-01-20T10:30:00Z',
  },
  {
    id: '2',
    businessName: 'Style Central',
    ownerName: 'Fatima Khan',
    email: 'fatima@stylecentral.com',
    phone: '+92 301 9876543',
    address: 'Plaza 22, Gulshan-e-Iqbal, Karachi',
    businessType: 'Online Store',
    registrationNumber: 'REG-2024-002',
    taxId: 'TAX-987654321',
    bankDetails: {
      accountName: 'Style Central',
      accountNumber: '0987654321',
      bankName: 'UBL Bank',
    },
    documents: {
      businessLicense: '/documents/license-2.pdf',
      taxCertificate: '/documents/tax-2.pdf',
      bankStatement: '/documents/bank-2.pdf',
      ownerCnic: '/documents/cnic-2.pdf',
    },
    status: 'approved',
    appliedAt: '2024-01-15T14:20:00Z',
    reviewedAt: '2024-01-16T09:15:00Z',
    reviewedBy: 'Admin User',
    rating: 4.5,
    totalSales: 125000,
    totalProducts: 45,
  },
  {
    id: '3',
    businessName: 'Trendy Boutique',
    ownerName: 'Sarah Ahmed',
    email: 'sarah@trendyboutique.com',
    phone: '+92 302 5555555',
    address: 'Block B, DHA Phase 2, Lahore',
    businessType: 'Boutique',
    registrationNumber: 'REG-2024-003',
    taxId: 'TAX-555666777',
    bankDetails: {
      accountName: 'Trendy Boutique',
      accountNumber: '5555666777',
      bankName: 'MCB Bank',
    },
    documents: {
      businessLicense: '/documents/license-3.pdf',
      taxCertificate: '/documents/tax-3.pdf',
      bankStatement: '/documents/bank-3.pdf',
      ownerCnic: '/documents/cnic-3.pdf',
    },
    status: 'rejected',
    appliedAt: '2024-01-18T16:45:00Z',
    reviewedAt: '2024-01-19T11:30:00Z',
    reviewedBy: 'Admin User',
    rejectionReason: 'Incomplete tax documentation',
  },
];

export default function SellersPage() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);
  const [reviewAction, setReviewAction] = useState<'approve' | 'reject' | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSellers(mockSellers);
    }, 1000);
  }, []);

  const filteredSellers = sellers.filter(seller => {
    const matchesSearch = seller.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         seller.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         seller.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || seller.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'approved':
        return <Badge variant="default" className="bg-green-100 text-green-800">Approved</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      case 'suspended':
        return <Badge variant="secondary" className="bg-red-100 text-red-800">Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleSellerAction = (action: 'approve' | 'reject') => {
    if (!selectedSeller) return;

    const updatedSeller = {
      ...selectedSeller,
      status: action === 'approve' ? 'approved' : 'rejected',
      reviewedAt: new Date().toISOString(),
      reviewedBy: 'Admin User',
      rejectionReason: action === 'reject' ? rejectionReason : undefined,
    };

    setSellers(sellers.map(s => s.id === selectedSeller.id ? updatedSeller as Seller : s));
    setSelectedSeller(null);
    setReviewAction(null);
    setRejectionReason('');
  };

  const pendingCount = sellers.filter(s => s.status === 'pending').length;
  const approvedCount = sellers.filter(s => s.status === 'approved').length;
  const rejectedCount = sellers.filter(s => s.status === 'rejected').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Seller Management</h1>
          <p className="text-gray-600 mt-1">Review and manage seller applications</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sellers</CardTitle>
            <Store className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sellers.length}</div>
            <p className="text-xs text-muted-foreground">Registered sellers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
            <p className="text-xs text-muted-foreground">Active sellers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{rejectedCount}</div>
            <p className="text-xs text-muted-foreground">Rejected applications</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search sellers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs value={statusFilter} onValueChange={setStatusFilter}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Business</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSellers.map((seller) => (
                <TableRow key={seller.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{seller.businessName}</div>
                      <div className="text-sm text-gray-500">{seller.registrationNumber}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{seller.ownerName}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{seller.email}</div>
                      <div className="text-gray-500">{seller.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{seller.businessType}</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(seller.status)}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(seller.appliedAt).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    {seller.status === 'approved' && (
                      <div className="text-sm">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-1" />
                          {seller.rating?.toFixed(1)}
                        </div>
                        <div className="text-gray-500">
                          PKR {seller.totalSales?.toLocaleString()}
                        </div>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSeller(seller)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Seller Details Dialog */}
      <Dialog open={!!selectedSeller} onOpenChange={() => setSelectedSeller(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Seller Application Review</DialogTitle>
            <DialogDescription>
              {selectedSeller?.businessName} - {selectedSeller?.ownerName}
            </DialogDescription>
          </DialogHeader>
          
          {selectedSeller && (
            <Tabs defaultValue="business" className="space-y-4">
              <TabsList>
                <TabsTrigger value="business">Business Info</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="banking">Banking</TabsTrigger>
                <TabsTrigger value="review">Review</TabsTrigger>
              </TabsList>

              <TabsContent value="business" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Business Details</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Name:</strong> {selectedSeller.businessName}</div>
                      <div><strong>Type:</strong> {selectedSeller.businessType}</div>
                      <div><strong>Registration:</strong> {selectedSeller.registrationNumber}</div>
                      <div><strong>Tax ID:</strong> {selectedSeller.taxId}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Owner Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Name:</strong> {selectedSeller.ownerName}</div>
                      <div><strong>Email:</strong> {selectedSeller.email}</div>
                      <div><strong>Phone:</strong> {selectedSeller.phone}</div>
                      <div><strong>Address:</strong> {selectedSeller.address}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Required Documents</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">Business License</span>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">Tax Certificate</span>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">Bank Statement</span>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">Owner CNIC</span>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="banking" className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Banking Information</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                    <div><strong>Account Name:</strong> {selectedSeller.bankDetails.accountName}</div>
                    <div><strong>Account Number:</strong> {selectedSeller.bankDetails.accountNumber}</div>
                    <div><strong>Bank Name:</strong> {selectedSeller.bankDetails.bankName}</div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="review" className="space-y-4">
                {selectedSeller.status === 'pending' && (
                  <div className="space-y-4">
                    <h4 className="font-medium">Review Application</h4>
                    <div className="flex gap-4">
                      <Button 
                        onClick={() => setReviewAction('approve')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve Seller
                      </Button>
                      <Button 
                        variant="destructive"
                        onClick={() => setReviewAction('reject')}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject Application
                      </Button>
                    </div>
                    
                    {reviewAction === 'reject' && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Rejection Reason</label>
                        <Textarea
                          placeholder="Please provide a reason for rejection..."
                          value={rejectionReason}
                          onChange={(e) => setRejectionReason(e.target.value)}
                        />
                      </div>
                    )}
                    
                    {reviewAction && (
                      <div className="flex gap-2">
                        <Button onClick={() => handleSellerAction(reviewAction)}>
                          Confirm {reviewAction === 'approve' ? 'Approval' : 'Rejection'}
                        </Button>
                        <Button variant="outline" onClick={() => setReviewAction(null)}>
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                {selectedSeller.status !== 'pending' && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Review History</h4>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <div><strong>Status:</strong> {selectedSeller.status}</div>
                      <div><strong>Reviewed By:</strong> {selectedSeller.reviewedBy}</div>
                      <div><strong>Reviewed At:</strong> {selectedSeller.reviewedAt && new Date(selectedSeller.reviewedAt).toLocaleString()}</div>
                      {selectedSeller.rejectionReason && (
                        <div><strong>Reason:</strong> {selectedSeller.rejectionReason}</div>
                      )}
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
