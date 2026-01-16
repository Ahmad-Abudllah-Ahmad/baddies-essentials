import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

// Mock brand data - in real app this would come from API
const brandData = {
  'khaadi': {
    id: 'khaadi',
    name: 'Khaadi',
    description: 'Premium Pakistani Fashion Brand',
    banner: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'new-arrivals',
        name: 'See what\'s new.',
        description: 'Latest fashion trends and collections',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Summer Dress Collection', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=200&fit=crop', price: 4999, originalPrice: 6999 },
          { id: '2', name: 'Casual Wear', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=200&fit=crop', price: 3499, originalPrice: 4999 },
          { id: '3', name: 'Traditional Kurta', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&h=200&fit=crop', price: 5999, originalPrice: 7999 },
          { id: '4', name: 'Embroidered Dupatta', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      },
      {
        id: 'womens-wear',
        name: 'Women\'s Wear',
        description: 'Elegant and stylish clothing for women',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Elegant Summer Dress', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=200&fit=crop', price: 4999, originalPrice: 7999 },
          { id: '2', name: 'Traditional Lawn Suit', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&h=200&fit=crop', price: 5999, originalPrice: 8999 }
        ]
      },
      {
        id: 'mens-wear',
        name: 'Men\'s Wear',
        description: 'Sophisticated menswear collection',
        viewAllText: 'View all',
        products: [
          { id: '6', name: 'Formal Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=150&h=150&fit=crop', price: 3999, originalPrice: 4999 },
          { id: '7', name: 'Casual Wear', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop', price: 2499, originalPrice: 3499 }
        ]
      },
      {
        id: 'accessories',
        name: 'Accessories',
        description: 'Complete your look with our accessories',
        viewAllText: 'View all',
        products: [
          { id: '8', name: 'Handbags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop', price: 1999, originalPrice: 2999 },
          { id: '9', name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=150&fit=crop', price: 899, originalPrice: 1299 },
          { id: '10', name: 'Scarves', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=150&h=150&fit=crop', price: 799, originalPrice: 1199 }
        ]
      },
      {
        id: 'footwear',
        name: 'Footwear',
        description: 'Stylish shoes and sandals',
        viewAllText: 'View all',
        products: [
          { id: '11', name: 'Heels', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=150&h=150&fit=crop', price: 4999, originalPrice: 6999 },
          { id: '12', name: 'Flats', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=150&h=150&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      },
      {
        id: 'sale',
        name: 'Sale Items',
        description: 'Special offers and discounted items',
        viewAllText: 'View all',
        products: [
          { id: '13', name: 'Clearance Items', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', price: 1499, originalPrice: 2999 }
        ]
      }
    ]
  },
  'gul-ahmed': {
    id: 'gul-ahmed',
    name: 'Gul Ahmed',
    description: 'Traditional & Modern Pakistani Clothing',
    banner: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'lawn-collection',
        name: 'Lawn Collection',
        description: 'Premium lawn fabrics for summer',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Floral Lawn Suit', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop', price: 5999, originalPrice: 7999 },
          { id: '2', name: 'Printed Lawn Dress', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=200&fit=crop', price: 4999, originalPrice: 6499 }
        ]
      },
      {
        id: 'formal-wear',
        name: 'Formal Wear',
        description: 'Elegant formal clothing',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Formal Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=150&h=150&fit=crop', price: 3999, originalPrice: 5499 },
          { id: '4', name: 'Formal Trousers', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=150&h=150&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      },
      {
        id: 'casual-wear',
        name: 'Casual Wear',
        description: 'Comfortable everyday clothing',
        viewAllText: 'View all',
        products: [
          { id: '5', name: 'Casual Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop', price: 2499, originalPrice: 3499 },
          { id: '6', name: 'Casual Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=150&h=150&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      },
      {
        id: 'home-textiles',
        name: 'Home Textiles',
        description: 'Quality home furnishing',
        viewAllText: 'View all',
        products: [
          { id: '7', name: 'Bed Sheets', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop', price: 3999, originalPrice: 5499 },
          { id: '8', name: 'Curtains', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&h=150&fit=crop', price: 2999, originalPrice: 4499 }
        ]
      }
    ]
  },
  'nishat-linen': {
    id: 'nishat-linen',
    name: 'Nishat Linen',
    description: 'Quality Fabrics & Fashion',
    banner: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'new-arrivals',
        name: 'New Arrivals',
        description: 'Latest fashion collections',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Embroidered Kurta', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&h=200&fit=crop', price: 4999, originalPrice: 6999 },
          { id: '2', name: 'Casual Dress', image: 'https://images.unsplash.com/photo-1618932260643-be4bf0fd71df?w=300&h=200&fit=crop', price: 3499, originalPrice: 4999 }
        ]
      },
      {
        id: 'womens-wear',
        name: 'Women\'s Wear',
        description: 'Elegant women\'s fashion',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Formal Suits', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&h=150&fit=crop', price: 5999, originalPrice: 7999 },
          { id: '4', name: 'Casual Tops', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=150&h=150&fit=crop', price: 2499, originalPrice: 3499 }
        ]
      },
      {
        id: 'kids-wear',
        name: 'Kids Wear',
        description: 'Adorable clothing for children',
        viewAllText: 'View all',
        products: [
          { id: '5', name: 'Kids Kurta Set', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=150&h=150&fit=crop', price: 2499, originalPrice: 3499 }
        ]
      },
      {
        id: 'home-collection',
        name: 'Home Collection',
        description: 'Beautiful home decor items',
        viewAllText: 'View all',
        products: [
          { id: '6', name: 'Cushion Covers', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop', price: 1499, originalPrice: 1999 }
        ]
      },
      {
        id: 'unstitched',
        name: 'Unstitched',
        description: 'Unstitched fabric collection',
        viewAllText: 'View all',
        products: [
          { id: '5', name: 'Unstitched Suits', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=150&h=150&fit=crop', price: 3999, originalPrice: 5499 },
          { id: '6', name: 'Fabric Collection', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      }
    ]
  },
  'alkaram': {
    id: 'alkaram',
    name: 'Alkaram Studio',
    description: 'Elegant Pakistani Fashion',
    banner: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'formal-collection',
        name: 'Formal Collection',
        description: 'Elegant formal wear',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Formal Suits', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300&h=200&fit=crop', price: 7999, originalPrice: 9999 },
          { id: '2', name: 'Evening Wear', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=200&fit=crop', price: 8999, originalPrice: 11999 }
        ]
      },
      {
        id: 'casual-wear',
        name: 'Casual Wear',
        description: 'Comfortable casual clothing',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Casual Dresses', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop', price: 3999, originalPrice: 5499 },
          { id: '4', name: 'Casual Tops', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=150&h=150&fit=crop', price: 2499, originalPrice: 3499 }
        ]
      },
      {
        id: 'bridal-wear',
        name: 'Bridal Wear',
        description: 'Exquisite bridal collection',
        viewAllText: 'View all',
        products: [
          { id: '5', name: 'Bridal Suits', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop', price: 15999, originalPrice: 19999 },
          { id: '6', name: 'Bridal Accessories', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=150&fit=crop', price: 4999, originalPrice: 6999 }
        ]
      },
      {
        id: 'accessories',
        name: 'Accessories',
        description: 'Fashion accessories',
        viewAllText: 'View all',
        products: [
          { id: '7', name: 'Scarves', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=150&h=150&fit=crop', price: 1299, originalPrice: 1799 },
          { id: '8', name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=150&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      }
    ]
  },
  'huda-beauty': {
    id: 'huda-beauty',
    name: 'Huda Beauty',
    description: 'Professional Makeup & Beauty',
    banner: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'makeup-palettes',
        name: 'Makeup Palettes',
        description: 'Professional makeup palettes',
        viewAllText: 'View all',
        products: [
          { id: '5', name: 'Eyeshadow Palette', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=200&fit=crop', price: 3999, originalPrice: 4999 }
        ]
      },
      {
        id: 'lipsticks',
        name: 'Lipsticks',
        description: 'Premium lipstick collection',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Matte Lipstick', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop', price: 1299, originalPrice: 1599 },
          { id: '4', name: 'Liquid Lipstick', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop', price: 1499, originalPrice: 1899 }
        ]
      },
      {
        id: 'foundation',
        name: 'Foundation',
        description: 'Perfect base makeup',
        viewAllText: 'View all',
        products: [
          { id: '5', name: 'Liquid Foundation', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop', price: 2499, originalPrice: 2999 },
          { id: '6', name: 'Powder Foundation', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop', price: 1999, originalPrice: 2499 }
        ]
      },
      {
        id: 'skincare',
        name: 'Skincare',
        description: 'Beauty skincare products',
        viewAllText: 'View all',
        products: [
          { id: '7', name: 'Face Serum', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop', price: 1999, originalPrice: 2499 },
          { id: '8', name: 'Moisturizer', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop', price: 1499, originalPrice: 1899 }
        ]
      }
    ]
  },
  'outfitters': {
    id: 'outfitters',
    name: 'Outfitters',
    description: 'Trendy Youth Fashion',
    banner: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'new-arrivals',
        name: 'New Arrivals',
        description: 'Latest trendy fashion',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Graphic T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop', price: 1999, originalPrice: 2999 },
          { id: '4', name: 'Denim Jackets', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop', price: 4999, originalPrice: 6999 }
        ]
      },
      {
        id: 'mens-wear',
        name: 'Men\'s Wear',
        description: 'Stylish menswear collection',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Casual Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=150&h=150&fit=crop', price: 2499, originalPrice: 3499 },
          { id: '4', name: 'Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=150&h=150&fit=crop', price: 3999, originalPrice: 5499 }
        ]
      },
      {
        id: 'womens-wear',
        name: 'Women\'s Wear',
        description: 'Trendy women\'s fashion',
        viewAllText: 'View all',
        products: [
          { id: '5', name: 'Crop Tops', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop', price: 1999, originalPrice: 2999 }
        ]
      },
      {
        id: 'accessories',
        name: 'Accessories',
        description: 'Fashion accessories',
        viewAllText: 'View all',
        products: [
          { id: '6', name: 'Caps & Hats', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=150&h=150&fit=crop', price: 1299, originalPrice: 1799 }
        ]
      }
    ]
  },
  'lama': {
    id: 'lama',
    name: 'Lama',
    description: 'Contemporary Streetwear',
    banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'streetwear',
        name: 'Streetwear',
        description: 'Urban street fashion',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=200&fit=crop', price: 3999, originalPrice: 5499 },
          { id: '2', name: 'Joggers', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      },
      {
        id: 'casual-wear',
        name: 'Casual Wear',
        description: 'Comfortable casual clothing',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop', price: 1799, originalPrice: 2499 }
        ]
      }
    ]
  },
  'breakout': {
    id: 'breakout',
    name: 'Breakout',
    description: 'Urban Lifestyle Brand',
    banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'urban-wear',
        name: 'Urban Wear',
        description: 'Modern urban fashion',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Urban Jackets', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop', price: 4999, originalPrice: 6999 }
        ]
      }
    ]
  },
  'crossstitch': {
    id: 'crossstitch',
    name: 'CrossStitch',
    description: 'Contemporary Fashion',
    banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'formal-wear',
        name: 'Formal Wear',
        description: 'Professional formal clothing',
        viewAllText: 'View all',
        products: [
          { id: '6', name: 'Formal Suits', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop', price: 6999, originalPrice: 8999 }
        ]
      }
    ]
  },
  'bata': {
    id: 'bata',
    name: 'Bata',
    description: 'Quality Footwear',
    banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'mens-shoes',
        name: 'Men\'s Shoes',
        description: 'Quality men\'s footwear',
        viewAllText: 'View all',
        products: [
          { id: '7', name: 'Formal Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop', price: 4999, originalPrice: 6499 },
          { id: '8', name: 'Casual Shoes', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=200&fit=crop', price: 3999, originalPrice: 4999 }
        ]
      },
      {
        id: 'womens-shoes',
        name: 'Women\'s Shoes',
        description: 'Stylish women\'s footwear',
        viewAllText: 'View all',
        products: [
          { id: '9', name: 'Heels', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=150&h=150&fit=crop', price: 3499, originalPrice: 4499 }
        ]
      }
    ]
  },
  'servis': {
    id: 'servis',
    name: 'Servis',
    description: 'Sports & Casual Footwear',
    banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'sports-shoes',
        name: 'Sports Shoes',
        description: 'Athletic footwear',
        viewAllText: 'View all',
        products: [
          { id: '10', name: 'Running Shoes', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&h=200&fit=crop', price: 3999, originalPrice: 4999 }
        ]
      }
    ]
  },
  'nike-pakistan': {
    id: 'nike-pakistan',
    name: 'Nike Pakistan',
    description: 'Premium Sports Brand',
    banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'athletic-wear',
        name: 'Athletic Wear',
        description: 'Premium athletic clothing',
        viewAllText: 'View all',
        products: [
          { id: '11', name: 'Nike Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop', price: 12999, originalPrice: 15999 }
        ]
      }
    ]
  },
  'junaid-jamshed': {
    id: 'junaid-jamshed',
    name: 'J.',
    description: 'Mens Fashion & Fragrances',
    banner: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'mens-wear',
        name: 'Men\'s Wear',
        description: 'Premium menswear collection',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Kameez Shalwar', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=300&h=200&fit=crop', price: 4999, originalPrice: 6999 },
          { id: '2', name: 'Waistcoat', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop', price: 5999, originalPrice: 8999 }
        ]
      },
      {
        id: 'fragrances',
        name: 'Fragrances',
        description: 'Exclusive fragrances',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'J. Mentality', image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=300&h=200&fit=crop', price: 3999, originalPrice: 4999 }
        ]
      }
    ]
  },
  'sapphire': {
    id: 'sapphire',
    name: 'Sapphire',
    description: 'Contemporary Fashion',
    banner: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'ready-to-wear',
        name: 'Ready to Wear',
        description: 'Trendy ready to wear outfits',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Printed Kurta', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=300&h=200&fit=crop', price: 2999, originalPrice: 3999 },
          { id: '2', name: 'Fusion Top', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop', price: 1999, originalPrice: 2999 }
        ]
      },
      {
        id: 'unstitched',
        name: 'Unstitched',
        description: 'Premium unstitched fabrics',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Unstitched 3 Piece', image: 'https://images.unsplash.com/photo-1632141527027-a06f25d9b626?w=300&h=200&fit=crop', price: 4999, originalPrice: 6999 }
        ]
      }
    ]
  },
  'limelight': {
    id: 'limelight',
    name: 'Limelight',
    description: 'Affordable Fashion',
    banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'casual-wear',
        name: 'Casual Wear',
        description: 'Everyday fashion essentials',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Basic Tee', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop', price: 999, originalPrice: 1499 },
          { id: '2', name: 'Printed Trousers', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=200&fit=crop', price: 1499, originalPrice: 1999 }
        ]
      },
      {
        id: 'formal-wear',
        name: 'Formal Wear',
        description: 'Affordable formal outfits',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Embroidered Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=200&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      }
    ]
  },
  'bonanza': {
    id: 'bonanza',
    name: 'Bonanza Satrangi',
    description: 'Colorful Fashion',
    banner: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'lawn',
        name: 'Lawn Collection',
        description: 'Vibrant lawn prints',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Lawn 3 Piece', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop', price: 3999, originalPrice: 5499 }
        ]
      },
      {
        id: 'winter-collection',
        name: 'Winter Collection',
        description: 'Warm winter wear',
        viewAllText: 'View all',
        products: [
          { id: '2', name: 'Khaddar Suit', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=200&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      }
    ]
  },
  'ndure': {
    id: 'ndure',
    name: 'Ndure',
    description: 'Trendy Footwear',
    banner: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=150&h=150&fit=crop',
    categories: [
      {
        id: 'sneakers',
        name: 'Sneakers',
        description: 'Comfortable & trendy sneakers',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Chunky Sneakers', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&h=200&fit=crop', price: 2999, originalPrice: 3999 },
          { id: '2', name: 'Canvas Shoes', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=200&fit=crop', price: 1999, originalPrice: 2499 }
        ]
      },
      {
        id: 'casual-shoes',
        name: 'Casual Shoes',
        description: 'Everyday footwear',
        viewAllText: 'View all',
        products: [
          { id: '3', name: 'Slip-ons', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=200&fit=crop', price: 1499, originalPrice: 1999 }
        ]
      }
    ]
  },
  'ideas': {
    id: 'ideas',
    name: 'Ideas',
    description: 'Home & Fashion',
    banner: 'https://images.unsplash.com/photo-1524041255072-7da0525d6b34?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1524041255072-7da0525d6b34?w=150&h=150&fit=crop',
    rating: 4.5,
    categories: [
      {
        id: 'home',
        name: 'Home',
        description: 'Home accessories',
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Bed Set', image: 'https://images.unsplash.com/photo-1522771753035-1a5b6562f3ba?w=300&h=200&fit=crop', price: 4999, originalPrice: 6999 }
        ]
      },
      {
        id: 'womens-wear',
        name: "Women's Wear",
        description: "Stylish women's clothing",
        viewAllText: 'View all',
        products: [
          { id: '2', name: 'Pret Kurta', image: 'https://images.unsplash.com/photo-1589810635657-23294847b6a8?w=300&h=200&fit=crop', price: 2999, originalPrice: 3999 }
        ]
      }
    ]
  },
  'edenrobe': {
    id: 'edenrobe',
    name: 'Edenrobe',
    description: 'Stylish Apparel',
    banner: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1200&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=150&h=150&fit=crop',
    rating: 4.4,
    categories: [
      {
        id: 'mens-wear',
        name: "Men's Wear",
        description: "Men's fashion",
        viewAllText: 'View all',
        products: [
          { id: '1', name: 'Formal Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=200&fit=crop', price: 2499, originalPrice: 3499 }
        ]
      },
      {
        id: 'kids-wear',
        name: "Kids Wear",
        description: "Kids' fashion",
        viewAllText: 'View all',
        products: [
          { id: '2', name: 'Kids T-Shirt', image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=300&h=200&fit=crop', price: 1299, originalPrice: 1999 }
        ]
      }
    ]
  }
}

const getBrandById = (brandId: string) => {
  return brandData[brandId as keyof typeof brandData] || null
}

export default function BrandStorePage({ params }: { params: { brandId: string } }) {
  const brand = getBrandById(params.brandId)

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Brand Not Found</h1>
          <p className="text-gray-600">The brand you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Brand Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{brand.name}</h1>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor((brand as any).rating || 4.5) ? 'fill-current' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 font-medium">({(brand as any).rating || 4.5})</span>
            </div>

            <p className="text-lg text-gray-600">{brand.description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Bar (like Apple's) */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <Link href={`/store/${brand.id}`} className="text-sm text-gray-600 hover:text-gray-900">
                Store Home
              </Link>
              {brand.categories.slice(0, 6).map((category) => (
                <Link
                  key={category.id}
                  href={`/store/${brand.id}/category/${category.id}`}
                  className="text-sm text-gray-600 hover:text-gray-900 capitalize"
                >
                  {category.name.replace('See what\'s new.', 'New').replace('\'s Wear', '').replace('\'s Fashion', '')}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-gray-900">
                Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brand.categories.map((category, index) => (
            <div
              key={category.id}
              className={`bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow ${index === 0 ? 'md:col-span-2' : ''
                }`}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h2>
                <Link
                  href={`/store/${brand.id}/category/${category.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  {category.viewAllText}
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {/* Category Products Grid */}
              <div className={`grid gap-4 ${index === 0
                ? 'grid-cols-2 md:grid-cols-4'
                : category.products.length <= 2
                  ? 'grid-cols-2'
                  : 'grid-cols-3'
                }`}>
                {category.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/store/${brand.id}/category/${category.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                      <div className={`${index === 0 ? 'aspect-[4/3]' : 'aspect-square'
                        } relative overflow-hidden`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.price && (
                          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                            <span className="text-sm font-semibold text-gray-900">Rs. {product.price.toLocaleString()}</span>
                            {product.originalPrice && (
                              <span className="text-xs text-gray-500 line-through ml-1">Rs. {product.originalPrice.toLocaleString()}</span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Info Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About {brand.name}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our complete collection of premium fashion items. From traditional wear to contemporary styles,
            we offer high-quality clothing and accessories that reflect Pakistani culture and modern fashion trends.
          </p>

        </div>
      </div>
    </div>
  )
}
