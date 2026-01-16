'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  PhotoIcon,
  EyeIcon,
  ChartBarIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'

interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
  isEditable: boolean
}

export default function SellerDashboard() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'New Arrivals',
      description: 'Latest fashion trends and styles',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      productCount: 45,
      isEditable: false // Core category
    },
    {
      id: '2',
      name: 'Women\'s Fashion',
      description: 'Elegant dresses, tops, and more',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
      productCount: 128,
      isEditable: false // Core category
    },
    {
      id: '3',
      name: 'Men\'s Fashion',
      description: 'Stylish shirts, pants, and accessories',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
      productCount: 89,
      isEditable: false // Core category
    },
    {
      id: '4',
      name: 'Sale Items',
      description: 'Discounted products and special offers',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop',
      productCount: 67,
      isEditable: false // Core category
    },
    {
      id: '5',
      name: 'Summer Collection',
      description: 'Light and breezy summer wear',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop',
      productCount: 34,
      isEditable: true // Custom category
    },
    {
      id: '6',
      name: 'Formal Wear',
      description: 'Professional and formal clothing',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      productCount: 23,
      isEditable: true // Custom category
    }
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    image: ''
  })

  const handleAddCategory = () => {
    if (newCategory.name && newCategory.description) {
      const category: Category = {
        id: Date.now().toString(),
        name: newCategory.name,
        description: newCategory.description,
        image: newCategory.image || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
        productCount: 0,
        isEditable: true
      }
      setCategories([...categories, category])
      setNewCategory({ name: '', description: '', image: '' })
      setShowAddModal(false)
    }
  }

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category)
    setNewCategory({
      name: category.name,
      description: category.description,
      image: category.image
    })
    setShowAddModal(true)
  }

  const handleUpdateCategory = () => {
    if (editingCategory && newCategory.name && newCategory.description) {
      setCategories(categories.map(cat => 
        cat.id === editingCategory.id 
          ? { ...cat, name: newCategory.name, description: newCategory.description, image: newCategory.image }
          : cat
      ))
      setEditingCategory(null)
      setNewCategory({ name: '', description: '', image: '' })
      setShowAddModal(false)
    }
  }

  const handleDeleteCategory = (categoryId: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(cat => cat.id !== categoryId))
    }
  }

  const closeModal = () => {
    setShowAddModal(false)
    setEditingCategory(null)
    setNewCategory({ name: '', description: '', image: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your store categories and products</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-primary-50 px-4 py-2 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <ChartBarIcon className="h-5 w-5 text-primary-600" />
                  <span className="text-primary-600 font-semibold">Total Sales: PKR 2,45,000</span>
                </div>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <ShoppingBagIcon className="h-5 w-5 text-green-600" />
                  <span className="text-green-600 font-semibold">386 Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Management */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Store Categories</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-2xl font-semibold flex items-center space-x-2 transition-colors"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add Category</span>
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Category Image */}
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                {!category.isEditable && (
                  <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    CORE
                  </span>
                )}
              </div>

              {/* Category Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    {category.productCount} products
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-xl font-medium flex items-center justify-center space-x-1 transition-colors">
                    <EyeIcon className="h-4 w-4" />
                    <span>View</span>
                  </button>
                  
                  {category.isEditable && (
                    <>
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="flex-1 bg-primary-100 hover:bg-primary-200 text-primary-700 py-2 rounded-xl font-medium flex items-center justify-center space-x-1 transition-colors"
                      >
                        <PencilIcon className="h-4 w-4" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-xl transition-colors"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {editingCategory ? 'Edit Category' : 'Add New Category'}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter category name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows={3}
                  placeholder="Enter category description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL (Unsplash)
                </label>
                <input
                  type="url"
                  value={newCategory.image}
                  onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mt-6">
              <button
                onClick={closeModal}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-2xl font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={editingCategory ? handleUpdateCategory : handleAddCategory}
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-2xl font-semibold transition-colors"
              >
                {editingCategory ? 'Update' : 'Add'} Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
