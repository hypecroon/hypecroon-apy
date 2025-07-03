import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Copy of Hypecroon logo.png" 
                alt="Hypecroon" 
                className="h-16 w-16"
              />
              <span className="text-2xl font-bold">Hypecroon</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We're a digital marketing agency specializing in YouTube, Spotify, Apple Music ads, and Instagram growth. 
              Let us amplify your brand's digital presence.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-pink-300" />
                <span className="text-gray-400">Hypecroon@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-pink-300" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-pink-300" />
                <span className="text-gray-400">Los Angeles, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/youtube-ads" className="text-gray-400 hover:text-white transition-colors duration-200">YouTube Ads</Link></li>
              <li><Link to="/services/spotify-ads" className="text-gray-400 hover:text-white transition-colors duration-200">Spotify Ads</Link></li>
              <li><Link to="/services/apple-music-ads" className="text-gray-400 hover:text-white transition-colors duration-200">Apple Music Ads</Link></li>
              <li><Link to="/services/instagram-growth" className="text-gray-400 hover:text-white transition-colors duration-200">Instagram Growth</Link></li>
              <li><Link to="/services/instagram-featuring" className="text-gray-400 hover:text-white transition-colors duration-200">Instagram Featuring</Link></li>
              <li><Link to="/services/digital-publications" className="text-gray-400 hover:text-white transition-colors duration-200">Digital Publications</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/submit-music" className="text-gray-400 hover:text-white transition-colors duration-200">Submit Music</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Hypecroon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;