import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle, ArrowLeft, User, Mail, Phone, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Billing Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    
    // Billing Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Additional Options
    saveInfo: false,
    newsletter: true,
    terms: false
  });

  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process payment
      setOrderComplete(true);
      clearCart();
    }
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
            <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h1>
            <p className="text-gray-300 mb-6">
              Thank you for your purchase. We'll start working on your campaigns immediately.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <p className="text-white font-semibold">Order #HC-2025-{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}</p>
              <p className="text-gray-400 text-sm">Confirmation email sent to {formData.email}</p>
            </div>
            <div className="space-y-3">
              <Link
                to="/"
                className="w-full bg-pink-500 text-black px-6 py-3 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold block"
              >
                Return to Home
              </Link>
              <Link
                to="/contact"
                className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium block border border-gray-700"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
            <h1 className="text-3xl font-bold text-white mb-4">Cart is Empty</h1>
            <p className="text-gray-300 mb-6">
              You need to add items to your cart before checking out.
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-pink-500 text-black px-8 py-4 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link to="/cart" className="text-gray-400 hover:text-white mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-3xl font-bold text-white">Checkout</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Secure Checkout</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber 
                    ? 'bg-pink-500 text-black' 
                    : 'bg-gray-800 text-gray-400 border border-gray-700'
                }`}>
                  {stepNumber}
                </div>
                <span className={`ml-2 ${step >= stepNumber ? 'text-white' : 'text-gray-400'}`}>
                  {stepNumber === 1 ? 'Information' : stepNumber === 2 ? 'Payment' : 'Review'}
                </span>
                {stepNumber < 3 && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    step > stepNumber ? 'bg-pink-500' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Billing Information */}
              {step === 1 && (
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <User className="h-6 w-6 mr-3 text-pink-300" />
                    Billing Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company/Artist Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-pink-300" />
                      Billing Address
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Country *
                        </label>
                        <select
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <CreditCard className="h-6 w-6 mr-3 text-pink-300" />
                    Payment Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        required
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        required
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleInputChange}
                        className="rounded border-gray-700 bg-gray-800 text-pink-500 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-gray-300">Save payment information for future purchases</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="rounded border-gray-700 bg-gray-800 text-pink-500 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-gray-300">Subscribe to marketing updates and promotions</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 3: Review Order */}
              {step === 3 && (
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-bold text-white mb-6">Review Your Order</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Billing Information</h3>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-300">{formData.firstName} {formData.lastName}</p>
                        <p className="text-gray-300">{formData.email}</p>
                        <p className="text-gray-300">{formData.address}</p>
                        <p className="text-gray-300">{formData.city}, {formData.state} {formData.zipCode}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Payment Method</h3>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-300">**** **** **** {formData.cardNumber.slice(-4)}</p>
                        <p className="text-gray-300">{formData.cardName}</p>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="terms"
                          required
                          checked={formData.terms}
                          onChange={handleInputChange}
                          className="mt-1 rounded border-gray-700 bg-gray-800 text-pink-500 focus:ring-pink-500"
                        />
                        <span className="ml-2 text-gray-300 text-sm">
                          I agree to the <a href="#" className="text-pink-300 hover:text-pink-200">Terms of Service</a> and <a href="#" className="text-pink-300 hover:text-pink-200">Privacy Policy</a>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium border border-gray-700"
                  >
                    Previous
                  </button>
                )}
                
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 bg-pink-500 text-black rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold"
                >
                  {step === 3 ? 'Complete Order' : 'Continue'}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 sticky top-6">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.service}</p>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-white font-semibold">${item.price * item.quantity}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-800">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white pt-3 border-t border-gray-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-green-400 mb-2">
                    <Lock className="h-4 w-4" />
                    <span className="text-sm font-medium">Secure Payment</span>
                  </div>
                  <p className="text-gray-400 text-xs">Your payment information is encrypted and secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;