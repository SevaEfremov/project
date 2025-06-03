import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, ChevronRight, Star, Check, AlertCircle, Truck } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/Products/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (!productId) {
      navigate('/products');
      return;
    }
    
    const id = parseInt(productId);
    const foundProduct = products.find(p => p.id === id);
    
    if (!foundProduct) {
      navigate('/products');
      return;
    }
    
    setProduct(foundProduct);
    
    const related = products
      .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
      .slice(0, 4);
      
    setRelatedProducts(related);
  }, [productId, navigate]);
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Загрузка...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-blue-700">Главная</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to="/products" className="hover:text-blue-700">Товары</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to={`/products?category=${product.category}`} className="hover:text-blue-700">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>
      
      <Link to="/products" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Назад к товарам
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400' : ''}`}
                />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} из 5</span>
          </div>
          
          <div className="text-2xl font-bold text-blue-900 mb-6">
            ${product.price.toFixed(2)}
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="flex items-center mb-6">
            {product.stock > 0 ? (
              <>
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-green-600 font-medium">
                  Осталось ({product.stock} товаров)
                </span>
              </>
            ) : (
              <>
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-red-600 font-medium">Нет в наличии</span>
              </>
            )}
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-4 text-gray-700">Количество:</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-12 text-center border-none focus:outline-none focus:ring-0"
                />
                
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                  aria-label="Increase quantity"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-colors ${
                product.stock === 0 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-blue-700 hover:bg-blue-800 text-white'
              }`}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Добавить в корзину
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Truck className="h-5 w-5 text-blue-700 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Бесплатная доставка</h3>
                <p className="text-sm text-gray-600">
                  От $100. Быстрая доставка 2-4 рабочих дня.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Характеристики</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex">
                  <span className="text-gray-600 mr-2">{key}:</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Связанные продукты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;