'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ur'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Simple translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'Men': 'Men',
    'Women': 'Women',
    'Kids': 'Kids',
    'Shoes': 'Shoes',
    'Accessories': 'Accessories',
    'Sale': 'Sale',
    'Login': 'Login',
    'Sign Up': 'Sign Up',
    'Sign out': 'Sign out',

    // Header
    'Free shipping on orders over PKR 2,000': 'Free shipping on orders over PKR 2,000',
    'Call: +92-300-1234567': 'Call: +92-300-1234567',
    'Search for products, brands, or categories...': 'Search for products, brands, or categories...',

    // Cart
    'Shopping cart': 'Shopping cart',
    'Close panel': 'Close panel',
    'Your cart is empty': 'Your cart is empty',
    'Start adding some items to your cart!': 'Start adding some items to your cart!',
    'Continue Shopping': 'Continue Shopping',
    'Color': 'Color',
    'Size': 'Size',
    'Quantity': 'Quantity',
    'Subtotal': 'Subtotal',
    'Shipping and taxes calculated at checkout.': 'Shipping and taxes calculated at checkout.',
    'Checkout': 'Checkout',
    'or': 'or',

    // User Menu
    'Open user menu': 'Open user menu',
    'My Account': 'My Account',
    'My Orders': 'My Orders',
    'Wishlist': 'Wishlist',
    'Settings': 'Settings',
    'User': 'User',

    // Mobile Menu
    'Close menu': 'Close menu',

    // Footer
    'Pakistan\'s premier fashion marketplace. Discover the latest trends from top brands with fast delivery and secure payments.': 'Pakistan\'s premier fashion marketplace. Discover the latest trends from top brands with fast delivery and secure payments.',
    'Shop': 'Shop',
    'Support': 'Support',
    'Company': 'Company',
    'Legal': 'Legal',
    'Contact Us': 'Contact Us',
    'Size Guide': 'Size Guide',
    'Shipping Info': 'Shipping Info',
    'Returns': 'Returns',
    'FAQ': 'FAQ',
    'Track Order': 'Track Order',
    'About Us': 'About Us',
    'Careers': 'Careers',
    'Press': 'Press',
    'Blog': 'Blog',
    'Become a Seller': 'Become a Seller',
    'Privacy Policy': 'Privacy Policy',
    'Terms of Service': 'Terms of Service',
    'Cookie Policy': 'Cookie Policy',
    'Refund Policy': 'Refund Policy',
    'Subscribe to our newsletter': 'Subscribe to our newsletter',
    'Get the latest fashion updates and exclusive offers.': 'Get the latest fashion updates and exclusive offers.',
    'Enter your email': 'Enter your email',
    'Subscribe': 'Subscribe',
    'Payment Methods:': 'Payment Methods:',
    'All rights reserved.': 'All rights reserved.',
  },
  ur: {
    // Navigation
    'Men': 'مردانہ',
    'Women': 'خواتین',
    'Kids': 'بچے',
    'Shoes': 'جوتے',
    'Accessories': 'لوازمات',
    'Sale': 'سیل',
    'Login': 'لاگ ان',
    'Sign Up': 'رجسٹر',
    'Sign out': 'لاگ آؤٹ',

    // Header
    'Free shipping on orders over PKR 2,000': 'PKR 2,000 سے زیادہ آرڈر پر مفت ڈیلیوری',
    'Call: +92-300-1234567': 'کال: +92-300-1234567',
    'Search for products, brands, or categories...': 'پروڈکٹس، برانڈز، یا کیٹگریز تلاش کریں...',

    // Cart
    'Shopping cart': 'شاپنگ کارٹ',
    'Close panel': 'پینل بند کریں',
    'Your cart is empty': 'آپ کا کارٹ خالی ہے',
    'Start adding some items to your cart!': 'اپنے کارٹ میں کچھ آئٹمز شامل کرنا شروع کریں!',
    'Continue Shopping': 'خریداری جاری رکھیں',
    'Color': 'رنگ',
    'Size': 'سائز',
    'Quantity': 'مقدار',
    'Subtotal': 'ذیلی کل',
    'Shipping and taxes calculated at checkout.': 'چیک آؤٹ پر شپنگ اور ٹیکس کا حساب لگایا جائے گا۔',
    'Checkout': 'چیک آؤٹ',
    'or': 'یا',

    // User Menu
    'Open user menu': 'یوزر مینو کھولیں',
    'My Account': 'میرا اکاؤنٹ',
    'My Orders': 'میرے آرڈرز',
    'Wishlist': 'خواہشات کی فہرست',
    'Settings': 'سیٹنگز',
    'User': 'یوزر',

    // Mobile Menu
    'Close menu': 'مینو بند کریں',

    // Footer
    'Pakistan\'s premier fashion marketplace. Discover the latest trends from top brands with fast delivery and secure payments.': 'پاکستان کا اعلیٰ فیشن مارکیٹ پلیس۔ تیز ڈیلیوری اور محفوظ ادائیگیوں کے ساتھ اعلیٰ برانڈز کے جدید ترین رجحانات دریافت کریں۔',
    'Shop': 'خریداری',
    'Support': 'سپورٹ',
    'Company': 'کمپنی',
    'Legal': 'قانونی',
    'Contact Us': 'ہم سے رابطہ',
    'Size Guide': 'سائز گائیڈ',
    'Shipping Info': 'شپنگ کی معلومات',
    'Returns': 'واپسی',
    'FAQ': 'عمومی سوالات',
    'Track Order': 'آرڈر ٹریک کریں',
    'About Us': 'ہمارے بارے میں',
    'Careers': 'کیریئر',
    'Press': 'پریس',
    'Blog': 'بلاگ',
    'Become a Seller': 'سیلر بنیں',
    'Privacy Policy': 'پرائیویسی پالیسی',
    'Terms of Service': 'خدمات کی شرائط',
    'Cookie Policy': 'کوکی پالیسی',
    'Refund Policy': 'ریفنڈ پالیسی',
    'Subscribe to our newsletter': 'ہمارے نیوز لیٹر کو سبسکرائب کریں',
    'Get the latest fashion updates and exclusive offers.': 'جدید ترین فیشن اپڈیٹس اور خصوصی آفرز حاصل کریں۔',
    'Enter your email': 'اپنا ای میل درج کریں',
    'Subscribe': 'سبسکرائب',
    'Payment Methods:': 'ادائیگی کے طریقے:',
    'All rights reserved.': 'تمام حقوق محفوظ ہیں۔',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en')
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
