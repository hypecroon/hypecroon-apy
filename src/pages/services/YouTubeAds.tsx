import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Target, TrendingUp, Users, Play, CheckCircle, ArrowRight, Star, Crown } from 'lucide-react';
import ExpandablePackageBox from '../../components/ExpandablePackageBox';

const YouTubeAds = () => {
  const features = [
    'Advanced audience targeting and retargeting',
    'Custom video ad creative development',
    'A/B testing for optimal performance',
    'Real-time campaign optimization',
    'Detailed analytics and reporting',
    'YouTube Shorts ad campaigns',
    'In-stream and discovery ad placement',
    'Conversion tracking and ROI analysis'
  ];

  const results = [
    { metric: 'Average View Rate', value: '85%', description: 'Higher than industry average' },
    { metric: 'Cost Per View', value: '$0.03', description: 'Optimized for maximum reach' },
    { metric: 'Subscriber Growth', value: '250%', description: 'Average increase per campaign' }
  ];

  const packages = [
    {
      id: 'youtube-basic',
      name: 'Basic',
      price: 150,
      icon: Play,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '5,000 targeted views',
        'Basic audience targeting',
        '1 video ad creative',
        'Weekly reports',
        'Email support',
        'Campaign setup assistance',
        'Basic analytics dashboard',
        'Standard optimization'
      ],
      service: 'YouTube Marketing',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'basic'
    },
    {
      id: 'youtube-standard',
      name: 'Standard',
      price: 250,
      icon: Target,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '10,000 targeted views',
        'Advanced targeting',
        '2 video ad creatives',
        'Bi-weekly optimization',
        'Priority support',
        'Demographic targeting',
        'Interest-based targeting',
        'Performance tracking',
        'Campaign refinement'
      ],
      service: 'YouTube Marketing',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'standard'
    },
    {
      id: 'youtube-premium',
      name: 'Premium',
      price: 450,
      icon: TrendingUp,
      color: 'bg-gray-800',
      borderColor: 'border-red-500',
      popular: true,
      features: [
        '20,000 targeted views',
        'Interest & behavior targeting',
        '3 video ad creatives',
        'Weekly optimization',
        'Phone & email support',
        '20-day campaign duration',
        'A/B testing included',
        'Conversion tracking setup',
        'Custom audience creation',
        'Retargeting campaigns',
        'Advanced analytics',
        'Performance insights'
      ],
      service: 'YouTube Marketing',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'premium'
    },
    {
      id: 'youtube-ultimate',
      name: 'Ultimate',
      price: 850,
      icon: Users,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '50,000 targeted views',
        'Custom audience creation',
        '4 video ad creatives',
        'Bi-weekly optimization',
        'Dedicated account manager',
        '30-day campaign duration',
        'Retargeting campaigns',
        'Detailed analytics dashboard',
        'Competitor analysis',
        'Brand safety controls',
        'Cross-platform integration',
        'Performance forecasting'
      ],
      service: 'YouTube Marketing',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'ultimate'
    },
    {
      id: 'youtube-elite',
      name: 'Elite',
      price: 1150,
      icon: Star,
      color: 'bg-gradient-to-br from-purple-900 to-purple-800',
      borderColor: 'border-purple-500',
      features: [
        '100,000 targeted views',
        'Lookalike audience targeting',
        '5 video ad creatives',
        'Weekly optimization',
        'Priority account manager',
        '45-day campaign duration',
        'Cross-platform integration',
        'Custom landing pages',
        'Influencer collaborations',
        'Advanced conversion tracking',
        'Multi-format campaigns',
        'Creative testing suite',
        'Audience insights reports'
      ],
      service: 'YouTube Marketing',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'elite'
    },
    {
      id: 'youtube-pro',
      name: 'Pro',
      price: 1750,
      icon: Crown,
      color: 'bg-gradient-to-br from-yellow-900 to-yellow-800',
      borderColor: 'border-yellow-500',
      features: [
        '200,000 targeted views',
        'AI-powered targeting',
        '6 video ad creatives',
        'Daily optimization',
        'Senior account manager',
        '60-day campaign duration',
        'Multi-format campaigns',
        'Brand partnership opportunities',
        'Advanced conversion tracking',
        'Competitor analysis',
        'Custom technology stack',
        'Real-time optimization',
        'Performance forecasting',
        'Strategic consulting'
      ],
      service: 'YouTube Marketing',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'pro'
    },
    {
      id: 'youtube-vip',
      name: 'VIP',
      price: 3350,
      icon: Star,
      color: 'bg-gradient-to-br from-pink-900 to-pink-800',
      borderColor: 'border-pink-500',
      features: [
        '500,000 targeted views',
        'Premium placement guarantee',
        '8 video ad creatives',
        'Real-time optimization',
        'Executive account manager',
        '75-day campaign duration',
        'Celebrity endorsements',
        'Major channel partnerships',
        'Custom analytics platform',
        'PR & media coverage',
        '24/7 priority support',
        'Global campaign reach',
        'Exclusive ad placements',
        'Brand safety premium',
        'Custom reporting suite'
      ],
      service: 'YouTube Marketing',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'vip'
    },
    {
      id: 'youtube-platinum',
      name: 'Platinum',
      price: 5350,
      icon: Crown,
      color: 'bg-gradient-to-br from-gray-800 to-gray-900',
      borderColor: 'border-gray-400',
      premium: true,
      features: [
        '1,000,000+ targeted views',
        'Exclusive premium placements',
        '10+ video ad creatives',
        'AI-driven optimization',
        'C-level account management',
        '120-day campaign duration',
        'YouTube Originals placement',
        'Global campaign reach',
        'Custom technology stack',
        'Dedicated creative team',
        'White-glove service',
        'Guaranteed viral potential',
        'Executive strategy sessions',
        'Custom analytics platform',
        'Priority platform access',
        'Exclusive partnership opportunities'
      ],
      service: 'YouTube Marketing',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'platinum'
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
                  src="/Add a subheading.zip - 1.png" 
                  alt="YouTube" 
                  className="h-16 w-auto mr-6"
                />
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  YouTube Ads That Convert
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Reach billions of viewers with targeted YouTube advertising campaigns that drive views, subscribers, and conversions. Our data-driven approach ensures maximum ROI for your video marketing investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold"
                >
                  View Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200 font-semibold">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Case Study
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
                <img
                  src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="YouTube Analytics Dashboard"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Campaign Performance</span>
                    <span className="text-green-400 font-semibold">+340% Growth</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">2.4M</div>
                      <div className="text-sm text-gray-400">Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">15K</div>
                      <div className="text-sm text-gray-400">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">8.5%</div>
                      <div className="text-sm text-gray-400">CTR</div>
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
              Complete YouTube Advertising Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy development to campaign optimization, we handle every aspect of your YouTube advertising to ensure maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Target className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Precise Targeting</h3>
              <p className="text-gray-400">Reach your ideal audience with advanced demographic and interest-based targeting.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Play className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Creative Production</h3>
              <p className="text-gray-400">Professional video ad creation that captures attention and drives action.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance Optimization</h3>
              <p className="text-gray-400">Continuous monitoring and optimization for maximum ROI and engagement.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Audience Growth</h3>
              <p className="text-gray-400">Build a loyal subscriber base that engages with your content long-term.</p>
            </div>
          </div>

          <div className="bg-black rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
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
              YouTube Advertising Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect package to amplify your YouTube presence and reach millions of viewers.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 max-w-2xl mx-auto">
              <p className="text-pink-300 text-sm font-medium mb-2">💡 Interactive Features</p>
              <p className="text-gray-400 text-sm">
                Click on any package box to reveal additional features and see what's included in your campaign!
              </p>
            </div>
          </div>

          {/* Expandable Package Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
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
                🎯 How to Explore Packages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="bg-pink-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <span>Click any package to expand features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-pink-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <span>Watch features animate in sequentially</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-pink-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</span>
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
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Our YouTube advertising campaigns consistently deliver exceptional performance across all metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-black rounded-xl p-8 text-center border border-gray-800 hover:border-red-500/50 transition-all duration-300">
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
            Ready to Dominate YouTube?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create a YouTube advertising strategy that drives real results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouTubeAds;