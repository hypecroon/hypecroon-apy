import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, TrendingUp, Users, Edit, CheckCircle, ArrowRight, Star, ExternalLink } from 'lucide-react';
import ExpandablePackageBox from '../../components/ExpandablePackageBox';

const DigitalPublications = () => {
  const features = [
    'Custom publication design and development',
    'Content strategy and editorial planning',
    'SEO optimization for digital content',
    'Multi-platform distribution strategy',
    'Interactive media integration',
    'Analytics and performance tracking',
    'Email newsletter campaigns',
    'Social media content amplification'
  ];

  const results = [
    { metric: 'Average Engagement Rate', value: '18%', description: 'Higher than industry standard' },
    { metric: 'Content Reach', value: '2.5M+', description: 'Monthly readership achieved' },
    { metric: 'Conversion Rate', value: '8.5%', description: 'Reader to customer conversion' }
  ];

  const publications = [
    {
      id: 'hood-critic-feature',
      name: 'Hood Critic',
      price: 299,
      icon: FileText,
      color: 'bg-gradient-to-br from-red-900 to-red-800',
      borderColor: 'border-red-500',
      popular: true,
      features: [
        'Featured article placement',
        'Artist interview opportunities',
        'Album/single reviews',
        'Social media promotion',
        'Newsletter inclusion',
        'SEO optimized content',
        '1.2M monthly readers',
        'Hip-hop enthusiasts audience'
      ],
      service: 'Digital Publications',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'premium'
    },
    {
      id: 'medium-feature',
      name: 'Medium',
      price: 199,
      icon: FileText,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Curated publication feature',
        'Thought leadership articles',
        'Industry insights content',
        'Professional networking',
        'Cross-platform distribution',
        'Analytics dashboard',
        '100M+ monthly readers',
        'Professionals & entrepreneurs'
      ],
      service: 'Digital Publications',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'standard'
    },
    {
      id: '24-hip-hop-feature',
      name: '24 Hip Hop',
      price: 149,
      icon: FileText,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Breaking news coverage',
        'Artist spotlight features',
        'Industry news articles',
        'Social media amplification',
        'Video content integration',
        'Real-time updates',
        '800K monthly readers',
        'Hip-hop fans & industry pros'
      ],
      service: 'Digital Publications',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'basic'
    },
    {
      id: 'ny-weekly-feature',
      name: 'NY Weekly',
      price: 179,
      icon: FileText,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Lifestyle feature articles',
        'Entertainment coverage',
        'Local business spotlights',
        'Event coverage',
        'Photo galleries',
        'Print & digital distribution',
        '650K monthly readers',
        'NYC residents & entertainment'
      ],
      service: 'Digital Publications',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'standard'
    },
    {
      id: 'allhiphop-feature',
      name: 'AllHipHop',
      price: 399,
      icon: FileText,
      color: 'bg-gradient-to-br from-yellow-900 to-yellow-800',
      borderColor: 'border-yellow-500',
      premium: true,
      features: [
        'Exclusive interviews',
        'Breaking news coverage',
        'Album premieres',
        'Video content features',
        'Social media promotion',
        'Industry connections',
        '2.1M monthly readers',
        'Hip-hop community & industry'
      ],
      service: 'Digital Publications',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'premium'
    },
    {
      id: 'la-weekly-feature',
      name: 'LA Weekly',
      price: 189,
      icon: FileText,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Arts & culture features',
        'Music scene coverage',
        'Event listings',
        'Restaurant & nightlife',
        'Local business features',
        'Print & digital reach',
        '900K monthly readers',
        'LA residents & entertainment'
      ],
      service: 'Digital Publications',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'standard'
    },
    {
      id: 'the-source-feature',
      name: 'The Source',
      price: 499,
      icon: Star,
      color: 'bg-gradient-to-br from-purple-900 to-purple-800',
      borderColor: 'border-purple-500',
      legendary: true,
      features: [
        'Magazine feature articles',
        'Digital platform coverage',
        'Industry credibility boost',
        'Historical significance',
        'Multi-platform distribution',
        'Legacy brand association',
        '1.8M monthly readers',
        'Hip-hop culture & veterans'
      ],
      service: 'Digital Publications',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'premium'
    },
    {
      id: 'edm-sauce-feature',
      name: 'EDM Sauce',
      price: 129,
      icon: FileText,
      color: 'bg-gray-800',
      borderColor: 'border-gray-700',
      features: [
        'Track premieres',
        'Artist interviews',
        'Festival coverage',
        'Remix features',
        'Producer spotlights',
        'Electronic music news',
        '750K monthly readers',
        'EDM fans & producers'
      ],
      service: 'Digital Publications',
      image: '/Add a subheading.zip - 1.png',
      packageType: 'basic'
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
                <FileText className="h-12 w-12 text-blue-400 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  Digital Publications That Engage
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get featured in top rap news publications and digital magazines. From Hood Critic to The Source, we'll place your content on the platforms that matter most to your audience and industry credibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#publications"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  View Publications
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200 font-semibold">
                  <Edit className="mr-2 h-5 w-5" />
                  View Samples
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
                <img
                  src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Digital Publications Analytics"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Publication Performance</span>
                    <span className="text-blue-400 font-semibold">+280% Engagement</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">125K</div>
                      <div className="text-sm text-gray-400">Monthly Readers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">18%</div>
                      <div className="text-sm text-gray-400">Engagement Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">45</div>
                      <div className="text-sm text-gray-400">Publications</div>
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
              Complete Digital Publishing Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to distribution, we handle every aspect of your digital publishing needs to ensure maximum impact and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <BookOpen className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Content Creation</h3>
              <p className="text-gray-400">Professional writing and editorial services for compelling content.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Edit className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design & Layout</h3>
              <p className="text-gray-400">Beautiful, responsive designs that enhance the reading experience.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Distribution Strategy</h3>
              <p className="text-gray-400">Multi-channel distribution to maximize reach and engagement.</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Users className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Audience Building</h3>
              <p className="text-gray-400">Grow your readership with targeted audience development strategies.</p>
            </div>
          </div>

          <div className="bg-black rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Publishing Services</h3>
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

      {/* Publications Section with Expandable Features */}
      <section id="publications" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Top Rap News & Digital Publications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get featured on the most influential hip-hop and music publications to build credibility and reach millions of engaged readers.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 max-w-2xl mx-auto">
              <p className="text-blue-300 text-sm font-medium mb-2">📰 Interactive Features</p>
              <p className="text-gray-400 text-sm">
                Click on any publication box to reveal additional features and see what's included in your feature package!
              </p>
            </div>
          </div>

          {/* Expandable Package Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {publications.map((pub, index) => (
              <ExpandablePackageBox
                key={pub.id}
                pkg={pub}
                index={index}
              />
            ))}
          </div>

          {/* Usage Instructions */}
          <div className="text-center mt-12">
            <div className="bg-gray-900 rounded-2xl p-6 max-w-4xl mx-auto border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">
                📰 How to Explore Publications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <span>Click any publication to expand features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <span>Watch features animate in sequentially</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                  <span>Click "Show Less" to collapse</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Custom Publication Packages
              </h3>
              <p className="text-gray-300 mb-6">
                Need features across multiple publications or custom content creation? We can develop a comprehensive publication strategy tailored to your brand and goals.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Discuss Custom Strategy
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
              Publishing Performance Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Our digital publications consistently achieve high engagement rates and drive meaningful business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-black rounded-xl p-8 text-center border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
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
            Ready to Get Published?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your story into compelling digital content that reaches millions and establishes your brand authority in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Start Your Publication
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalPublications;