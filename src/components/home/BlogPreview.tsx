import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogPreview = () => {
  const posts = [
    {
      title: '10 YouTube Ad Strategies That Actually Work in 2025',
      excerpt: 'Discover the latest YouTube advertising techniques that are driving real results for creators and brands.',
      author: 'Sarah Johnson',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      category: 'YouTube Marketing'
    },
    {
      title: 'Spotify Algorithm Secrets: How to Get Your Music Discovered',
      excerpt: 'Learn the insider tips for getting your tracks noticed by Spotify\'s recommendation algorithm.',
      author: 'Mike Chen',
      date: 'Jan 12, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      category: 'Music Marketing'
    },
    {
      title: 'Instagram Growth Hacks: From 0 to 100K Followers',
      excerpt: 'The proven strategies we use to grow Instagram accounts organically and build engaged communities.',
      author: 'Alex Rivera',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      category: 'Social Media'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest digital marketing trends and strategies.
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center text-pink-300 hover:text-pink-200 font-medium"
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-800">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center text-pink-300 hover:text-pink-200 font-medium"
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;