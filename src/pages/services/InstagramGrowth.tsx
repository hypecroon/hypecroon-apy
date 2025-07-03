import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Users, Heart, TrendingUp, Eye, CheckCircle, ArrowRight, Star } from 'lucide-react';
import ExpandablePackageBox from '../../components/ExpandablePackageBox';

const InstagramGrowth = () => {
  const features = [
    'Organic follower growth strategies',
    'Content creation and curation',
    'Hashtag research and optimization',
    'Engagement rate improvement',
    'Story and Reels optimization',
    'Influencer collaboration facilitation',
    'Analytics and performance tracking',
    'Community management support'
  ];

  const results = [
    { metric: 'Average Follower Growth', value: '150K+', description: 'New followers in 6 months' },
    { metric: 'Engagement Rate Increase', value: '340%', description: 'Higher than baseline' },
    { metric: 'Reach Expansion', value: '2.5M+', description: 'Monthly reach achieved' }
  ];

  const packages = [
    {
      id: 'instagram-basic',
      name: 'Basic',
      price: 150,
      icon: Instagram,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Real New followers',
        '5,000 - 7,000 views',
        '500 - 900 Likes',
        '12-15 Real Comments',
        'Weekly performance reports',
        '24/7 support',
        '30-day growth period',
        'Basic analytics dashboard'
      ],
      service: 'Instagram Marketing',
      image: '/Add a subheading.zip - 3.png',
      packageType: 'basic'
    },
    {
      id: 'instagram-standard',
      name: 'Standard',
      price: 250,
      icon: Users,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Real New followers',
        '8,000 - 12,000 Views',
        '900 - 1,100 Likes',
        '22 - 30 Comments',
        'Bi-weekly strategy calls',
        'Priority email support',
        '30-day growth period',
        'Engagement Group inclusion',
        'A free post on @hypecroonews',
        'Performance tracking dashboard'
      ],
      service: 'Instagram Marketing',
      image: '/Add a subheading.zip - 3.png',
      packageType: 'standard'
    },
    {
      id: 'instagram-premium',
      name: 'Premium',
      price: 450,
      icon: TrendingUp,
      color: 'bg-gray-800',
      borderColor: 'border-pink-500',
      popular: true,
      features: [
        'Real new followers',
        '14,000 - 22,000 Views',
        '1,100 - 1,500 Likes',
        '40 - 60 Comments',
        'Weekly strategy calls',
        'Phone & email support',
        '30-day growth period',
        'A free post on @usahoodtv',
        'Advanced analytics dashboard',
        'Cross-platform promotion',
        'A/B testing for content',
        'Custom audience creation'
      ],
      service: 'Instagram Marketing',
      image: '/Add a subheading.zip - 3.png',
      packageType: 'premium'
    },
    {
      id: 'instagram-ultimate',
      name: 'Ultimate',
      price: 650,
      icon: Heart,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Real new followers',
        '25,000 - 50,000 Views',
        '2,000 - 3,000 Likes',
        '60 - 100 Comments',
        'Dedicated account manager',
        'Daily optimization',
        '30-day growth period',
        'A free post on @usahoodaily',
        'Cross-platform promotion',
        'Community management',
        'Brand partnership setup',
        'Advanced conversion tracking'
      ],
      service: 'Instagram Marketing',
      image: '/Add a subheading.zip - 3.png',
      packageType: 'ultimate'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="/Add a subheading.zip - 3.png" 
                  alt="Instagram" 
                  className="h-16 w-auto mr-6"
                />
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  Instagram Growth That Converts
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build a thriving Instagram presence with our proven organic growth strategies. We help brands and creators gain authentic followers, boost engagement, and turn social media presence into revenue-generating assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors duration-200 font-semibold"
                >
                  View Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200 font-semibold">
                  <Eye className="mr-2 h-5 w-5" />
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
                <img
                  src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Instagram Growth Analytics"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">6-Month Growth</span>
                    <span className="text-pink-400 font-semibold">+150K Followers</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">185K</div>
                      <div className="text-sm text-gray-400">Followers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">8.5%</div>
                      <div className="text-sm text-gray-400">Engagement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">2.1M</div>
                      <div className="text-sm text-gray-400">Monthly Reach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Instagram Growth Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our holistic approach combines content strategy, engagement tactics, and growth hacking to build authentic, engaged communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Users className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Audience Targeting</h3>
              <p className="text-gray-400">Identify and attract your ideal followers with precision targeting.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Heart className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Engagement Boost</h3>
              <p className="text-gray-400">Increase likes, comments, and shares with strategic content planning.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Growth Optimization</h3>
              <p className="text-gray-400">Continuous optimization based on performance data and trends.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Instagram className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Content Strategy</h3>
              <p className="text-gray-400">Develop compelling content that resonates with your target audience.</p>
            </div>
          </div>

          <div className="bg-black rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Growth Services Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section with Expandable Features */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Instagram Growth Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect package to accelerate your Instagram growth and build an engaged community.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 max-w-2xl mx-auto">
              <p className="text-pink-300 text-sm font-medium mb-2">📸 Interactive Features</p>
              <p className="text-gray-400 text-sm">
                Click on any package box to reveal additional features and see what's included in your Instagram growth campaign!
              </p>
            </div>
          </div>

          {/* Expandable Package Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <ExpandablePackageBox
                key={pkg.id}
                pkg={pkg}
                index={index}
              />
            ))}
          </div>

          {/* Usage Instructions */}
          <div className="text-center mt-12">
            <div className="bg-gray-900 rounded-2xl p-6 max-w-4xl mx-auto border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">
                📸 How to Explore Packages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <span>Click any package to expand features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <span>Watch features animate in sequentially</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                  <span>Click "Show Less" to collapse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Real Growth, Real Results
            </h2>
            <p className="text-xl text-gray-300">
              Our Instagram growth strategies consistently deliver measurable results that translate to business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-black rounded-xl p-8 text-center border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-gray-300 mb-2">{result.metric}</div>
                <div className="text-gray-400">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Instagram?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful brands and creators who've accelerated their Instagram growth with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors duration-200 font-semibold"
            >
              Start Growing Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Get Growth Analysis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstagramGrowth;