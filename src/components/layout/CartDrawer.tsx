'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ShoppingBagIcon, TrashIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()
  const { t } = useLanguage()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[200]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-4 md:pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-[calc(100vh-20px)] flex-col m-2.5 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-2xl shadow-2xl border border-white/20 relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-violet-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 relative z-10 scrollbar-hide">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                          {t('Shopping Bag')}
                          <span className="text-sm font-medium text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">{itemCount}</span>
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-slate-400 hover:text-slate-500 hover:rotate-90 transition-all duration-300"
                            onClick={onClose}
                          >
                            <span className="sr-only">{t('Close panel')}</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                              <div className="relative mb-6">
                                <div className="absolute inset-0 bg-violet-200 rounded-full blur-lg opacity-50"></div>
                                <ShoppingBagIcon className="relative h-20 w-20 text-violet-600/50" />
                              </div>
                              <h3 className="mt-2 text-lg font-bold text-slate-900">
                                {t('Your bag is empty')}
                              </h3>
                              <p className="mt-1 text-sm text-slate-500 max-w-xs mx-auto">
                                {t('Looks like you haven\'t added any items to your bag yet.')}
                              </p>
                              <div className="mt-8">
                                <Link
                                  href="/"
                                  className="btn btn-primary"
                                  onClick={onClose}
                                >
                                  {t('Start Shopping')}
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <ul role="list" className="space-y-4">
                              {items.map((item) => (
                                <li key={`${item.id}-${item.size}-${item.color}`} className="flex py-4 bg-white/50 rounded-2xl p-3 border border-slate-100 shadow-sm relative group overflow-hidden">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-slate-100">
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      width={96}
                                      height={96}
                                      className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col justify-between">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-slate-900">
                                        <h3>
                                          <Link href={`/product/${item.id}`} onClick={onClose} className="hover:text-violet-600 transition-colors line-clamp-1">
                                            {item.name}
                                          </Link>
                                        </h3>
                                        <p className="ml-4 font-bold text-violet-600">PKR {item.price.toLocaleString()}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-slate-500">
                                        {item.color} {item.color && item.size && '•'} {item.size}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center border border-slate-200 rounded-lg bg-white/50">
                                        <button
                                          className="px-2 py-1 text-slate-500 hover:text-slate-900 font-bold"
                                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.size, item.color)}
                                        >-</button>
                                        <span className="px-2 font-medium text-slate-900 border-x border-slate-200 min-w-[30px] text-center">{item.quantity}</span>
                                        <button
                                          className="px-2 py-1 text-slate-500 hover:text-slate-900 font-bold"
                                          onClick={() => updateQuantity(item.id, Math.min(10, item.quantity + 1), item.size, item.color)}
                                        >+</button>
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() => removeItem(item.id, item.size, item.color)}
                                        className="font-medium text-red-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
                                      >
                                        <TrashIcon className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>

                    {items.length > 0 && (
                      <div className="border-t border-slate-100 px-4 py-6 sm:px-6 bg-white/50 backdrop-blur-md relative z-10">
                        <div className="flex justify-between text-base font-semibold text-slate-900 mb-4">
                          <p>{t('Subtotal')}</p>
                          <p className="text-xl font-bold text-violet-600">PKR {total.toLocaleString()}</p>
                        </div>

                        <Link
                          href="/checkout"
                          className="btn btn-primary w-full flex items-center justify-center gap-2 text-lg shadow-violet-500/20"
                          onClick={onClose}
                        >
                          {t('Checkout Securely')}
                          <ArrowRightIcon className="w-5 h-5" />
                        </Link>

                        <div className="mt-6 flex justify-center text-center text-sm text-slate-500">
                          <p>
                            <button
                              type="button"
                              className="font-medium text-violet-600 hover:text-violet-500 hover:underline flex items-center gap-1 mx-auto"
                              onClick={onClose}
                            >
                              {t('Continue Shopping')}
                            </button>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
