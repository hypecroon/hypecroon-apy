import React, { useState } from 'react';
import { Wrench, Calculator, Zap, Music, DollarSign, Clock, Hash, Palette, Search, Filter, Calendar } from 'lucide-react';

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Tools', count: 18 },
    { id: 'calculators', name: 'Calculators', count: 6 },
    { id: 'generators', name: 'Generators', count: 5 },
    { id: 'analyzers', name: 'Analyzers', count: 4 },
    { id: 'planners', name: 'Planners', count: 3 }
  ];

  const tools = [
    {
      id: 1,
      name: 'Royalty Calculator',
      description: 'Calculate your streaming royalties across all major platforms',
      category: 'calculators',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      features: ['Spotify', 'Apple Music', 'YouTube', 'Tidal'],
      popular: true
    },
    {
      id: 2,
      name: 'BPM Analyzer',
      description: 'Analyze the tempo of your tracks and find compatible songs',
      category: 'analyzers',
      icon: Music,
      color: 'from-blue-500 to-cyan-600',
      features: ['BPM Detection', 'Key Analysis', 'Tempo Matching'],
      popular: true
    },
    {
      id: 3,
      name: 'Release Schedule Planner',
      description: 'Plan your music releases for maximum impact',
      category: 'planners',
      icon: Clock,
      color: 'from-purple-500 to-violet-600',
      features: ['Timeline Planning', 'Platform Scheduling', 'Reminder System'],
      popular: false
    },
    {
      id: 4,
      name: 'Hashtag Generator',
      description: 'Generate trending hashtags for your music posts',
      category: 'generators',
      icon: Hash,
      color: 'from-pink-500 to-rose-600',
      features: ['Trending Tags', 'Genre-Specific', 'Engagement Optimization'],
      popular: true
    },
    {
      id: 5,
      name: 'Color Palette Generator',
      description: 'Create cohesive color schemes for your brand',
      category: 'generators',
      icon: Palette,
      color: 'from-orange-500 to-red-600',
      features: ['Brand Colors', 'Mood-Based', 'Export Options'],
      popular: false
    },
    {
      id: 6,
      name: 'Engagement Rate Calculator',
      description: 'Calculate and track your social media engagement',
      category: 'calculators',
      icon: Calculator,
      color: 'from-teal-500 to-cyan-600',
      features: ['Instagram', 'TikTok', 'YouTube', 'Twitter'],
      popular: false
    },
    {
      id: 7,
      name: 'Song Title Generator',
      description: 'Generate creative song titles based on your genre and mood',
      category: 'generators',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      features: ['Genre-Based', 'Mood Analysis', 'Trending Words'],
      popular: false
    },
    {
      id: 8,
      name: 'Streaming Goal Calculator',
      description: 'Set and track your streaming targets across platforms',
      category: 'calculators',
      icon: Music,
      color: 'from-indigo-500 to-purple-600',
      features: ['Goal Setting', 'Progress Tracking', 'Platform Comparison'],
      popular: false
    },
    {
      id: 9,
      name: 'Content Calendar Generator',
      description: 'Generate a content calendar for your music promotion',
      category: 'generators',
      icon: Calendar,
      color: 'from-emerald-500 to-teal-600',
      features: ['Monthly Planning', 'Platform Integration', 'Content Ideas'],
      popular: false
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularTools = tools.filter(tool => tool.popular);

  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [calculatorInputs, setCalculatorInputs] = useState({
    streams: '',
    platform: 'spotify',
    followers: '',
    likes: '',
    comments: '',
    shares: ''
  });

  const calculateRoyalties = () => {
    const streams = parseInt(calculatorInputs.streams) || 0;
    const rates = {
      spotify: 0.003,
      apple: 0.007,
      youtube: 0.001,
      tidal: 0.012
    };
    const rate = rates[calculatorInputs.platform as keyof typeof rates] || 0.003;
    return (streams * rate).toFixed(2);
  };

  const calculateEngagement = () => {
    const followers = parseInt(calculatorInputs.followers) || 0;
    const likes = parseInt(calculatorInputs.likes) || 0;
    const comments = parseInt(calculatorInputs.comments) || 0;
    const shares = parseInt(calculatorInputs.shares) || 0;
    
    if (followers === 0) return '0.00';
    
    const totalEngagement = likes + comments + shares;
    const engagementRate = (totalEngagement / followers) * 100;
    return engagementRate.toFixed(2);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Tools
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Calculators, generators, and utilities to streamline your music career
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-900">
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Popular Tools */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="h-6 w-6 mr-2 text-yellow-400" />
              Popular Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTools.map(tool => (
                <div key={tool.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className={`bg-gradient-to-r ${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.features.map(feature => (
                      <span key={feature} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setActiveCalculator(tool.id.toString())}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Wrench className="h-4 w-4" />
                    <span>Use Tool</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <div key={tool.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-r ${tool.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                {tool.popular && (
                  <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.map(feature => (
                  <span key={feature} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                    {feature}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setActiveCalculator(tool.id.toString())}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Wrench className="h-4 w-4" />
                <span>Use Tool</span>
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Calculator Modals */}
        {activeCalculator === '1' && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-md w-full">
              <h3 className="text-2xl font-bold text-white mb-4">Royalty Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Number of Streams</label>
                  <input
                    type="number"
                    value={calculatorInputs.streams}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, streams: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter number of streams"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Platform</label>
                  <select
                    value={calculatorInputs.platform}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, platform: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="spotify" className="bg-gray-900">Spotify</option>
                    <option value="apple" className="bg-gray-900">Apple Music</option>
                    <option value="youtube" className="bg-gray-900">YouTube Music</option>
                    <option value="tidal" className="bg-gray-900">Tidal</option>
                  </select>
                </div>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="text-green-300 text-sm mb-1">Estimated Royalties</div>
                  <div className="text-2xl font-bold text-white">${calculateRoyalties()}</div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setActiveCalculator(null)}
                    className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                    Save Result
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeCalculator === '6' && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-md w-full">
              <h3 className="text-2xl font-bold text-white mb-4">Engagement Rate Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Followers</label>
                  <input
                    type="number"
                    value={calculatorInputs.followers}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, followers: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter follower count"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Likes</label>
                  <input
                    type="number"
                    value={calculatorInputs.likes}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, likes: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Average likes per post"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Comments</label>
                  <input
                    type="number"
                    value={calculatorInputs.comments}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, comments: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Average comments per post"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Shares</label>
                  <input
                    type="number"
                    value={calculatorInputs.shares}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, shares: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Average shares per post"
                  />
                </div>
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-blue-300 text-sm mb-1">Engagement Rate</div>
                  <div className="text-2xl font-bold text-white">{calculateEngagement()}%</div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setActiveCalculator(null)}
                    className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                    Save Result
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <Wrench className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No tools found</h3>
            <p className="text-gray-300">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;