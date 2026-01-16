'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  navigation: Array<{
    name: string
    href: string
    current: boolean
  }>
}

export function MobileMenu({ open, onClose, navigation }: MobileMenuProps) {
  const { t } = useLanguage()
  const { isAuthenticated, user } = useAuth()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={onClose}
                >
                  <span className="sr-only">{t('Close menu')}</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* User section */}
              {isAuthenticated ? (
                <div className="border-b border-gray-200 px-4 py-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        {user?.name?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900">
                        {user?.name || t('User')}
                      </p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border-b border-gray-200 px-4 py-6">
                  <div className="flex space-x-4">
                    <Link
                      href="/auth/login"
                      className="flex-1 bg-primary-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-700"
                      onClick={onClose}
                    >
                      {t('Login')}
                    </Link>
                    <Link
                      href="/auth/register"
                      className="flex-1 border border-primary-600 text-primary-600 text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-50"
                      onClick={onClose}
                    >
                      {t('Sign Up')}
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="space-y-6 border-b border-gray-200 px-4 py-6">
                {navigation.map((item) => (
                  <div key={item.name} className="flow-root">
                    <Link
                      href={item.href}
                      className="-m-2 block p-2 font-medium text-gray-900 hover:text-primary-600"
                      onClick={onClose}
                    >
                      {t(item.name)}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Additional links */}
              {isAuthenticated && (
                <div className="space-y-6 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      href="/account"
                      className="-m-2 block p-2 font-medium text-gray-900 hover:text-primary-600"
                      onClick={onClose}
                    >
                      {t('My Account')}
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      href="/orders"
                      className="-m-2 block p-2 font-medium text-gray-900 hover:text-primary-600"
                      onClick={onClose}
                    >
                      {t('My Orders')}
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      href="/wishlist"
                      className="-m-2 block p-2 font-medium text-gray-900 hover:text-primary-600"
                      onClick={onClose}
                    >
                      {t('Wishlist')}
                    </Link>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
