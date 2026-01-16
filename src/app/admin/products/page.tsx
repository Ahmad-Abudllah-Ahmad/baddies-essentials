'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
    Package,
    Search,
    Plus,
    MoreVertical,
    Eye,
    Edit,
    Trash2,
    Star
} from 'lucide-react';

const mockProducts = [
    { id: 1, name: 'Embroidered Lawn Suit', brand: 'Khaadi', category: 'Women', price: 5999, stock: 45, sold: 230, rating: 4.5, image: 'https://images.unsplash.com/photo-1564257577-4f0e2c8b9e3e?w=100&h=100&fit=crop' },
    { id: 2, name: 'Casual Cotton T-Shirt', brand: 'Outfitters', category: 'Men', price: 1999, stock: 120, sold: 456, rating: 4.2, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop' },
    { id: 3, name: 'Kids Party Dress', brand: 'Kids Zone', category: 'Kids', price: 2499, stock: 0, sold: 89, rating: 4.8, image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=100&h=100&fit=crop' },
    { id: 4, name: 'Leather Handbag', brand: 'Lama', category: 'Accessories', price: 4500, stock: 23, sold: 167, rating: 4.6, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop' },
    { id: 5, name: 'Running Sneakers', brand: 'Breakout', category: 'Footwear', price: 6999, stock: 67, sold: 312, rating: 4.4, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop' },
];

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');

    const filteredProducts = mockProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Products Management</h1>
                    <p className="text-gray-600 mt-1">Manage all products in the marketplace</p>
                </div>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">12,456</div>
                        <p className="text-sm text-gray-500">Total Products</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-green-600">11,890</div>
                        <p className="text-sm text-gray-500">In Stock</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-red-600">566</div>
                        <p className="text-sm text-gray-500">Out of Stock</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-yellow-600">89</div>
                        <p className="text-sm text-gray-500">Low Stock</p>
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
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="px-4 py-2 border rounded-lg"
                        >
                            <option value="all">All Categories</option>
                            <option value="Women">Women</option>
                            <option value="Men">Men</option>
                            <option value="Kids">Kids</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Footwear">Footwear</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Products Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Products</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4">Product</th>
                                    <th className="text-left py-3 px-4">Brand</th>
                                    <th className="text-left py-3 px-4">Category</th>
                                    <th className="text-left py-3 px-4">Price</th>
                                    <th className="text-left py-3 px-4">Stock</th>
                                    <th className="text-left py-3 px-4">Sold</th>
                                    <th className="text-left py-3 px-4">Rating</th>
                                    <th className="text-left py-3 px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map((product) => (
                                    <tr key={product.id} className="border-b hover:bg-gray-50">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <Image src={product.image} alt={product.name} width={40} height={40} className="rounded-lg object-cover" />
                                                <span className="font-medium">{product.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">{product.brand}</td>
                                        <td className="py-4 px-4">{product.category}</td>
                                        <td className="py-4 px-4">PKR {product.price.toLocaleString()}</td>
                                        <td className="py-4 px-4">
                                            <Badge variant={product.stock === 0 ? 'destructive' : product.stock < 10 ? 'secondary' : 'default'}>
                                                {product.stock === 0 ? 'Out of Stock' : product.stock}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4">{product.sold}</td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span>{product.rating}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex gap-1">
                                                <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                                                <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                                                <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-red-500" /></Button>
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
