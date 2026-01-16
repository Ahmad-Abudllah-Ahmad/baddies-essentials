'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BrandStoresGrid } from '@/components/home/BrandStoresGrid'

export default function AllStoresPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">All Brand Stores</h1>
                    <p className="text-xl text-gray-600">
                        Browse our complete collection of premium fashion brands
                    </p>
                </div>

                {/* Reuse the Grid Component but maybe we should ideally refactor it to accept props if we want to change it. 
            For now, since the BrandStoresGrid already renders the "Featured" list which effectively functions as the list of brands, 
            we can reuse it or duplicate the logic if we want to show *more* brands. 
            Since the current list IS the full list in the mockup, I will reuse the component but hide the "View All" button via CSS or modify the component to accept a prop.
            
            Actually, let's just make a new grid here to be safe and independent.
        */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* We can import the data if we export it, or just copy it for now since it's a mock. 
               To keep it DRY, I'll assume I can't easily export the internal data from the component without refactoring.
               But wait, I just edited BrandStoresGrid. I can view it to see if I can export the data.
               Actually, I'll just use the same visual style.
           */}
                    <BrandStoreList />
                </div>
            </div>
        </div>
    )
}

// Duplicating data for this new page to ensure it works immediately without refactoring dependencies.
// Ideally this should come from a centralized data source.
const brandStores = [
    {
        id: 'khaadi',
        name: 'Khaadi',
        description: 'Premium Pakistani Fashion Brand',
        logo: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=120&h=120&fit=crop',
        categories: ['new-arrivals', 'womens-wear', 'mens-wear', 'accessories'],
        rating: 4.8
    },
    {
        id: 'gul-ahmed',
        name: 'Gul Ahmed',
        description: 'Traditional & Modern Pakistani Clothing',
        logo: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=120&h=120&fit=crop',
        categories: ['lawn-collection', 'formal-wear', 'casual-wear'],
        rating: 4.7
    },
    {
        id: 'nishat-linen',
        name: 'Nishat Linen',
        description: 'Quality Fabrics & Fashion',
        logo: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=120&h=120&fit=crop',
        categories: ['new-arrivals', 'womens-wear', 'kids-wear'],
        rating: 4.6
    },
    {
        id: 'alkaram',
        name: 'Alkaram Studio',
        description: 'Elegant Pakistani Fashion',
        logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=120&h=120&fit=crop',
        categories: ['formal-collection', 'casual-wear', 'bridal-wear'],
        rating: 4.5
    },
    {
        id: 'junaid-jamshed',
        name: 'J.',
        description: 'Mens Fashion & Fragrances',
        logo: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=120&h=120&fit=crop',
        categories: ['mens-wear', 'fragrances', 'formal-wear'],
        rating: 4.9
    },
    {
        id: 'outfitters',
        name: 'Outfitters',
        description: 'Trendy Youth Fashion',
        logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=120&h=120&fit=crop',
        categories: ['new-arrivals', 'mens-wear', 'womens-wear'],
        rating: 4.4
    },
    {
        id: 'sapphire',
        name: 'Sapphire',
        description: 'Contemporary Fashion',
        logo: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=120&h=120&fit=crop',
        categories: ['ready-to-wear', 'unstitched', 'accessories'],
        rating: 4.8
    },
    {
        id: 'limelight',
        name: 'Limelight',
        description: 'Affordable Fashion',
        logo: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=120&h=120&fit=crop',
        categories: ['casual-wear', 'formal-wear'],
        rating: 4.3
    },
    {
        id: 'bonanza',
        name: 'Bonanza Satrangi',
        description: 'Colorful Fashion',
        logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=120&h=120&fit=crop',
        categories: ['lawn', 'winter-collection'],
        rating: 4.5
    },
    {
        id: 'bata',
        name: 'Bata',
        description: 'Quality Footwear',
        logo: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=120&h=120&fit=crop',
        categories: ['mens-shoes', 'womens-shoes'],
        rating: 4.6
    },
    {
        id: 'servis',
        name: 'Servis',
        description: 'Sports & Casual Footwear',
        logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=120&fit=crop',
        categories: ['sports-shoes'],
        rating: 4.4
    },
    {
        id: 'ndure',
        name: 'Ndure',
        description: 'Trendy Footwear',
        logo: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=120&h=120&fit=crop',
        categories: ['sneakers', 'casual-shoes'],
        rating: 4.2
    },
    // Adding more mock brands to better demonstrate the "All Stores" page
    {
        id: 'ideas',
        name: 'Ideas',
        description: 'Home & Fashion',
        logo: 'https://images.unsplash.com/photo-1524041255072-7da0525d6b34?w=120&h=120&fit=crop',
        categories: ['home', 'womens-wear'],
        rating: 4.5
    },
    {
        id: 'huda-beauty',
        name: 'Huda Beauty',
        description: 'Professional Makeup & Beauty',
        logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&h=120&fit=crop',
        categories: ['makeup-palettes', 'lipsticks', 'skincare'],
        rating: 4.9
    },
    {
        id: 'edenrobe',
        name: 'Edenrobe',
        description: 'Stylish Apparel',
        logo: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=120&h=120&fit=crop',
        categories: ['mens-wear', 'kids-wear'],
        rating: 4.4
    }
]

function BrandStoreList() {
    return (
        <>
            {brandStores.map((brand) => (
                <Link
                    key={brand.id}
                    href={`/store/${brand.id}`}
                    className="group"
                >
                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 flex flex-col h-full">
                        {/* Brand Header */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-center">
                            <div className="w-20 h-20 rounded-2xl mx-auto mb-4 overflow-hidden relative">
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{brand.description}</p>
                        </div>

                        {/* Categories & Rating */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-1 mb-3 justify-center">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(brand.rating) ? 'fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-600">({brand.rating})</span>
                            </div>

                            <h4 className="text-sm font-semibold text-gray-900 mb-3 text-center">Categories:</h4>
                            <div className="flex flex-wrap gap-2 justify-center mb-auto">
                                {brand.categories.map((category) => (
                                    <span
                                        key={category}
                                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                                <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700">
                                    Visit Store →
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}
