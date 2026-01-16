export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    onSale: boolean;
    tag?: string;
    category?: string;
    description?: string;
    ageGroup?: string;
    discount?: string;
    isNew?: boolean;
}

export const products: Product[] = [
    // --- Women (1-99) ---
    {
        id: 1,
        name: 'Embroidered Lawn Suit',
        brand: 'Khaadi',
        price: 8500,
        originalPrice: 10000,
        image: 'https://images.unsplash.com/photo-1710623994944-5c667bf5bff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJlZCUyMGxhd24lMjBzdWl0JTIwcGFraXN0YW4lMjBtb2RlbHxlbnwwfDF8fHwxNzY4MzI5ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        reviews: 234,
        onSale: true,
        tag: 'Best Seller',
        category: 'Lawn Suits'
    },
    {
        id: 2,
        name: 'Casual Kurta',
        brand: 'Gul Ahmed',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1707665231486-4c1d66a15b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBrdXJ0YSUyMHdvbWVuJTIwcGFraXN0YW58ZW58MHwxfHx8MTc2ODMyOTgyMnww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        reviews: 156,
        onSale: false,
        tag: 'New',
        category: 'Kurtas'
    },
    {
        id: 3,
        name: 'Designer Dupatta',
        brand: 'Nishat',
        price: 3500,
        originalPrice: 4500,
        image: 'https://images.unsplash.com/photo-1710623443352-df8b4f45d227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGR1cGF0dGElMjBwYWtpc3RhbnxlbnwwfDF8fHwxNzY4MzI5ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.3,
        reviews: 89,
        onSale: true,
        category: 'Dupattas'
    },
    {
        id: 4,
        name: 'Formal Dress',
        brand: 'Sana Safinaz',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1765229278873-edd7918dd31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBkcmVzcyUyMGV2ZW5pbmclMjB3b21lbnxlbnwwfDF8fHwxNzY4MzI5ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 67,
        onSale: false,
        tag: 'Premium',
        category: 'Formal Wear'
    },
    {
        id: 5,
        name: 'Cotton Shirt',
        brand: 'Outfitters',
        price: 3200,
        originalPrice: 4000,
        image: 'https://images.unsplash.com/photo-1652953186915-420ae843d1a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBzaGlydCUyMHdvbWVuJTIwbW9kZXN0fGVufDB8MXx8fDE3NjgzMjk4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.2,
        reviews: 123,
        onSale: true,
        category: 'Casual Wear'
    },
    {
        id: 6,
        name: 'Printed Scarf',
        brand: 'Bonanza',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1620740199226-2420c2fcaa18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxwcmludGVkJTIwc2NhcmYlMjB3b21lbiUyMHN0eWxpc2h8ZW58MHwxfHx8MTc2ODMyOTgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.1,
        reviews: 45,
        onSale: false,
        category: 'Scarves'
    },

    // --- Men (100-199) ---
    {
        id: 101,
        name: 'Classic Kameez Shalwar',
        brand: 'J.',
        price: 6500,
        originalPrice: 7500,
        image: 'https://images.unsplash.com/photo-1671818237371-ec4b31f30922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxzaGFtZWV6LXNoYWx3YXItbWVufGVufDB8MXx8fDE3NjgzMjk4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        reviews: 189,
        onSale: true,
        tag: 'Best Seller',
        category: 'Kameez Shalwar'
    },
    {
        id: 102,
        name: 'Denim Jacket',
        brand: 'Levis',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1511401677968-feade623d58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldCUyMG1lbiUyMGRhcmt8ZW58MHwxfHx8MTc2ODMyOTgxNXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        reviews: 112,
        onSale: false,
        tag: 'New',
        category: 'Jeans'
    },
    {
        id: 103,
        name: 'Formal White Shirt',
        brand: 'Charcoal',
        price: 4500,
        originalPrice: 5500,
        image: 'https://images.unsplash.com/photo-1765175096499-edc413eba349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGZvcm1hbCUyMHNoaXJ0JTIwbWVufGVufDB8MXx8fDE3NjgzMjk4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        reviews: 78,
        onSale: true,
        category: 'Formal Shirts'
    },
    {
        id: 104,
        name: 'Black Kurta',
        brand: 'Dynasty',
        price: 4900,
        image: 'https://images.unsplash.com/photo-1727835523550-18478cacefa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGt1cnRhJTIwbWVufGVufDB8MXx8fDE3NjgzMjk4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 45,
        onSale: false,
        tag: 'Premium',
        category: 'Kurtas'
    },
    {
        id: 105,
        name: 'Casual Chinos',
        brand: 'Dockers',
        price: 6000,
        originalPrice: 7500,
        image: 'https://images.unsplash.com/photo-1764816657611-8b1bd2d72cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBjaGlub3MlMjBtZW58ZW58MHwxfHx8MTc2ODMyOTgyMHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.3,
        reviews: 134,
        onSale: true,
        category: 'Trousers' // Mapped from Chinos
    },
    {
        id: 106,
        name: 'Leather Boots',
        brand: 'Timberland',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1628014376659-ca1dd41f765a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBtZW4lMjB0aW1iZXJsYW5kfGVufDB8MXx8fDE3NjgzMjk4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        reviews: 56,
        onSale: false,
        category: 'Footwear'
    },

    // --- Accessories (200-299) ---
    {
        id: 201,
        name: 'Leather Handbag',
        brand: 'Gucci',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1598099947145-e85739e7ca28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwaGFuZGJhZyUyMGx1eHVyeXxlbnwwfDF8fHwxNzY4MzI5ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 320,
        onSale: false,
        tag: 'Luxury',
        category: 'Bags'
    },
    {
        id: 202,
        name: 'Aviator Sunglasses',
        brand: 'Ray-Ban',
        price: 3500,
        originalPrice: 5000,
        image: 'https://images.unsplash.com/photo-1567473810954-507d59716c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxhdmlhdG9yJTIwc3VuZ2xhc3Nlc3xlbnwwfDF8fHwxNzY4MzI5ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        reviews: 145,
        onSale: true,
        category: 'Sunglasses'
    },
    {
        id: 203,
        name: 'Gold Plated Watch',
        brand: 'Rolex',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1760532467609-45ed8016f795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwd2F0Y2glMjBsdXh1cnl8ZW58MHwxfHx8MTc2ODMyOTgxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 5.0,
        reviews: 56,
        onSale: false,
        tag: 'Premium',
        category: 'Watches'
    },
    {
        id: 204,
        name: 'Silk Scarf',
        brand: 'Hermes',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1761660450845-6c3aa8aaf43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2NhcmYlMjBsdXh1cnl8ZW58MHwxfHx8MTc2ODMyOTgxMnww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.2,
        reviews: 89,
        onSale: false,
        category: 'Jewelry' // Mapped as per original file logic
    },
    {
        id: 205,
        name: 'Leather Belt',
        brand: 'Levis',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1734383524180-3c6f9b21e8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmVsdCUyMG1lbnxlbnwwfDF8fHwxNzY4MzI5ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        reviews: 210,
        onSale: true,
        category: 'Belts'
    },
    {
        id: 206,
        name: 'Minimalist Wallet',
        brand: 'Herschel',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1689757322241-72ee12442155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2FsbGV0JTIwbGVhdGhlcnxlbnwwfDF8fHwxNzY4MzI5ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        reviews: 78,
        onSale: false,
        category: 'Wallets'
    },

    // --- Sale (300-399) ---
    {
        id: 301,
        name: 'Summer Lawn Print',
        brand: 'Sana Safinaz',
        price: 2500,
        originalPrice: 5000,
        image: 'https://images.unsplash.com/photo-1711044772167-9b9b7e37848b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjB1bnN0aXRjaGVkJTIwbGF3biUyMHN1bW1lciUyMHByaW50fGVufDB8MXx8fDE3NjgzMjk4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 412,
        onSale: true,
        tag: '50% OFF',
        discount: '50% OFF',
        category: 'Unstitched'
    },
    {
        id: 302,
        name: 'Embroidered Kurta',
        brand: 'Khaadi',
        price: 3200,
        originalPrice: 4500,
        image: 'https://images.unsplash.com/photo-1759840279499-f9de9764b2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJlZCUyMGt1cnRhJTIwd29tZW58ZW58MHwxfHx8MTc2ODMyOTgwMnww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        reviews: 231,
        onSale: true,
        tag: '30% OFF',
        discount: '30% OFF',
        category: 'Ready to Wear'
    },
    {
        id: 303,
        name: 'Casual Sandals',
        brand: 'Stylo',
        price: 1800,
        originalPrice: 2800,
        image: 'https://images.unsplash.com/photo-1554062097-69c634085c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYW5kYWxzJTIwd29tZW58ZW58MHwxfHx8MTc2ODMyOTgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        reviews: 89,
        onSale: true,
        tag: 'Clearance',
        discount: '35% OFF',
        category: 'Footwear'
    },
    {
        id: 304,
        name: 'Printed Scarf', // Note: Duplicate name with ID 6, but different product logic in original file
        brand: 'Sapphire',
        price: 900,
        originalPrice: 1500,
        image: 'https://images.unsplash.com/photo-1620740199226-2420c2fcaa18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxwcmludGVkJTIwc2NhcmYlMjB3b21lbiUyMGZhc2hpb258ZW58MHwxfHx8MTc2ODMyOTgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        reviews: 56,
        onSale: true,
        tag: 'Limited',
        discount: '40% OFF',
        category: 'Accessories'
    },
    {
        id: 305,
        name: 'Floral Maxi Dress',
        brand: 'Generations',
        price: 4500,
        originalPrice: 7500,
        image: 'https://images.unsplash.com/photo-1759992878336-a5dd342ea245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjBtYXhpJTIwZHJlc3N8ZW58MHwxfHx8MTc2ODMyOTgwNXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 120,
        onSale: true,
        tag: '40% OFF',
        discount: '40% OFF',
        category: 'Western'
    },
    {
        id: 306,
        name: 'Classic Beige Trousers',
        brand: 'Limelight',
        price: 1200,
        originalPrice: 2000,
        image: 'https://images.unsplash.com/photo-1768289222386-93b3e854cf31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMHRyb3VzZXJzJTIwd29tZW58ZW58MHwxfHx8MTc2ODMyOTgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.3,
        reviews: 45,
        onSale: true,
        tag: '40% OFF',
        discount: '40% OFF',
        category: 'Bottoms'
    },
    {
        id: 307,
        name: 'Luxury Chiffon Suit',
        brand: 'Maria B',
        price: 8500,
        originalPrice: 12000,
        image: 'https://images.unsplash.com/photo-1710623994944-5c667bf5bff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaGlmZm9uJTIwc3VpdCUyMHBha2lzdGFufGVufDB8MXx8fDE3NjgzMjk4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 89,
        onSale: true,
        tag: '30% OFF',
        discount: '30% OFF',
        category: 'Luxury'
    },
    {
        id: 308,
        name: 'Denim Jacket', // Duplicate name but ID 308
        brand: 'Outfitters',
        price: 2800,
        originalPrice: 4000,
        image: 'https://images.unsplash.com/photo-1548927372-894b667c6451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldCUyMG1lbnxlbnwwfDF8fHwxNzY4MzI5ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        reviews: 156,
        onSale: true,
        tag: '30% OFF',
        discount: '30% OFF',
        category: 'Western'
    },

    // --- Kids (400-499) ---
    {
        id: 401,
        name: 'Cotton T-Shirt Set',
        brand: 'Juniors',
        price: 2200,
        originalPrice: 2800,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=1000&fit=crop',
        rating: 4.5,
        reviews: 89,
        onSale: true,
        ageGroup: '3-6 years',
        category: 'Kids'
    },
    {
        id: 402,
        name: 'Denim Overalls',
        brand: 'Outfitters Junior',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&h=1000&fit=crop',
        rating: 4.3,
        reviews: 67,
        onSale: false,
        ageGroup: '2-5 years',
        category: 'Kids'
    },
    {
        id: 403,
        name: 'Princess Dress',
        brand: 'Khaadi Kids',
        price: 4500,
        originalPrice: 5500,
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&h=1000&fit=crop',
        rating: 4.7,
        reviews: 134,
        onSale: true,
        ageGroup: '4-8 years',
        category: 'Kids'
    },
    {
        id: 404,
        name: 'School Uniform',
        brand: 'Gul Ahmed Kids',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1503913006387-9551c4c61946?w=800&h=1000&fit=crop',
        rating: 4.4,
        reviews: 156,
        onSale: false,
        ageGroup: '6-12 years',
        category: 'School Uniforms'
    },
    {
        id: 405,
        name: 'Casual Shorts Set',
        brand: 'Breakout Kids',
        price: 1800,
        originalPrice: 2200,
        image: 'https://images.unsplash.com/photo-1627123424574-181ce90b94c0?w=800&h=1000&fit=crop',
        rating: 4.2,
        reviews: 78,
        onSale: true,
        ageGroup: '3-7 years',
        category: 'Kids'
    },
    {
        id: 406,
        name: 'Winter Jacket',
        brand: 'Nishat Kids',
        price: 5500,
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1000&fit=crop',
        rating: 4.6,
        reviews: 92,
        onSale: false,
        ageGroup: '5-10 years',
        category: 'Winter Wear'
    },

    // --- Footwear (500-599) ---
    {
        id: 501,
        name: 'Classic Leather Heels',
        brand: 'Bata',
        price: 4999,
        originalPrice: 6999,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1000&fit=crop',
        rating: 4.5,
        reviews: 234,
        onSale: true,
        category: 'Heels'
    },
    {
        id: 502,
        name: 'Casual Sneakers',
        brand: 'Adidas',
        price: 8999,
        image: 'https://images.unsplash.com/photo-1596701056586-8d62635ee4bf?q=800&w=2576&auto=format&fit=crop',
        rating: 4.7,
        reviews: 156,
        onSale: false,
        category: 'Sneakers'
    },
    {
        id: 503,
        name: 'Formal Oxford Shoes',
        brand: 'Service',
        price: 7999,
        originalPrice: 9999,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop',
        rating: 4.6,
        reviews: 89,
        onSale: true,
        category: 'Formal'
    },
    {
        id: 504,
        name: 'Summer Sandals',
        brand: 'Borjan',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1638247026263-2c9f7cb4966e?w=800&h=1000&fit=crop',
        rating: 4.3,
        reviews: 178,
        onSale: false,
        category: 'Sandals'
    },
    {
        id: 505,
        name: 'Running Shoes',
        brand: 'Nike',
        price: 12999,
        originalPrice: 15999,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop',
        rating: 4.8,
        reviews: 267,
        onSale: true,
        category: 'Sports'
    },
    {
        id: 506,
        name: 'Ankle Boots',
        brand: 'Zara',
        price: 9999,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=1000&fit=crop',
        rating: 4.4,
        reviews: 123,
        onSale: false,
        category: 'Boots'
    },

    // --- New Arrivals (600-699) ---
    {
        id: 611,
        name: 'Velvet Evening Gown',
        brand: 'Sana Safinaz',
        price: 15999,
        image: 'https://images.unsplash.com/photo-1547697933-66bcb20f114a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBldmVuaW5nJTIwZ293biUyMGx1eHVyeXxlbnwwfDF8fHwxNzY4MzMwMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 45,
        onSale: false,
        tag: 'Exclusive',
        isNew: true
    },
    {
        id: 612,
        name: 'Winter Wool Shawl',
        brand: 'Bonanza Satrangi',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1701251996197-be630792fc81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjB3b29sJTIwc2hhd2wlMjBwYWtpc3RhbnxlbnwwfDF8fHwxNzY4MzMwMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        reviews: 67,
        onSale: false,
        tag: 'Winter Essentials',
        isNew: true
    },
    {
        id: 613,
        name: 'Leather Handbag', // Duplicate name but ID 613. Jafferjees vs Gucci (ID 201)
        brand: 'Jafferjees',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1596552639068-99bd471b579c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwaGFuZGJhZyUyMGRlc2lnbmVyfGVufDB8MXx8fDE3NjgzMzAwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 89,
        onSale: false,
        tag: 'New Design',
        isNew: true
    },
    {
        id: 614,
        name: 'Formal Blazer',
        brand: 'Charcoal',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1620511450270-47162b983078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmb3JtYWwlMjBibGF6ZXIlMjBjaGFyY29hbHxlbnwwfDF8fHwxNzY4MzMwMDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        reviews: 34,
        onSale: false,
        tag: "Men's Collection",
        isNew: true
    },

    // --- Trending (700-799) ---
    // Note: Only carrying over those that aren't clear duplicates or need distinct IDs
    {
        id: 701,
        name: 'Elegant Summer Dress',
        brand: 'Khaadi',
        price: 4999,
        originalPrice: 7999,
        image: 'https://images.unsplash.com/photo-1719613049107-1a8814dce0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBkcmVzcyUyMHdvbWVuJTIwZWxlZ2FudHxlbnwwfDF8fHwxNzY4MzMwMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        reviews: 128,
        onSale: true,
        isNew: true
    },
    {
        id: 702,
        name: 'Traditional Lawn Suit',
        brand: 'Khaadi',
        price: 5999,
        originalPrice: 8999,
        image: 'https://images.unsplash.com/photo-1710623994944-5c667bf5bff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGxhd24lMjBzdWl0JTIwcGFraXN0YW4lMjB2aWJyYW50fGVufDB8MXx8fDE3NjgzMzAwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 89,
        onSale: true,
        isNew: false
    },
    {
        id: 703,
        name: 'Graphic T-Shirts',
        brand: 'Outfitters',
        price: 1999,
        originalPrice: 2999,
        image: 'https://images.unsplash.com/photo-1758214872853-bf365fba69f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwdC1zaGlydCUyMGNvb2x8ZW58MHwxfHx8MTc2ODMzMDA5OXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        reviews: 156,
        onSale: true,
        isNew: true
    },
    {
        id: 704,
        name: 'Denim Jackets',
        brand: 'Outfitters',
        price: 4999,
        originalPrice: 6999,
        image: 'https://images.unsplash.com/photo-1565287304724-7d4175d449a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldCUyMHN0eWxpc2h8ZW58MHwxfHx8MTc2ODMzMDEwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        reviews: 203,
        onSale: true,
        isNew: false
    },
    {
        id: 705,
        name: 'Eyeshadow Palette',
        brand: 'Huda Beauty',
        price: 3999,
        originalPrice: 4999,
        image: 'https://images.unsplash.com/photo-1583012279653-1575246476c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxleWVzaGFkb3clMjBwYWxldHRlJTIwbWFrZXVwfGVufDB8MXx8fDE3NjgzMzAxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 234,
        onSale: true,
        isNew: false
    },
    {
        id: 706,
        name: 'Matte Lipstick',
        brand: 'Huda Beauty',
        price: 1299,
        originalPrice: 1599,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=1000&fit=crop',
        rating: 4.7,
        reviews: 189,
        onSale: false,
        isNew: true
    },
    {
        id: 707,
        name: 'Running Shoes', // Servis. Overlaps partially with Footwear but keep distinct for Trending
        brand: 'Servis',
        price: 3999,
        originalPrice: 4999,
        image: 'https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=2671&auto=format&fit=crop',
        rating: 4.5,
        reviews: 267,
        onSale: true,
        isNew: false
    },
    {
        id: 708,
        name: 'Sports Sneakers',
        brand: 'Servis',
        price: 3499,
        originalPrice: 4499,
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&h=1000&fit=crop',
        rating: 4.4,
        reviews: 145,
        onSale: true,
        isNew: true
    }
]

export const getProductById = (id: number): Product | undefined => {
    return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => product.category === category)
}

export const getProductsByBrand = (brand: string): Product[] => {
    return products.filter(product => product.brand === brand)
}

export const getSaleProducts = (): Product[] => {
    return products.filter(product => product.onSale)
}
