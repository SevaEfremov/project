import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Award, Truck, Clock, ChevronRight } from 'lucide-react';
import ProductCard from '../components/Products/ProductCard';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured);
  
  // Get a selection of products by category
  const categories = Array.from(new Set(products.map(product => product.category)));
  const selectedCategories = categories.slice(0, 3); // Take first 3 categories
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        />
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Premium Computer Hardware for Enthusiasts
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Build your dream system with our high-quality components at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
              <Link 
                to="/categories" 
                className="bg-transparent border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <Award className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">All products come with manufacturer warranty and our quality promise.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <Truck className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
                <p className="text-gray-600">Free 2-day shipping on orders over $100. Fast delivery nationwide.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-600">Our tech experts are available 24/7 to help with your questions.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <ShoppingCart className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-600">30-day hassle-free return policy on all purchases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <Link 
              to="/products" 
              className="text-blue-700 hover:text-blue-900 flex items-center"
            >
              View All
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Category Showcase */}
      {selectedCategories.map((category, index) => (
        <section key={category} className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">{category} Products</h2>
              <Link 
                to={`/products?category=${category}`} 
                className="text-blue-700 hover:text-blue-900 flex items-center"
              >
                View All {category} Products
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(product => product.category === category)
                .slice(0, 4)
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream PC?</h2>
            <p className="text-xl opacity-90 mb-8">
              We've got all the components you need to create the perfect system.
            </p>
            <Link 
              to="/products" 
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg inline-block transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;