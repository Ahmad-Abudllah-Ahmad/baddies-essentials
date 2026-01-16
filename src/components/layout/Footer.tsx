'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

const footerNavigation = {
  shop: [
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Kids', href: '/kids' },
    { name: 'Shoes', href: '/shoes' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Sale', href: '/sale' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Track Order', href: '/track-order' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
    { name: 'Become a Seller', href: '/seller/register' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/baddiesessentials',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/baddiesessentials',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.608c-.384 0-.735-.147-.997-.384-.262-.262-.384-.613-.384-.997 0-.384.122-.735.384-.997.262-.262.613-.384.997-.384s.735.122.997.384c.262.262.384.613.384.997 0 .384-.122.735-.384.997-.262.237-.613.384-.997.384zm-7.83 1.297c.875 0 1.631.315 2.197.928.613.613.928 1.322.928 2.197s-.315 1.631-.928 2.197c-.566.613-1.322.928-2.197.928s-1.631-.315-2.197-.928c-.613-.566-.928-1.322-.928-2.197s.315-1.631.928-2.197c.566-.613 1.322-.928 2.197-.928z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/baddiesessentials',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

export function Footer() {
  const { t } = useLanguage()
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-12">

          {/* Brand & Newsletter Column - Takes up 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-violet-500 rounded-full blur group-hover:blur-md transition-all" />
                <SparklesIcon className="relative z-10 w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Mega<span className="text-violet-400">Mall</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {t('Pakistan\'s premier fashion hub. Experience the future of shopping with AI-powered personalized recommendations and virtual try-ons.')}
            </p>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Subscribe for Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all placeholder-slate-500"
                />
                <button className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl px-4 py-3 transition-colors flex items-center justify-center">
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Section - Spans 8 columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-6">Shop</h3>
              <ul className="space-y-4">
                {footerNavigation.shop.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {t(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6">Support</h3>
              <ul className="space-y-4">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {t(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {t(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6">Legal</h3>
              <ul className="space-y-4">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {t(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {year || '2026'} Mega Mall. {t('All rights reserved.')}
          </p>

          <div className="flex gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
