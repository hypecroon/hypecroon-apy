import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$997',
      period: '/month',
      description: 'Perfect for emerging artists and small businesses',
      features: [
        'YouTube ad campaign setup',
        'Basic Spotify promotion',
        'Instagram growth strategy',
        '2 campaign optimizations/month',
        'Monthly performance report',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-700 text-white hover:bg-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,497',
      period: '/month',
      description: 'Ideal for established artists and growing brands',
      features: [
        'Multi-platform ad campaigns',
        'Advanced Spotify & Apple Music promotion',
        'Instagram featuring opportunities',
        'Weekly campaign optimizations',
        'Detailed analytics dashboard',
        'Priority support',
        'Custom content creation',
        'Influencer collaborations'
      ],
      buttonText: 'Most Popular',
      buttonClass: 'bg-pink-500 text-black hover:bg-pink-400',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,997',
      period: '/month',
      description: 'For major artists and established brands',
      features: [
        'Full-service campaign management',
        'Premium playlist placements',
        'Major publication features',
        'Daily optimizations',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom strategy development',
        'Advanced targeting & retargeting',
        'Exclusive partnership opportunities'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-purple-600 text-white hover:bg-purple-500',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our core services with varying levels of support and features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-black rounded-2xl shadow-xl relative overflow-hidden border border-gray-800 ${
                plan.popular ? 'ring-2 ring-pink-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-pink-500 text-black text-center py-2 text-sm font-semibold">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-pink-300 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 px-6 rounded-lg text-center font-semibold transition-colors duration-200 block ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need a custom solution? We work with enterprises and major labels.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-pink-300 hover:text-pink-200 font-medium"
          >
            <img 
              src="/Copy of Hypecroon logo.png" 
              alt="Hypecroon" 
              className="h-6 w-6 mr-2"
            />
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;