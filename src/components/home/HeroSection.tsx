'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: 'Summer Collection 2024',
    subtitle: 'Discover the hottest trends',
    description: 'Shop the latest summer fashion from top Pakistani brands',
    image: 'https://images.unsplash.com/photo-1760044567401-393a152ead5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBmYXNoaW9uJTIwd29tZW4lMjBvdXRkb29ycyUyMGJyaWdodHxlbnwwfDF8fHwxNzY4MzMwMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Shop Now',
    link: '/summer-collection',
    color: 'from-orange-500/20 to-pink-500/20'
  },
  {
    id: 2,
    title: 'Up to 50% Off',
    subtitle: 'Mega Sale Event',
    description: 'Limited time offer on selected items',
    image: 'https://images.unsplash.com/photo-1758525225237-688b79920cbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHNhbGUlMjByZXRhaWwlMjB0aGVyYXB5JTIwaGFwcHl8ZW58MHwwfHx8MTc2ODMzMDA4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Shop Sale',
    link: '/sale',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 3,
    title: 'New Arrivals',
    subtitle: 'Fresh styles just landed',
    description: 'Be the first to wear the latest fashion',
    image: 'https://images.unsplash.com/photo-1690965769916-153aeb0450b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYzNzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBzdHJlZXQlMjBzdHlsZSUyMG5ld3xlbnwwfDF8fHwxNzY4MzMwMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Explore',
    link: '/new-arrivals',
    color: 'from-green-500/20 to-teal-500/20'
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="relative h-[85vh] min-h-[600px] overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <div className="relative h-full w-full overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} mix-blend-overlay`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-5xl px-4 z-10">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wider uppercase mb-4 shadow-lg">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-xl"
                >
                  <span className="text-white">
                    {slides[currentSlide].title}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-xl md:text-3xl mb-10 text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={slides[currentSlide].link}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full text-xl font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] overflow-hidden"
                  >
                    <span className="relative z-10">{slides[currentSlide].cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ChevronRightIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-12 z-20 flex justify-center items-center gap-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95 group"
        >
          <ChevronLeftIcon className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Dynamic Dots */}
        <div className="flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1)
                setCurrentSlide(index)
              }}
              className="relative h-2 rounded-full transition-all duration-500 overflow-hidden"
              style={{
                width: index === currentSlide ? '3rem' : '0.5rem',
                backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.3)'
              }}
            >
              {index === currentSlide && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 bg-primary-500 opacity-20"
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95 group"
        >
          <ChevronRightIcon className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Glassmorphism Decorative Elements */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  )
}
