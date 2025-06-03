import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Truck } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

const TAX_RATE = 0.08; 
const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 9.99;

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [checkoutMessage, setCheckoutMessage] = useState('');
  
  const handleCheckout = () => {
    setCheckoutMessage('Функционал оформления заказа будет реализован в полной версии сайта');

    setTimeout(() => {
      clearCart();
      setCheckoutMessage('Спасибо за покупку. (это дэмо версия сайта)');
    }, 3000);
  };
  
  const calculateShipping = (subtotal: number) => {
    return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  };
  
  const subtotal = totalPrice;
  const shipping = calculateShipping(subtotal);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;
  
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-8">
        <Link to="/products" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Продолжить покупки
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>
      
      {items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold">
                  Товары 
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Очистить корзину
                </button>
              </div>
              
              <div className="divide-y divide-gray-200">
                {items.map(item => (
                  <CartItem
                    key={item.product.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <div className="flex items-center mb-4">
                <Truck className="h-5 w-5 text-blue-700 mr-3" />
                <h3 className="font-semibold text-gray-800">Информация о доставке</h3>
              </div>
              
              <p className="text-gray-600 mb-2">
                Бесплатная доставка начинается от ${FREE_SHIPPING_THRESHOLD}.
              </p>
              
              <p className="text-gray-600">
                Доставка: ${SHIPPING_COST.toFixed(2)} (2-4 рабочих дня)
              </p>
            </div>
          </div>
          
          <div>
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
              itemCount={totalItems}
              onCheckout={handleCheckout}
            />
            
            {checkoutMessage && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                {checkoutMessage}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Корзина пуста</h2>
          <p className="text-gray-600 mb-6">Добавьте товары в корзину что бы они тут отображались.</p>
          <Link 
            to="/products" 
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium inline-block transition-colors"
          >
            Начать покупки
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;