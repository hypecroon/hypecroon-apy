import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Eye, Calendar, Filter, RefreshCw } from 'lucide-react';

const Charts = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const timeframes = [
    { id: 'day', name: 'Today' },
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'year', name: 'This Year' }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'genres', name: 'Genres' },
    { id: 'platforms', name: 'Platforms' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'tools', name: 'Tools' }
  ];

  const trendingTopics = [
    { rank: 1, topic: 'AI Music Production', change: 15.2, category: 'tools', views: 45600 },
    { rank: 2, topic: 'TikTok Viral Strategies', change: 12.8, category: 'marketing', views: 38900 },
    { rank: 3, topic: 'Lo-Fi Hip Hop Production', change: 8.5, category: 'genres', views: 32100 },
    { rank: 4, topic: 'Spotify Playlist Pitching', change: 7.3, category: 'platforms', views: 29800 },
    { rank: 5, topic: 'Instagram Reels for Musicians', change: 6.9, category: 'marketing', views: 27500 },
    { rank: 6, topic: 'Bedroom Pop Mixing', change: 5.4, category: 'genres', views: 24200 },
    { rank: 7, topic: 'YouTube Shorts Strategy', change: 4.8, category: 'platforms', views: 22100 },
    { rank: 8, topic: 'Vocal Processing Techniques', change: 3.2, category: 'tools', views: 19800 },
    { rank: 9, topic: 'NFT Music Marketing', change: -2.1, category: 'marketing', views: 18500 },
    { rank: 10, topic: 'Podcast Music Licensing', change: -3.5, category: 'platforms', views: 16200 }
  ];

  const platformStats = [
    { platform: 'Spotify', streams: '2.8B', growth: 12.5, color: 'bg-green-500' },
    { platform: 'Apple Music', streams: '1.9B', growth: 8.3, color: 'bg-gray-500' },
    { platform: 'YouTube Music', streams: '1.5B', growth: 15.7, color: 'bg-red-500' },
    { platform: 'TikTok', streams: '890M', growth: 28.4, color: 'bg-pink-500' },
    { platform: 'Instagram', streams: '650M', growth: 18.9, color: 'bg-purple-500' },
    { platform: 'SoundCloud', streams: '320M', growth: 3.2, color: 'bg-orange-500' }
  ];

  const genreData = [
    { genre: 'Hip Hop', percentage: 24.5, growth: 2.3 },
    { genre: 'Pop', percentage: 19.8, growth: -1.2 },
    { genre: 'Rock', percentage: 15.2, growth: -0.8 },
    { genre: 'Electronic', percentage: 12.4, growth: 4.7 },
    { genre: 'R&B', percentage: 8.9, growth: 1.9 },
    { genre: 'Country', percentage: 7.3, growth: 0.5 },
    { genre: 'Jazz', percentage: 4.2, growth: -0.3 },
    { genre: 'Classical', percentage: 3.8, growth: 0.1 },
    { genre: 'Reggae', percentage: 2.1, growth: 1.8 },
    { genre: 'Folk', percentage: 1.8, growth: 0.7 }
  ];

  const marketingChannels = [
    { channel: 'Social Media', effectiveness: 89, cost: 'Low', roi: 340 },
    { channel: 'Streaming Playlists', effectiveness: 85, cost: 'Medium', roi: 280 },
    { channel: 'Influencer Collabs', effectiveness: 78, cost: 'High', roi: 220 },
    { channel: 'Email Marketing', effectiveness: 72, cost: 'Low', roi: 450 },
    { channel: 'Paid Ads', effectiveness: 68, cost: 'High', roi: 180 },
    { channel: 'Radio', effectiveness: 45, cost: 'High', roi: 120 }
  ];

  const filteredTopics = trendingTopics.filter(topic => 
    selectedCategory === 'all' || topic.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Charts & Analytics
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-time insights, trending topics, and market data to guide your music strategy
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {timeframes.map(timeframe => (
                <option key={timeframe.id} value={timeframe.id} className="bg-gray-900">
                  {timeframe.name}
                </option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-900">
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button className="flex items-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh Data</span>
          </button>
        </div>

        {/* Trending Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2" />
            Trending Topics
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Topic</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Views</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredTopics.map((topic, index) => (
                    <tr key={topic.rank} className="hover:bg-white/5 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-white mr-2">#{topic.rank}</span>
                          {index < 3 && <span className="text-yellow-400">🔥</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-white font-medium">{topic.topic}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs capitalize">
                          {topic.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-300">
                          <Eye className="h-4 w-4 mr-1" />
                          {topic.views.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center ${topic.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {topic.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                          {Math.abs(topic.change)}%
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Platform Statistics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 mr-2" />
            Platform Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformStats.map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{platform.platform}</h3>
                  <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{platform.streams}</div>
                <div className="text-sm text-gray-300 mb-4">Monthly streams</div>
                <div className={`flex items-center ${platform.growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {platform.growth >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {platform.growth}% growth
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Genre Distribution */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Genre Distribution</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="space-y-4">
              {genreData.map((genre, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-24 text-white font-medium">{genre.genre}</div>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${(genre.percentage / 25) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-white font-semibold w-12">{genre.percentage}%</div>
                  </div>
                  <div className={`flex items-center ml-4 ${genre.growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {genre.growth >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                    {Math.abs(genre.growth)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marketing Channels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Marketing Channel Effectiveness</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{channel.channel}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Effectiveness</span>
                    <span className="text-white font-semibold">{channel.effectiveness}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost</span>
                    <span className={`font-semibold ${
                      channel.cost === 'Low' ? 'text-green-400' : 
                      channel.cost === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {channel.cost}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">ROI</span>
                    <span className="text-white font-semibold">{channel.roi}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;