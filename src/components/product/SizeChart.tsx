'use client'

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface SizeChartProps {
  productType: 'clothing' | 'footwear' | 'accessories'
  isOpen: boolean
  onClose: () => void
}

const sizeCharts = {
  clothing: {
    title: 'Clothing Size Chart',
    headers: ['Size', 'Chest (inches)', 'Waist (inches)', 'Hip (inches)', 'Length (inches)'],
    rows: [
      ['XS', '32-34', '26-28', '34-36', '26'],
      ['S', '34-36', '28-30', '36-38', '27'],
      ['M', '36-38', '30-32', '38-40', '28'],
      ['L', '38-40', '32-34', '40-42', '29'],
      ['XL', '40-42', '34-36', '42-44', '30'],
      ['XXL', '42-44', '36-38', '44-46', '31']
    ]
  },
  footwear: {
    title: 'Footwear Size Chart',
    headers: ['US Size', 'UK Size', 'EU Size', 'Foot Length (cm)'],
    rows: [
      ['6', '5.5', '39', '24.5'],
      ['7', '6.5', '40', '25.5'],
      ['8', '7.5', '41', '26.5'],
      ['9', '8.5', '42', '27.5'],
      ['10', '9.5', '43', '28.5'],
      ['11', '10.5', '44', '29.5'],
      ['12', '11.5', '45', '30.5']
    ]
  },
  accessories: {
    title: 'Accessories Size Guide',
    headers: ['Type', 'Size', 'Dimensions'],
    rows: [
      ['Handbag', 'Small', '8" x 6" x 3"'],
      ['Handbag', 'Medium', '12" x 9" x 4"'],
      ['Handbag', 'Large', '15" x 12" x 5"'],
      ['Scarf', 'Regular', '60" x 20"'],
      ['Belt', 'S (28-30)', '32" total length'],
      ['Belt', 'M (32-34)', '36" total length'],
      ['Belt', 'L (36-38)', '40" total length']
    ]
  }
}

export function SizeChart({ productType, isOpen, onClose }: SizeChartProps) {
  if (!isOpen) return null

  const chart = sizeCharts[productType]

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-xl font-semibold text-gray-900">{chart.title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {chart.headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {chart.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-4 py-3 whitespace-nowrap text-sm text-gray-900"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Measurement Tips:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                {productType === 'clothing' && (
                  <>
                    <li>• Measure around the fullest part of your chest</li>
                    <li>• Measure around your natural waistline</li>
                    <li>• Measure around the fullest part of your hips</li>
                  </>
                )}
                {productType === 'footwear' && (
                  <>
                    <li>• Measure your foot length from heel to toe</li>
                    <li>• Measure both feet and use the larger measurement</li>
                    <li>• Measure in the evening when feet are at their largest</li>
                  </>
                )}
                {productType === 'accessories' && (
                  <>
                    <li>• Check product descriptions for specific measurements</li>
                    <li>• Consider your intended use when selecting size</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
