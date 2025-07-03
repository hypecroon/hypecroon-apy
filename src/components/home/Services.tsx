import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Music, Headphones, Instagram, FileText, ArrowRight } from 'lucide-react';
import SoundWaves from '../animations/SoundWaves';
import PulsatingWaveform from '../animations/PulsatingWaveform';

const Services = () => {
  const services = [
    {
      icon: Youtube,
      title: 'YouTube Ads',
      description: 'Drive massive views and subscriber growth with targeted YouTube advertising campaigns.',
      link: '/services/youtube-ads',
      color: 'text-red-400',
      bgColor: 'bg-gray-900',
      hoverColor: 'hover:bg-gray-800',
      animation: 'hover:animate-bounce-3d'
    },
    {
      icon: Music,
      title: 'Spotify Ads',
      description: 'Amplify your music reach with strategic Spotify advertising and playlist placements.',
      link: '/services/spotify-ads',
      color: 'text-green-400',
      bgColor: 'bg-gray-900',
      hoverColor: 'hover:bg-gray-800',
      animation: 'hover:animate-pulse'
    },
    {
      icon: Headphones,
      title: 'Apple Music Ads',
      description: 'Maximize your presence on Apple Music with targeted promotional campaigns.',
      link: '/services/apple-music-ads',
      color: 'text-gray-300',
      bgColor: 'bg-gray-900',
      hoverColor: 'hover:bg-gray-800',
      animation: 'hover:animate-bounce-3d'
    },
    {
      icon: Instagram,
      title: 'Instagram Growth',
      description: 'Grow your Instagram following organically with proven engagement strategies.',
      link: '/services/instagram-growth',
      color: 'text-pink-400',
      bgColor: 'bg-gray-900',
      hoverColor: 'hover:bg-gray-800',
      animation: 'hover:animate-pulse'
    },
    {
      icon: Instagram,
      title: 'Instagram Featuring',
      description: 'Get featured on major Instagram accounts to boost your brand visibility.',
      link: '/services/instagram-featuring',
      color: 'text-purple-400',
      bgColor: 'bg-gray-900',
      hoverColor: 'hover:bg-gray-800',
      animation: 'hover:animate-bounce-3d'
    },
    {
      icon: FileText,
      title: 'Digital Publications',
      description: 'Create compelling digital content and publications that engage your audience.',
      link: '/services/digital-publications',
      color: 'text-blue-400',
      bgColor: 'bg-gray-900',
      hoverColor: 'hover:bg-gray-800',
      animation: 'hover:animate-pulse'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-30">
        <SoundWaves />
      </div>
      <div className="absolute bottom-10 right-10 opacity-30">
        <PulsatingWaveform />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions across all major platforms to maximize your reach and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.hoverColor} ${service.animation} p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 group cursor-pointer border border-gray-800 hover:border-pink-500/50`}
            >
              <Link to={service.link} className="block">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gray-800 border border-gray-700 group-hover:border-pink-500/50 transition-colors duration-300">
                    <service.icon className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-medium text-gray-300 group-hover:text-pink-300 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;