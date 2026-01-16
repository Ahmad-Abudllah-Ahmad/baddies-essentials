'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Grid,
    Plus,
    MoreVertical,
    Edit,
    Trash2,
    ChevronRight
} from 'lucide-react';

const mockCategories = [
    { id: 1, name: 'Women', slug: 'women', products: 3200, subcategories: ['Dresses', 'Kurtas', 'Tops', 'Bottoms'], status: 'active' },
    { id: 2, name: 'Men', slug: 'men', products: 2500, subcategories: ['Shirts', 'T-Shirts', 'Pants', 'Suits'], status: 'active' },
    { id: 3, name: 'Kids', slug: 'kids', products: 1800, subcategories: ['Boys', 'Girls', 'Infants'], status: 'active' },
    { id: 4, name: 'Footwear', slug: 'footwear', products: 1500, subcategories: ['Sneakers', 'Formal', 'Sandals', 'Heels'], status: 'active' },
    { id: 5, name: 'Accessories', slug: 'accessories', products: 900, subcategories: ['Bags', 'Jewelry', 'Watches', 'Belts'], status: 'active' },
    { id: 6, name: 'Beauty', slug: 'beauty', products: 450, subcategories: ['Skincare', 'Makeup', 'Fragrance'], status: 'inactive' },
];

export default function CategoriesPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Categories Management</h1>
                    <p className="text-gray-600 mt-1">Organize products into categories</p>
                </div>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Category
                </Button>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCategories.map((category) => (
                    <Card key={category.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                    <Grid className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">{category.name}</CardTitle>
                                    <p className="text-sm text-gray-500">/{category.slug}</p>
                                </div>
                            </div>
                            <Badge variant={category.status === 'active' ? 'default' : 'secondary'}>
                                {category.status}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Products</span>
                                    <span className="font-medium">{category.products.toLocaleString()}</span>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Subcategories</p>
                                    <div className="flex flex-wrap gap-2">
                                        {category.subcategories.map((sub) => (
                                            <span key={sub} className="px-2 py-1 bg-gray-100 rounded text-xs">
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-4 border-t">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <Edit className="w-4 h-4 mr-2" />
                                        Edit
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
