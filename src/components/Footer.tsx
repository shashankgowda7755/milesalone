import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Instagram, Youtube, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#3B6943] rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Milesalone</h3>
                <p className="text-sm text-gray-400">Raw Roads, Real Discovery</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Following the dusty trails from Kashmir to Kanyakumari, documenting authentic India 
              through the eyes of a curious soul. Join me in discovering the real stories behind 
              the roads less traveled.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C39064] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C39064] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C39064] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C39064] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C39064]">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/journey" className="text-gray-300 hover:text-white transition-colors">
                  Travel Diaries
                </Link>
              </li>
              <li>
                <Link to="/letters" className="text-gray-300 hover:text-white transition-colors">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Photo Stories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C39064]">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/newsletter" className="text-gray-300 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Send a Message
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Collaborate
                </a>
              </li>
              <li>
                <button className="text-[#C39064] hover:text-white transition-colors text-left">
                  Random Road ✨
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Current Status */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-[#3B6943]/20 border border-[#3B6943]/30 rounded-lg p-6">
            <h4 className="font-semibold mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-[#C39064]" />
              Current Journey Status
            </h4>
            <p className="text-gray-300 mb-2">
              <span className="font-medium text-[#C39064]">Currently in:</span> Planning Phase (Departure: August 2025)
            </p>
            <div className="bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-[#C39064] h-2 rounded-full w-[5%]"></div>
            </div>
            <p className="text-sm text-gray-400">0 km of 4,000+ km completed</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Milesalone by Shashank Gowda. Made with{' '}
            <Heart className="w-4 h-4 inline text-red-500" /> for fellow wanderers.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              RSS Feed
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;