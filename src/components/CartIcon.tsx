import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartIcon: React.FC = () => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <Link
      to="/cart"
      className="relative p-2 text-gray-300 hover:text-pink-300 transition-colors duration-200"
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-pink-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;