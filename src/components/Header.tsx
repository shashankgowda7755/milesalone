import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md h-16' 
            : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[#3B6943] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#2B2B2B] group-hover:text-[#3B6943] transition-colors">
                Milesalone
              </h1>
              <p className="text-xs text-[#6B7280] -mt-1">Raw Roads, Real Discovery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
            >
              About
            </Link>
            <Link 
              to="/journey" 
              className={`nav-link ${isActive('/journey') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
            >
              Journey
            </Link>
            <Link 
              to="/letters" 
              className={`nav-link ${isActive('/letters') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
            >
              Letters
            </Link>
            <Link 
              to="/gallery" 
              className={`nav-link ${isActive('/gallery') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
            >
              Gallery
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-[#F8F4EF] transition-colors">
              <Search className="w-5 h-5 text-[#6B7280]" />
            </button>
            <Link 
              to="/newsletter"
              className="btn-primary text-sm px-4 py-2"
            >
              Join Newsletter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#2B2B2B]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2B2B2B]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#E5E7EB]">
            <nav className="px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className={`block py-2 ${isActive('/') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block py-2 ${isActive('/about') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/journey" 
                className={`block py-2 ${isActive('/journey') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Journey
              </Link>
              <Link 
                to="/letters" 
                className={`block py-2 ${isActive('/letters') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Letters
              </Link>
              <Link 
                to="/gallery" 
                className={`block py-2 ${isActive('/gallery') ? 'text-[#3B6943]' : 'text-[#2B2B2B]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <div className="pt-4 border-t border-[#E5E7EB]">
                <Link 
                  to="/newsletter"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Newsletter
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] z-40">
        <nav className="flex items-center justify-around py-2">
          <Link to="/" className={`p-3 ${isActive('/') ? 'text-[#3B6943]' : 'text-[#6B7280]'}`}>
            <div className="w-6 h-6 mx-auto mb-1">🏠</div>
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/journey" className={`p-3 ${isActive('/journey') ? 'text-[#3B6943]' : 'text-[#6B7280]'}`}>
            <div className="w-6 h-6 mx-auto mb-1">🧭</div>
            <span className="text-xs">Journey</span>
          </Link>
          <Link to="/letters" className={`p-3 ${isActive('/letters') ? 'text-[#3B6943]' : 'text-[#6B7280]'}`}>
            <div className="w-6 h-6 mx-auto mb-1">📝</div>
            <span className="text-xs">Letters</span>
          </Link>
          <Link to="/gallery" className={`p-3 ${isActive('/gallery') ? 'text-[#3B6943]' : 'text-[#6B7280]'}`}>
            <div className="w-6 h-6 mx-auto mb-1">📷</div>
            <span className="text-xs">Gallery</span>
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .nav-link {
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #3B6943;
        }
        
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #3B6943;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover:after {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Header;