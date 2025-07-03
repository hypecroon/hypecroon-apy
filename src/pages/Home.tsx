import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import CampaignResults from '../components/home/CampaignResults';
import BlogPreview from '../components/home/BlogPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CampaignResults />
      <Pricing />
      <Testimonials />
      <BlogPreview />
    </div>
  );
};

export default Home;