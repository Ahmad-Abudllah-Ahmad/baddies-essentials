'use client'

import { useState } from 'react'
import { BriefcaseIcon, MapPinIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Market-leading compensation packages',
      icon: CurrencyDollarIcon,
      color: 'green'
    },
    {
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and family',
      icon: HeartIcon,
      color: 'red'
    },
    {
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling',
      icon: ClockIcon,
      color: 'blue'
    },
    {
      title: 'Team Culture',
      description: 'Collaborative and inclusive work environment',
      icon: UserGroupIcon,
      color: 'purple'
    }
  ]

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'tech', name: 'Technology', count: 5 },
    { id: 'fashion', name: 'Fashion & Buying', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ]

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'tech',
      location: 'Karachi',
      type: 'Full-time',
      salary: 'PKR 150K - 250K',
      description: 'Join our tech team to build the future of fashion e-commerce in Pakistan.',
      requirements: ['5+ years experience', 'React/Node.js', 'TypeScript', 'AWS/Cloud experience']
    },
    {
      id: 2,
      title: 'Fashion Buyer',
      department: 'fashion',
      location: 'Lahore',
      type: 'Full-time',
      salary: 'PKR 80K - 120K',
      description: 'Source and curate the best fashion products for our platform.',
      requirements: ['Fashion background', 'Trend analysis', 'Vendor relations', 'Market research']
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      department: 'marketing',
      location: 'Karachi',
      type: 'Full-time',
      salary: 'PKR 100K - 150K',
      description: 'Lead our digital marketing efforts across all channels.',
      requirements: ['Digital marketing experience', 'Social media expertise', 'Analytics skills', 'Creative thinking']
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'tech',
      location: 'Remote',
      type: 'Full-time',
      salary: 'PKR 80K - 130K',
      description: 'Design beautiful and intuitive user experiences for our customers.',
      requirements: ['Design portfolio', 'Figma/Sketch', 'User research', 'Mobile-first design']
    },
    {
      id: 5,
      title: 'Operations Manager',
      department: 'operations',
      location: 'Karachi',
      type: 'Full-time',
      salary: 'PKR 120K - 180K',
      description: 'Optimize our logistics and fulfillment operations.',
      requirements: ['Operations experience', 'Process improvement', 'Team leadership', 'Data analysis']
    },
    {
      id: 6,
      title: 'Content Creator',
      department: 'marketing',
      location: 'Lahore',
      type: 'Part-time',
      salary: 'PKR 40K - 60K',
      description: 'Create engaging content for our social media and marketing campaigns.',
      requirements: ['Content creation', 'Photography/Video', 'Social media', 'Fashion knowledge']
    }
  ]

  const filteredJobs = selectedDepartment === 'all'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment)

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Help us revolutionize fashion retail in Pakistan. Build your career with a fast-growing, innovative company.
            </p>
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-6 text-white inline-block">
              <p className="text-lg font-medium">We're hiring across multiple departments!</p>
              <p className="text-primary-100">12 open positions available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const colorClasses = {
                green: 'from-green-500 to-green-600',
                red: 'from-red-500 to-red-600',
                blue: 'from-blue-500 to-blue-600',
                purple: 'from-purple-500 to-purple-600'
              }

              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-2xl p-4 inline-block mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Department Filter */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Departments</h3>
              <div className="space-y-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${selectedDepartment === dept.id
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{dept.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${selectedDepartment === dept.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-600'
                        }`}>
                        {dept.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-1" />
                          {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-2xl font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                <BriefcaseIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions available</h3>
                <p className="text-gray-600">Check back soon for new opportunities in this department.</p>
              </div>
            )}
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application through our portal</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">Our team reviews your application</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Meet with our hiring team</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Welcome!</h3>
              <p className="text-gray-600 text-sm">Join the Baddies Essentials family</p>
            </div>
          </div>
        </div>

        {/* Contact HR */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Careers?</h2>
          <p className="text-primary-100 mb-6">
            Our HR team is here to help you with any questions about opportunities at Baddies Essentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@fashionpanda.com"
              className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              Email HR Team
            </a>
            <a
              href="/contact"
              className="bg-white/20 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white/30 transition-colors border border-white/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
