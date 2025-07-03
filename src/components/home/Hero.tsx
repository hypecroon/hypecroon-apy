import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, Users } from 'lucide-react';
import FloatingMusicElements from '../animations/FloatingMusicElements';
import MusicNote3D from '../animations/MusicNote3D';
import RotatingVinyl from '../animations/RotatingVinyl';

const Hero = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      <FloatingMusicElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <MusicNote3D />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Amplify Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500"> Digital </span>
                  Presence
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                We specialize in YouTube ads, Spotify promotion, Apple Music campaigns, and Instagram growth. 
                Let us turn your content into revenue-generating assets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-pink-500 text-black px-8 py-4 rounded-lg hover:bg-pink-400 transition-all duration-200 font-semibold text-lg group animate-pulse-glow"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-200 font-semibold text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                  <TrendingUp className="h-6 w-6 text-pink-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">500%</div>
                  <div className="text-sm text-gray-400">Average ROI</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                  <Users className="h-6 w-6 text-pink-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50M+</div>
                  <div className="text-sm text-gray-400">People Reached</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-400">Campaign Performance</div>
                  <div className="text-pink-300 text-sm font-semibold">+127% Growth</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">YouTube Views</span>
                    <span className="font-semibold text-white">2.4M</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Spotify Streams</span>
                    <span className="font-semibold text-white">890K</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Instagram Reach</span>
                    <span className="font-semibold text-white">1.2M</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-pink-400 text-black p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Support</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8">
              <RotatingVinyl size="w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;