import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/Products/ProductCard';
import ProductFilter from '../components/Products/ProductFilter';
import { products } from '../data/products';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const searchParam = queryParams.get('search') || '';

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [sortOption, setSortOption] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  const categories = Array.from(new Set(products.map(product => product.category)));
  
  const maxPrice = Math.ceil(Math.max(...products.map(product => product.price)));

  useEffect(() => {
    let result = [...products];
    
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.id - b.id;
        });
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortOption, priceRange]);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {selectedCategory ? `${selectedCategory} Товаров` : 'Все товары'}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length} 
          {filteredProducts.length === 1 ? 'Товар' : ' Товаров'} Найти
        </p>
      </div>
      
      <ProductFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        maxPrice={maxPrice}
      />
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-4">Товаров не найдено</h3>
          <p className="text-gray-600 mb-6">Примените другие фильтры.</p>
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSearchQuery('');
              setPriceRange([0, maxPrice]);
              setSortOption('featured');
            }}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;