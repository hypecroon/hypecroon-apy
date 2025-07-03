import React, { useState } from 'react';
import { Calendar, User, Clock, Search, Music, Play, ExternalLink } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    {
      title: '10 YouTube Ad Strategies That Actually Work in 2025',
      excerpt: 'Discover the latest YouTube advertising techniques that are driving real results for creators and brands. From targeting optimization to creative best practices.',
      author: 'Sarah Johnson',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
      category: 'YouTube Marketing',
      featured: true,
      type: 'article'
    },
    {
      title: 'Spotify Algorithm Secrets: How to Get Your Music Discovered',
      excerpt: 'Learn the insider tips for getting your tracks noticed by Spotify\'s recommendation algorithm and increase your monthly listeners.',
      author: 'Mike Chen',
      date: 'Jan 12, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
      category: 'Music Marketing',
      featured: false,
      type: 'article'
    },
    // Featured Music Submissions
    {
      title: 'Rising Star: Luna Martinez - "Midnight Dreams"',
      excerpt: 'Discover this incredible indie-pop track that\'s been making waves across streaming platforms. Luna\'s ethereal vocals combined with dreamy production create magic.',
      author: 'Hypecroon Team',
      date: 'Jan 14, 2025',
      readTime: '3 min listen',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
      category: 'Featured Music',
      featured: false,
      type: 'music',
      artist: 'Luna Martinez',
      trackTitle: 'Midnight Dreams',
      genre: 'Indie Pop',
      spotifyLink: '#',
      instagramLink: '#',
      streams: '125K'
    },
    {
      title: 'Instagram Growth Hacks: From 0 to 100K Followers',
      excerpt: 'The proven strategies we use to grow Instagram accounts organically and build engaged communities that convert.',
      author: 'Alex Rivera',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
      category: 'Social Media',
      featured: false,
      type: 'article'
    },
    {
      title: 'Breakthrough Artist: The Midnight Collective - "Neon Nights"',
      excerpt: 'This electronic duo from Los Angeles brings fresh energy to the synthwave scene. Their latest track "Neon Nights" is a perfect blend of retro and modern.',
      author: 'Hypecroon Team',
      date: 'Jan 11, 2025',
      readTime: '4 min listen',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
      category: 'Featured Music',
      featured: false,
      type: 'music',
      artist: 'The Midnight Collective',
      trackTitle: 'Neon Nights',
      genre: 'Synthwave',
      spotifyLink: '#',
      instagramLink: '#',
      streams: '89K'
    },
    {
      title: 'Apple Music vs Spotify: Which Platform Should You Focus On?',
      excerpt: 'A comprehensive comparison of Apple Music and Spotify for artists looking to maximize their streaming revenue and reach.',
      author: 'David Rodriguez',
      date: 'Jan 8, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1699165/pexels-photo-1699165.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
      category: 'Music Marketing',
      featured: false,
      type: 'article'
    },
    {
      title: 'New Talent: Marcus Johnson - "City Lights"',
      excerpt: 'This R&B sensation from Atlanta delivers smooth vocals over a contemporary beat. "City Lights" showcases his incredible range and songwriting ability.',
      author: 'Hypecroon Team',
      date: 'Jan 9, 2025',
      readTime: '3 min listen',
      image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
      category: 'Featured Music',
      featured: false,
      type: 'music',
      artist: 'Marcus Johnson',
      trackTitle: 'City Lights',
      genre: 'R&B',
      spotifyLink: '#',
      instagramLink: '#',
      streams: '67K'
    }
  ];

  const categories = ['All', 'YouTube Marketing', 'Music Marketing', 'Social Media', 'Digital Marketing', 'Influencer Marketing', 'Featured Music'];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Digital Marketing Insights & Featured Music
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest digital marketing trends and discover amazing new music from talented artists worldwide.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles and music..."
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-pink-500 text-black'
                      : 'bg-gray-900 border border-gray-700 hover:bg-gray-800 hover:border-pink-500 text-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.filter(post => post.featured).map((post, index) => (
          <div key={index} className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center bg-pink-500 text-black px-6 py-3 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold w-fit"
                >
                  Read Full Article
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <article key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-800">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-90 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
                {post.type === 'music' && (
                  <div className="absolute top-4 right-4 bg-pink-500 text-black p-2 rounded-full">
                    <Music className="h-4 w-4" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {post.type === 'music' && (
                  <div className="mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-sm font-semibold text-white">{post.artist}</div>
                        <div className="text-xs text-gray-400">{post.trackTitle}</div>
                      </div>
                      <div className="text-xs text-pink-300 font-medium">{post.streams} streams</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{post.genre}</span>
                      <div className="flex space-x-2 ml-auto">
                        <a href={post.spotifyLink} className="text-green-400 hover:text-green-300">
                          <Play className="h-4 w-4" />
                        </a>
                        <a href={post.instagramLink} className="text-pink-400 hover:text-pink-300">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <a
                  href="#"
                  className="text-pink-300 hover:text-pink-200 font-medium text-sm"
                >
                  {post.type === 'music' ? 'Listen & Learn More →' : 'Read Article →'}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium border border-gray-700">
            Load More Content
          </button>
        </div>

        {/* Call to Action for Artists */}
        <div className="mt-16 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-8 border border-pink-500/20">
          <div className="text-center">
            <Music className="h-12 w-12 text-pink-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to be Featured?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Submit your music for a chance to be featured on our platform and reach millions of potential fans.
            </p>
            <a
              href="/submit-music"
              className="inline-flex items-center bg-pink-500 text-black px-8 py-4 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold"
            >
              Submit Your Music
              <Music className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;