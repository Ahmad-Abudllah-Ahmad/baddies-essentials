'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'

// Define types for better TypeScript support
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  colors: string[];
  rating: number;
  reviewCount: number;
  badge: string | null;
  image: string;
  features: string[];
}

interface Category {
  id: string;
  name: string;
  brandName: string;
  description: string;
  products: Product[];
}

// Mock category data - in real app this would come from API
const getCategoryData = (brandId: string, categoryId: string): Category | null => {
  const categoryData: Record<string, Record<string, Category>> = {
    'khaadi': {
      'new-arrivals': {
        id: 'new-arrivals',
        name: 'New Arrivals',
        brandName: 'Khaadi',
        description: 'Latest fashion trends and collections',
        products: [
          {
            id: '1',
            name: 'Elegant Summer Dress',
            description: 'Beautiful floral summer dress perfect for casual outings',
            price: 4999,
            originalPrice: 7999,
            colors: ['Floral Blue', 'Floral Pink', 'Floral Green'],
            rating: 4.5,
            reviewCount: 128,
            badge: 'New Arrival',
            image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop',
            features: ['Premium cotton blend', 'Floral print design', 'A-line silhouette']
          },
          {
            id: '2',
            name: 'Traditional Lawn Suit',
            description: 'Premium lawn fabric with intricate embroidery work',
            price: 5999,
            originalPrice: 8999,
            colors: ['Mint Green', 'Coral Pink', 'Sky Blue'],
            rating: 4.8,
            reviewCount: 89,
            badge: 'Best Seller',
            image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop',
            features: ['Premium lawn fabric', 'Hand embroidered', 'Complete 3-piece set']
          },
          {
            id: '3',
            name: 'Casual Cotton Kurta',
            description: 'Comfortable cotton kurta for everyday wear',
            price: 2999,
            originalPrice: 4499,
            colors: ['White', 'Cream', 'Light Blue'],
            rating: 4.7,
            reviewCount: 156,
            badge: 'Comfort Fit',
            image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=400&h=300&fit=crop',
            features: ['100% cotton', 'Breathable fabric', 'Regular fit']
          },
          {
            id: '4',
            name: 'Formal Shirt Collection',
            description: 'Professional formal shirts for office wear',
            price: 3499,
            originalPrice: 4999,
            colors: ['White', 'Light Blue', 'Pink'],
            rating: 4.6,
            reviewCount: 203,
            badge: 'Professional',
            image: 'https://images.unsplash.com/photo-1602810317567-54378f44760a?w=400&h=300&fit=crop',
            features: ['Wrinkle-free fabric', 'Slim fit', 'Easy care']
          },
          {
            id: '5',
            name: 'Designer Dupatta Set',
            description: 'Elegant dupatta with matching accessories',
            price: 1999,
            originalPrice: 2999,
            colors: ['Gold', 'Silver', 'Rose Gold'],
            rating: 4.9,
            reviewCount: 87,
            badge: null,
            image: 'https://images.unsplash.com/photo-1457545195570-67f207084966?w=400&h=300&fit=crop',
            features: ['Chiffon fabric', 'Embellished border', 'Lightweight']
          }
        ]
      },
      'womens-wear': {
        id: 'womens-wear',
        name: 'Women\'s Wear',
        brandName: 'Khaadi',
        description: 'Elegant and stylish clothing for women',
        products: [
          {
            id: '6',
            name: 'Formal Business Dress',
            description: 'Professional attire with modern cut and elegant design',
            price: 7999,
            originalPrice: 11999,
            colors: ['Navy', 'Black', 'Charcoal'],
            rating: 4.4,
            reviewCount: 95,
            badge: 'Professional',
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop',
            features: ['Wrinkle-resistant fabric', 'Tailored fit', 'Office appropriate']
          },
          {
            id: '7',
            name: 'Casual Maxi Dress',
            description: 'Comfortable maxi dress for casual occasions',
            price: 4999,
            originalPrice: 6999,
            colors: ['Floral Print', 'Solid Black', 'Navy Blue'],
            rating: 4.6,
            reviewCount: 142,
            badge: 'Comfort Fit',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Flowy silhouette', 'Soft fabric', 'Easy to wear']
          },
          {
            id: '8',
            name: 'Traditional Shalwar Kameez',
            description: 'Classic Pakistani traditional wear',
            price: 6999,
            originalPrice: 9499,
            colors: ['Royal Blue', 'Emerald Green', 'Maroon'],
            rating: 4.8,
            reviewCount: 78,
            badge: 'Traditional',
            image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=300&fit=crop',
            features: ['Authentic design', 'Premium fabric', 'Complete set']
          }
        ]
      },
      'mens-wear': {
        id: 'mens-wear',
        name: 'Men\'s Wear',
        brandName: 'Khaadi',
        description: 'Sophisticated menswear collection',
        products: [
          {
            id: '9',
            name: 'Formal Kurta',
            description: 'Premium formal kurta for special occasions',
            price: 4999,
            originalPrice: 6999,
            colors: ['White', 'Cream', 'Light Grey'],
            rating: 4.7,
            reviewCount: 89,
            badge: 'Formal',
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
            features: ['Premium cotton', 'Traditional cut', 'Comfortable fit']
          }
        ]
      },
      'accessories': {
        id: 'accessories',
        name: 'Accessories',
        brandName: 'Khaadi',
        description: 'Complete your look with our accessories',
        products: [
          {
            id: '10',
            name: 'Designer Handbag',
            description: 'Elegant handbag with traditional motifs',
            price: 3999,
            originalPrice: 5999,
            colors: ['Brown', 'Black', 'Tan'],
            rating: 4.5,
            reviewCount: 67,
            badge: null,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
            features: ['Genuine leather', 'Multiple compartments', 'Adjustable strap']
          }
        ]
      },
      'footwear': {
        id: 'footwear',
        name: 'Footwear',
        brandName: 'Khaadi',
        description: 'Stylish shoes and sandals',
        products: [
          {
            id: '11',
            name: 'Traditional Khussas',
            description: 'Handcrafted traditional footwear',
            price: 2999,
            originalPrice: 3999,
            colors: ['Gold', 'Silver', 'Red'],
            rating: 4.8,
            reviewCount: 123,
            badge: 'Handcrafted',
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop',
            features: ['Handmade', 'Comfortable sole', 'Traditional design']
          }
        ]
      },
      'sale': {
        id: 'sale',
        name: 'Sale Items',
        brandName: 'Khaadi',
        description: 'Special offers and discounted items',
        products: [
          {
            id: '12',
            name: 'Clearance Collection',
            description: 'End of season clearance items',
            price: 1999,
            originalPrice: 3999,
            colors: ['Mixed', 'Various', 'Assorted'],
            rating: 4.2,
            reviewCount: 45,
            badge: 'Sale',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
            features: ['Limited stock', 'Final sale', 'Great value']
          }
        ]
      }
    },
    'outfitters': {
      'new-arrivals': {
        id: 'new-arrivals',
        name: 'New Arrivals',
        brandName: 'Outfitters',
        description: 'Latest trendy fashion',
        products: [
          {
            id: '1',
            name: 'Graphic T-Shirts',
            description: 'Trendy graphic t-shirts with unique designs',
            price: 1999,
            originalPrice: 2999,
            colors: ['Black', 'White', 'Gray'],
            rating: 4.5,
            reviewCount: 156,
            badge: 'Trending',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
            features: ['100% cotton', 'Graphic print', 'Comfortable fit']
          },
          {
            id: '2',
            name: 'Denim Jackets',
            description: 'Classic denim jacket for street style',
            price: 4999,
            originalPrice: 6999,
            colors: ['Blue Denim', 'Black Denim', 'Light Blue'],
            rating: 4.7,
            reviewCount: 203,
            badge: 'Best Seller',
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
            features: ['Premium denim', 'Classic fit', 'Versatile styling']
          }
        ]
      },
      'mens-wear': {
        id: 'mens-wear',
        name: 'Men\'s Wear',
        brandName: 'Outfitters',
        description: 'Stylish menswear collection',
        products: [
          {
            id: '3',
            name: 'Casual Shirts',
            description: 'Comfortable casual shirts for everyday wear',
            price: 2499,
            originalPrice: 3499,
            colors: ['White', 'Light Blue', 'Gray'],
            rating: 4.4,
            reviewCount: 89,
            badge: 'Casual',
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
            features: ['Cotton blend', 'Regular fit', 'Easy care']
          },
          {
            id: '4',
            name: 'Jeans',
            description: 'Premium denim jeans with modern fit',
            price: 3999,
            originalPrice: 5499,
            colors: ['Dark Blue', 'Light Blue', 'Black'],
            rating: 4.6,
            reviewCount: 178,
            badge: 'Popular',
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop',
            features: ['Stretch denim', 'Slim fit', 'Durable']
          }
        ]
      },
      'womens-wear': {
        id: 'womens-wear',
        name: 'Women\'s Wear',
        brandName: 'Outfitters',
        description: 'Trendy women\'s fashion',
        products: [
          {
            id: '5',
            name: 'Crop Tops',
            description: 'Stylish crop tops for casual outings',
            price: 1999,
            originalPrice: 2999,
            colors: ['Pink', 'White', 'Black'],
            rating: 4.5,
            reviewCount: 92,
            badge: 'Trendy',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Soft fabric', 'Trendy cut', 'Easy care']
          }
        ]
      },
      'accessories': {
        id: 'accessories',
        name: 'Accessories',
        brandName: 'Outfitters',
        description: 'Fashion accessories',
        products: [
          {
            id: '6',
            name: 'Caps & Hats',
            description: 'Trendy caps and hats for street style',
            price: 1299,
            originalPrice: 1799,
            colors: ['Black', 'Navy', 'Gray'],
            rating: 4.3,
            reviewCount: 67,
            badge: 'Accessory',
            image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=300&fit=crop',
            features: ['Adjustable fit', 'Durable material', 'Street style']
          }
        ]
      }
    },
    'gul-ahmed': {
      'lawn-collection': {
        id: 'lawn-collection',
        name: 'Lawn Collection',
        brandName: 'Gul Ahmed',
        description: 'Premium lawn fabrics for summer',
        products: [
          {
            id: '1',
            name: 'Floral Lawn Suit',
            description: 'Beautiful floral printed lawn suit',
            price: 5999,
            originalPrice: 7999,
            colors: ['Pink Floral', 'Blue Floral', 'Green Floral'],
            rating: 4.8,
            reviewCount: 234,
            badge: 'Premium',
            image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=400&h=300&fit=crop',
            features: ['Premium lawn fabric', 'Digital print', '3-piece suit']
          },
          {
            id: '2',
            name: 'Embroidered Lawn',
            description: 'Elegant embroidered lawn collection',
            price: 7999,
            originalPrice: 9999,
            colors: ['White', 'Cream', 'Peach'],
            rating: 4.9,
            reviewCount: 189,
            badge: 'Luxury',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Hand embroidery', 'Premium lawn', 'Unstitched']
          }
        ]
      },
      'formal-wear': {
        id: 'formal-wear',
        name: 'Formal Wear',
        brandName: 'Gul Ahmed',
        description: 'Elegant formal clothing',
        products: [
          {
            id: '3',
            name: 'Formal Shirt',
            description: 'Premium formal shirt for office wear',
            price: 3999,
            originalPrice: 5499,
            colors: ['White', 'Light Blue', 'Pink'],
            rating: 4.6,
            reviewCount: 156,
            badge: 'Professional',
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
            features: ['Wrinkle-free', 'Cotton blend', 'Slim fit']
          }
        ]
      },
      'casual-wear': {
        id: 'casual-wear',
        name: 'Casual Wear',
        brandName: 'Gul Ahmed',
        description: 'Comfortable everyday clothing',
        products: [
          {
            id: '4',
            name: 'Casual Kurta',
            description: 'Comfortable cotton kurta',
            price: 2999,
            originalPrice: 3999,
            colors: ['White', 'Cream', 'Light Blue'],
            rating: 4.5,
            reviewCount: 203,
            badge: 'Comfort',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['100% cotton', 'Breathable', 'Regular fit']
          }
        ]
      },
      'home-textiles': {
        id: 'home-textiles',
        name: 'Home Textiles',
        brandName: 'Gul Ahmed',
        description: 'Quality home furnishing',
        products: [
          {
            id: '5',
            name: 'Bed Sheet Set',
            description: 'Premium cotton bed sheet set',
            price: 4999,
            originalPrice: 6999,
            colors: ['White', 'Cream', 'Gray'],
            rating: 4.7,
            reviewCount: 167,
            badge: 'Quality',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            features: ['Egyptian cotton', 'Thread count 300', 'Complete set']
          }
        ]
      }
    },
    'nishat-linen': {
      'new-arrivals': {
        id: 'new-arrivals',
        name: 'New Arrivals',
        brandName: 'Nishat Linen',
        description: 'Latest fashion collections',
        products: [
          {
            id: '1',
            name: 'Embroidered Kurta',
            description: 'Beautiful embroidered kurta with traditional motifs',
            price: 4999,
            originalPrice: 6999,
            colors: ['White', 'Cream', 'Light Blue'],
            rating: 4.8,
            reviewCount: 145,
            badge: 'New Arrival',
            image: 'https://images.unsplash.com/photo-1518602164578-cd0074062767?w=400&h=300&fit=crop',
            features: ['Hand embroidered', 'Premium fabric', 'Traditional design']
          },
          {
            id: '2',
            name: 'Casual Dress',
            description: 'Comfortable casual dress for everyday wear',
            price: 3499,
            originalPrice: 4999,
            colors: ['Floral Print', 'Solid Navy', 'Light Pink'],
            rating: 4.6,
            reviewCount: 198,
            badge: 'Popular',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Soft fabric', 'A-line cut', 'Easy care']
          }
        ]
      },
      'womens-wear': {
        id: 'womens-wear',
        name: 'Women\'s Wear',
        brandName: 'Nishat Linen',
        description: 'Elegant women\'s fashion',
        products: [
          {
            id: '3',
            name: 'Formal Suits',
            description: 'Elegant formal suits for special occasions',
            price: 5999,
            originalPrice: 7999,
            colors: ['Navy', 'Black', 'Maroon'],
            rating: 4.7,
            reviewCount: 167,
            badge: 'Formal',
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop',
            features: ['Premium fabric', 'Tailored fit', 'Complete set']
          },
          {
            id: '4',
            name: 'Casual Tops',
            description: 'Comfortable casual tops for everyday wear',
            price: 2499,
            originalPrice: 3499,
            colors: ['White', 'Light Blue', 'Pink'],
            rating: 4.5,
            reviewCount: 89,
            badge: 'Casual',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Soft fabric', 'Regular fit', 'Easy care']
          }
        ]
      },
      'kids-wear': {
        id: 'kids-wear',
        name: 'Kids Wear',
        brandName: 'Nishat Linen',
        description: 'Adorable clothing for children',
        products: [
          {
            id: '5',
            name: 'Kids Kurta Set',
            description: 'Comfortable kurta set for kids',
            price: 2499,
            originalPrice: 3499,
            colors: ['White', 'Blue', 'Green'],
            rating: 4.6,
            reviewCount: 123,
            badge: 'Kids',
            image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=300&fit=crop',
            features: ['Soft fabric', 'Easy care', 'Comfortable fit']
          }
        ]
      },
      'home-collection': {
        id: 'home-collection',
        name: 'Home Collection',
        brandName: 'Nishat Linen',
        description: 'Beautiful home decor items',
        products: [
          {
            id: '6',
            name: 'Cushion Covers',
            description: 'Elegant cushion covers for home decor',
            price: 1499,
            originalPrice: 1999,
            colors: ['Floral', 'Geometric', 'Solid'],
            rating: 4.4,
            reviewCount: 78,
            badge: 'Home Decor',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            features: ['Premium fabric', 'Machine washable', 'Various designs']
          }
        ]
      },
      'unstitched': {
        id: 'unstitched',
        name: 'Unstitched',
        brandName: 'Nishat Linen',
        description: 'Unstitched fabric collection',
        products: [
          {
            id: '7',
            name: 'Unstitched Suits',
            description: 'Premium unstitched fabric suits',
            price: 3999,
            originalPrice: 5499,
            colors: ['Floral', 'Geometric', 'Abstract'],
            rating: 4.5,
            reviewCount: 167,
            badge: 'Fabric',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
            features: ['Premium fabric', 'Digital print', '3-meter length']
          },
          {
            id: '8',
            name: 'Fabric Collection',
            description: 'High-quality fabric collection',
            price: 2999,
            originalPrice: 3999,
            colors: ['Traditional', 'Modern', 'Classic'],
            rating: 4.3,
            reviewCount: 134,
            badge: 'Quality',
            image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop',
            features: ['High quality', 'Various patterns', 'Durable']
          }
        ]
      }
    },
    'alkaram': {
      'formal-collection': {
        id: 'formal-collection',
        name: 'Formal Collection',
        brandName: 'Alkaram Studio',
        description: 'Elegant formal wear',
        products: [
          {
            id: '1',
            name: 'Formal Suit',
            description: 'Elegant formal suit for special occasions',
            price: 7999,
            originalPrice: 9999,
            colors: ['Black', 'Navy', 'Charcoal'],
            rating: 4.8,
            reviewCount: 156,
            badge: 'Elegant',
            image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop',
            features: ['Premium fabric', 'Tailored fit', 'Formal occasion']
          }
        ]
      },
      'casual-wear': {
        id: 'casual-wear',
        name: 'Casual Wear',
        brandName: 'Alkaram Studio',
        description: 'Comfortable casual clothing',
        products: [
          {
            id: '2',
            name: 'Casual Dress',
            description: 'Comfortable dress for daily wear',
            price: 3999,
            originalPrice: 5499,
            colors: ['Floral', 'Solid', 'Striped'],
            rating: 4.5,
            reviewCount: 134,
            badge: 'Casual',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Soft fabric', 'Easy care', 'Comfortable fit']
          }
        ]
      },
      'bridal-wear': {
        id: 'bridal-wear',
        name: 'Bridal Wear',
        brandName: 'Alkaram Studio',
        description: 'Exquisite bridal collection',
        products: [
          {
            id: '3',
            name: 'Bridal Lehenga',
            description: 'Luxurious bridal lehenga',
            price: 25999,
            originalPrice: 35999,
            colors: ['Red', 'Maroon', 'Gold'],
            rating: 4.9,
            reviewCount: 67,
            badge: 'Bridal',
            image: 'https://images.unsplash.com/photo-1546193430-c2d207739ed7?w=400&h=300&fit=crop',
            features: ['Heavy embroidery', 'Premium fabric', 'Complete set']
          }
        ]
      },
      'accessories': {
        id: 'accessories',
        name: 'Accessories',
        brandName: 'Alkaram Studio',
        description: 'Fashion accessories',
        products: [
          {
            id: '4',
            name: 'Designer Scarf',
            description: 'Elegant designer scarf',
            price: 1299,
            originalPrice: 1799,
            colors: ['Silk Print', 'Floral', 'Geometric'],
            rating: 4.6,
            reviewCount: 98,
            badge: 'Accessory',
            image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop',
            features: ['Silk fabric', 'Designer print', 'Versatile styling']
          }
        ]
      }
    },
    'lama': {
      'streetwear': {
        id: 'streetwear',
        name: 'Streetwear',
        brandName: 'Lama',
        description: 'Urban street fashion',
        products: [
          {
            id: '1',
            name: 'Hoodies',
            description: 'Comfortable hoodies for street style',
            price: 3999,
            originalPrice: 5499,
            colors: ['Black', 'Gray', 'Navy'],
            rating: 4.6,
            reviewCount: 145,
            badge: 'Streetwear',
            image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
            features: ['Soft fleece', 'Urban fit', 'Comfortable']
          },
          {
            id: '2',
            name: 'Joggers',
            description: 'Stylish joggers for casual wear',
            price: 2999,
            originalPrice: 3999,
            colors: ['Black', 'Gray', 'Navy'],
            rating: 4.5,
            reviewCount: 198,
            badge: 'Casual',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Stretch fabric', 'Tapered fit', 'Drawstring waist']
          }
        ]
      },
      'casual-wear': {
        id: 'casual-wear',
        name: 'Casual Wear',
        brandName: 'Lama',
        description: 'Comfortable casual clothing',
        products: [
          {
            id: '3',
            name: 'T-Shirts',
            description: 'Basic t-shirts for everyday wear',
            price: 1799,
            originalPrice: 2499,
            colors: ['White', 'Black', 'Gray'],
            rating: 4.4,
            reviewCount: 167,
            badge: 'Basic',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
            features: ['100% cotton', 'Regular fit', 'Machine washable']
          }
        ]
      }
    },
    'breakout': {
      'urban-wear': {
        id: 'urban-wear',
        name: 'Urban Wear',
        brandName: 'Breakout',
        description: 'Modern urban fashion',
        products: [
          {
            id: '1',
            name: 'Urban Jackets',
            description: 'Stylish jackets for urban lifestyle',
            price: 4999,
            originalPrice: 6999,
            colors: ['Black', 'Navy', 'Olive'],
            rating: 4.7,
            reviewCount: 123,
            badge: 'Urban',
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
            features: ['Water resistant', 'Multiple pockets', 'Modern fit']
          }
        ]
      }
    },
    'crossstitch': {
      'formal-wear': {
        id: 'formal-wear',
        name: 'Formal Wear',
        brandName: 'CrossStitch',
        description: 'Professional formal clothing',
        products: [
          {
            id: '1',
            name: 'Formal Suits',
            description: 'Professional suits for office wear',
            price: 6999,
            originalPrice: 8999,
            colors: ['Navy', 'Black', 'Charcoal'],
            rating: 4.6,
            reviewCount: 89,
            badge: 'Professional',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Premium fabric', 'Tailored fit', 'Professional look']
          }
        ]
      }
    },
    'bata': {
      'mens-shoes': {
        id: 'mens-shoes',
        name: 'Men\'s Shoes',
        brandName: 'Bata',
        description: 'Quality men\'s footwear',
        products: [
          {
            id: '1',
            name: 'Formal Shoes',
            description: 'Professional formal shoes',
            price: 4999,
            originalPrice: 6499,
            colors: ['Black', 'Brown', 'Tan'],
            rating: 4.5,
            reviewCount: 234,
            badge: 'Formal',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
            features: ['Genuine leather', 'Comfortable sole', 'Professional look']
          },
          {
            id: '2',
            name: 'Casual Shoes',
            description: 'Comfortable casual footwear',
            price: 3999,
            originalPrice: 4999,
            colors: ['Brown', 'Black', 'Navy'],
            rating: 4.4,
            reviewCount: 189,
            badge: 'Casual',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            features: ['Comfortable fit', 'Durable material', 'Versatile style']
          }
        ]
      },
      'womens-shoes': {
        id: 'womens-shoes',
        name: 'Women\'s Shoes',
        brandName: 'Bata',
        description: 'Stylish women\'s footwear',
        products: [
          {
            id: '3',
            name: 'Heels',
            description: 'Elegant heels for formal occasions',
            price: 3499,
            originalPrice: 4499,
            colors: ['Black', 'Nude', 'Red'],
            rating: 4.6,
            reviewCount: 156,
            badge: 'Elegant',
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop',
            features: ['Comfortable heel', 'Elegant design', 'Quality material']
          }
        ]
      }
    },
    'servis': {
      'sports-shoes': {
        id: 'sports-shoes',
        name: 'Sports Shoes',
        brandName: 'Servis',
        description: 'Athletic footwear',
        products: [
          {
            id: '1',
            name: 'Running Shoes',
            description: 'Comfortable running shoes for athletes',
            price: 3999,
            originalPrice: 4999,
            colors: ['White', 'Black', 'Blue'],
            rating: 4.5,
            reviewCount: 267,
            badge: 'Athletic',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
            features: ['Cushioned sole', 'Breathable material', 'Athletic performance']
          }
        ]
      }
    },
    'nike-pakistan': {
      'athletic-wear': {
        id: 'athletic-wear',
        name: 'Athletic Wear',
        brandName: 'Nike Pakistan',
        description: 'Premium athletic clothing',
        products: [
          {
            id: '1',
            name: 'Nike Sneakers',
            description: 'Premium athletic sneakers',
            price: 12999,
            originalPrice: 15999,
            colors: ['White', 'Black', 'Red'],
            rating: 4.8,
            reviewCount: 345,
            badge: 'Premium',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
            features: ['Air cushioning', 'Premium materials', 'Athletic performance']
          }
        ]
      }
    },
    'huda-beauty': {
      'makeup-palettes': {
        id: 'makeup-palettes',
        name: 'Makeup Palettes',
        brandName: 'Huda Beauty',
        description: 'Professional makeup palettes',
        products: [
          {
            id: '1',
            name: 'Eyeshadow Palette',
            description: 'Professional eyeshadow palette',
            price: 3999,
            originalPrice: 4999,
            colors: ['Nude', 'Smokey', 'Colorful'],
            rating: 4.8,
            reviewCount: 234,
            badge: 'Professional',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
            features: ['18 shades', 'Highly pigmented', 'Long-lasting']
          }
        ]
      },
      'lipsticks': {
        id: 'lipsticks',
        name: 'Lipsticks',
        brandName: 'Huda Beauty',
        description: 'Premium lipstick collection',
        products: [
          {
            id: '2',
            name: 'Matte Lipstick',
            description: 'Long-lasting matte lipstick',
            price: 1299,
            originalPrice: 1599,
            colors: ['Red', 'Pink', 'Nude'],
            rating: 4.7,
            reviewCount: 189,
            badge: 'Matte',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
            features: ['Matte finish', 'Long-wearing', '8-hour stay']
          }
        ]
      },
      'foundation': {
        id: 'foundation',
        name: 'Foundation',
        brandName: 'Huda Beauty',
        description: 'Perfect base makeup',
        products: [
          {
            id: '3',
            name: 'Liquid Foundation',
            description: 'Full coverage liquid foundation',
            price: 2499,
            originalPrice: 2999,
            colors: ['Light', 'Medium', 'Dark'],
            rating: 4.6,
            reviewCount: 167,
            badge: 'Coverage',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
            features: ['Full coverage', 'Long-lasting', 'All skin types']
          }
        ]
      },
      'skincare': {
        id: 'skincare',
        name: 'Skincare',
        brandName: 'Huda Beauty',
        description: 'Beauty skincare products',
        products: [
          {
            id: '4',
            name: 'Face Serum',
            description: 'Hydrating face serum',
            price: 3499,
            originalPrice: 3999,
            colors: ['Vitamin C', 'Hyaluronic', 'Retinol'],
            rating: 4.9,
            reviewCount: 145,
            badge: 'Skincare',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
            features: ['Anti-aging', 'Hydrating', 'All skin types']
          }
        ]
      }
    },
    'junaid-jamshed': {
      'mens-wear': {
        id: 'mens-wear',
        name: 'Men\'s Wear',
        brandName: 'J.',
        description: 'Premium menswear collection',
        products: [
          {
            id: '1',
            name: 'Kameez Shalwar',
            description: 'Traditional kameez shalwar suit',
            price: 4999,
            originalPrice: 6999,
            colors: ['White', 'Cream', 'Blue'],
            rating: 4.8,
            reviewCount: 156,
            badge: 'Traditional',
            image: 'https://images.unsplash.com/photo-1589810635657-23294847b6a8?w=400&h=300&fit=crop',
            features: ['Premium fabric', 'Traditional cut', 'Elegant design']
          },
          {
            id: '2',
            name: 'Waistcoat',
            description: 'Stylish waistcoat for festive occasions',
            price: 5999,
            originalPrice: 8999,
            colors: ['Black', 'Maroon', 'Blue'],
            rating: 4.7,
            reviewCount: 123,
            badge: 'Festive',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
            features: ['Embroidered', 'Premium fabric', 'Perfect fit']
          }
        ]
      },
      'fragrances': {
        id: 'fragrances',
        name: 'Fragrances',
        brandName: 'J.',
        description: 'Exclusive fragrances',
        products: [
          {
            id: '3',
            name: 'J. Mentality',
            description: 'Signature fragrance for men',
            price: 3999,
            originalPrice: 4999,
            colors: ['100ml'],
            rating: 4.9,
            reviewCount: 234,
            badge: 'Best Seller',
            image: 'https://images.unsplash.com/photo-1620330922849-c1965e523554?w=400&h=300&fit=crop',
            features: ['Long lasting', 'Premium scent', 'Elegant bottle']
          }
        ]
      }
    },
    'sapphire': {
      'ready-to-wear': {
        id: 'ready-to-wear',
        name: 'Ready to Wear',
        brandName: 'Sapphire',
        description: 'Trendy ready to wear outfits',
        products: [
          {
            id: '1',
            name: 'Printed Kurta',
            description: 'Vibrant printed kurta',
            price: 2999,
            originalPrice: 3999,
            colors: ['Multi', 'Blue', 'Yellow'],
            rating: 4.6,
            reviewCount: 145,
            badge: 'New',
            image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop',
            features: ['Digital print', 'Soft fabric', 'Modern cut']
          },
          {
            id: '2',
            name: 'Fusion Top',
            description: 'Contemporary fusion top',
            price: 1999,
            originalPrice: 2999,
            colors: ['Pink', 'Green', 'White'],
            rating: 4.5,
            reviewCount: 98,
            badge: 'Trending',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
            features: ['Stylish cut', 'Casual wear', 'Comfortable']
          }
        ]
      },
      'unstitched': {
        id: 'unstitched',
        name: 'Unstitched',
        brandName: 'Sapphire',
        description: 'Premium unstitched fabrics',
        products: [
          {
            id: '3',
            name: 'Unstitched 3 Piece',
            description: 'Unstitched suit with chiffon dupatta',
            price: 4999,
            originalPrice: 6999,
            colors: ['Floral', 'Geometric', 'Abstract'],
            rating: 4.8,
            reviewCount: 167,
            badge: 'Premium',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
            features: ['High quality lawn', 'Embroidered', 'Complete set']
          }
        ]
      }
    },
    'limelight': {
      'casual-wear': {
        id: 'casual-wear',
        name: 'Casual Wear',
        brandName: 'Limelight',
        description: 'Everyday fashion essentials',
        products: [
          {
            id: '1',
            name: 'Basic Tee',
            description: 'Comfortable basic t-shirt',
            price: 999,
            originalPrice: 1499,
            colors: ['Black', 'White', 'Gray', 'Pink'],
            rating: 4.4,
            reviewCount: 203,
            badge: 'Essential',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
            features: ['Soft cotton', 'Regular fit', 'Everyday wear']
          },
          {
            id: '2',
            name: 'Printed Trousers',
            description: 'Stylish printed trousers',
            price: 1499,
            originalPrice: 1999,
            colors: ['Patterned', 'Striped', 'Floral'],
            rating: 4.3,
            reviewCount: 156,
            badge: 'Value',
            image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=300&fit=crop',
            features: ['Comfortable fit', 'Trendy print', 'Versatile']
          }
        ]
      },
      'formal-wear': {
        id: 'formal-wear',
        name: 'Formal Wear',
        brandName: 'Limelight',
        description: 'Affordable formal outfits',
        products: [
          {
            id: '3',
            name: 'Embroidered Shirt',
            description: 'Elegant embroidered shirt',
            price: 2999,
            originalPrice: 3999,
            colors: ['Blue', 'Maroon', 'Black'],
            rating: 4.6,
            reviewCount: 123,
            badge: 'New',
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
            features: ['Intricate embroidery', 'Formal look', 'Great value']
          }
        ]
      }
    },
    'bonanza': {
      'lawn': {
        id: 'lawn',
        name: 'Lawn Collection',
        brandName: 'Bonanza Satrangi',
        description: 'Vibrant lawn prints',
        products: [
          {
            id: '1',
            name: 'Lawn 3 Piece',
            description: 'Traditional 3 piece lawn suit',
            price: 3999,
            originalPrice: 5499,
            colors: ['Red', 'Green', 'Yellow'],
            rating: 4.7,
            reviewCount: 189,
            badge: 'Summer',
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop',
            features: ['Cool fabric', 'Vibrant colors', 'Summer essential']
          }
        ]
      },
      'winter-collection': {
        id: 'winter-collection',
        name: 'Winter Collection',
        brandName: 'Bonanza Satrangi',
        description: 'Warm winter wear',
        products: [
          {
            id: '2',
            name: 'Khaddar Suit',
            description: 'Warm khaddar suit for winter',
            price: 2999,
            originalPrice: 3999,
            colors: ['Brown', 'Blue', 'Gray'],
            rating: 4.8,
            reviewCount: 145,
            badge: 'Winter',
            image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
            features: ['Warm fabric', 'Durable', 'Winter ready']
          }
        ]
      }
    },
    'ndure': {
      'sneakers': {
        id: 'sneakers',
        name: 'Sneakers',
        brandName: 'Ndure',
        description: 'Comfortable & trendy sneakers',
        products: [
          {
            id: '1',
            name: 'Chunky Sneakers',
            description: 'Fashion forward chunky sneakers',
            price: 2999,
            originalPrice: 3999,
            colors: ['White', 'Black/White', 'Beige'],
            rating: 4.5,
            reviewCount: 167,
            badge: 'Trendy',
            image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop',
            features: ['Chunky sole', 'Comfortable insole', 'Statement piece']
          },
          {
            id: '2',
            name: 'Canvas Shoes',
            description: 'Classic canvas shoes',
            price: 1999,
            originalPrice: 2499,
            colors: ['Navy', 'Black', 'White'],
            rating: 4.3,
            reviewCount: 203,
            badge: 'Classic',
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop',
            features: ['Durable canvas', 'Rubber sole', 'Everyday wear']
          }
        ]
      },
      'casual-shoes': {
        id: 'casual-shoes',
        name: 'Casual Shoes',
        brandName: 'Ndure',
        description: 'Everyday footwear',
        products: [
          {
            id: '3',
            name: 'Slip-ons',
            description: 'Easy to wear slip-on shoes',
            price: 1499,
            originalPrice: 1999,
            colors: ['Black', 'Gray', 'Blue'],
            rating: 4.4,
            reviewCount: 134,
            badge: 'Comfy',
            image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop',
            features: ['No laces', 'Lightweight', 'Casual style']
          }
        ]
      }
    }
  }

  return categoryData[brandId as keyof typeof categoryData]?.[categoryId as keyof typeof categoryData[keyof typeof categoryData]] || null
}

export default function CategoryPage() {
  const params = useParams()
  const { addItem } = useCart()
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const category = getCategoryData(params.brandId as string, params.categoryId as string)

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })

    // Show brief success feedback
    const button = e.currentTarget as HTMLButtonElement
    const originalText = button.textContent
    button.textContent = 'Added!'
    button.style.backgroundColor = '#10b981'

    setTimeout(() => {
      button.textContent = originalText
      button.style.backgroundColor = ''
    }, 1500)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarSolidIcon key={i} className="h-4 w-4 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <StarSolidIcon className="h-4 w-4 text-yellow-400 absolute top-0 left-0 w-1/2 overflow-hidden" />
        </div>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Brand Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.brandName}</h1>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href={`/store/${params.brandId}`} className="text-sm text-gray-600 hover:text-gray-900">
                Store
              </Link>
              <span className="text-sm text-gray-900 font-medium">{category.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <ChevronRightIcon className="h-4 w-4" />
          <Link href={`/store/${params.brandId}`} className="hover:text-gray-900">{category.brandName}</Link>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="text-gray-900">{category.name}</span>
        </nav>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-16">
          {category.products.map((product: Product, index: number) => (
            <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-lg text-gray-600">{product.description}</p>
                </div>

                {/* Color Options */}
                <div className="flex items-center space-x-2">
                  {product.colors.map((color: string, colorIndex: number) => (
                    <div
                      key={color}
                      className={`w-6 h-6 rounded-full border-2 ${colorIndex === 0 ? 'border-gray-400' : 'border-gray-300'
                        }`}
                      style={{
                        backgroundColor: colorIndex === 0 ? '#374151' :
                          colorIndex === 1 ? '#6B7280' : '#9CA3AF'
                      }}
                    />
                  ))}
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="inline-flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-orange-600 font-medium">{product.badge}</span>
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-gray-900">
                    PKR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-1">
                  {product.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="text-gray-600 text-sm">• {feature}</li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link href={`/product/${product.id}`} className="flex-1">
                    <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-200 transition-colors">
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="flex-1 bg-black text-white py-3 px-6 rounded-2xl font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You May Also Like */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {category.products.slice(0, 4).map((product) => (
              <Link
                key={`related-${product.id}`}
                href={`/product/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
                      <span className="text-xs font-semibold text-gray-900">{product.badge}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-xs text-gray-500">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-semibold text-gray-900">
                      PKR {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        PKR {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
