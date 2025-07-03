import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Star, Users, TrendingUp, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import ExpandablePackageBox from '../../components/ExpandablePackageBox';

const InstagramFeaturing = () => {
  const features = [
    'Major account feature placements',
    'Influencer partnership coordination',
    'Cross-promotional campaign setup',
    'Brand collaboration facilitation',
    'Feature optimization and timing',
    'Performance tracking and analytics',
    'Audience overlap analysis',
    'Long-term partnership development'
  ];

  const results = [
    { metric: 'Average Reach Per Feature', value: '500K+', description: 'Immediate exposure boost' },
    { metric: 'Follower Conversion Rate', value: '12%', description: 'Feature viewers to followers' },
    { metric: 'Engagement Spike', value: '850%', description: 'During feature period' }
  ];

  const featuringPackages = [
    {
      id: 'hypecroon-featuring',
      name: '@Hypecroon',
      price: 120,
      icon: Instagram,
      color: 'bg-gradient-to-br from-purple-900 to-purple-800',
      borderColor: 'border-purple-500',
      popular: true,
      features: [
        'Main feed post feature',
        'Story highlight inclusion',
        '24-hour story feature',
        'Guaranteed 500K+ reach',
        'Performance analytics',
        'Cross-promotion opportunities',
        '2.8M followers exposure',
        '8.5% engagement rate'
      ],
      service: 'Instagram Featuring',
      image: '/Add a subheading.zip - 3.png',
      packageType: 'premium'
    },
    {
      id: 'hypecroonews-featuring',
      name: '@Hypecroonews',
      price: 50,
      icon: Instagram,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'News post feature',
        'Story mention',
        'Caption credit',
        'Guaranteed 200K+ reach',
        'Basic analytics',
        'News article inclusion',
        '850K followers exposure',
        '6.2% engagement rate'
      ],
      service: 'Instagram Featuring',
      image: '/Add a subheading.zip - 3.png',
      packageType: 'basic'
    },
    {
      id: 'ushoodtv-featuring',
      name: '@Ushoodtv',
      price: 40,
      icon: Instagram,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Feed post feature',
        'Story share',
        'Caption mention',
        'Guaranteed 150K+ reach',
        'Basic performance report',
        'Community engagement',
        '650K followers exposure',
        '7.1% engagement rate'
      ],
      service: 'Instagram Featuring',
      image: '/Add a subheading.zip - 3.png',
      packageType: 'basic'
    },
    {
      id: 'usahoodaily-featuring',
      name: '@usahoodaily',
      price: 60,
      icon: Instagram,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Main post feature',
        'Story highlight',
        'Caption tag',
        'Guaranteed 300K+ reach',
        'Detailed analytics',
        'Repost opportunities',
        '1.2M followers exposure',
        '5.8% engagement rate'
      ],
      service: 'Instagram Featuring',
      image: '/Add a subheading.zip - 3.png',
      packageType: 'standard'
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
                  Get Featured on Major Accounts
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Amplify your brand visibility by getting featured on major Instagram accounts and influencer profiles. Our network of premium partnerships ensures your content reaches millions of engaged followers across relevant niches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#featuring-packages"
                  className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold"
                >
                  View Feature Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200 font-semibold">
                  <Zap className="mr-2 h-5 w-5" />
                  View Network
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
                <img
                  src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Instagram Feature Analytics"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Feature Performance</span>
                    <span className="text-purple-400 font-semibold">+500K Reach</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">750K</div>
                      <div className="text-sm text-gray-400">Total Reach</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">45K</div>
                      <div className="text-sm text-gray-400">Engagement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">8.2K</div>
                      <div className="text-sm text-gray-400">New Followers</div>
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
              Premium Feature Placement Network
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our exclusive network of high-impact Instagram accounts and influencers across all major industries and niches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Instagram className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Major Accounts</h3>
              <p className="text-gray-400">Get featured on accounts with millions of engaged followers.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Influencer Network</h3>
              <p className="text-gray-400">Connect with top-tier influencers in your industry.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategic Timing</h3>
              <p className="text-gray-400">Optimize feature timing for maximum impact and engagement.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Star className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Placement</h3>
              <p className="text-gray-400">Secure prime spots in stories, posts, and highlight reels.</p>
            </div>
          </div>

          <div className="bg-black rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Featuring Services</h3>
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

      {/* Featuring Packages Section with Expandable Features */}
      <section id="featuring-packages" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Instagram Featuring Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose from our premium network of high-engagement Instagram accounts to feature your content and reach targeted audiences.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 max-w-2xl mx-auto">
              <p className="text-purple-300 text-sm font-medium mb-2">📸 Interactive Features</p>
              <p className="text-gray-400 text-sm">
                Click on any package box to reveal additional features and see what's included in your featuring campaign!
              </p>
            </div>
          </div>

          {/* Expandable Package Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {featuringPackages.map((pkg, index) => (
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
                  <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <span>Click any package to expand features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <span>Watch features animate in sequentially</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                  <span>Click "Show Less" to collapse</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Custom Feature Packages Available
              </h3>
              <p className="text-gray-300 mb-6">
                Need features across multiple accounts or custom arrangements? We can create a tailored package that fits your specific needs and budget.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold"
              >
                Discuss Custom Package
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Feature Impact Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Our strategic featuring placements deliver immediate visibility boosts and long-term growth benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-black rounded-xl p-8 text-center border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
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
            Ready to Go Viral with Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our exclusive network and get your brand featured on the accounts that matter most to your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold"
            >
              Apply for Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              View Feature Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstagramFeaturing;