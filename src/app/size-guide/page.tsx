'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

export default function SizeGuidePage() {
  const [activeCategory, setActiveCategory] = useState('women')
  const [expandedSection, setExpandedSection] = useState<string | null>('measurements')

  const sizeCharts = {
    women: {
      clothing: [
        { size: 'XS', chest: '32-34', waist: '24-26', hips: '34-36', length: '14-15' },
        { size: 'S', chest: '34-36', waist: '26-28', hips: '36-38', length: '15-16' },
        { size: 'M', chest: '36-38', waist: '28-30', hips: '38-40', length: '16-17' },
        { size: 'L', chest: '38-40', waist: '30-32', hips: '40-42', length: '17-18' },
        { size: 'XL', chest: '40-42', waist: '32-34', hips: '42-44', length: '18-19' },
        { size: 'XXL', chest: '42-44', waist: '34-36', hips: '44-46', length: '19-20' }
      ],
      shoes: [
        { size: '5', length: '22.5', width: '8.5' },
        { size: '6', length: '23.5', width: '9.0' },
        { size: '7', length: '24.5', width: '9.5' },
        { size: '8', length: '25.5', width: '10.0' },
        { size: '9', length: '26.5', width: '10.5' },
        { size: '10', length: '27.5', width: '11.0' }
      ]
    },
    men: {
      clothing: [
        { size: 'S', chest: '36-38', waist: '28-30', length: '27-28' },
        { size: 'M', chest: '38-40', waist: '30-32', length: '28-29' },
        { size: 'L', chest: '40-42', waist: '32-34', length: '29-30' },
        { size: 'XL', chest: '42-44', waist: '34-36', length: '30-31' },
        { size: 'XXL', chest: '44-46', waist: '36-38', length: '31-32' },
        { size: 'XXXL', chest: '46-48', waist: '38-40', length: '32-33' }
      ],
      shoes: [
        { size: '7', length: '25.0', width: '9.5' },
        { size: '8', length: '26.0', width: '10.0' },
        { size: '9', length: '27.0', width: '10.5' },
        { size: '10', length: '28.0', width: '11.0' },
        { size: '11', length: '29.0', width: '11.5' },
        { size: '12', length: '30.0', width: '12.0' }
      ]
    },
    kids: {
      clothing: [
        { size: '2-3Y', chest: '20-21', waist: '19-20', height: '92-98' },
        { size: '4-5Y', chest: '22-23', waist: '20-21', height: '104-110' },
        { size: '6-7Y', chest: '24-25', waist: '21-22', height: '116-122' },
        { size: '8-9Y', chest: '26-27', waist: '22-23', height: '128-134' },
        { size: '10-11Y', chest: '28-29', waist: '23-24', height: '140-146' },
        { size: '12-13Y', chest: '30-31', waist: '24-25', height: '152-158' }
      ],
      shoes: [
        { size: '10', length: '16.5', age: '2-3Y' },
        { size: '11', length: '17.5', age: '3-4Y' },
        { size: '12', length: '18.5', age: '4-5Y' },
        { size: '13', length: '19.5', age: '5-6Y' },
        { size: '1', length: '20.5', age: '6-7Y' },
        { size: '2', length: '21.5', age: '7-8Y' }
      ]
    }
  }

  const measurementTips = [
    {
      title: 'Chest/Bust',
      description: 'Measure around the fullest part of your chest, keeping the tape horizontal.'
    },
    {
      title: 'Waist',
      description: 'Measure around your natural waistline, which is the narrowest part of your torso.'
    },
    {
      title: 'Hips',
      description: 'Measure around the fullest part of your hips, about 8 inches below your waist.'
    },
    {
      title: 'Length',
      description: 'For tops: measure from shoulder to hem. For bottoms: measure from waist to hem.'
    }
  ]

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Size Guide</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive size charts and measurement guide.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-3xl p-2 shadow-lg">
            {['women', 'men', 'kids'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-2xl font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Size Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Clothing Size Chart */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Clothing Sizes</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Size</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Chest/Bust (inches)</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Waist (inches)</th>
                        {activeCategory === 'women' && (
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Hips (inches)</th>
                        )}
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          {activeCategory === 'kids' ? 'Height (cm)' : 'Length (inches)'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeCharts[activeCategory as keyof typeof sizeCharts].clothing.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-medium text-primary-600">{item.size}</td>
                          <td className="py-3 px-4 text-gray-700">{item.chest}</td>
                          <td className="py-3 px-4 text-gray-700">{item.waist}</td>
                          {activeCategory === 'women' && (
                            <td className="py-3 px-4 text-gray-700">{(item as any).hips}</td>
                          )}
                          <td className="py-3 px-4 text-gray-700">
                            {activeCategory === 'kids' ? (item as any).height : (item as any).length}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Shoe Size Chart */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Shoe Sizes</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Size</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Length (cm)</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          {activeCategory === 'kids' ? 'Age' : 'Width (cm)'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeCharts[activeCategory as keyof typeof sizeCharts].shoes.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-medium text-purple-600">{item.size}</td>
                          <td className="py-3 px-4 text-gray-700">{item.length}</td>
                          <td className="py-3 px-4 text-gray-700">
                            {activeCategory === 'kids' ? (item as any).age : (item as any).width}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Measurement Guide */}
          <div className="space-y-8">
            {/* How to Measure */}
            <div className="bg-white rounded-3xl shadow-xl">
              <button
                onClick={() => toggleSection('measurements')}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-3xl"
              >
                <h3 className="text-xl font-bold">How to Measure</h3>
                {expandedSection === 'measurements' ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
              {expandedSection === 'measurements' && (
                <div className="p-6 space-y-4">
                  {measurementTips.map((tip, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{tip.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Size Conversion */}
            <div className="bg-white rounded-3xl shadow-xl">
              <button
                onClick={() => toggleSection('conversion')}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-3xl"
              >
                <h3 className="text-xl font-bold">Size Conversion</h3>
                {expandedSection === 'conversion' ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
              {expandedSection === 'conversion' && (
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">International Sizes</h4>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="font-medium">Pakistan</div>
                        <div className="font-medium">US</div>
                        <div className="font-medium">UK</div>
                        <div>S</div><div>XS</div><div>6</div>
                        <div>M</div><div>S</div><div>8</div>
                        <div>L</div><div>M</div><div>10</div>
                        <div>XL</div><div>L</div><div>12</div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Measurement Units</h4>
                      <p className="text-sm text-gray-600">
                        All measurements are in inches unless specified otherwise.
                        To convert to centimeters, multiply by 2.54.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fit Tips */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Perfect Fit Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Measure yourself wearing minimal clothing</li>
                <li>• Use a soft measuring tape, not a ruler</li>
                <li>• Ask someone to help you measure</li>
                <li>• When in doubt, size up for comfort</li>
                <li>• Check individual product descriptions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
