import React from 'react';
import { ShoppingBag, CreditCard } from 'lucide-react';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  itemCount: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shipping,
  tax,
  total,
  itemCount,
  onCheckout
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Items ({itemCount})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          {shipping > 0 ? (
            <span>${shipping.toFixed(2)}</span>
          ) : (
            <span className="text-green-600">Free</span>
          )}
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={onCheckout}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
      >
        <CreditCard className="h-5 w-5 mr-2" />
        <span>Proceed to Checkout</span>
      </button>
      
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">We Accept</h3>
        <div className="flex space-x-2">
          <div className="bg-gray-100 rounded px-2 py-1 text-xs">Visa</div>
          <div className="bg-gray-100 rounded px-2 py-1 text-xs">Mastercard</div>
          <div className="bg-gray-100 rounded px-2 py-1 text-xs">PayPal</div>
          <div className="bg-gray-100 rounded px-2 py-1 text-xs">Apple Pay</div>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 flex items-center">
        <ShoppingBag className="h-4 w-4 mr-1 text-green-600" />
        <span>Free shipping on orders over $100</span>
      </div>
    </div>
  );
};

export default CartSummary;