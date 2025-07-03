import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CartIcon from './CartIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '#',
      subItems: [
        { name: 'YouTube Ads', href: '/services/youtube-ads' },
        { name: 'Spotify Ads', href: '/services/spotify-ads' },
        { name: 'Apple Music Ads', href: '/services/apple-music-ads' },
        { name: 'Instagram Growth', href: '/services/instagram-growth' },
        { name: 'Instagram Featuring', href: '/services/instagram-featuring' },
        { name: 'Digital Publications', href: '/services/digital-publications' },
      ]
    },
    { name: 'Submit Music', href: '/submit-music' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Copy of Hypecroon logo.png" 
                alt="Hypecroon" 
                className="h-16 w-16"
              />
              <span className="text-2xl font-bold text-white">Hypecroon</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <div className="relative">
                      <button className="text-gray-300 hover:text-pink-300 px-3 py-2 text-sm font-medium transition-colors duration-200">
                        {item.name}
                      </button>
                      <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-700">
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-pink-300 transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-pink-300 border-b-2 border-pink-300'
                          : 'text-gray-300 hover:text-pink-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <CartIcon />
            <Link
              to="/contact"
              className="bg-pink-500 text-black px-6 py-2 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <CartIcon />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-pink-300 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <div className="text-gray-300 px-3 py-2 text-sm font-medium">{item.name}</div>
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-6 py-2 text-sm text-gray-400 hover:text-pink-300 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-pink-300 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-pink-500 text-black px-6 py-2 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;