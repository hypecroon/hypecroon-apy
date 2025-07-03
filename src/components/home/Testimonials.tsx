import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marcus Johnson',
      role: 'Independent Artist',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'Hypecroon transformed my music career. Within 3 months, my monthly Spotify listeners went from 2K to 85K. Their YouTube ads strategy is incredible.',
      rating: 5,
      results: '4,200% increase in monthly listeners'
    },
    {
      name: 'Sarah Chen',
      role: 'Digital Entrepreneur',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The Instagram growth service exceeded all expectations. My following grew by 150K in 6 months, and engagement rates are through the roof.',
      rating: 5,
      results: '150K+ new followers in 6 months'
    },
    {
      name: 'David Rodriguez',
      role: 'Music Producer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'Their Apple Music promotion got my tracks featured on major playlists. The ROI has been phenomenal - my revenue increased by 300%.',
      rating: 5,
      results: '300% revenue increase'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped artists and brands achieve extraordinary growth across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-pink-300 absolute -top-2 -left-2" />
                <p className="text-gray-300 leading-relaxed italic pl-4">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="text-sm font-semibold text-pink-300">
                  {testimonial.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can accelerate your growth and achieve similar results for your brand.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-pink-500 text-black px-8 py-4 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold"
            >
              Schedule Your Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;