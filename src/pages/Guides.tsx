import React, { useState } from 'react';
import { BookOpen, Play, Clock, Users, Star, Filter, Search } from 'lucide-react';

const Guides = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Guides', count: 45 },
    { id: 'production', name: 'Music Production', count: 12 },
    { id: 'marketing', name: 'Marketing & Promotion', count: 15 },
    { id: 'social', name: 'Social Media', count: 8 },
    { id: 'branding', name: 'Branding', count: 6 },
    { id: 'business', name: 'Music Business', count: 4 }
  ];

  const guides = [
    {
      id: 1,
      title: 'Complete Guide to Music Production in 2024',
      description: 'Master the fundamentals of music production with modern tools and techniques',
      category: 'production',
      difficulty: 'Beginner',
      duration: '45 min',
      rating: 4.9,
      views: 12500,
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      author: 'Sarah Johnson',
      tags: ['DAW', 'Mixing', 'Mastering']
    },
    {
      id: 2,
      title: 'Instagram Growth Strategies for Musicians',
      description: 'Proven tactics to grow your Instagram following and engagement organically',
      category: 'social',
      difficulty: 'Intermediate',
      duration: '30 min',
      rating: 4.8,
      views: 8900,
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      author: 'Mike Chen',
      tags: ['Instagram', 'Growth', 'Engagement']
    },
    {
      id: 3,
      title: 'Building Your Music Brand Identity',
      description: 'Create a cohesive brand that resonates with your target audience',
      category: 'branding',
      difficulty: 'Beginner',
      duration: '25 min',
      rating: 4.7,
      views: 6700,
      thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop',
      author: 'Emily Rodriguez',
      tags: ['Branding', 'Identity', 'Visual Design']
    },
    {
      id: 4,
      title: 'Spotify Playlist Pitching Masterclass',
      description: 'Learn how to successfully pitch your music to Spotify playlists',
      category: 'marketing',
      difficulty: 'Advanced',
      duration: '60 min',
      rating: 4.9,
      views: 15200,
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      author: 'David Park',
      tags: ['Spotify', 'Playlists', 'Pitching']
    },
    {
      id: 5,
      title: 'TikTok Music Marketing in 2024',
      description: 'Leverage TikTok to promote your music and reach new audiences',
      category: 'social',
      difficulty: 'Intermediate',
      duration: '35 min',
      rating: 4.6,
      views: 9800,
      thumbnail: 'https://images.unsplash.com/photo-1611162616475-46fdbd4fde83?w=400&h=300&fit=crop',
      author: 'Lisa Wang',
      tags: ['TikTok', 'Viral', 'Content']
    },
    {
      id: 6,
      title: 'Music Licensing and Copyright Basics',
      description: 'Understand the legal aspects of music creation and distribution',
      category: 'business',
      difficulty: 'Intermediate',
      duration: '40 min',
      rating: 4.8,
      views: 5400,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      author: 'Robert Kim',
      tags: ['Copyright', 'Licensing', 'Legal']
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Music Creation & Promotion
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Guides
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive tutorials to help you create better content and promote your music effectively
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search guides..."
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

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map(guide => (
            <div key={guide.id} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={guide.thumbnail}
                  alt={guide.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-white" />
                    <span className="text-xs text-white">{guide.duration}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-lg rounded-full p-4 hover:bg-white/30 transition-colors duration-200">
                    <Play className="h-8 w-8 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{guide.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{guide.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{guide.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{guide.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{guide.author}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.tags.map(tag => (
                    <span key={tag} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Start Guide</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No guides found</h3>
            <p className="text-gray-300">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guides;