import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import YouTubeAds from './pages/services/YouTubeAds';
import SpotifyAds from './pages/services/SpotifyAds';
import AppleMusicAds from './pages/services/AppleMusicAds';
import InstagramGrowth from './pages/services/InstagramGrowth';
import InstagramFeaturing from './pages/services/InstagramFeaturing';
import DigitalPublications from './pages/services/DigitalPublications';
import MusicSubmission from './pages/MusicSubmission';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/youtube-ads" element={<YouTubeAds />} />
              <Route path="/services/spotify-ads" element={<SpotifyAds />} />
              <Route path="/services/apple-music-ads" element={<AppleMusicAds />} />
              <Route path="/services/instagram-growth" element={<InstagramGrowth />} />
              <Route path="/services/instagram-featuring" element={<InstagramFeaturing />} />
              <Route path="/services/digital-publications" element={<DigitalPublications />} />
              <Route path="/submit-music" element={<MusicSubmission />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;