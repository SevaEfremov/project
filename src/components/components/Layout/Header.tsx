import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Monitor } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Monitor className="h-8 w-8 text-blue-800" />
            <span className="ml-2 text-xl font-bold text-blue-900">TechHardware</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-700 transition">Главная</Link>
            <Link to="/products" className="text-gray-800 hover:text-blue-700 transition">Товары</Link>
          </nav>

          {/* Search, Cart, Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Form - Desktop */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:outline-none text-sm w-40 lg:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="ml-2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </form>

            {/* Cart Link */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-800" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-800"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              <Link to="/" className="text-gray-800 hover:text-blue-700 py-2 transition">Главная</Link>
              <Link to="/products" className="text-gray-800 hover:text-blue-700 py-2 transition">Товары</Link>
              
              {/* Search Form - Mobile */}
              <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-100 rounded-full px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-none focus:outline-none text-sm flex-grow"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;