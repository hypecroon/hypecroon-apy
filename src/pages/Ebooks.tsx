import React, { useState } from 'react';
import { Download, BookOpen, Star, Users, Search, Filter, FileText, Calendar } from 'lucide-react';

const Ebooks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Ebooks', count: 28 },
    { id: 'marketing', name: 'Marketing & Promotion', count: 8 },
    { id: 'production', name: 'Music Production', count: 6 },
    { id: 'business', name: 'Music Business', count: 5 },
    { id: 'branding', name: 'Branding & Identity', count: 4 },
    { id: 'social', name: 'Social Media', count: 3 },
    { id: 'legal', name: 'Legal & Copyright', count: 2 }
  ];

  const ebooks = [
    {
      id: 1,
      title: 'The Complete Guide to Music Marketing in 2024',
      description: 'A comprehensive 120-page guide covering all aspects of modern music marketing, from social media to streaming platforms.',
      category: 'marketing',
      pages: 120,
      downloads: 15420,
      rating: 4.9,
      author: 'Sarah Johnson',
      publishDate: '2024-01-15',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=400&fit=crop',
      tags: ['Marketing', 'Strategy', 'Digital', 'Streaming'],
      featured: true
    },
    {
      id: 2,
      title: 'Home Studio Setup & Production Essentials',
      description: 'Learn how to build a professional home studio and master the fundamentals of music production.',
      category: 'production',
      pages: 95,
      downloads: 12800,
      rating: 4.8,
      author: 'Mike Chen',
      publishDate: '2024-01-10',
      cover: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=400&fit=crop',
      tags: ['Production', 'Studio', 'Equipment', 'Recording'],
      featured: true
    },
    {
      id: 3,
      title: 'Building Your Music Brand: A Visual Identity Guide',
      description: 'Create a cohesive brand identity that resonates with your audience and stands out in the music industry.',
      category: 'branding',
      pages: 78,
      downloads: 9650,
      rating: 4.7,
      author: 'Emily Rodriguez',
      publishDate: '2024-01-05',
      cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=400&fit=crop',
      tags: ['Branding', 'Design', 'Identity', 'Visual'],
      featured: false
    },
    {
      id: 4,
      title: 'The Musician\'s Business Handbook',
      description: 'Navigate the business side of music with contracts, royalties, licensing, and revenue streams.',
      category: 'business',
      pages: 145,
      downloads: 8900,
      rating: 4.8,
      author: 'David Park',
      publishDate: '2023-12-20',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      tags: ['Business', 'Contracts', 'Royalties', 'Revenue'],
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Mastery for Musicians',
      description: 'Dominate Instagram, TikTok, and YouTube with proven strategies for growing your fanbase.',
      category: 'social',
      pages: 89,
      downloads: 11200,
      rating: 4.6,
      author: 'Lisa Wang',
      publishDate: '2023-12-15',
      cover: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=400&fit=crop',
      tags: ['Social Media', 'Instagram', 'TikTok', 'YouTube'],
      featured: false
    },
    {
      id: 6,
      title: 'Copyright & Licensing for Independent Artists',
      description: 'Protect your music and understand the legal landscape of the music industry.',
      category: 'legal',
      pages: 65,
      downloads: 6800,
      rating: 4.7,
      author: 'Robert Kim',
      publishDate: '2023-12-10',
      cover: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=400&fit=crop',
      tags: ['Copyright', 'Legal', 'Licensing', 'Protection'],
      featured: false
    }
  ];

  const filteredEbooks = ebooks.filter(ebook => {
    const matchesCategory = selectedCategory === 'all' || ebook.category === selectedCategory;
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredEbooks = ebooks.filter(ebook => ebook.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Free Music
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Ebooks
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download comprehensive guides and resources to accelerate your music career
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search ebooks..."
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

        {/* Featured Ebooks */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="h-6 w-6 mr-2 text-yellow-400" />
              Featured Ebooks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredEbooks.map(ebook => (
                <div key={ebook.id} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <img
                        src={ebook.cover}
                        alt={ebook.title}
                        className="w-32 h-48 object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{ebook.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{ebook.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{ebook.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span>{ebook.pages} pages</span>
                        <span>{ebook.downloads.toLocaleString()} downloads</span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download Free</span>
                      </button>
                    </div>
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

        {/* Ebooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEbooks.map(ebook => (
            <div key={ebook.id} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={ebook.cover}
                  alt={ebook.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {ebook.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                    <FileText className="h-3 w-3 text-white" />
                    <span className="text-xs text-white">{ebook.pages} pages</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{ebook.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{ebook.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{ebook.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{ebook.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>By {ebook.author}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(ebook.publishDate)}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {ebook.tags.map(tag => (
                    <span key={tag} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Free</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEbooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No ebooks found</h3>
            <p className="text-gray-300">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get New Ebooks First</h2>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter and be the first to know about new releases</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebooks;