'use client'

import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

interface Review {
  id: string
  userName: string
  rating: number
  comment: string
  date: string
  verified: boolean
  helpful: number
}

interface ProductReviewsProps {
  productId: string
  averageRating: number
  totalReviews: number
}

const ClientDate = ({ date }: { date: string }) => {
  const [formattedDate, setFormattedDate] = useState<string>('')

  useEffect(() => {
    setFormattedDate(new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }))
  }, [date])

  if (!formattedDate) {
    return null
  }

  return <span>{formattedDate}</span>
}

// Generate dummy reviews based on product ID
const generateReviews = (productId: string): Review[] => {
  const reviewTemplates = [
    {
      userName: "Sarah Ahmed",
      rating: 5,
      comment: "Absolutely love this product! The quality is amazing and it fits perfectly. Highly recommend!",
      verified: true,
      helpful: 12
    },
    {
      userName: "Ali Hassan",
      rating: 4,
      comment: "Good quality and fast delivery. The color is exactly as shown in the pictures.",
      verified: true,
      helpful: 8
    },
    {
      userName: "Fatima Khan",
      rating: 5,
      comment: "Excellent product! Worth every penny. The material is so soft and comfortable.",
      verified: true,
      helpful: 15
    },
    {
      userName: "Ahmed Malik",
      rating: 4,
      comment: "Great value for money. The sizing is accurate and the quality is good.",
      verified: false,
      helpful: 6
    },
    {
      userName: "Ayesha Siddiqui",
      rating: 5,
      comment: "Perfect! Exactly what I was looking for. Will definitely order again.",
      verified: true,
      helpful: 9
    },
    {
      userName: "Hassan Ali",
      rating: 3,
      comment: "It's okay. The quality is decent but I expected better for the price.",
      verified: true,
      helpful: 3
    },
    {
      userName: "Zara Sheikh",
      rating: 5,
      comment: "Amazing quality and beautiful design. Received so many compliments!",
      verified: true,
      helpful: 11
    },
    {
      userName: "Omar Farooq",
      rating: 4,
      comment: "Good product overall. Delivery was quick and packaging was excellent.",
      verified: true,
      helpful: 7
    }
  ]

  // Select 5-6 reviews based on product ID
  const numReviews = 5 + (parseInt(productId) % 2)
  const selectedReviews = reviewTemplates.slice(0, numReviews)

  // Use a fixed reference date (e.g., Jan 14, 2026)
  const baseTime = 1768464000000

  return selectedReviews.map((review, index) => {
    // Deterministic offset based on product ID and review index
    const daysOffset = (parseInt(productId || '0') * 7 + index * 3) % 30
    const reviewDate = new Date(baseTime - daysOffset * 24 * 60 * 60 * 1000)

    return {
      ...review,
      id: `${productId}-review-${index}`,
      date: reviewDate.toISOString()
    }
  })
}

export function ProductReviews({ productId, averageRating, totalReviews }: ProductReviewsProps) {
  const reviews = generateReviews(productId)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarSolidIcon
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0]
    reviews.forEach(review => {
      distribution[review.rating - 1]++
    })
    return distribution.reverse() // 5 stars first
  }

  const ratingDistribution = getRatingDistribution()

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{averageRating}</div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.floor(averageRating))}
            </div>
            <p className="text-gray-600">Based on {totalReviews} reviews</p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map((count, index) => {
              const stars = 5 - index
              const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0
              return (
                <div key={stars} className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 w-8">{stars}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">{count}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm text-gray-500"><ClientDate date={review.date} /></span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{review.comment}</p>

            <div className="flex items-center justify-between">
              <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                👍 Helpful ({review.helpful})
              </button>
              <button className="text-sm text-primary-600 hover:text-primary-700 transition-colors">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review Button */}
      <div className="text-center">
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-2xl font-semibold transition-colors">
          Write a Review
        </button>
      </div>
    </div>
  )
}
