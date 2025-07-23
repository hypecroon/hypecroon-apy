import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Automate Your Business with AI';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Workflows',
      description: 'Intelligent automation that learns and adapts to your business processes',
      stat: '40% efficiency boost',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive drag-and-drop interface',
      stat: '5-minute setup',
    },
    {
      icon: '🔗',
      title: 'Seamless Integrations',
      description: 'Connect with 500+ tools and services your business already uses',
      stat: '500+ integrations',
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Monitor performance and ROI with comprehensive dashboards',
      stat: '3x ROI average',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'BizAut.ai transformed our operations. We saved 20+ hours weekly and increased productivity by 40%.',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, GrowthCo',
      content: 'The ROI was evident within the first month. Our team can now focus on strategic work instead of repetitive tasks.',
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, ScaleFast',
      content: 'Best investment we made this year. The AI chatbot alone handles 80% of our customer inquiries.',
      avatar: '👩‍🚀',
    },
  ];

  const valueProps = [
    { text: 'Save 20+ hours weekly', icon: '⏰' },
    { text: 'Increase efficiency by 40%', icon: '📈' },
    { text: 'ROI in 3 months', icon: '💰' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="gradient-overlay"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-accent/20 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 6,
                delay: i * 0.8,
                repeat: Infinity,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed"
            >
              Transform workflows, save time, increase efficiency with intelligent automation
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mt-8"
            >
              {valueProps.map((prop, index) => (
                <div key={index} className="flex items-center space-x-2 bg-surface/50 px-4 py-2 rounded-full">
                  <span className="text-2xl">{prop.icon}</span>
                  <span className="text-accent font-medium">{prop.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <Link to="/pricing" className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4">
                Book Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Everything you need to automate your business processes and scale efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted mb-4">
                  {feature.description}
                </p>
                <div className="text-accent font-bold">
                  {feature.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Widget */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <h3 className="text-3xl font-bold text-gradient mb-6">
              Calculate Your ROI
            </h3>
            <p className="text-muted mb-8">
              See how much time and money you could save with BizAut.ai
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/10 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-text">Hours Saved Weekly</div>
              </div>
              <div className="bg-secondary/10 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent">$50K+</div>
                <div className="text-text">Annual Savings</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent">3x</div>
                <div className="text-text">ROI in 3 Months</div>
              </div>
            </div>
            <Link to="/pricing" className="btn-primary">
              View Pricing Plans
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted">
              Join thousands of businesses transforming their operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-text">{testimonial.name}</div>
                    <div className="text-accent text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Stay Updated
            </h3>
            <p className="text-muted mb-8">
              Get the latest automation tips, case studies, and product updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-text"
              />
              <button className="btn-primary px-6 py-3">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;