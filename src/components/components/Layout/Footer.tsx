import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Monitor className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">TechHardware</span>
            </div>
            <p className="text-sm mb-4">
              Компьютерное оборудование премиум-класса для профессионалов, геймеров и энтузиастов. Качественные комплектующие по конкурентоспособным ценам.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Ссылки </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Продукция</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=CPU" className="hover:text-blue-400 transition-colors">Процессоры</Link></li>
              <li><Link to="/products?category=GPU" className="hover:text-blue-400 transition-colors">Видеокарты</Link></li>
              <li><Link to="/products?category=RAM" className="hover:text-blue-400 transition-colors">Память</Link></li>
              <li><Link to="/products?category=Motherboard" className="hover:text-blue-400 transition-colors">Материнская плата</Link></li>
              <li><Link to="/products?category=Storage" className="hover:text-blue-400 transition-colors">Storage</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-blue-400 mt-1 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-400 flex-shrink-0" />
                <span>info@techhardware.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center md:text-left md:flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} TechHardware. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-400 mr-4 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;