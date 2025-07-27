import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingPeriod === 'monthly' ? 497 : 4970,
      originalPrice: billingPeriod === 'monthly' ? 597 : 5970,
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'Perfect for small businesses getting started with automation',
      features: [
        '2 automation workflows',
        'Basic AI chatbot',
        'Email support',
        'Up to 1,000 AI interactions',
        'Standard integrations',
        'Basic analytics',
        '24/7 uptime monitoring',
        'Mobile app access',
      ],
      popular: false,
      color: 'primary',
    },
    {
      name: 'Professional',
      price: billingPeriod === 'monthly' ? 1497 : 14970,
      originalPrice: billingPeriod === 'monthly' ? 1797 : 17970,
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'Ideal for growing businesses that need advanced automation',
      features: [
        '5 automation workflows',
        'Advanced AI assistant',
        'Priority support',
        'Up to 5,000 AI interactions',
        'Custom integrations',
        'Advanced analytics',
        'A/B testing tools',
        'Team collaboration',
        'API access',
        'White-label branding',
      ],
      popular: true,
      color: 'accent',
    },
    {
      name: 'Enterprise',
      price: billingPeriod === 'monthly' ? 2997 : 29970,
      originalPrice: billingPeriod === 'monthly' ? 3597 : 35970,
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'For large organizations requiring unlimited automation',
      features: [
        'Unlimited workflows',
        'Custom AI solutions',
        'Dedicated support manager',
        'Unlimited AI interactions',
        'Enterprise integrations',
        'Custom dashboards',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment',
        'Custom training',
        'Priority feature requests',
        '24/7 phone support',
      ],
      popular: false,
      color: 'secondary',
    },
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20"
    >
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
              Choose the perfect plan for your business. All plans include our core automation features with varying limits and support levels.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={billingPeriod === 'monthly' ? 'text-accent font-medium' : 'text-muted'}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-surface rounded-full p-1 transition-colors duration-300"
              >
                <div
                  className={`w-6 h-6 bg-accent rounded-full transition-transform duration-300 ${
                    billingPeriod === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={billingPeriod === 'yearly' ? 'text-accent font-medium' : 'text-muted'}>
                Yearly
              </span>
              {billingPeriod === 'yearly' && (
                <span className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative card ${
                  plan.popular ? 'ring-2 ring-accent scale-105' : ''
                } hover:scale-105 transition-transform duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                  <p className="text-muted text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    {billingPeriod === 'yearly' && (
                      <div className="text-muted line-through text-lg">
                        ${plan.originalPrice.toLocaleString()}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-text">
                      ${plan.price.toLocaleString()}
                      <span className="text-lg text-muted font-normal">{plan.period}</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className={`block w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-accent text-primary hover:bg-accent/90'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Compare Plans
            </h2>
            <p className="text-muted">
              Detailed comparison of all features across our plans
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-text font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-text font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 text-accent font-semibold">Professional</th>
                  <th className="text-center py-4 px-6 text-text font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="py-4 px-6 text-muted">Automation Workflows</td>
                  <td className="text-center py-4 px-6 text-text">2</td>
                  <td className="text-center py-4 px-6 text-text">5</td>
                  <td className="text-center py-4 px-6 text-text">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-muted">AI Interactions</td>
                  <td className="text-center py-4 px-6 text-text">1,000</td>
                  <td className="text-center py-4 px-6 text-text">5,000</td>
                  <td className="text-center py-4 px-6 text-text">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-muted">Support</td>
                  <td className="text-center py-4 px-6 text-text">Email</td>
                  <td className="text-center py-4 px-6 text-text">Priority</td>
                  <td className="text-center py-4 px-6 text-text">Dedicated</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-muted">Custom Integrations</td>
                  <td className="text-center py-4 px-6 text-muted">❌</td>
                  <td className="text-center py-4 px-6 text-accent">✅</td>
                  <td className="text-center py-4 px-6 text-accent">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-muted">API Access</td>
                  <td className="text-center py-4 px-6 text-muted">❌</td>
                  <td className="text-center py-4 px-6 text-accent">✅</td>
                  <td className="text-center py-4 px-6 text-accent">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-text mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted mb-8">
              Join thousands of businesses already saving time and money with BizAut.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Free Trial
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4">
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PricingPage;