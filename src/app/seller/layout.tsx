import { Metadata } from 'next';
import { SellerSidebar } from '@/components/seller/SellerSidebar';
import { SellerHeader } from '@/components/seller/SellerHeader';

export const metadata: Metadata = {
  title: 'Seller Portal - Baddies Essentials',
  description: 'Manage your store, products, and orders on Baddies Essentials',
};

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <SellerHeader />
      <div className="flex">
        <SellerSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
