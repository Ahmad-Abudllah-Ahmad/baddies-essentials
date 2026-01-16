'use client'

import { Fragment, useState, useRef, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, CameraIcon, ArrowUpTrayIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface VirtualTryOnModalProps {
  isOpen: boolean
  onClose: () => void
  productImage: string
  productName: string
}

export function VirtualTryOnModal({ isOpen, onClose, productImage, productName }: VirtualTryOnModalProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setShowResult(false)
      setIsAnalyzing(false)
    }
  }, [isOpen])

  const startCamera = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach(track => track.stop())
      videoRef.current.srcObject = null
    }
  }

  // Simulate analysis process
  const handleTryOn = () => {
    setIsAnalyzing(true)
    // Start camera for "effect"
    startCamera()
    
    setTimeout(() => {
      setIsAnalyzing(false)
      stopCamera()
      setShowResult(true)
    }, 3000)
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-md transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border border-white/20">
                <div className="absolute right-4 top-4 z-[60]">
                  <button
                    type="button"
                    className="rounded-full bg-white/10 p-2 text-gray-500 hover:text-gray-700 hover:bg-white/20 transition-all"
                    onClick={() => {
                        stopCamera()
                        onClose()
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row h-[600px] w-full">
                  {/* Left Side: Product Details */}
                  <div className="w-full md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />
                    <div className="relative z-10 w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6 group">
                         <Image
                            src={productImage}
                            alt={productName}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                    </div>
                    <h3 className="relative z-10 text-xl font-bold text-gray-900 text-center mb-2">{productName}</h3>
                    <p className="relative z-10 text-sm text-gray-500 text-center">AI Virtual Try-On Beta</p>
                  </div>

                  {/* Right Side: Interactive Area */}
                  <div className="w-full md:w-2/3 bg-white p-8 flex flex-col items-center justify-center relative">
                    <AnimatePresence mode='wait'>
                        {!showResult && !isAnalyzing && (
                            <motion.div 
                                key="initial"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-center w-full max-w-md"
                            >
                                <div className="bg-primary-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <SparklesIcon className="h-12 w-12 text-primary-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to try this on?</h2>
                                <p className="text-gray-600 mb-8">Use your camera or upload a photo to see how this looks on you instantly with our AI technology.</p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={handleTryOn}
                                        className="group relative flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                    >
                                        <CameraIcon className="h-6 w-6" />
                                        <span className="font-semibold">Use Camera</span>
                                        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                    <button
                                        onClick={handleTryOn}
                                        className="group flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl hover:border-gray-900 transition-all hover:scale-105 active:scale-95"
                                    >
                                        <ArrowUpTrayIcon className="h-6 w-6" />
                                        <span className="font-semibold">Upload Photo</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {isAnalyzing && (
                            <motion.div
                                key="analyzing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/5"
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    {/* Simulated Camera Feed */}
                                    <video 
                                        ref={videoRef} 
                                        autoPlay 
                                        playsInline 
                                        muted 
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />
                                    
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                                        <div className="relative w-24 h-24 mb-8">
                                            <div className="absolute inset-0 rounded-full border-4 border-white/20" />
                                            <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent animate-spin" />
                                            <SparklesIcon className="absolute inset-0 m-auto h-10 w-10 text-white animate-pulse" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Analyzing...</h3>
                                        <p className="text-white/80">Applying virtual cloth physics</p>
                                    </div>

                                    {/* Scanning Line Effect */}
                                    <div className="absolute inset-0 z-20 pointer-events-none">
                                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent absolute top-0 animate-[scan_2s_ease-in-out_infinite]" />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {showResult && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-full flex flex-col items-center"
                            >
                                <div className="relative w-full flex-1 rounded-2xl overflow-hidden mb-6 bg-gray-100 group">
                                    {/* This would be the result image in a real app */}
                                    <Image
                                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60"
                                        alt="Try On Result"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6">
                                         <p className="text-white font-medium">✨ Virtual Try-On Successful</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 w-full">
                                    <button
                                        onClick={() => setShowResult(false)}
                                        className="flex-1 py-4 text-gray-600 font-semibold hover:bg-gray-50 rounded-xl transition-colors"
                                    >
                                        Try Another
                                    </button>
                                    <button
                                        className="flex-1 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all hover:scale-105"
                                        onClick={onClose}
                                    >
                                        Likely to Buy!
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
