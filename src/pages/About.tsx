import React, { useState } from 'react';
import { MapPin, Award, Heart, Leaf, Users, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const About: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeline = [
    {
      year: "2025",
      title: "The Great Journey Begins",
      description: "Kashmir to Kanyakumari - 4 months of authentic discovery",
      icon: "🎒"
    },
    {
      year: "2024",
      title: "Fish Farming & Sustainability",
      description: "Started aquaculture business focusing on sustainable practices",
      icon: "🐟"
    },
    {
      year: "2023",
      title: "College President & Leader",
      description: "Led 9 committees, enrolled 3,000+ students as voters",
      icon: "🏆"
    },
    {
      year: "2022",
      title: "State Chess Champion",
      description: "Won Karnataka State Level Chess Championship",
      icon: "♟️"
    },
    {
      year: "2021",
      title: "BCA Graduate",
      description: "Completed Bachelor of Computer Applications from Mysore",
      icon: "🎓"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "State Chess Champion",
      description: "Karnataka State Level Championship Winner"
    },
    {
      icon: Users,
      title: "Leadership Excellence",
      description: "Managed 9 committees as College President"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Enrolled 3,000+ students as voters"
    },
    {
      icon: Leaf,
      title: "Sustainability Advocate",
      description: "Pioneering sustainable aquaculture practices"
    }
  ];

  const values = [
    {
      title: "Authentic Discovery",
      description: "Seeking real connections over tourist attractions",
      icon: "🔍"
    },
    {
      title: "Sustainable Living",
      description: "Promoting eco-friendly travel and local economies",
      icon: "🌱"
    },
    {
      title: "Community Focus",
      description: "Building bridges between cultures and communities",
      icon: "🤝"
    },
    {
      title: "Continuous Learning",
      description: "Every mile is a classroom, every person a teacher",
      icon: "📚"
    },
    {
      title: "Honest Storytelling",
      description: "Raw, unfiltered experiences from the road",
      icon: "✍️"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general'
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8F4EF] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="section-title mb-6">
                The One Behind <span className="text-[#C39064]">Milesalone</span>
              </h1>
              <p className="body-text text-gray-600 mb-6">
                I'm Shashank Gowda, a 22-year-old from Mysore, Karnataka, who believes that 
                the best stories aren't found in guidebooks—they're discovered in conversations 
                with locals at roadside tea stalls and in the quiet moments between destinations.
              </p>
              <p className="body-text text-gray-600 mb-8">
                From chess championships to college leadership, from fish farming to software testing, 
                my journey has been anything but conventional. Now, I'm trading my comfort zone 
                for 4 months on the road, seeking authentic India one village at a time.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#C39064]" />
                  <span>Currently in Mysore, Karnataka</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#C39064] to-[#3B6943] rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  SG
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#2B2B2B]">22</div>
                    <div className="text-sm text-gray-600">Years Old</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">My Journey So Far</h2>
            <p className="text-gray-600">From student to entrepreneur to wanderer</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C39064] opacity-20"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-[#C39064] font-medium text-sm mb-1">{item.year}</div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#C39064] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Achievements & Recognition</h2>
            <p className="text-gray-600">Building foundations for the journey ahead</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card p-6 text-center">
                <achievement.icon className="w-8 h-8 text-[#C39064] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Values & Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What drives me on this journey and shapes every story I tell
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card p-6">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2B2B2B] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4 text-white">Send a Signal</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Got a story to share? A question about the journey? Or maybe you know 
              a hidden gem I should visit? Drop me a line—I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="font-semibold mb-4 text-[#C39064]">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#C39064]" />
                    <span>shashank@milesalone.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#C39064]" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#C39064]" />
                    <span>Mysore, Karnataka, India</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-[#C39064]">Response Time</h4>
                <p className="text-sm text-gray-300">
                  Usually within 24-48 hours. During the journey, responses might take longer 
                  from remote areas.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-[#C39064]">Follow the Journey</h4>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#C39064] transition-colors">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-[#C39064] transition-colors">YouTube</a>
                  <a href="#" className="text-gray-400 hover:text-[#C39064] transition-colors">Twitter</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-[#3B6943] rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-200">
                    Thank you for reaching out! I'll get back to you soon. 
                    Until then, keep exploring! 🎒
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#3B3B3B] border border-gray-600 rounded-lg focus:outline-none focus:border-[#C39064] text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#3B3B3B] border border-gray-600 rounded-lg focus:outline-none focus:border-[#C39064] text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#3B3B3B] border border-gray-600 rounded-lg focus:outline-none focus:border-[#C39064] text-white"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <select
                        name="category"
                        value={contactForm.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#3B3B3B] border border-gray-600 rounded-lg focus:outline-none focus:border-[#C39064] text-white"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="travel-tip">Travel Tip</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="media">Media/Press</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#3B3B3B] border border-gray-600 rounded-lg focus:outline-none focus:border-[#C39064] text-white resize-vertical"
                      placeholder="Tell me your story, ask a question, or share a travel tip..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C39064] hover:bg-[#A67C52] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gear Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Travel Gear & Setup</h2>
            <p className="text-gray-600">The tools that make authentic storytelling possible</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🎒</div>
              <h3 className="font-semibold mb-2">Backpack</h3>
              <p className="text-gray-600 text-sm">65L hiking backpack for 4-month journey</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">📷</div>
              <h3 className="font-semibold mb-2">Camera</h3>
              <p className="text-gray-600 text-sm">DSLR + smartphone for authentic captures</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🚁</div>
              <h3 className="font-semibold mb-2">DJI Drone</h3>
              <p className="text-gray-600 text-sm">Aerial storytelling from unique perspectives</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="font-semibold mb-2">Tech Setup</h3>
              <p className="text-gray-600 text-sm">Lightweight laptop for real-time blogging</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;