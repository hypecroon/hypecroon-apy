import React, { useState } from 'react';
import { User, Music, BarChart3, Trophy, Settings, Download, BookOpen, Wrench, Star, Calendar, Edit, Save, X } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    username: '@alexjohnsonmusic',
    bio: 'Indie rock musician and producer from Los Angeles. Passionate about creating authentic music that connects with people.',
    genre: 'Indie Rock',
    location: 'Los Angeles, CA',
    website: 'alexjohnsonmusic.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  });

  const stats = [
    { label: 'Guides Completed', value: 24, icon: BookOpen, color: 'text-blue-400' },
    { label: 'Tools Used', value: 18, icon: Wrench, color: 'text-green-400' },
    { label: 'Ebooks Downloaded', value: 12, icon: Download, color: 'text-purple-400' },
    { label: 'Community Posts', value: 8, icon: User, color: 'text-pink-400' }
  ];

  const achievements = [
    { title: 'First Steps', description: 'Completed your first guide', icon: '🎯', unlocked: true },
    { title: 'Tool Master', description: 'Used 10 different tools', icon: '🔧', unlocked: true },
    { title: 'Knowledge Seeker', description: 'Downloaded 5 ebooks', icon: '📚', unlocked: true },
    { title: 'Community Member', description: 'Made your first post', icon: '👥', unlocked: true },
    { title: 'Rising Star', description: 'Reached 1000 streams', icon: '⭐', unlocked: false },
    { title: 'Collaborator', description: 'Completed a collaboration', icon: '🤝', unlocked: false }
  ];

  const recentActivity = [
    { type: 'guide', title: 'Completed "Instagram Growth Strategies"', time: '2 hours ago' },
    { type: 'tool', title: 'Used Royalty Calculator', time: '1 day ago' },
    { type: 'ebook', title: 'Downloaded "Music Marketing Guide"', time: '3 days ago' },
    { type: 'community', title: 'Posted in Community Discussions', time: '1 week ago' }
  ];

  const savedResources = [
    { type: 'guide', title: 'TikTok Music Marketing in 2024', progress: 75 },
    { type: 'ebook', title: 'The Complete Music Business Handbook', downloaded: true },
    { type: 'tool', title: 'BPM Analyzer', lastUsed: '2 days ago' },
    { type: 'template', title: 'Social Media Post Templates', downloaded: true }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpen className="h-4 w-4" />;
      case 'tool': return <Wrench className="h-4 w-4" />;
      case 'ebook': return <Download className="h-4 w-4" />;
      case 'community': return <User className="h-4 w-4" />;
      default: return <Music className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full border-4 border-purple-500"
              />
              <button className="absolute bottom-0 right-0 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors duration-200">
                <Edit className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="text-2xl font-bold bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    value={profile.username}
                    onChange={(e) => setProfile({...profile, username: e.target.value})}
                    className="text-purple-400 bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={3}
                  />
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={profile.genre}
                      onChange={(e) => setProfile({...profile, genre: e.target.value})}
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Genre"
                    />
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Location"
                    />
                  </div>
                  <input
                    type="text"
                    value={profile.website}
                    onChange={(e) => setProfile({...profile, website: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Website"
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{profile.name}</h1>
                  <p className="text-purple-400 mb-4">{profile.username}</p>
                  <p className="text-gray-300 mb-4 max-w-2xl">{profile.bio}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Music className="h-4 w-4 mr-1" />
                      {profile.genre}
                    </span>
                    <span>{profile.location}</span>
                    <a href={`https://${profile.website}`} className="text-purple-400 hover:text-purple-300">
                      {profile.website}
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveProfile}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Save className="h-4 w-4" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <X className="h-4 w-4" />
                    <span>Cancel</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'overview', name: 'Overview', icon: BarChart3 },
            { id: 'achievements', name: 'Achievements', icon: Trophy },
            { id: 'activity', name: 'Activity', icon: Calendar },
            { id: 'saved', name: 'Saved', icon: Star },
            { id: 'settings', name: 'Settings', icon: Settings }
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

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="text-purple-400">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-white">{activity.title}</p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Progress Overview</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Learning Progress</span>
                    <span className="text-white font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Tools Mastery</span>
                    <span className="text-white font-semibold">60%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Community Engagement</span>
                    <span className="text-white font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 ${
                achievement.unlocked ? 'opacity-100' : 'opacity-50'
              }`}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    achievement.unlocked 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {achievement.unlocked ? 'Unlocked' : 'Locked'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Activity History</h2>
            <div className="space-y-4">
              {recentActivity.concat(recentActivity).map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                  <div className="text-purple-400">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.title}</p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                  <div className="text-gray-400">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedResources.map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs capitalize">
                    {resource.type}
                  </span>
                </div>
                {resource.progress && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Progress</span>
                      <span className="text-white font-semibold">{resource.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${resource.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                {resource.downloaded && (
                  <div className="text-green-400 text-sm mb-4">✓ Downloaded</div>
                )}
                {resource.lastUsed && (
                  <div className="text-gray-400 text-sm mb-4">Last used: {resource.lastUsed}</div>
                )}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  Continue
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Notifications</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-white">New guides and resources</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-white">Community activity</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-white">Marketing updates</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Privacy Settings</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-white">Show profile to other users</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-white">Allow collaboration requests</span>
                    </label>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;