"use client";
import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy events data
  const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      category: "technology",
      date: "2024-03-15",
      time: "09:00 AM - 05:00 PM",
      location: "Convention Center, Downtown",
      price: "$299",
      seats: 150,
      available: 45,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
      description: "Join us for the biggest tech conference of the year featuring keynote speakers, workshops, and networking opportunities.",
      tags: ["AI", "Machine Learning", "Web Development", "Cloud Computing"]
    },
    {
      id: 2,
      title: "Startup Networking Mixer",
      category: "networking",
      date: "2024-03-20",
      time: "06:00 PM - 09:00 PM",
      location: "Innovation Hub, Tech District",
      price: "Free",
      seats: 80,
      available: 23,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop",
      description: "Connect with fellow entrepreneurs, investors, and industry experts in a relaxed networking environment.",
      tags: ["Networking", "Startups", "Entrepreneurship", "Investment"]
    },
    {
      id: 3,
      title: "Design Workshop Series",
      category: "design",
      date: "2024-03-25",
      time: "10:00 AM - 04:00 PM",
      location: "Creative Studio, Arts Quarter",
      price: "$149",
      seats: 40,
      available: 12,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Learn advanced design principles and techniques from industry professionals in this hands-on workshop.",
      tags: ["UI/UX", "Graphic Design", "Branding", "Creative"]
    },
    {
      id: 4,
      title: "Data Science Summit",
      category: "technology",
      date: "2024-04-05",
      time: "08:00 AM - 06:00 PM",
      location: "Science Center, University Campus",
      price: "$399",
      seats: 200,
      available: 67,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description: "Explore the latest trends in data science, analytics, and artificial intelligence with leading experts.",
      tags: ["Data Science", "Analytics", "AI", "Machine Learning"]
    },
    {
      id: 5,
      title: "Marketing Masterclass",
      category: "business",
      date: "2024-04-12",
      time: "01:00 PM - 05:00 PM",
      location: "Business Center, Financial District",
      price: "$199",
      seats: 60,
      available: 18,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Master digital marketing strategies and learn how to grow your business in the digital age.",
      tags: ["Digital Marketing", "SEO", "Social Media", "Growth"]
    },
    {
      id: 6,
      title: "Health & Wellness Expo",
      category: "health",
      date: "2024-04-20",
      time: "10:00 AM - 06:00 PM",
      location: "Wellness Center, Health District",
      price: "$25",
      seats: 300,
      available: 89,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      description: "Discover the latest in health, fitness, and wellness with interactive exhibits and expert presentations.",
      tags: ["Health", "Fitness", "Wellness", "Nutrition"]
    },
    {
      id: 7,
      title: "Creative Writing Workshop",
      category: "education",
      date: "2024-04-28",
      time: "02:00 PM - 06:00 PM",
      location: "Literary Center, Cultural District",
      price: "$89",
      seats: 30,
      available: 8,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300&fit=crop",
      description: "Unleash your creativity and improve your writing skills with professional authors and editors.",
      tags: ["Writing", "Creative", "Literature", "Storytelling"]
    },
    {
      id: 8,
      title: "Blockchain & Crypto Meetup",
      category: "technology",
      date: "2024-05-05",
      time: "07:00 PM - 10:00 PM",
      location: "Crypto Hub, Innovation District",
      price: "Free",
      seats: 100,
      available: 34,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      description: "Stay updated on the latest developments in blockchain technology and cryptocurrency markets.",
      tags: ["Blockchain", "Cryptocurrency", "DeFi", "Web3"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: events.length },
    { id: 'technology', name: 'Technology', count: events.filter(e => e.category === 'technology').length },
    { id: 'business', name: 'Business', count: events.filter(e => e.category === 'business').length },
    { id: 'design', name: 'Design', count: events.filter(e => e.category === 'design').length },
    { id: 'networking', name: 'Networking', count: events.filter(e => e.category === 'networking').length },
    { id: 'health', name: 'Health & Wellness', count: events.filter(e => e.category === 'health').length },
    { id: 'education', name: 'Education', count: events.filter(e => e.category === 'education').length }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      technology: 'bg-blue-100 text-blue-800',
      business: 'bg-green-100 text-green-800',
      design: 'bg-purple-100 text-purple-800',
      networking: 'bg-orange-100 text-orange-800',
      health: 'bg-red-100 text-red-800',
      education: 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar/>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover amazing events and connect with like-minded professionals
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* Event Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {event.price}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-green-600">{event.available}</span> seats available
                  </div>
                  <div className="text-sm text-gray-500">
                    {Math.round(((event.seats - event.available) / event.seats) * 100)}% filled
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((event.seats - event.available) / event.seats) * 100}%` }}
                  ></div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to host your own event?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss how we can help you create and manage your event
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
