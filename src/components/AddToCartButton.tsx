import React, { useState } from 'react';
import { ShoppingCart, CheckCircle, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    service: string;
    price: number;
    features: string[];
    image: string;
    packageType: string;
  };
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product, 
  className = '', 
  size = 'md',
  variant = 'primary'
}) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      addToCart(product);
      setShowSuccess(true);
      
      // Hide success state after 2 seconds
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  const sizeClasses = {
    sm: 'py-2 px-3 text-xs',
    md: 'py-2 px-3 text-xs',
    lg: 'py-3 px-4 text-sm'
  };

  const variantClasses = {
    primary: variant === 'primary' 
      ? 'bg-pink-600 text-white hover:bg-pink-700 hover:shadow-lg' 
      : 'bg-gray-700 text-white hover:bg-gray-600 hover:shadow-lg',
    secondary: 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-pink-500'
  };

  if (showSuccess) {
    return (
      <button
        disabled
        className={`w-full rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 bg-green-600 text-white ${sizeClasses[size]} ${className}`}
      >
        <CheckCircle className="h-4 w-4" />
        <span>Added to Cart!</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`w-full rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${isAdding ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      {isAdding ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Adding...</span>
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  );
};

export default AddToCartButton;