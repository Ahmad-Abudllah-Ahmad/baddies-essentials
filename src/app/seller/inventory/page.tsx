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
import { Label } from '@/components/ui/label';
import { 
  Search, 
  Plus, 
  Edit, 
  AlertTriangle,
  Package,
  TrendingDown,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import Image from 'next/image';

interface InventoryItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  image: string;
  currentStock: number;
  minStockLevel: number;
  maxStockLevel: number;
  unitCost: number;
  totalValue: number;
  supplier: string;
  lastRestocked: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'overstocked';
}

const mockInventory: InventoryItem[] = [
  {
    id: '1',
    productId: 'prod-1',
    productName: 'Summer Floral Dress',
    sku: 'SFD-001',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop',
    currentStock: 25,
    minStockLevel: 10,
    maxStockLevel: 100,
    unitCost: 2500,
    totalValue: 62500,
    supplier: 'Fashion Wholesale Ltd',
    lastRestocked: '2024-01-15',
    status: 'in_stock',
  },
  {
    id: '2',
    productId: 'prod-2',
    productName: 'Casual Cotton Shirt',
    sku: 'CCS-002',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop',
    currentStock: 8,
    minStockLevel: 15,
    maxStockLevel: 80,
    unitCost: 1800,
    totalValue: 14400,
    supplier: 'Cotton Suppliers Co',
    lastRestocked: '2024-01-10',
    status: 'low_stock',
  },
  {
    id: '3',
    productId: 'prod-3',
    productName: 'Denim Skinny Jeans',
    sku: 'DSJ-003',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop',
    currentStock: 0,
    minStockLevel: 5,
    maxStockLevel: 50,
    unitCost: 3500,
    totalValue: 0,
    supplier: 'Denim Works',
    lastRestocked: '2024-01-05',
    status: 'out_of_stock',
  },
  {
    id: '4',
    productId: 'prod-4',
    productName: 'Formal Blazer',
    sku: 'FB-004',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    currentStock: 85,
    minStockLevel: 10,
    maxStockLevel: 60,
    unitCost: 5500,
    totalValue: 467500,
    supplier: 'Premium Formal Wear',
    lastRestocked: '2024-01-18',
    status: 'overstocked',
  },
];

export default function InventoryPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [restockQuantity, setRestockQuantity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setInventory(mockInventory);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredInventory = inventory.filter(item =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_stock':
        return <Badge variant="default" className="bg-green-100 text-green-800">In Stock</Badge>;
      case 'low_stock':
        return <Badge variant="secondary" className="bg-orange-100 text-orange-800">Low Stock</Badge>;
      case 'out_of_stock':
        return <Badge variant="destructive">Out of Stock</Badge>;
      case 'overstocked':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Overstocked</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return Math.min((current / max) * 100, 100);
  };

  const handleRestock = () => {
    if (selectedItem && restockQuantity) {
      const quantity = parseInt(restockQuantity);
      setInventory(inventory.map(item =>
        item.id === selectedItem.id
          ? {
              ...item,
              currentStock: item.currentStock + quantity,
              totalValue: (item.currentStock + quantity) * item.unitCost,
              lastRestocked: new Date().toISOString().split('T')[0],
              status: item.currentStock + quantity > item.maxStockLevel ? 'overstocked' :
                     item.currentStock + quantity >= item.minStockLevel ? 'in_stock' : 'low_stock'
            }
          : item
      ));
      setSelectedItem(null);
      setRestockQuantity('');
    }
  };

  const totalInventoryValue = inventory.reduce((sum, item) => sum + item.totalValue, 0);
  const lowStockItems = inventory.filter(item => item.status === 'low_stock' || item.status === 'out_of_stock').length;
  const overstockedItems = inventory.filter(item => item.status === 'overstocked').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your product inventory</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Stock
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">PKR {totalInventoryValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all products</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventory.length}</div>
            <p className="text-xs text-muted-foreground">In inventory</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{lowStockItems}</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overstocked Items</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{overstockedItems}</div>
            <p className="text-xs text-muted-foreground">Consider promotion</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search inventory..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Unit Cost</TableHead>
                <TableHead>Total Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12">
                        <Image
                          src={item.image}
                          alt={item.productName}
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{item.productName}</div>
                        <div className="text-sm text-gray-500">{item.supplier}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.sku}</TableCell>
                  <TableCell>
                    <div className="font-medium">{item.currentStock} units</div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Min: {item.minStockLevel}</span>
                        <span>Max: {item.maxStockLevel}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.currentStock <= item.minStockLevel
                              ? 'bg-red-500'
                              : item.currentStock >= item.maxStockLevel
                              ? 'bg-blue-500'
                              : 'bg-green-500'
                          }`}
                          style={{
                            width: `${getStockPercentage(item.currentStock, item.maxStockLevel)}%`,
                          }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">PKR {item.unitCost.toLocaleString()}</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">PKR {item.totalValue.toLocaleString()}</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(item.lastRestocked).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedItem(item)}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Restock
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Restock Product</DialogTitle>
                          <DialogDescription>
                            Add stock for {item.productName}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Current Stock</Label>
                            <div className="text-lg font-medium">{item.currentStock} units</div>
                          </div>
                          <div>
                            <Label htmlFor="quantity">Quantity to Add</Label>
                            <Input
                              id="quantity"
                              type="number"
                              placeholder="Enter quantity"
                              value={restockQuantity}
                              onChange={(e) => setRestockQuantity(e.target.value)}
                            />
                          </div>
                          {restockQuantity && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="text-sm text-gray-600">After restock:</div>
                              <div className="font-medium">
                                {item.currentStock + parseInt(restockQuantity || '0')} units
                              </div>
                              <div className="text-sm text-gray-600">
                                Total value: PKR {((item.currentStock + parseInt(restockQuantity || '0')) * item.unitCost).toLocaleString()}
                              </div>
                            </div>
                          )}
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => {
                            setSelectedItem(null);
                            setRestockQuantity('');
                          }}>
                            Cancel
                          </Button>
                          <Button onClick={handleRestock}>
                            Confirm Restock
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
