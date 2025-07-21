import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, Heart, ArrowRight, Filter, Search, BookOpen, Lightbulb, Camera, User } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const Letters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Letters', icon: BookOpen, count: 15 },
    { id: 'philosophy', label: 'Philosophy', icon: Lightbulb, count: 6 },
    { id: 'gear', label: 'Gear Reviews', icon: Camera, count: 4 },
    { id: 'tips', label: 'Travel Tips', icon: User, count: 3 },
    { id: 'personal', label: 'Personal', icon: Heart, count: 2 }
  ];

  const featured = {
    id: 1,
    title: "Why Slow Travel is the Only Real Travel",
    excerpt: "In a world obsessed with ticking boxes and collecting passport stamps, I argue for a different approach—one where the journey becomes more important than the destination.",
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Philosophy",
    readTime: "7 min read",
    date: "December 15, 2024",
    views: 2340,
    likes: 187
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Backpack Breakdown: 4 Months in 65 Liters",
      excerpt: "Everything I'm carrying for 4 months on the road. From the essential to the 'why-did-I-pack-this', here's the complete gear breakdown.",
      category: "Gear Reviews",
      readTime: "12 min read",
      date: "December 10, 2024",
      views: 1890,
      likes: 134,
      featured: false
    },
    {
      id: 3,
      title: "Conversations with Strangers: The Art of Travel Connection",
      excerpt: "How to move beyond small talk and create meaningful connections with locals. The stories that shaped my understanding of authentic travel.",
      category: "Philosophy",
      readTime: "9 min read",
      date: "December 5, 2024",
      views: 1456,
      likes: 98,
      featured: false
    },
    {
      id: 4,
      title: "Budget Travel Without Compromising Soul",
      excerpt: "Traveling on ₹80,000 for 4 months doesn't mean sacrificing authenticity. Here's how to stretch every rupee while collecting priceless experiences.",
      category: "Travel Tips",
      readTime: "8 min read",
      date: "November 28, 2024",
      views: 2150,
      likes: 156,
      featured: true
    },
    {
      id: 5,
      title: "The Camera That Never Lies: Mobile Photography for Travelers",
      excerpt: "Smartphone photography tips for capturing authentic moments. Why the best camera is the one you have with you.",
      category: "Gear Reviews",
      readTime: "6 min read",
      date: "November 22, 2024",
      views: 987,
      likes: 76,
      featured: false
    },
    {
      id: 6,
      title: "Leaving the Cubicle: From Software Testing to Soul Searching",
      excerpt: "The personal story behind trading a stable job for 4 months of uncertainty. Why comfort zones are comfortable prisons.",
      category: "Personal",
      readTime: "11 min read",
      date: "November 15, 2024",
      views: 3250,
      likes: 289,
      featured: true
    },
    {
      id: 7,
      title: "Sustainable Travel in the Age of Instagram",
      excerpt: "How to travel responsibly while documenting authentically. The balance between sharing stories and respecting local communities.",
      category: "Philosophy",
      readTime: "10 min read",
      date: "November 8, 2024",
      views: 1678,
      likes: 145,
      featured: false
    }
  ];

  const series = [
    {
      title: "Weekend Reads",
      description: "Long-form reflections for your Saturday morning coffee",
      count: 8,
      color: "bg-blue-500"
    },
    {
      title: "Gear Lab",
      description: "Honest reviews of travel equipment that actually works",
      count: 4,
      color: "bg-green-500"
    },
    {
      title: "Field Notes",
      description: "Quick insights from planning and preparation",
      count: 6,
      color: "bg-purple-500"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8F4EF] to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="section-title mb-4">
            Letters, Lessons & <span className="text-[#C39064]">Dust</span>
          </h1>
          <p className="body-text text-gray-600 mb-8 max-w-2xl mx-auto">
            Honest reflections from the road. Deep thoughts on travel, life, gear, and the art of 
            discovering authentic stories in an increasingly connected world.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search letters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3B6943]"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#3B6943] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Featured Letter</h2>
            <p className="text-gray-600">The story that's been on my mind lately</p>
          </div>

          <article className="max-w-4xl mx-auto">
            <div className="card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featured.image} 
                    alt={featured.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="px-3 py-1 bg-[#F8F4EF] text-[#3B6943] rounded-full">
                      {featured.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featured.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{featured.date}</span>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featured.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {featured.likes}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/letters/${featured.id}`}
                      className="text-[#3B6943] font-medium inline-flex items-center hover:text-[#2D5235]"
                    >
                      Read Letter <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Series Framework */}
      <section className="py-20 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Letter Series</h2>
            <p className="text-gray-600">Organized collections of thoughts and insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {series.map((s, index) => (
              <div key={index} className="card p-6 text-center">
                <div className={`w-16 h-16 ${s.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                  {s.count}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{s.description}</p>
                <button className="text-[#3B6943] font-medium hover:text-[#2D5235] text-sm">
                  Explore Series
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-title">All Letters</h2>
            <div className="text-sm text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'letter' : 'letters'} found
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No letters found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card group">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="px-3 py-1 bg-[#F8F4EF] text-[#3B6943] rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="font-semibold text-xl mb-3 group-hover:text-[#3B6943] transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{post.date}</span>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/letters/${post.id}`}
                        className="text-[#3B6943] font-medium inline-flex items-center hover:text-[#2D5235] text-sm"
                      >
                        Read <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-secondary px-8 py-3">
                Load More Letters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#2B2B2B] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title text-white mb-4">Never Miss a Letter</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get these reflections delivered directly to your inbox. Real stories, honest thoughts, 
            and behind-the-scenes insights from the road.
          </p>
          <NewsletterSignup />
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Reply to This Letter</h3>
          <div className="card p-6">
            <p className="text-gray-600 mb-4">
              These letters are conversations, not monologues. Share your thoughts, experiences, 
              or questions below—I read and respond to every genuine comment.
            </p>
            <div className="bg-[#F8F4EF] rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">💬 Interactive comments coming soon!</p>
              <p className="text-sm text-gray-500">
                For now, reach out via the <Link to="/about#contact" className="text-[#3B6943] hover:underline">contact form</Link> or social media.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Letters;