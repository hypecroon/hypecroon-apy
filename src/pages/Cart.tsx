import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, Tag, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'hype10') {
      setDiscount(0.1);
    } else if (promoCode.toLowerCase() === 'first20') {
      setDiscount(0.2);
    }
  };

  const subtotal = getTotalPrice();
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <ShoppingCart className="h-8 w-8 text-pink-300 mr-4" />
          <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Add some amazing services to get started!</p>
            <Link
              to="/"
              className="inline-flex items-center bg-pink-500 text-black px-8 py-4 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold"
            >
              Browse Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.service}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                          <p className="text-gray-400 text-sm">{item.service}</p>
                          <span className="inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs mt-1">
                            {item.packageType}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-300 text-sm mb-2">Includes:</p>
                        <ul className="text-gray-400 text-xs space-y-1">
                          {item.features.slice(0, 3).map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                          {item.features.length > 3 && (
                            <li>• +{item.features.length - 3} more features</li>
                          )}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                          >
                            <Minus className="h-4 w-4 text-gray-300" />
                          </button>
                          <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                          >
                            <Plus className="h-4 w-4 text-gray-300" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-white">${item.price * item.quantity}</div>
                          {item.quantity > 1 && (
                            <div className="text-sm text-gray-400">${item.price} each</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 sticky top-6">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-sm"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-pink-500 text-black rounded-lg hover:bg-pink-400 transition-colors duration-200 font-medium text-sm"
                    >
                      Apply
                    </button>
                  </div>
                  {discount > 0 && (
                    <div className="mt-2 flex items-center text-green-400 text-sm">
                      <Gift className="h-4 w-4 mr-1" />
                      {discount * 100}% discount applied!
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({discount * 100}%)</span>
                      <span>-${discountAmount}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-800 pt-3">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  to="/checkout"
                  className="w-full bg-pink-500 text-black px-6 py-4 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold text-center block"
                >
                  Proceed to Checkout
                </Link>

                {/* Continue Shopping */}
                <Link
                  to="/"
                  className="w-full mt-3 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium text-center block border border-gray-700"
                >
                  Continue Shopping
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Secure Checkout</p>
                    <div className="flex justify-center space-x-4 text-gray-500">
                      <div className="text-xs">🔒 SSL Encrypted</div>
                      <div className="text-xs">💳 Secure Payment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;