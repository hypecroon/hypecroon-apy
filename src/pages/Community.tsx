import React, { useState } from 'react';
import { Users, MessageCircle, Heart, Share2, Music, Trophy, Calendar, Search, Filter, Plus } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchTerm, setSearchTerm] = useState('');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for TikTok music promotion in 2024',
      author: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c2c?w=40&h=40&fit=crop&crop=face',
      category: 'Marketing',
      replies: 24,
      likes: 89,
      timestamp: '2 hours ago',
      content: 'I\'ve been experimenting with different TikTok strategies and wanted to share what\'s been working for me...',
      tags: ['TikTok', 'Marketing', 'Social Media']
    },
    {
      id: 2,
      title: 'Looking for a vocalist for my indie rock project',
      author: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      category: 'Collaboration',
      replies: 12,
      likes: 45,
      timestamp: '4 hours ago',
      content: 'I\'m working on an indie rock album and need a vocalist with a unique style. Here\'s a demo...',
      tags: ['Collaboration', 'Indie Rock', 'Vocalist']
    },
    {
      id: 3,
      title: 'Home studio setup on a budget - my complete guide',
      author: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      category: 'Production',
      replies: 67,
      likes: 234,
      timestamp: '6 hours ago',
      content: 'After years of building my home studio, I want to share how you can get started with just $500...',
      tags: ['Home Studio', 'Budget', 'Production']
    }
  ];

  const collaborations = [
    {
      id: 1,
      title: 'Electronic Producer seeking Vocalist',
      author: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      genre: 'Electronic',
      looking_for: 'Vocalist',
      location: 'Los Angeles, CA',
      description: 'Working on a melodic dubstep track and need a powerful vocalist...',
      tags: ['Electronic', 'Dubstep', 'Vocalist']
    },
    {
      id: 2,
      title: 'Indie Band looking for Drummer',
      author: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      genre: 'Indie Rock',
      looking_for: 'Drummer',
      location: 'New York, NY',
      description: 'We\'re an indie rock band with a unique sound, looking for a creative drummer...',
      tags: ['Indie Rock', 'Drummer', 'Band']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Virtual Music Production Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      attendees: 156,
      description: 'Learn advanced production techniques from industry professionals',
      type: 'Workshop',
      host: 'MusicHub Team'
    },
    {
      id: 2,
      title: 'Indie Artist Showcase',
      date: '2024-02-20',
      time: '7:00 PM EST',
      attendees: 89,
      description: 'Showcase your music to fellow artists and industry professionals',
      type: 'Showcase',
      host: 'Community'
    }
  ];

  const achievements = [
    {
      user: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c2c?w=40&h=40&fit=crop&crop=face',
      achievement: 'Reached 100K streams on Spotify',
      timestamp: '1 day ago',
      likes: 156
    },
    {
      user: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      achievement: 'Signed with independent record label',
      timestamp: '2 days ago',
      likes: 203
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Music
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Community
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow musicians, share experiences, and collaborate on projects
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'discussions', name: 'Discussions', icon: MessageCircle },
            { id: 'collaborations', name: 'Collaborations', icon: Users },
            { id: 'events', name: 'Events', icon: Calendar },
            { id: 'achievements', name: 'Achievements', icon: Trophy }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Search and Create */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search community..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Create Post</span>
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {discussions.map(discussion => (
              <div key={discussion.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-white">{discussion.title}</h3>
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                          {discussion.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{discussion.timestamp}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{discussion.content}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion.tags.map(tag => (
                        <span key={tag} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors duration-200">
                          <Heart className="h-4 w-4" />
                          <span>{discussion.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                          <MessageCircle className="h-4 w-4" />
                          <span>{discussion.replies}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors duration-200">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                      <span className="text-sm text-gray-400">by {discussion.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'collaborations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborations.map(collab => (
              <div key={collab.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={collab.avatar}
                    alt={collab.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{collab.title}</h3>
                    <p className="text-gray-400 text-sm">by {collab.author}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Genre:</span>
                    <span className="text-white">{collab.genre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Looking for:</span>
                    <span className="text-white">{collab.looking_for}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Location:</span>
                    <span className="text-white">{collab.location}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{collab.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {collab.tags.map(tag => (
                    <span key={tag} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  Contact for Collaboration
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(event => (
              <div key={event.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {event.type}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <span>Hosted by {event.host}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  Join Event
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <img
                    src={achievement.avatar}
                    alt={achievement.user}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                      <span className="text-white font-semibold">{achievement.user}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{achievement.timestamp}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{achievement.achievement}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors duration-200">
                        <Heart className="h-4 w-4" />
                        <span>{achievement.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                        <MessageCircle className="h-4 w-4" />
                        <span>Congratulate</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;