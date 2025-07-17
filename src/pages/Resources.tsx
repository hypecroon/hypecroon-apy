import React, { useState } from 'react';
import { Music, FileText, Users, Mail, Download, Star, Search, Filter, ExternalLink, Calendar } from 'lucide-react';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 85 },
    { id: 'templates', name: 'Templates', count: 25 },
    { id: 'samples', name: 'Sample Packs', count: 18 },
    { id: 'contacts', name: 'Industry Contacts', count: 15 },
    { id: 'contracts', name: 'Contracts & Legal', count: 12 },
    { id: 'graphics', name: 'Graphics & Assets', count: 10 },
    { id: 'presets', name: 'Presets & Plugins', count: 5 }
  ];

  const resources = [
    {
      id: 1,
      title: 'Social Media Post Templates',
      description: 'Professional templates for Instagram, Twitter, and Facebook posts',
      category: 'templates',
      type: 'Template Pack',
      downloads: 8420,
      rating: 4.8,
      size: '45 MB',
      format: 'PSD, AI, PNG',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop',
      featured: true,
      tags: ['Social Media', 'Instagram', 'Templates', 'Design']
    },
    {
      id: 2,
      title: 'Lo-Fi Hip Hop Sample Pack',
      description: 'High-quality lo-fi samples, loops, and one-shots for your productions',
      category: 'samples',
      type: 'Sample Pack',
      downloads: 12500,
      rating: 4.9,
      size: '120 MB',
      format: 'WAV, AIFF',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
      featured: true,
      tags: ['Lo-Fi', 'Hip Hop', 'Samples', 'Loops']
    },
    {
      id: 3,
      title: 'Record Label Contact Database',
      description: 'Verified contacts for 500+ record labels across all genres',
      category: 'contacts',
      type: 'Contact List',
      downloads: 3200,
      rating: 4.7,
      size: '2 MB',
      format: 'CSV, Excel',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      featured: false,
      tags: ['Record Labels', 'Contacts', 'A&R', 'Submissions']
    },
    {
      id: 4,
      title: 'Music Production Contract Templates',
      description: 'Legal contract templates for producers, featuring agreements, and collaborations',
      category: 'contracts',
      type: 'Legal Documents',
      downloads: 2800,
      rating: 4.6,
      size: '5 MB',
      format: 'PDF, DOC',
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop',
      featured: false,
      tags: ['Contracts', 'Legal', 'Producer', 'Collaboration']
    },
    {
      id: 5,
      title: 'Album Cover Design Templates',
      description: 'Professional album cover templates for all genres and styles',
      category: 'graphics',
      type: 'Design Pack',
      downloads: 6700,
      rating: 4.8,
      size: '85 MB',
      format: 'PSD, AI, PNG',
      thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=200&fit=crop',
      featured: true,
      tags: ['Album Cover', 'Design', 'Templates', 'Artwork']
    },
    {
      id: 6,
      title: 'Vintage Synthesizer Presets',
      description: 'Authentic vintage synth presets for modern DAWs',
      category: 'presets',
      type: 'Preset Pack',
      downloads: 4200,
      rating: 4.9,
      size: '15 MB',
      format: 'Various DAW formats',
      thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=200&fit=crop',
      featured: false,
      tags: ['Synthesizer', 'Presets', 'Vintage', 'DAW']
    }
  ];

  const industryContacts = [
    {
      name: 'Sarah Johnson',
      role: 'A&R Manager',
      company: 'Universal Music Group',
      genre: 'Pop, R&B',
      email: 'sarah.johnson@umg.com',
      verified: true
    },
    {
      name: 'Mike Chen',
      role: 'Music Supervisor',
      company: 'Netflix',
      genre: 'All Genres',
      email: 'mike.chen@netflix.com',
      verified: true
    },
    {
      name: 'Emily Rodriguez',
      role: 'Playlist Curator',
      company: 'Spotify',
      genre: 'Indie, Alternative',
      email: 'emily.rodriguez@spotify.com',
      verified: true
    },
    {
      name: 'David Park',
      role: 'Music Blogger',
      company: 'Pitchfork',
      genre: 'Indie, Electronic',
      email: 'david.park@pitchfork.com',
      verified: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resource
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Library
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated collection of templates, samples, contacts, and essential resources for musicians
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search resources..."
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

        {/* Featured Resources */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="h-6 w-6 mr-2 text-yellow-400" />
              Featured Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map(resource => (
                <div key={resource.id} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                        <span className="text-xs text-white">{resource.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        {resource.type}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{resource.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{resource.format}</span>
                      <span>{resource.downloads.toLocaleString()} downloads</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
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

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {resource.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-xs text-white">{resource.size}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                    {resource.type}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{resource.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{resource.format}</span>
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map(tag => (
                    <span key={tag} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Contacts Section */}
        {selectedCategory === 'all' || selectedCategory === 'contacts' ? (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2" />
              Industry Contacts
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-black/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Role</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Company</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Genre</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {industryContacts.map((contact, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors duration-200">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="text-white font-medium">{contact.name}</span>
                            {contact.verified && (
                              <span className="ml-2 bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                                Verified
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-300">{contact.role}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-300">{contact.company}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                            {contact.genre}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={`mailto:${contact.email}`}
                            className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                          >
                            <Mail className="h-4 w-4" />
                            <span>Contact</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <Music className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>
            <p className="text-gray-300">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Submit Resource CTA */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Have a Resource to Share?</h2>
            <p className="text-gray-300 mb-6">
              Submit your templates, samples, or industry contacts to help fellow musicians
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 inline-flex items-center space-x-2">
              <ExternalLink className="h-5 w-5" />
              <span>Submit Resource</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;