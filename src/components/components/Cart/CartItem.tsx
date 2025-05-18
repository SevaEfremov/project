import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity } = item;
  const itemTotal = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-center py-4 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-4">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover rounded"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-800 hover:text-blue-700 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-blue-800 font-semibold mt-1">${product.price.toFixed(2)}</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-6">
        <button 
          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
          className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="px-3 py-1 text-center w-12">{quantity}</span>
        
        <button 
          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
          className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
          aria-label="Increase quantity"
          disabled={quantity >= product.stock}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      {/* Item Total */}
      <div className="text-right sm:w-24 mb-4 sm:mb-0 sm:mr-4">
        <p className="font-semibold text-gray-900">${itemTotal.toFixed(2)}</p>
      </div>
      
      {/* Remove Button */}
      <button 
        onClick={() => onRemove(product.id)}
        className="text-red-500 hover:text-red-700 transition"
        aria-label="Remove item"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;