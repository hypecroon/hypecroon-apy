import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Radio, TrendingUp, Users, Play, CheckCircle, ArrowRight, Star, Crown } from 'lucide-react';
import ExpandablePackageBox from '../../components/ExpandablePackageBox';

const AppleMusicAds = () => {
  const features = [
    'Apple Music Connect optimization',
    'iTunes Store promotion campaigns',
    'Radio station playlist pitching',
    'Apple Music for Artists setup',
    'Cross-platform integration with iOS',
    'Premium subscriber targeting',
    'High-quality audio ad production',
    'Performance analytics and insights'
  ];

  const results = [
    { metric: 'Stream Growth Rate', value: '285%', description: 'Average increase per campaign' },
    { metric: 'Playlist Additions', value: '50K+', description: 'Songs added to user playlists' },
    { metric: 'Revenue Increase', value: '180%', description: 'From streaming royalties' }
  ];

  const packages = [
    {
      id: 'apple-basic',
      name: 'Basic',
      price: 150,
      icon: Headphones,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '3,000 targeted streams',
        'Basic Apple Music promotion',
        '1 audio ad creative',
        'Weekly performance reports',
        'Email support',
        '30-day campaign duration',
        'Apple Music for Artists setup',
        'Basic analytics dashboard'
      ],
      service: 'Apple Music Marketing',
      image: '/Add a subheading.zip - 4.png',
      packageType: 'basic'
    },
    {
      id: 'apple-standard',
      name: 'Standard',
      price: 250,
      icon: Radio,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '8,000 targeted streams',
        'iTunes Store featuring',
        '2 audio ad creatives',
        'Bi-weekly optimization',
        'Priority email support',
        '45-day campaign duration',
        'Apple Music for Artists setup',
        'iOS integration features',
        'Radio station outreach',
        'Performance tracking dashboard'
      ],
      service: 'Apple Music Marketing',
      image: '/Add a subheading.zip - 4.png',
      packageType: 'standard'
    },
    {
      id: 'apple-premium',
      name: 'Premium',
      price: 450,
      icon: TrendingUp,
      color: 'bg-gray-800',
      borderColor: 'border-gray-500',
      popular: true,
      features: [
        '18,000 targeted streams',
        'Apple Music Radio pitching',
        '3 audio ad creatives',
        'Weekly optimization',
        'Phone & email support',
        '60-day campaign duration',
        'iOS integration features',
        'Premium playlist placement',
        'Cross-platform promotion',
        'Detailed analytics reports',
        'A/B testing for ads',
        'Custom audience creation'
      ],
      service: 'Apple Music Marketing',
      image: '/Add a subheading.zip - 4.png',
      packageType: 'premium'
    },
    {
      id: 'apple-ultimate',
      name: 'Ultimate',
      price: 650,
      icon: Users,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '40,000 targeted streams',
        'Apple Music editorial team',
        '4 audio ad creatives',
        'Bi-weekly optimization',
        'Dedicated account manager',
        '75-day campaign duration',
        'Cross-platform promotion',
        'Detailed analytics dashboard',
        'Influencer collaborations',
        'Brand partnership opportunities',
        'Custom landing pages',
        'Advanced conversion tracking'
      ],
      service: 'Apple Music Marketing',
      image: '/Add a subheading.zip - 4.png',
      packageType: 'ultimate'
    },
    {
      id: 'apple-elite',
      name: 'Elite',
      price: 950,
      icon: Star,
      color: 'bg-gradient-to-br from-purple-900 to-purple-800',
      borderColor: 'border-purple-500',
      features: [
        '70,000 targeted streams',
        'Apple Music Beats access',
        '5 audio ad creatives',
        'Weekly optimization',
        'Priority account manager',
        '90-day campaign duration',
        'Siri integration setup',
        'Influencer collaborations',
        'Brand partnership setup',
        'Custom analytics platform',
        'Multi-format campaigns',
        'Celebrity endorsements',
        'Global market expansion'
      ],
      service: 'Apple Music Marketing',
      image: '/Add a subheading.zip - 4.png',
      packageType: 'elite'
    },
    {
      id: 'apple-pro',
      name: 'Pro',
      price: 1350,
      icon: Crown,
      color: 'bg-gradient-to-br from-yellow-900 to-yellow-800',
      borderColor: 'border-yellow-500',
      features: [
        '100,000 targeted streams',
        'Apple Music 1 consideration',
        '6 audio ad creatives',
        'Daily optimization',
        'Senior account manager',
        '120-day campaign duration',
        'Apple TV+ integration',
        'Celebrity endorsements',
        'Advanced targeting AI',
        'Global market expansion',
        'Custom technology stack',
        'Real-time optimization',
        'Performance forecasting',
        'Strategic consulting'
      ],
      service: 'Apple Music Marketing',
      image: '/Add a subheading.zip - 4.png',
      packageType: 'pro'
    },
    {
      id: 'apple-vip',
      name: 'VIP',
      price: 2350,
      icon: Star,
      color: 'bg-gradient-to-br from-pink-900 to-pink-800',
      borderColor: 'border-pink-500',
      features: [
        '200,000 targeted streams',
        'Apple Music editorial access',
        '8 audio ad creatives',
        'Real-time optimization',
        'Executive account manager',
        '150-day campaign duration',
        'Apple Events consideration',
        'Major label connections',
        'Custom analytics platform',
        'PR & media coverage',
        '24/7 priority support',
        'Global campaign reach',
        'Exclusive partnerships',
        'Brand safety premium',
        'Custom reporting suite'
      ],
      service: 'Apple Music Marketing',
      image: '/Add a subheading.zip - 4.png',
      packageType: 'vip'
    },
    {
      id: 'apple-platinum',
      name: 'Platinum',
      price: 3350,
      icon: Crown,
      color: 'bg-gradient-to-br from-gray-800 to-gray-900',
      borderColor: 'border-gray-400',
      premium: true,
      features: [
        '300,000+ targeted streams',
        'Apple Music exclusives',
        '10+ audio ad creatives',
        'AI-driven optimization',
        'C-level account management',
        '180-day campaign duration',
        'Apple Keynote features',
        'Global chart positioning',
        'Custom technology stack',
        'Dedicated creative team',
        'White-glove service',
        'Guaranteed viral potential',
        'Executive strategy sessions',
        'Custom analytics platform',
        'Priority platform access',
        'Exclusive partnership opportunities'
      ],
      service: 'Apple Music Marketing',
      image: '/Add a subheading.zip - 4.png',
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
                  src="/Add a subheading.zip - 4.png" 
                  alt="Apple Music" 
                  className="h-16 w-auto mr-6"
                />
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  Apple Music Marketing Excellence
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Maximize your presence on Apple Music with strategic promotional campaigns that reach premium subscribers. Our expertise in Apple's ecosystem ensures your music gets the attention it deserves on this premium platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-semibold"
                >
                  View Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200 font-semibold">
                  <Play className="mr-2 h-5 w-5" />
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
                <img
                  src="https://images.pexels.com/photos/1699165/pexels-photo-1699165.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Apple Music Analytics"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Apple Music Performance</span>
                    <span className="text-blue-400 font-semibold">+285% Growth</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">1.8M</div>
                      <div className="text-sm text-gray-400">Plays</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">32K</div>
                      <div className="text-sm text-gray-400">Listeners</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">4.8</div>
                      <div className="text-sm text-gray-400">Rating</div>
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
              Premium Apple Music Promotion
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage Apple's premium ecosystem to reach high-value listeners who invest in quality music experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Radio className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Radio Integration</h3>
              <p className="text-gray-400">Get your music featured on Apple Music Radio stations and shows.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Headphones className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Placement</h3>
              <p className="text-gray-400">Strategic placement in curated playlists and featured sections.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">iOS Integration</h3>
              <p className="text-gray-400">Leverage Siri, widgets, and iOS features for maximum exposure.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Audience</h3>
              <p className="text-gray-400">Reach Apple Music's premium subscriber base with higher engagement.</p>
            </div>
          </div>

          <div className="bg-black rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Campaign Features</h3>
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
              Apple Music Promotion Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect package to maximize your Apple Music presence and reach premium subscribers worldwide.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 max-w-2xl mx-auto">
              <p className="text-gray-300 text-sm font-medium mb-2">🍎 Interactive Features</p>
              <p className="text-gray-400 text-sm">
                Click on any package box to reveal additional features and see what's included in your Apple Music campaign!
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
                🍎 How to Explore Packages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="bg-gray-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <span>Click any package to expand features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-gray-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <span>Watch features animate in sequentially</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-gray-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</span>
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
              Apple Music Success Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Our campaigns consistently deliver exceptional performance on Apple's premium platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-black rounded-xl p-8 text-center border border-gray-800 hover:border-gray-500/50 transition-all duration-300">
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
            Ready to Conquer Apple Music?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ranks of successful artists who've leveraged our Apple Music expertise to reach premium audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-semibold"
            >
              Launch Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppleMusicAds;