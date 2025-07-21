import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Users, Globe, Heart, ArrowRight, Download } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    stories: true,
    photos: true,
    tips: false,
    updates: true
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const stats = [
    { icon: Users, label: 'Subscribers', value: '500+' },
    { icon: Mail, label: 'Letters Sent', value: '24' },
    { icon: Globe, label: 'Countries Reached', value: '12' },
    { icon: Heart, label: 'Response Rate', value: '89%' }
  ];

  const sampleLetters = [
    {
      subject: "Week 1: Kashmir Calling - The Journey Begins",
      date: "Planned for Aug 2025",
      preview: "The apple orchards are in bloom, and I'm finally here. Today marks the beginning of 4 months that will change everything. The local family I'm staying with, the Kumars, welcomed me like their own son...",
      category: "Journey Update"
    },
    {
      subject: "Behind the Scenes: What 65L Actually Holds",
      date: "Dec 15, 2024",
      preview: "You asked for the complete packing list, so here it is. Everything I'm carrying for 4 months on the road, from the essential to the 'why-did-I-think-I-needed-this'. Spoiler: I'm already reconsidering the drone...",
      category: "Gear & Tips"
    },
    {
      subject: "The Conversation That Changed My Route",
      date: "Planned for Sep 2025",
      preview: "Sometimes the best plans are the ones you throw away. A 70-year-old retired teacher named Ramesh ji just told me about a village in Himachal that's not on any map. Tomorrow, I'm taking a detour...",
      category: "Story from the Road"
    }
  ];

  const whatToExpect = [
    {
      title: "Weekly Road Letters",
      description: "Every Sunday, get a personal letter from wherever I am. Real stories, honest struggles, unexpected discoveries.",
      frequency: "Weekly during journey"
    },
    {
      title: "Photo Stories",
      description: "Behind-the-scenes shots with the stories they don't tell. Plus early access to download packs.",
      frequency: "Bi-weekly"
    },
    {
      title: "Practical Travel Tips",
      description: "Budget breakdowns, gear reviews, route recommendations, and lessons learned the hard way.",
      frequency: "Monthly"
    },
    {
      title: "Community Spotlights",
      description: "Featuring stories from fellow subscribers who are planning or living their own adventures.",
      frequency: "As they happen"
    }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="pt-20 md:pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F4EF] to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-[#3B6943] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Welcome to the Journey!</h1>
            <p className="text-gray-600 text-lg mb-6">
              You're now part of the Milesalone community. Check your inbox for a welcome letter 
              with exclusive behind-the-scenes content from the journey planning.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <h3 className="font-semibold mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#3B6943] rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <p className="font-medium">Welcome Letter</p>
                  <p className="text-sm text-gray-600">Arriving in your inbox in the next few minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#C39064] rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <p className="font-medium">Weekly Letters</p>
                  <p className="text-sm text-gray-600">Starting when the journey begins in August 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <p className="font-medium">Exclusive Content</p>
                  <p className="text-sm text-gray-600">Planning insights, gear lists, and early photo access</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href="/"
              className="btn-primary px-6 py-3 inline-flex items-center"
            >
              Explore the Journey <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <p className="text-sm text-gray-500">
              Follow along on social media: 
              <a href="#" className="text-[#3B6943] hover:underline mx-2">Instagram</a>|
              <a href="#" className="text-[#3B6943] hover:underline mx-2">YouTube</a>|
              <a href="#" className="text-[#3B6943] hover:underline mx-2">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8F4EF] to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-12 h-12 text-[#C39064] mr-4" />
            <h1 className="section-title">
              Walk With <span className="text-[#C39064]">Me</span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get personal letters from the road. Real stories, honest reflections, 
            and hidden gems you won't find anywhere else. Join fellow wanderers 
            on this 4-month journey from Kashmir to Kanyakumari.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-8 h-8 text-[#C39064] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#2B2B2B]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Main Signup */}
          <NewsletterSignup />
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">What to Expect</h2>
            <p className="text-gray-600">No spam. No fluff. Just authentic stories from the road.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpected.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 bg-[#3B6943] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                <span className="text-xs text-[#C39064] font-medium">{item.frequency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Letters */}
      <section className="py-20 bg-[#F8F4EF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Sample Letters</h2>
            <p className="text-gray-600">Get a taste of what lands in your inbox</p>
          </div>

          <div className="space-y-6">
            {sampleLetters.map((letter, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4 bg-[#2B2B2B] text-white p-6">
                    <div className="text-center">
                      <Mail className="w-8 h-8 mx-auto mb-3 text-[#C39064]" />
                      <div className="text-sm opacity-80 mb-2">{letter.category}</div>
                      <div className="text-xs opacity-60">{letter.date}</div>
                    </div>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <h3 className="font-bold text-lg mb-3">{letter.subject}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{letter.preview}</p>
                    <button className="text-[#3B6943] font-medium text-sm hover:text-[#2D5235] transition-colors">
                      Continue reading in your inbox →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preferences */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Customize Your Experience</h2>
            <p className="text-gray-600">Choose what matters most to you</p>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.stories}
                    onChange={(e) => setPreferences({...preferences, stories: e.target.checked})}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-semibold">Journey Stories</div>
                    <div className="text-sm text-gray-600">Personal narratives and cultural discoveries from the road</div>
                  </div>
                </label>
              </div>

              <div className="card p-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.photos}
                    onChange={(e) => setPreferences({...preferences, photos: e.target.checked})}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-semibold">Photo Stories</div>
                    <div className="text-sm text-gray-600">Behind-the-scenes photos with download access</div>
                  </div>
                </label>
              </div>

              <div className="card p-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.tips}
                    onChange={(e) => setPreferences({...preferences, tips: e.target.checked})}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-semibold">Travel Tips</div>
                    <div className="text-sm text-gray-600">Practical advice, gear reviews, and budget breakdowns</div>
                  </div>
                </label>
              </div>

              <div className="card p-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.updates}
                    onChange={(e) => setPreferences({...preferences, updates: e.target.checked})}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-semibold">Journey Updates</div>
                    <div className="text-sm text-gray-600">Live location updates and milestone celebrations</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="text-center">
              <div className="max-w-md mx-auto">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="📬 Your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3B6943]"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary px-6 py-3"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  No spam. No fluff. Unsubscribe anytime with a single click.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#2B2B2B] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-white mb-4">What Readers Say</h2>
            <p className="text-gray-300">Real feedback from fellow wanderers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">💌</div>
              <p className="text-gray-300 mb-4 italic">
                "These letters feel like getting updates from a close friend on an adventure. 
                Shashank's honesty about both the highs and lows makes it so relatable."
              </p>
              <div className="text-[#C39064] font-medium">— Priya, Mumbai</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🎒</div>
              <p className="text-gray-300 mb-4 italic">
                "Finally, travel content that's about connection, not just collection. 
                His gear reviews helped me plan my own budget trip to Himachal."
              </p>
              <div className="text-[#C39064] font-medium">— Arjun, Bangalore</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🌍</div>
              <p className="text-gray-300 mb-4 italic">
                "I look forward to these letters every week. They inspire me to slow down 
                and really see the places I visit, not just photograph them."
              </p>
              <div className="text-[#C39064] font-medium">— Sarah, Delhi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Access */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Letter Archive</h2>
          <p className="text-gray-600 mb-8">
            All previous letters available to subscribers. Dive into the complete story.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card p-6">
              <Download className="w-8 h-8 text-[#C39064] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Journey Planning Archive</h3>
              <p className="text-gray-600 text-sm mb-4">
                All letters from the planning phase (Nov 2024 - July 2025)
              </p>
              <span className="text-xs text-[#C39064] font-medium">12 letters • 45 min read</span>
            </div>

            <div className="card p-6">
              <Download className="w-8 h-8 text-[#C39064] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Complete Journey Archive</h3>
              <p className="text-gray-600 text-sm mb-4">
                Every letter from Kashmir to Kanyakumari (Available Dec 2025)
              </p>
              <span className="text-xs text-gray-400 font-medium">Coming Soon</span>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Archives are exclusively available to newsletter subscribers. 
            <br />Sign up now to get access to all past and future letters.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;