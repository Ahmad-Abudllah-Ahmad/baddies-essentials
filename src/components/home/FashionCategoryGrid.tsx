'use client'

import Link from 'next/link'
import Image from 'next/image'

interface CategoryItem {
  id: string
  title: string
  subtitle?: string
  image: string
  link: string
  items?: string[]
  products?: Array<{
    id: number
    name: string
    price: number
    image: string
    brand: string
  }>
}

const categories: CategoryItem[] = [
  {
    id: '1',
    title: 'Top categories in Fashion',
    subtitle: 'Women\'s Collection',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop&auto=format',
    link: '/women',
    items: ['Dresses', 'Tops', 'Bottoms', 'Outerwear'],
    products: [
      { id: 20, name: 'Floral Dress', price: 5999, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=200&fit=crop&auto=format', brand: 'Khaadi' },
      { id: 21, name: 'Silk Blouse', price: 3999, image: 'https://images.unsplash.com/photo-1564257577-4f0e2c8b9e3e?w=200&h=200&fit=crop&auto=format', brand: 'Khaadi' }
    ]
  },
  {
    id: '2',
    title: 'Shop for your style',
    subtitle: 'Men\'s Fashion',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    link: '/men',
    items: ['Shirts', 'Pants', 'Jackets', 'Accessories'],
    products: [
      { id: 22, name: 'Formal Shirt', price: 2999, image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=200&h=200&fit=crop&auto=format', brand: 'Outfitters' },
      { id: 23, name: 'Chino Pants', price: 4499, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=200&fit=crop&auto=format', brand: 'Outfitters' }
    ]
  },
  {
    id: '3',
    title: 'New fashion arrivals under PKR 5000',
    subtitle: 'Budget Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&auto=format',
    link: '/trending',
    items: ['Sale Items', 'Clearance', 'Discounts', 'Deals'],
    products: [
      { id: 24, name: 'Basic Tee', price: 1999, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop&auto=format', brand: 'Breakout' },
      { id: 25, name: 'Casual Jeans', price: 3999, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop&auto=format', brand: 'Levi\'s' }
    ]
  },
  {
    id: '4',
    title: 'Get your makeup on',
    subtitle: 'Beauty & Cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&auto=format',
    link: '/beauty',
    items: ['Lipstick', 'Foundation', 'Eyeshadow', 'Skincare'],
    products: [
      { id: 26, name: 'Matte Lipstick', price: 1299, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=200&fit=crop&auto=format', brand: 'MAC' },
      { id: 27, name: 'Foundation', price: 2999, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop&auto=format', brand: 'Maybelline' }
    ]
  },
  {
    id: '5',
    title: 'Refresh your wardrobe',
    subtitle: 'Seasonal Collection',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop&auto=format',
    link: '/new-arrivals',
    items: ['Summer', 'Winter', 'Spring', 'Fall'],
    products: [
      { id: 28, name: 'Summer Dress', price: 4999, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop&auto=format', brand: 'Zara' },
      { id: 29, name: 'Winter Coat', price: 12999, image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=200&h=200&fit=crop&auto=format', brand: 'H&M' }
    ]
  },
  {
    id: '6',
    title: 'Shop Fashion for less',
    subtitle: 'Affordable Style',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop&auto=format',
    link: '/trending',
    items: ['Under PKR 3000', 'Under PKR 5000', 'Budget Finds', 'Value Deals'],
    products: [
      { id: 30, name: 'Cotton Tee', price: 1499, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200&h=200&fit=crop&auto=format', brand: 'Uniqlo' },
      { id: 31, name: 'Denim Jacket', price: 4999, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop&auto=format', brand: 'Gap' }
    ]
  },
  {
    id: '7',
    title: 'Fashion trends you like',
    subtitle: 'Trending Now',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=400&fit=crop&auto=format',
    link: '/trending',
    items: ['Trending', 'Popular', 'Hot Items', 'Must-Have'],
    products: [
      { id: 32, name: 'Trendy Sneakers', price: 8999, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop&auto=format', brand: 'Nike' },
      { id: 33, name: 'Designer Bag', price: 15999, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&h=200&fit=crop&auto=format', brand: 'Coach' }
    ]
  },
  {
    id: '8',
    title: 'Easy updates for elevated style',
    subtitle: 'Premium Collection',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop&auto=format',
    link: '/premium',
    items: ['Designer', 'Luxury', 'Premium', 'Exclusive'],
    products: [
      { id: 34, name: 'Luxury Watch', price: 25999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&auto=format', brand: 'Rolex' },
      { id: 35, name: 'Silk Scarf', price: 7999, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=200&h=200&fit=crop&auto=format', brand: 'Hermès' }
    ]
  }
]

export function FashionCategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.link}
          className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group block"
        >
          {/* Category Header */}
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
              {category.title}
            </h3>
            {category.subtitle && (
              <p className="text-xs text-gray-600">{category.subtitle}</p>
            )}
          </div>

          {/* Category Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  {category.items?.[0] || 'Fashion'}
                </p>
                <p className="text-xs text-gray-600">
                  Starting from PKR {category.products?.[0]?.price.toLocaleString() || '1,999'}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Products */}
          {category.products && (
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2 mb-3">
                {category.products.slice(0, 2).map((product) => (
                  <div key={product.id} className="group/product">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover/product:scale-105 transition-transform duration-200"
                        sizes="(max-width: 768px) 25vw, 15vw"
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      PKR {product.price.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-full text-center text-xs text-primary-600 hover:text-primary-700 font-medium transition-colors border-t pt-3">
                Explore all products →
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}
