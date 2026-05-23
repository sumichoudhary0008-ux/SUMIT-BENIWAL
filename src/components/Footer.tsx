import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Store className="h-8 w-8 text-green-600 dark:text-green-500" />
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                Shree Bala Ji <span className="text-green-600 dark:text-green-500">Grocery Store</span>
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Your one-stop destination for fresh groceries, daily essentials, and more. Delivered right to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/products" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">All Products</Link></li>
              <li><Link to="/categories" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">Categories</Link></li>
              <li><Link to="/offers" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">Special Offers</Link></li>
              <li><Link to="/about" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/faq" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">Shipping Information</Link></li>
              <li><Link to="/returns" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 shrink-0" />
                <span>Near Mukesh Medical, Ward No. 6, Village Jatan, Tehsil Bhadra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600 shrink-0" />
                <span>9001416093</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600 shrink-0" />
                <span>support@shreebalajigrocery.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Shree Bala Ji Grocery Store. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/privacy" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-green-600 dark:hover:text-green-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
