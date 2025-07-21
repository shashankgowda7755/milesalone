import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Eye, Heart, Filter, Search, ArrowRight, Map } from 'lucide-react';

const Journey: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'All Stories', count: 12 },
    { id: 'budget', label: 'Budget Travel', count: 4 },
    { id: 'hidden-gems', label: 'Hidden Gems', count: 6 },
    { id: 'community', label: 'Community Stays', count: 3 },
    { id: 'food', label: 'Local Food', count: 8 },
    { id: 'culture', label: 'Cultural', count: 5 }
  ];

  const regions = [
    { name: 'Kashmir Valley', lat: 34.0, lng: 74.8, color: '#8B5CF6' },
    { name: 'Himachal Pradesh', lat: 31.1, lng: 77.1, color: '#06B6D4' },
    { name: 'Uttarakhand', lat: 30.0, lng: 79.0, color: '#10B981' },
    { name: 'Rajasthan', lat: 27.0, lng: 74.2, color: '#F59E0B' },
    { name: 'Gujarat', lat: 23.0, lng: 72.6, color: '#EF4444' },
    { name: 'Maharashtra', lat: 19.7, lng: 75.7, color: '#8B5CF6' },
    { name: 'Karnataka', lat: 15.3, lng: 75.7, color: '#06B6D4' },
    { name: 'Kerala', lat: 10.8, lng: 76.2, color: '#10B981' },
    { name: 'Tamil Nadu', lat: 11.0, lng: 78.3, color: '#F59E0B' },
  ];

  const diaries = [
    {
      id: 1,
      title: "Planning the Perfect Route: Kashmir to Kanyakumari",
      location: "Mysore, Karnataka",
      date: "December 2024",
      readTime: "8 min read",
      category: "Planning",
      tags: ["budget", "planning"],
      excerpt: "4 months, 4000+ kilometers, infinite stories waiting to be discovered. Here's how I'm planning the journey of a lifetime through authentic India.",
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: "Why I'm Trading Software Testing for Dusty Roads",
      location: "Mysore, Karnataka",
      date: "November 2024",
      readTime: "6 min read",
      category: "Personal",
      tags: ["culture", "personal"],
      excerpt: "From cubicles to chai stalls, from code to conversations. The story behind leaving a comfortable job for 4 months of authentic discovery.",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 892,
      likes: 67,
      featured: false
    },
    {
      id: 3,
      title: "Budget Breakdown: 4 Months on ₹80,000",
      location: "Mysore, Karnataka",
      date: "November 2024",
      readTime: "10 min read",
      category: "Budget",
      tags: ["budget", "tips"],
      excerpt: "Detailed budget planning for authentic India travel. How to make every rupee count while experiencing real culture and community.",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1456,
      likes: 123,
      featured: true
    },
    {
      id: 4,
      title: "Hidden Gems: Villages Google Maps Forgot",
      location: "Research Phase",
      date: "October 2024",
      readTime: "7 min read",
      category: "Discovery",
      tags: ["hidden-gems", "culture"],
      excerpt: "Uncovering the villages, traditions, and stories that don't make it to travel guides. Real India beyond the Instagram posts.",
      image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 743,
      likes: 54,
      featured: false
    },
    {
      id: 5,
      title: "Community Stays: Living with Local Families",
      location: "Planning Phase",
      date: "October 2024",
      readTime: "9 min read",
      category: "Community",
      tags: ["community", "culture"],
      excerpt: "How homestays and community connections will shape this journey. Building bridges, not just collecting stamps in a passport.",
      image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 634,
      likes: 41,
      featured: false
    },
    {
      id: 6,
      title: "The Food Trail: Regional Specialties I Must Try",
      location: "Research Phase",
      date: "September 2024",
      readTime: "12 min read",
      category: "Food",
      tags: ["food", "culture"],
      excerpt: "From Kashmiri kahwa to Tamil filter coffee, mapping the flavors that define India's culinary landscape region by region.",
      image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1876,
      likes: 156,
      featured: true
    }
  ];

  const filteredDiaries = diaries.filter(diary => {
    const matchesFilter = selectedFilter === 'all' || diary.tags.includes(selectedFilter);
    const matchesSearch = diary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         diary.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         diary.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8F4EF] to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="section-title mb-4">
            Journey <span className="text-[#C39064]">Diaries</span>
          </h1>
          <p className="body-text text-gray-600 mb-8 max-w-2xl mx-auto">
            Raw stories from the road. Authentic experiences. Real India through the eyes 
            of a curious soul walking from Kashmir to Kanyakumari.
          </p>
          
          {/* Interactive India Map Placeholder */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-[#C39064] mr-2" />
                <h3 className="text-lg font-semibold">Interactive Journey Map</h3>
              </div>
              <div className="relative bg-gradient-to-b from-blue-50 to-green-50 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-600 mb-4">Interactive map coming soon!</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {regions.map((region, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-xs border shadow-sm"
                        style={{ borderLeftColor: region.color, borderLeftWidth: '3px' }}
                      >
                        {region.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories by location, title, or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3B6943] text-lg"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-[#3B6943] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diary Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {filteredDiaries.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No stories found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDiaries.map((diary) => (
                <article key={diary.id} className={`card group ${diary.featured ? 'lg:col-span-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={diary.image} 
                      alt={diary.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        diary.featured ? 'h-64' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                        {diary.category}
                      </span>
                    </div>
                    {diary.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-[#C39064] text-white rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {diary.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {diary.readTime}
                      </div>
                    </div>
                    
                    <h2 className={`font-semibold mb-3 group-hover:text-[#3B6943] transition-colors ${
                      diary.featured ? 'text-xl' : 'text-lg'
                    }`}>
                      {diary.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {diary.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {diary.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-[#F8F4EF] text-[#3B6943] rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {diary.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {diary.likes}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/journey/${diary.id}`}
                        className="text-[#3B6943] font-medium inline-flex items-center hover:text-[#2D5235] text-sm"
                      >
                        Read Story <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredDiaries.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-secondary px-8 py-3">
                Load More Stories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Journey Stats */}
      <section className="py-20 bg-[#2B2B2B] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-white mb-4">Journey Progress</h2>
            <p className="text-gray-300">Live updates from the road</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C39064] mb-2">0</div>
              <div className="text-gray-300">Kilometers Traveled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C39064] mb-2">12</div>
              <div className="text-gray-300">Stories Written</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C39064] mb-2">0</div>
              <div className="text-gray-300">Villages Visited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C39064] mb-2">0</div>
              <div className="text-gray-300">Local Friends Made</div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4 text-center">Journey Timeline</h3>
            <div className="bg-gray-700 rounded-full h-4 relative">
              <div className="bg-[#C39064] h-4 rounded-full w-[2%] relative">
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#C39064] rounded-full border-4 border-white"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Kashmir (Aug 2025)</span>
              <span>Currently: Planning Phase</span>
              <span>Kanyakumari (Dec 2025)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;