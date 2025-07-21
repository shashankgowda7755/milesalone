import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, MapPin, User, BookOpen, Camera, Quote } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const Home: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const philosophyQuotes = [
    "The road teaches patience. Every mile walked is a lesson learned.",
    "In the dust of rural paths, I find stories cities never tell.",
    "Travel isn't about the destination; it's about who you become on the way.",
    "Every village has a heartbeat. You just need to slow down to hear it."
  ];

  const featuredRegions = [
    {
      id: 1,
      name: "Kashmir Valley",
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Apple orchards and mountain whispers",
      status: "Planned"
    },
    {
      id: 2,
      name: "Himachal Hills",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Buddhist monasteries and snow stories",
      status: "Planned"
    },
    {
      id: 3,
      name: "Rajasthan Desert",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Golden sands and royal heritage",
      status: "Planned"
    },
    {
      id: 4,
      name: "Kerala Backwaters",
      image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Coconut groves and spice gardens",
      status: "Planned"
    },
    {
      id: 5,
      name: "Tamil Nadu Temples",
      image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ancient stones and modern faith",
      status: "Planned"
    },
    {
      id: 6,
      name: "Kanyakumari",
      image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Where three oceans meet",
      status: "Destination"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % philosophyQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-text mb-6 animate-fade-in-up">
            Kashmir to <span className="text-[#C39064]">Kanyakumari</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up font-serif" style={{animationDelay: '0.2s'}}>
            Raw Roads, Real Discovery
          </p>
          <p className="body-text mb-8 opacity-80 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Following dusty trails and authentic stories across rural India. 
            4 months. 4,000+ kilometers. One curious soul seeking real connections.
          </p>
          
          {/* Journey Status */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="w-5 h-5 text-[#C39064]" />
              <span className="font-medium">Journey Status:</span>
              <span className="text-[#C39064]">Planning Phase</span>
            </div>
            <div className="text-sm opacity-80 mt-1">
              Departure: August 2025 | 0 km of 4,000+ km
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Link to="/journey" className="btn-primary px-8 py-4 text-lg inline-flex items-center">
              Explore Diaries <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/about" className="btn-secondary px-8 py-4 text-lg inline-flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch My Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Snapshot Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Latest Diary */}
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-[#C39064] mr-3" />
                <h3 className="text-xl font-semibold">Latest from the Road</h3>
              </div>
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Latest journey"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold mb-2">Planning the Perfect Route</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Mapping out 4 months of pure adventure from the valleys of Kashmir to the shores of Kanyakumari...
                </p>
              </div>
              <Link to="/journey" className="text-[#3B6943] font-medium inline-flex items-center hover:text-[#2D5235]">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Who Am I */}
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-[#C39064] mr-3" />
                <h3 className="text-xl font-semibold">The One Behind</h3>
              </div>
              <div className="mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-[#C39064] to-[#3B6943] rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SG
                </div>
                <h4 className="font-semibold mb-2">Shashank Gowda</h4>
                <p className="text-gray-600 text-sm mb-4">
                  22-year-old from Mysore, Karnataka. Former college president, chess champion, fish farmer, and now a soul seeking authentic India.
                </p>
              </div>
              <Link to="/about" className="text-[#3B6943] font-medium inline-flex items-center hover:text-[#2D5235]">
                My Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="card p-8">
              <NewsletterSignup variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="py-20 bg-[#2B2B2B] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="w-12 h-12 text-[#C39064] mx-auto mb-8 opacity-50" />
          <div className="relative h-32 flex items-center justify-center">
            {philosophyQuotes.map((quote, index) => (
              <p 
                key={index}
                className={`absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-serif leading-relaxed transition-opacity duration-1000 ${
                  index === currentQuote ? 'opacity-100' : 'opacity-0'
                }`}
              >
                "{quote}"
              </p>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-8">
            {philosophyQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentQuote ? 'bg-[#C39064]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">The Journey Ahead</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From snow-capped peaks to tropical shores, each region holds stories waiting to be discovered.
            </p>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6" style={{width: 'max-content'}}>
              {featuredRegions.map((region) => (
                <div key={region.id} className="card w-80 flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={region.image} 
                      alt={region.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        region.status === 'Destination' 
                          ? 'bg-[#C39064] text-white' 
                          : 'bg-white/90 text-[#2B2B2B]'
                      }`}>
                        {region.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{region.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{region.description}</p>
                    <button className="text-[#3B6943] font-medium inline-flex items-center hover:text-[#2D5235]">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Banner */}
      <section className="py-12 bg-[#F8F4EF] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Journey Partners & Sponsors</h3>
          <p className="text-gray-600 mb-6">
            Supporting authentic travel and sustainable tourism across India
          </p>
          <div className="flex flex-wrap items-center justify-center space-x-8 opacity-60">
            <div className="bg-gray-300 h-12 w-32 rounded flex items-center justify-center text-gray-500 text-sm">
              Partner Logo
            </div>
            <div className="bg-gray-300 h-12 w-32 rounded flex items-center justify-center text-gray-500 text-sm">
              Sponsor Logo
            </div>
            <div className="bg-gray-300 h-12 w-32 rounded flex items-center justify-center text-gray-500 text-sm">
              Brand Logo
            </div>
            <div className="bg-gray-300 h-12 w-32 rounded flex items-center justify-center text-gray-500 text-sm">
              +More
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default Home;