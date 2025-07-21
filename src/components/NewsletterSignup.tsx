import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'sidebar';
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 ${className}`}>
        <div className="flex items-center space-x-2 mb-2">
          <Mail className="w-4 h-4 text-[#C39064]" />
          <h4 className="font-medium text-sm">Walk With Me</h4>
        </div>
        <p className="text-xs text-gray-600 mb-3">
          Weekly stories from the road
        </p>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#3B6943]"
            disabled={isLoading || isSubscribed}
          />
          <button
            type="submit"
            disabled={isLoading || isSubscribed || !email}
            className="px-3 py-2 bg-[#3B6943] text-white rounded text-sm hover:bg-[#2D5235] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="loading-spinner w-3 h-3"></div>
            ) : isSubscribed ? (
              '✓'
            ) : (
              <Send className="w-3 h-3" />
            )}
          </button>
        </form>
        {isSubscribed && (
          <p className="text-xs text-[#3B6943] mt-2">Welcome aboard! 🎒</p>
        )}
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-[#F8F4EF] rounded-lg p-6 ${className}`}>
        <h3 className="font-semibold mb-2 flex items-center">
          <Mail className="w-5 h-5 mr-2 text-[#C39064]" />
          Join the Journey
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Get weekly letters from the road. Real stories, honest reflections, and hidden gems.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#3B6943]"
            disabled={isLoading || isSubscribed}
          />
          <button
            type="submit"
            disabled={isLoading || isSubscribed || !email}
            className="w-full btn-primary text-sm"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="loading-spinner mr-2"></div>
                Subscribing...
              </div>
            ) : isSubscribed ? (
              '✓ Welcome aboard!'
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2">
          No spam. No fluff. Just the road. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Mail className="w-8 h-8 text-[#C39064] mr-3" />
          <h3 className="text-2xl font-semibold">Walk With Me</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Join 500+ fellow wanderers receiving weekly letters from the road. 
          Real stories, honest reflections, and hidden gems you won't find anywhere else.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="📬 Your email address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3B6943] text-center sm:text-left"
            disabled={isLoading || isSubscribed}
          />
          <button
            type="submit"
            disabled={isLoading || isSubscribed || !email}
            className="btn-primary px-6 py-3 text-base"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="loading-spinner mr-2"></div>
                Subscribing...
              </div>
            ) : isSubscribed ? (
              '✓ Welcome aboard!'
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        {isSubscribed && (
          <p className="text-[#3B6943] mt-4 font-medium">
            Welcome to the journey! Check your inbox for a welcome letter 🎒
          </p>
        )}
        <p className="text-sm text-gray-500 mt-4">
          No spam. No fluff. Just the road. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;