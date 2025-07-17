import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BarChart3, Download, Wrench, Music, Users, TrendingUp, Award, Play, Headphones } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Guides',
      description: 'Step-by-step tutorials for content creation, music production, and promotion strategies',
      link: '/guides',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Industry Charts',
      description: 'Real-time analytics, trending topics, and market insights to guide your strategy',
      link: '/charts',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Download,
      title: 'Free Ebooks',
      description: 'Downloadable resources covering marketing, branding, and music business essentials',
      link: '/ebooks',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Wrench,
      title: 'Professional Tools',
      description: 'Calculators, generators, and utilities to streamline your music career',
      link: '/tools',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Music,
      title: 'Resource Library',
      description: 'Curated collection of templates, samples, and industry contacts',
      link: '/resources',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'Connect with fellow musicians, share experiences, and collaborate',
      link: '/community',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Musicians Helped', icon: Users },
    { number: '200+', label: 'Guides & Tutorials', icon: BookOpen },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Headphones }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Elevate Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Music Career
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive guides, industry insights, professional tools, and resources 
              to create better content and promote your music like never before.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/guides"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Start Learning</span>
            </Link>
            <Link
              to="/tools"
              className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              Explore Tools
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From beginner tutorials to advanced strategies, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                  <span className="mr-2">Learn more</span>
                  <TrendingUp className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Music Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of musicians who've already elevated their content and promotion strategies
            </p>
            <Link
              to="/guides"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Get Started Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;