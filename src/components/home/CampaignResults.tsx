import React from 'react';
import { TrendingUp, Eye, Users, DollarSign } from 'lucide-react';
import RotatingVinyl from '../animations/RotatingVinyl';
import MusicNote3D from '../animations/MusicNote3D';

const CampaignResults = () => {
  const stats = [
    {
      icon: Eye,
      label: 'Total Views Generated',
      value: '150M+',
      change: '+340%',
      color: 'text-red-400',
      bgColor: 'bg-gray-900'
    },
    {
      icon: Users,
      label: 'New Followers Gained',
      value: '2.3M+',
      change: '+285%',
      color: 'text-blue-400',
      bgColor: 'bg-gray-900'
    },
    {
      icon: TrendingUp,
      label: 'Engagement Rate Increase',
      value: '450%',
      change: '+180%',
      color: 'text-green-400',
      bgColor: 'bg-gray-900'
    },
    {
      icon: DollarSign,
      label: 'Revenue Generated',
      value: '$12M+',
      change: '+520%',
      color: 'text-purple-400',
      bgColor: 'bg-gray-900'
    }
  ];

  const campaigns = [
    {
      title: 'Music Artist Breakthrough',
      platform: 'YouTube + Spotify',
      result: '2.4M views, 890K streams',
      duration: '3 months',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    },
    {
      title: 'Brand Awareness Campaign',
      platform: 'Instagram + Publications',
      result: '1.2M reach, 150K followers',
      duration: '6 months',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    },
    {
      title: 'Product Launch Success',
      platform: 'Multi-Platform',
      result: '$2.5M revenue, 500% ROI',
      duration: '4 months',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-20 left-10 opacity-20">
        <RotatingVinyl size="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <MusicNote3D className="scale-150" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Proven Campaign Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our data-driven approach consistently delivers exceptional results across all platforms.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-xl p-6 text-center border border-gray-800 hover:border-pink-500/50 transition-all duration-300 hover:animate-bounce-3d group`}>
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-lg mb-4 border border-gray-700 group-hover:border-pink-500/50 transition-colors duration-300`}>
                <stat.icon className={`h-6 w-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-pink-300 transition-colors duration-300">{stat.value}</div>
              <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
              <div className={`text-sm font-semibold ${stat.color}`}>{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Campaign Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 border border-gray-800 hover:border-pink-500/50 group">
              <div className="relative overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm border border-gray-700">
                  {campaign.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">{campaign.title}</h3>
                <p className="text-gray-400 mb-3">{campaign.platform}</p>
                <div className="text-lg font-bold text-pink-300">{campaign.result}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Ready to see similar results for your brand?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-pink-500 text-black px-8 py-4 rounded-lg hover:bg-pink-400 transition-all duration-200 font-semibold animate-pulse-glow"
          >
            Start Your Campaign
            <TrendingUp className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampaignResults;