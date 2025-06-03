import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Award, Truck, Clock, ChevronRight } from 'lucide-react';
import ProductCard from '../components/Products/ProductCard';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  const categories = Array.from(new Set(products.map(product => product.category)));
  const selectedCategories = categories.slice(0, 3);
  
  return (
    <div>
      <section className="relative bg-blue-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://avatars.mds.yandex.net/i?id=377e104b6f2fe85a1c4affb33800e501cc7ea590-4054908-images-thumbs&n=13')" 
          }}
        />
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Премиальные компьютерные комплектующие для энтузиастов
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Соберите систему своей мечты с помощью наших высококачественных компонентов по конкурентоспособным ценам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Закупайся прямо сейчас :)
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <Award className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
                <p className="text-gray-600">На всю продукцию распространяется гарантия производителя и гарантия качества.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <Truck className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">Бесплатная 2-дневная доставка при заказе на сумму более 100 долларов. Быстрая доставка по всей стране</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7</h3>
                <p className="text-gray-600">Можешь заказать комплектующие в любое время</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <ShoppingCart className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Простой возврат</h3>
                <p className="text-gray-600">если вам не понравился товар или с ним что то не так, можете вернуть его в течение 30 дней</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Лидеры продаж</h2>
            <Link 
              to="/products" 
              className="text-blue-700 hover:text-blue-900 flex items-center"
            >
              Посмотреть все товары
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

      {selectedCategories.map((category, index) => (
        <section key={category} className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">{category} </h2>
              <Link 
                to={`/products?category=${category}`} 
                className="text-blue-700 hover:text-blue-900 flex items-center"
              >
                Посмотреть все {category}
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
      
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готов закупить комплектующие для своего компа?</h2>
            <p className="text-xl opacity-90 mb-8">
              тогда просто нажми на кнопку :)
            </p>
            <Link 
              to="/products" 
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg inline-block transition-colors"
            >
              Закупаться
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;