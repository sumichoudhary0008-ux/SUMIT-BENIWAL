import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Sun, Moon, Menu, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export const Navigation: React.FC = () => {
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isCartOpen = location.pathname === '/cart';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Store className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-lg md:text-xl tracking-tight text-emerald-900 line-clamp-1">
                Shree Bala Ji <span className="text-emerald-600">Grocery Store</span>
              </span>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
            <input
              type="text"
              placeholder="Search for groceries..."
              className="w-full bg-white/80 border border-white rounded-2xl py-2 pl-12 pr-4 text-sm focus:ring-2 focus:ring-emerald-500/20 text-slate-800 shadow-inner transition-colors focus:outline-none"
            />
            <Search className="absolute left-4 top-2.5 h-4 w-4 text-emerald-400" />
          </div>

          {/* Icons & Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-white/60 text-emerald-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link
              to="/login"
              className="hidden sm:flex items-center gap-2 p-2 rounded-xl hover:bg-white/60 text-emerald-700 transition-colors"
            >
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Login</span>
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-emerald-200 transition-all"
            >
              <ShoppingCart className="h-4 w-4" />
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>

            <button className="md:hidden p-2 rounded-xl hover:bg-white/60 text-emerald-700 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Search Bar - Mobile */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for groceries..."
            className="w-full bg-white/80 border border-white rounded-2xl py-2 pl-12 pr-4 text-sm focus:ring-2 focus:ring-emerald-500/20 text-slate-800 shadow-inner transition-colors focus:outline-none"
          />
          <Search className="absolute left-4 top-2.5 h-4 w-4 text-emerald-400" />
        </div>
      </div>
    </header>
  );
};
