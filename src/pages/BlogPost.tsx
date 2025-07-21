import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Eye, Heart, Share2, Bookmark, ChevronRight } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const BlogPost: React.FC = () => {
  const { id } = useParams();

  const post = {
    id: 1,
    title: "Why Slow Travel is the Only Real Travel",
    category: "Philosophy",
    readTime: "7 min read",
    date: "December 15, 2024",
    views: 2340,
    likes: 187,
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: "Shashank Gowda"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Conversations with Strangers: The Art of Travel Connection",
      readTime: "9 min read"
    },
    {
      id: 3,
      title: "Sustainable Travel in the Age of Instagram",
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
            <Link to="/letters" className="hover:text-[#3B6943]">Letters</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#3B6943]">Current Post</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/letters" 
            className="inline-flex items-center text-gray-600 hover:text-[#3B6943] text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Letters
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <span className="px-3 py-1 bg-[#F8F4EF] text-[#3B6943] rounded-full">
              {post.category}
            </span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C39064] to-[#3B6943] rounded-full flex items-center justify-center text-white font-bold">
                SG
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-gray-600 text-sm">{post.date}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {post.views}
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  {post.likes}
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bookmark className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 mb-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-serif">
            In a world obsessed with ticking boxes and collecting passport stamps, 
            I want to argue for a different approach—one where the journey becomes 
            more important than the destination, and where depth trumps breadth every single time.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">The Instagram Problem</h2>
          <p className="body-text text-gray-700 mb-6">
            Scroll through any travel feed today, and you'll see the same pattern: rushed visits to iconic landmarks, 
            perfectly curated shots, and itineraries that read like Olympic sprinting schedules. "5 countries in 10 days!" 
            "Europe in a week!" "Southeast Asia speed run!"
          </p>
          <p className="body-text text-gray-700 mb-6">
            But here's what those posts don't tell you: the exhaustion, the surface-level experiences, 
            the missed conversations with locals because you're rushing to the next photo spot. 
            You're collecting stamps, not stories. You're checking boxes, not changing perspectives.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">What Slow Travel Actually Means</h2>
          <p className="body-text text-gray-700 mb-6">
            Slow travel isn't about moving literally slowly—though sometimes it is. It's about intentionality. 
            It's choosing depth over breadth, quality over quantity, connection over collection.
          </p>
          <p className="body-text text-gray-700 mb-6">
            When I decided to spend 4 months traveling from Kashmir to Kanyakumari, people asked why so long for one country. 
            The answer is simple: India isn't one country—it's a continent of cultures, languages, traditions, and stories. 
            To truly understand even a fraction of it, you need time.
          </p>

          <div className="bg-[#F8F4EF] rounded-lg p-6 my-8">
            <h3 className="font-semibold mb-3 text-[#3B6943]">The Slow Travel Mindset:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Stay longer in fewer places</li>
              <li>• Prioritize local connections over tourist attractions</li>
              <li>• Learn basic phrases in local languages</li>
              <li>• Shop at local markets, not tourist shops</li>
              <li>• Choose homestays over hotels when possible</li>
              <li>• Leave room for spontaneity in your schedule</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">The Stories You Miss at High Speed</h2>
          <p className="body-text text-gray-700 mb-6">
            Last month, while planning this journey, I spent an afternoon with an elderly chai vendor in Mysore. 
            What started as a simple tea break turned into a three-hour conversation about partition, 
            family recipes passed down through generations, and his dreams for his grandson's education.
          </p>
          <p className="body-text text-gray-700 mb-6">
            That conversation taught me more about Karnataka's history and culture than any guidebook ever could. 
            But it only happened because I wasn't rushing to tick off the next item on my tourist checklist.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">The Economics of Slow Travel</h2>
          <p className="body-text text-gray-700 mb-6">
            Contrary to what many believe, slow travel is often more economical than fast travel. 
            When you stay longer in one place, you can negotiate better accommodation rates, 
            eat at local places instead of tourist restaurants, and avoid the constant transportation costs 
            of hopping between destinations.
          </p>
          <p className="body-text text-gray-700 mb-6">
            For my 4-month Kashmir to Kanyakumari journey, I've budgeted ₹80,000—that's ₹667 per day. 
            Compare that to typical tourist itineraries that cost ₹3,000-5,000 per day for far less authentic experiences.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">How to Start Traveling Slowly</h2>
          <p className="body-text text-gray-700 mb-6">
            You don't need to quit your job and travel for months (though that's exactly what I'm doing). 
            You can apply slow travel principles to any trip:
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-[#C39064] pl-6">
              <h3 className="font-semibold mb-2">For Weekend Trips</h3>
              <p className="text-gray-700">Choose one neighborhood instead of covering an entire city. 
              Walk everywhere. Eat where locals eat. Have conversations.</p>
            </div>
            <div className="border-l-4 border-[#C39064] pl-6">
              <h3 className="font-semibold mb-2">For Week-Long Vacations</h3>
              <p className="text-gray-700">Pick 2-3 places maximum. Stay at least 2-3 nights in each. 
              Book accommodations that encourage local interaction.</p>
            </div>
            <div className="border-l-4 border-[#C39064] pl-6">
              <h3 className="font-semibold mb-2">For Longer Journeys</h3>
              <p className="text-gray-700">Embrace the power of "I don't know." Leave gaps in your itinerary. 
              Follow recommendations from locals over guidebooks.</p>
            </div>
          </div>

          <div className="bg-[#2B2B2B] text-white rounded-lg p-8 text-center my-12">
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-4">
              "Travel is not about escaping life, but about making sure life doesn't escape you. 
              And life, real life, happens in the spaces between destinations."
            </p>
            <div className="text-[#C39064]">— My Travel Philosophy</div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B]">The Road Ahead</h2>
          <p className="body-text text-gray-700 mb-6">
            When I start my Kashmir to Kanyakumari journey in August 2025, I'll be carrying this philosophy with me. 
            Some days I might cover 200 kilometers. Other days, I might not leave the village I'm staying in. 
            Both will be equally valuable.
          </p>
          <p className="body-text text-gray-700 mb-8">
            Because the goal isn't to see India—it's to understand it. And understanding, 
            like all meaningful things in life, takes time.
          </p>

          <p className="body-text text-gray-600 italic">
            What's your experience with slow travel? Have you found that your best travel memories 
            come from slowing down rather than speeding up? I'd love to hear your stories—
            <Link to="/about#contact" className="text-[#3B6943] hover:underline">drop me a line</Link>.
          </p>
        </div>

        {/* Related Posts */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <h3 className="text-xl font-bold mb-6">Related Letters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link key={related.id} to={`/letters/${related.id}`} className="card p-6 group">
                <h4 className="font-semibold mb-2 group-hover:text-[#3B6943] transition-colors">
                  {related.title}
                </h4>
                <p className="text-sm text-gray-600">{related.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#F8F4EF]">
        <div className="max-w-4xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default BlogPost;