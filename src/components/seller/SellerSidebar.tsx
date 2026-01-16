'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  BarChart3,
  Users,
  Megaphone,
  Brain,
  Wallet,
  MessageSquare,
  Bell,
  Settings,
  HelpCircle,
  Store,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

const navigation = [
  {
    name: 'Dashboard',
    href: '/seller',
    icon: LayoutDashboard,
  },
  {
    name: 'Products',
    href: '/seller/products',
    icon: Package,
  },
  {
    name: 'Orders',
    href: '/seller/orders',
    icon: ShoppingBag,
  },
  {
    name: 'Inventory',
    href: '/seller/inventory',
    icon: Store,
  },
  {
    name: 'Analytics',
    href: '/seller/analytics',
    icon: BarChart3,
  },
  {
    name: 'Customers',
    href: '/seller/customers',
    icon: Users,
  },
  {
    name: 'Marketing',
    href: '/seller/marketing',
    icon: Megaphone,
  },
  {
    name: 'AI Advertising',
    href: '/seller/ai-advertising',
    icon: Brain,
  },
  {
    name: 'Payments',
    href: '/seller/payments',
    icon: Wallet,
  },
  {
    name: 'Messages',
    href: '/seller/messages',
    icon: MessageSquare,
  },
  {
    name: 'Notifications',
    href: '/seller/notifications',
    icon: Bell,
  },
  {
    name: 'Store Setup',
    href: '/seller/store-setup',
    icon: Store,
  },
  {
    name: 'Create Sale',
    href: '/seller/create-sale',
    icon: TrendingUp,
  },
  {
    name: 'AI Insights',
    href: '/seller/gemini-insights',
    icon: BarChart3,
  },
  {
    name: 'Settings',
    href: '/seller/settings',
    icon: Settings,
  },
  {
    name: 'Help',
    href: '/seller/help',
    icon: HelpCircle,
  },
];

export function SellerSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'flex flex-col bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 border-r-2 border-violet-500'
                  : 'text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              <item.icon
                className={cn(
                  'flex-shrink-0 w-5 h-5',
                  collapsed ? 'mr-0' : 'mr-3',
                  isActive ? 'text-violet-500' : 'text-gray-400 group-hover:text-gray-500'
                )}
              />
              {!collapsed && (
                <span className="truncate">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Store Info */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
                <Store className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">My Store</p>
              <p className="text-xs text-gray-500">Premium Seller</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
