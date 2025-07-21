import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Eye, Heart, Share2, Bookmark, ChevronRight } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const DiaryPost: React.FC = () => {
  const { id } = useParams();

  // This would normally fetch the diary post by ID
  const diary = {
    id: 1,
    title: "Planning the Perfect Route: Kashmir to Kanyakumari",
    location: "Mysore, Karnataka",
    date: "December 2024",
    readTime: "8 min read",
    category: "Planning",
    tags: ["budget", "planning", "route"],
    excerpt: "4 months, 4000+ kilometers, infinite stories waiting to be discovered.",
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1200",
    views: 1250,
    likes: 89,
    author: "Shashank Gowda"
  };

  const sections = [
    "My Journey",
    "How to Reach",
    "Where to Stay", 
    "What to Eat",
    "What to Do",
    "Tips",
    "Photos",
    "Closing Line"
  ];

  const relatedDiaries = [
    {
      id: 2,
      title: "Why I'm Trading Software Testing for Dusty Roads",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Budget Breakdown: 4 Months on ₹80,000",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="pt-20 md:pt-16">
      {/* Breadcrumb */}
      <nav className="bg-[#F8F4EF] py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-[#3B6943]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/journey" className="hover:text-[#3B6943]">Journey</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#3B6943]">Current Post</span>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${diary.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 pb-8 text-white w-full">
            <div className="mb-4">
              <Link 
                to="/journey" 
                className="inline-flex items-center text-white/80 hover:text-white text-sm mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Journey
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center space-x-4 text-sm mb-4 opacity-90">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                {diary.category}
              </span>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {diary.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {diary.readTime}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {diary.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-sm opacity-90">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {diary.views} views
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {diary.likes} likes
              </div>
              <span>{diary.date}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Actions */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C39064] to-[#3B6943] rounded-full flex items-center justify-center text-white font-bold">
                  SG
                </div>
                <div>
                  <div className="font-semibold">{diary.author}</div>
                  <div className="text-gray-600 text-sm">{diary.date}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{diary.likes}</span>
                </button>
              </div>
            </div>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none">
              {/* My Journey */}
              <section id="my-journey" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">My Journey</h2>
                <p className="body-text text-gray-700 mb-4">
                  The idea struck me during a particularly mundane Tuesday at the office. 
                  Staring at lines of code, I realized I was debugging software while my soul was running on empty. 
                  That's when Kashmir to Kanyakumari stopped being just a dream and became a necessity.
                </p>
                <p className="body-text text-gray-700 mb-4">
                  This isn't about collecting Instagram-worthy shots or checking off tourist attractions. 
                  This is about understanding the pulse of real India—the India that exists in village squares, 
                  roadside dhabas, and the stories that locals tell over evening chai.
                </p>
                <p className="body-text text-gray-700 mb-6">
                  From the apple orchards of Kashmir to the coconut groves of Kerala, from the golden sands of 
                  Rajasthan to the temple bells of Tamil Nadu—this journey is about connecting the dots of our 
                  incredible diversity through the most powerful medium: human connection.
                </p>
              </section>

              {/* How to Reach */}
              <section id="how-to-reach" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">How to Reach</h2>
                <div className="bg-[#F8F4EF] rounded-lg p-6 mb-4">
                  <h3 className="font-semibold mb-3">Transportation Strategy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Trains:</strong> Primary mode for long distances (₹2,500-₹4,000 for sleeper class)</li>
                    <li>• <strong>Buses:</strong> State transport for regional connectivity (₹100-₹800 per journey)</li>
                    <li>• <strong>Local Transport:</strong> Autos, shared cabs, and local buses (₹50-₹200 daily)</li>
                    <li>• <strong>Walking:</strong> The heart of authentic discovery (Free + priceless experiences)</li>
                  </ul>
                </div>
                <p className="body-text text-gray-700">
                  The beauty lies not in the fastest route, but in the detours that lead to unexpected stories. 
                  Sometimes the local bus that takes 3 hours instead of 1 hour will give you conversations 
                  that last a lifetime.
                </p>
              </section>

              {/* Where to Stay */}
              <section id="where-to-stay" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">Where to Stay</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="card p-6">
                    <h3 className="font-semibold mb-2 text-[#3B6943]">Community Homestays</h3>
                    <p className="text-gray-600 text-sm mb-2">₹300-₹800/night</p>
                    <p className="text-gray-700">Live with local families, share meals, learn traditions. The most authentic way to understand local culture.</p>
                  </div>
                  <div className="card p-6">
                    <h3 className="font-semibold mb-2 text-[#3B6943]">Budget Guesthouses</h3>
                    <p className="text-gray-600 text-sm mb-2">₹200-₹600/night</p>
                    <p className="text-gray-700">Clean, basic accommodation with opportunities to meet fellow travelers and local staff.</p>
                  </div>
                </div>
                <p className="body-text text-gray-700">
                  The goal isn't luxury—it's authenticity. Some of my best travel memories come from sharing 
                  stories over simple meals with families who welcomed a stranger like their own son.
                </p>
              </section>

              {/* Photos Section */}
              <section id="photos" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-[#2B2B2B]">Visual Journey</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img 
                    src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Kashmir Valley" 
                    className="rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Journey Planning" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </section>

              {/* Closing Line */}
              <section id="closing-line" className="mb-12">
                <div className="bg-[#2B2B2B] text-white rounded-lg p-8 text-center">
                  <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
                    "The road doesn't promise easy miles, but it guarantees honest ones. 
                    Every step from Kashmir to Kanyakumari will be a step closer to understanding 
                    the India that lives beyond headlines and hashtags."
                  </p>
                  <div className="mt-6">
                    <span className="text-[#C39064]">— Shashank Gowda</span>
                  </div>
                </div>
              </section>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {diary.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-[#F8F4EF] text-[#3B6943] rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold mb-6">Related Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedDiaries.map((related) => (
                  <Link key={related.id} to={`/journey/${related.id}`} className="card group">
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold mb-2 group-hover:text-[#3B6943] transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-600">{related.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Table of Contents */}
            <div className="card p-6 mb-8 sticky top-24">
              <h3 className="font-semibold mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <a 
                    key={index}
                    href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-sm text-gray-600 hover:text-[#3B6943] py-1 border-l-2 border-transparent hover:border-[#3B6943] pl-3 transition-all"
                  >
                    {section}
                  </a>
                ))}
              </nav>
            </div>

            {/* Newsletter Signup */}
            <NewsletterSignup variant="sidebar" />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DiaryPost;