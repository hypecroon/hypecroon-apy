import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Check, 
  Plus, 
  Minus, 
  Truck, 
  Shield, 
  RefreshCw,
  ChevronDown,
  ChevronUp,
  X,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  service: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  features: string[];
  description: string;
  image: string;
  badge?: string;
  estimatedDelivery: string;
}

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('premium');

  const product: Product = {
    id: 'youtube-premium',
    name: 'Premium YouTube Ads Campaign',
    service: 'YouTube Marketing',
    price: 450,
    originalPrice: 650,
    rating: 4.9,
    reviewCount: 127,
    inStock: true,
    stockCount: 15,
    features: [
      '20,000 targeted views guaranteed',
      '3 professional video ad creatives',
      'Advanced audience targeting & retargeting',
      'Weekly campaign optimization',
      'A/B testing for optimal performance',
      'Real-time analytics dashboard',
      'Dedicated account manager',
      '60-day campaign duration',
      'YouTube Shorts integration',
      'Conversion tracking setup'
    ],
    description: 'Reach billions of viewers with our premium YouTube advertising package. Our data-driven approach ensures maximum ROI for your video marketing investment with professional creative development and advanced targeting strategies.',
    image: '/Add a subheading.zip - 1.png',
    badge: 'Most Popular',
    estimatedDelivery: 'Campaign starts within 24-48 hours'
  };

  const variants = [
    { id: 'basic', name: 'Basic', price: 150, views: '5,000' },
    { id: 'standard', name: 'Standard', price: 250, views: '10,000' },
    { id: 'premium', name: 'Premium', price: 450, views: '20,000', popular: true },
    { id: 'ultimate', name: 'Ultimate', price: 850, views: '50,000' }
  ];

  const handleAddToCart = async () => {
    if (!product.inStock) return;
    
    setIsAddingToCart(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newItem = {
        ...product,
        quantity,
        variant: selectedVariant,
        addedAt: new Date().toISOString()
      };
      
      setCartItems(prev => [...prev, newItem]);
      setShowSuccess(true);
      setShowMiniCart(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
      setTimeout(() => setShowMiniCart(false), 5000);
      
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  const selectedVariantData = variants.find(v => v.id === selectedVariant);
  const currentPrice = selectedVariantData?.price || product.price;
  const savings = product.originalPrice ? product.originalPrice - currentPrice : 0;
  const discountPercentage = product.originalPrice ? Math.round((savings / product.originalPrice) * 100) : 0;

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
              {product.badge && (
                <div className="absolute top-4 left-4 bg-pink-500 text-black px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {product.badge}
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                <Shield className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-xs text-gray-300">Guaranteed Results</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                <Truck className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-gray-300">Fast Delivery</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                <RefreshCw className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-xs text-gray-300">24/7 Support</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">({product.reviewCount} reviews)</span>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
              <p className="text-gray-400">{product.service}</p>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-4xl font-bold text-white">${currentPrice}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      Save {discountPercentage}%
                    </span>
                  </>
                )}
              </div>
              {savings > 0 && (
                <p className="text-green-400 text-sm">You save ${savings}!</p>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-medium">In Stock</span>
                  <span className="text-gray-400">({product.stockCount} available)</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-400 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Variant Selection */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Choose Package</h3>
              <div className="grid grid-cols-2 gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedVariant === variant.id
                        ? 'border-pink-500 bg-pink-500/10'
                        : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                    }`}
                  >
                    {variant.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-pink-500 text-black px-2 py-1 rounded text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="font-semibold text-white">{variant.name}</div>
                      <div className="text-sm text-gray-400">{variant.views} views</div>
                      <div className="text-lg font-bold text-pink-300">${variant.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-700 rounded-lg bg-gray-900">
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                    className="p-3 hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4 text-gray-300" />
                  </button>
                  <span className="px-6 py-3 text-white font-semibold min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(quantity + 1)}
                    disabled={quantity >= product.stockCount}
                    className="p-3 hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-lg"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4 text-gray-300" />
                  </button>
                </div>
                <span className="text-gray-400 text-sm">
                  {product.stockCount - quantity} remaining
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAddingToCart}
                className={`
                  w-full h-14 rounded-xl font-bold text-lg transition-all duration-300 transform
                  flex items-center justify-center space-x-3 shadow-lg
                  ${product.inStock 
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-black hover:scale-[1.02] hover:shadow-pink-500/25 hover:shadow-2xl active:scale-[0.98]' 
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }
                  ${isAddingToCart ? 'animate-pulse' : ''}
                `}
                style={{ minHeight: '56px' }}
                aria-label={`Add ${quantity} ${product.name} to cart`}
              >
                {isAddingToCart ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Adding to Cart...</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart - ${(currentPrice * quantity).toLocaleString()}</span>
                  </>
                )}
              </button>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className={`
                  w-full h-14 rounded-xl font-bold text-lg transition-all duration-300 transform
                  flex items-center justify-center space-x-3 shadow-lg border-2
                  ${product.inStock
                    ? 'border-pink-500 text-pink-300 hover:bg-pink-500 hover:text-black hover:scale-[1.02] hover:shadow-pink-500/25 hover:shadow-2xl active:scale-[0.98]'
                    : 'border-gray-700 text-gray-400 cursor-not-allowed pointer-events-none'
                  }
                `}
                style={{ minHeight: '56px' }}
                aria-label="Proceed to checkout"
              >
                <span>Buy Now - ${(currentPrice * quantity).toLocaleString()}</span>
              </Link>

              {/* Wishlist Button */}
              <button
                className="w-full h-12 rounded-xl border border-gray-700 text-gray-300 hover:border-pink-500 hover:text-pink-300 transition-all duration-200 flex items-center justify-center space-x-2"
                aria-label="Add to wishlist"
              >
                <Heart className="h-4 w-4" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">Fast Campaign Launch</p>
                  <p className="text-gray-400 text-sm">{product.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <button
                onClick={() => setExpandedFeatures(!expandedFeatures)}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <h3 className="text-lg font-semibold text-white">What's Included</h3>
                {expandedFeatures ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div className={`space-y-2 transition-all duration-300 ${expandedFeatures ? 'max-h-96' : 'max-h-32 overflow-hidden'}`}>
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Success/Error Messages */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center space-x-3 animate-slide-in">
            <CheckCircle className="h-5 w-5" />
            <span>Added to cart successfully!</span>
          </div>
        )}

        {showError && (
          <div className="fixed top-4 right-4 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center space-x-3 animate-slide-in">
            <AlertCircle className="h-5 w-5" />
            <span>Failed to add to cart. Please try again.</span>
          </div>
        )}

        {/* Mini Cart Preview */}
        {showMiniCart && (
          <div className="fixed top-4 right-4 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 p-4 w-80 animate-slide-in">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">Added to Cart</h3>
              <button
                onClick={() => setShowMiniCart(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover" />
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{product.name}</p>
                <p className="text-gray-400 text-xs">Qty: {quantity} × ${currentPrice}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link
                to="/cart"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded text-center text-sm hover:bg-gray-700 transition-colors"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                className="flex-1 bg-pink-500 text-black px-4 py-2 rounded text-center text-sm hover:bg-pink-400 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductPage;