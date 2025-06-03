import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
              Рекомендуемые
            </span>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-gray-900 font-semibold text-lg mb-1 transition-colors group-hover:text-blue-700">
              {product.name}
            </h3>
            <div className="flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 inline mr-1" />
              <span>{product.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mb-2">
            {product.category}
          </p>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-blue-900 font-bold">${product.price.toFixed(2)}</span>
            
            <button
              onClick={handleAddToCart}
              className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-2 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;