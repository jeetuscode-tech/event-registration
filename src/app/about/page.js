"use client";
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar/>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About Event Registration
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn more about our platform and the team behind it
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Mission Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To provide seamless, secure, and user-friendly event registration solutions that connect people and create meaningful experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in creating intuitive event registration platforms that make it easy for organizers to manage events and for participants to register seamlessly. Our platform handles everything from simple registrations to complex multi-day conferences.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Streamlined registration process</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure data handling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time updates and notifications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mobile-responsive design</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Why Choose Us?</h4>
              <p className="text-gray-600 text-center">
                Our platform combines cutting-edge technology with user-centered design to deliver the best event registration experience possible.
              </p>
            </div>
          </div>
        </div>

        {/* Creator Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet the Creator
              </h2>
              <p className="text-xl text-gray-600">
                This platform was designed and developed with passion and expertise
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">VU</span>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Vijay Umbare</h3>
                    <p className="text-lg text-gray-600 mb-4">Full Stack Developer & UI/UX Designer</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A passionate developer with expertise in modern web technologies, Vijay created this event registration platform to demonstrate the power of combining beautiful design with robust functionality. With a focus on user experience and clean code, this platform showcases best practices in web development.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React.js</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Next.js</span>
                      <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Tailwind CSS</span>
                      <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Node.js</span>
                      <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our event registration platform stand out
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Secure & Reliable</h3>
              <p className="text-gray-600 text-center">Built with security best practices and reliable infrastructure to protect your data</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Mobile First</h3>
              <p className="text-gray-600 text-center">Responsive design that works perfectly on all devices and screen sizes</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Fast & Efficient</h3>
              <p className="text-gray-600 text-center">Optimized performance for quick loading and smooth user experience</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our platform or want to discuss your event registration needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Us
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
