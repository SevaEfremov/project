import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface FilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  maxPrice: number;
}

const ProductFilter: React.FC<FilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  maxPrice
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    onCategoryChange(null);
    onSearchChange('');
    onSortChange('featured');
    onPriceRangeChange([0, maxPrice]);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </form>

        {/* Filter Toggle for Mobile */}
        <button
          onClick={toggleFilters}
          className="md:hidden flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>

        {/* Desktop Sorting */}
        <div className="hidden md:block">
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Filter Section - Toggleable on Mobile, Always Visible on Desktop */}
      <div className={`mt-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-900">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Clear all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Categories */}
          <div>
            <h4 className="font-medium text-sm mb-2 text-gray-700">Categories</h4>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              <button
                onClick={() => onCategoryChange(null)}
                className={`block w-full text-left px-2 py-1 text-sm rounded ${
                  selectedCategory === null 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'hover:bg-gray-100'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`block w-full text-left px-2 py-1 text-sm rounded ${
                    selectedCategory === category 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium text-sm mb-2 text-gray-700">Price Range</h4>
            <div className="px-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min={0}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-blue-600"
              />
            </div>
          </div>

          {/* Mobile Sorting */}
          <div className="md:hidden">
            <h4 className="font-medium text-sm mb-2 text-gray-700">Sort By</h4>
            <select
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;