import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Radio, TrendingUp, Users, Play, CheckCircle, ArrowRight, Star, Crown } from 'lucide-react';
import ExpandablePackageBox from '../../components/ExpandablePackageBox';

const SpotifyAds = () => {
  const features = [
    'Audio ad creation and production',
    'Strategic playlist placement campaigns',
    'Spotify for Artists optimization',
    'Advanced audience targeting',
    'Real-time performance tracking',
    'Cross-platform promotion integration',
    'Brand partnership opportunities',
    'Conversion tracking and analytics'
  ];

  const results = [
    { metric: 'Average Stream Increase', value: '340%', description: 'Within first 3 months' },
    { metric: 'Monthly Listeners Growth', value: '250K+', description: 'Average per campaign' },
    { metric: 'Playlist Placement Rate', value: '85%', description: 'Successful placements' }
  ];

  const packages = [
    {
      id: 'spotify-basic',
      name: 'Basic',
      price: 130,
      icon: Music,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '2,500 targeted streams',
        'Basic playlist submissions',
        '1 audio ad creative',
        'Weekly performance reports',
        'Email support',
        '30-day campaign duration',
        'Spotify for Artists setup',
        'Basic analytics dashboard'
      ],
      service: 'Spotify Marketing',
      image: '/Add a subheading.zip - 2.png',
      packageType: 'basic'
    },
    {
      id: 'spotify-standard',
      name: 'Standard',
      price: 230,
      icon: Radio,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '7,500 targeted streams',
        'Premium playlist pitching',
        '2 audio ad creatives',
        'Bi-weekly optimization',
        'Priority email support',
        '45-day campaign duration',
        'Spotify for Artists setup',
        'Advanced targeting options',
        'Playlist curator outreach',
        'Performance tracking dashboard'
      ],
      service: 'Spotify Marketing',
      image: '/Add a subheading.zip - 2.png',
      packageType: 'standard'
    },
    {
      id: 'spotify-premium',
      name: 'Premium',
      price: 430,
      icon: TrendingUp,
      color: 'bg-gray-800',
      borderColor: 'border-green-500',
      popular: true,
      features: [
        '20,000 targeted streams',
        'Curated playlist placements',
        '3 audio ad creatives',
        'Weekly optimization',
        'Phone & email support',
        '60-day campaign duration',
        'Algorithm optimization',
        'Release radar inclusion',
        'Cross-platform promotion',
        'Detailed analytics reports',
        'A/B testing for ads',
        'Custom audience creation'
      ],
      service: 'Spotify Marketing',
      image: '/Add a subheading.zip - 2.png',
      packageType: 'premium'
    },
    {
      id: 'spotify-ultimate',
      name: 'Ultimate',
      price: 630,
      icon: Users,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        '50,000 targeted streams',
        'Editorial playlist pitching',
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
      service: 'Spotify Marketing',
      image: '/Add a subheading.zip - 2.png',
      packageType: 'ultimate'
    },
    {
      id: 'spotify-elite',
      name: 'Elite',
      price: 930,
      icon: Star,
      color: 'bg-gradient-to-br from-purple-900 to-purple-800',
      borderColor: 'border-purple-500',
      features: [
        '125,000 targeted streams',
        'Major playlist guarantees',
        '5 audio ad creatives',
        'Weekly optimization',
        'Priority account manager',
        '90-day campaign duration',
        'Radio station pitching',
        'Influencer collaborations',
        'Brand partnership setup',
        'Custom analytics platform',
        'Multi-format campaigns',
        'Celebrity endorsements',
        'Global market expansion'
      ],
      service: 'Spotify Marketing',
      image: '/Add a subheading.zip - 2.png',
      packageType: 'elite'
    },
    {
      id: 'spotify-pro',
      name: 'Pro',
      price: 1330,
      icon: Crown,
      color: 'bg-gradient-to-br from-yellow-900 to-yellow-800',
      borderColor: 'border-yellow-500',
      features: [
        '250,000 targeted streams',
        'Editorial team connections',
        '6 audio ad creatives',
        'Daily optimization',
        'Senior account manager',
        '120-day campaign duration',
        'Podcast advertising',
        'Celebrity endorsements',
        'Advanced targeting AI',
        'Global market expansion',
        'Custom technology stack',
        'Real-time optimization',
        'Performance forecasting',
        'Strategic consulting'
      ],
      service: 'Spotify Marketing',
      image: '/Add a subheading.zip - 2.png',
      packageType: 'pro'
    },
    {
      id: 'spotify-vip',
      name: 'VIP',
      price: 2330,
      icon: Star,
      color: 'bg-gradient-to-br from-pink-900 to-pink-800',
      borderColor: 'border-pink-500',
      features: [
        '500,000 targeted streams',
        'Spotify editorial access',
        '8 audio ad creatives',
        'Real-time optimization',
        'Executive account manager',
        '150-day campaign duration',
        'Major label connections',
        'Festival placement',
        'Custom analytics platform',
        'PR & media coverage',
        '24/7 priority support',
        'Global campaign reach',
        'Exclusive partnerships',
        'Brand safety premium',
        'Custom reporting suite'
      ],
      service: 'Spotify Marketing',
      image: '/Add a subheading.zip - 2.png',
      packageType: 'vip'
    },
    {
      id: 'spotify-platinum',
      name: 'Platinum',
      price: 3330,
      icon: Crown,
      color: 'bg-gradient-to-br from-gray-800 to-gray-900',
      borderColor: 'border-gray-400',
      premium: true,
      features: [
        '1,000,000+ targeted streams',
        'Spotify Wrapped inclusion',
        '10+ audio ad creatives',
        'AI-driven optimization',
        'C-level account management',
        '180-day campaign duration',
        'Exclusive playlist creation',
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
      service: 'Spotify Marketing',
      image: '/Add a subheading.zip - 2.png',
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
                  src="/Add a subheading.zip - 2.png" 
                  alt="Spotify" 
                  className="h-16 w-auto mr-6"
                />
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  Spotify Promotion That Works
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Amplify your music reach with strategic Spotify advertising and playlist placements. Our proven methods help artists gain millions of streams and build dedicated fanbases on the world's largest music platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
                >
                  View Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200 font-semibold">
                  <Play className="mr-2 h-5 w-5" />
                  Listen to Success
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
                <img
                  src="https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Spotify Analytics Dashboard"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monthly Performance</span>
                    <span className="text-green-400 font-semibold">+890K Streams</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">2.1M</div>
                      <div className="text-sm text-gray-400">Total Streams</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">45K</div>
                      <div className="text-sm text-gray-400">Monthly Listeners</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">127</div>
                      <div className="text-sm text-gray-400">Countries</div>
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
              Complete Spotify Marketing Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From audio ads to playlist placements, we leverage every Spotify feature to maximize your music's reach and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Radio className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Audio Advertising</h3>
              <p className="text-gray-400">Professional audio ads that capture listener attention between songs.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Music className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Playlist Placement</h3>
              <p className="text-gray-400">Strategic placement on popular playlists to reach new audiences.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Algorithm Optimization</h3>
              <p className="text-gray-400">Optimize your tracks to get discovered by Spotify's recommendation engine.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Users className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fan Engagement</h3>
              <p className="text-gray-400">Build a loyal fanbase with targeted campaigns and content strategy.</p>
            </div>
          </div>

          <div className="bg-black rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Service Features</h3>
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
              Spotify Promotion Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect package to boost your Spotify streams and reach millions of music lovers worldwide.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 max-w-2xl mx-auto">
              <p className="text-green-300 text-sm font-medium mb-2">🎵 Interactive Features</p>
              <p className="text-gray-400 text-sm">
                Click on any package box to reveal additional features and see what's included in your Spotify campaign!
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
                🎵 How to Explore Packages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="bg-green-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <span>Click any package to expand features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <span>Watch features animate in sequentially</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</span>
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
              Streaming Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Our Spotify promotion strategies deliver consistent growth in streams, followers, and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-black rounded-xl p-8 text-center border border-gray-800 hover:border-green-500/50 transition-all duration-300">
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
            Ready to Go Viral on Spotify?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create a Spotify strategy that gets your music heard by millions of listeners worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
            >
              Launch Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Get Free Analysis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpotifyAds;