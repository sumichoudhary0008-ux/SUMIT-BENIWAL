import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Truck, Clock, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const featuredProducts = activeCategory === 'All' 
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-[2.5rem] relative overflow-hidden shadow-xl group py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block bg-emerald-400/30 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
                  100% Fresh Guaranteed
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Fresh groceries <br /> delivered in minutes
                </h1>
                <p className="text-lg text-emerald-50 max-w-md">
                  Get farm-fresh produce, daily essentials, and premium snacks delivered right to your doorstep.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/products" className="bg-white text-emerald-700 px-8 py-3 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition-transform flex items-center gap-2">
                    Shop Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <div className="bg-white/20 backdrop-blur-md flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/30">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-emerald-600 bg-emerald-200" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-white">10k+ Happy Customers</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Fresh Groceries Layout" 
                  className="w-full object-cover rounded-[2rem] shadow-2xl relative z-10 border-4 border-white/40"
                />
                {/* Floating Badges */}
                <div className="absolute top-10 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Fast Delivery</p>
                      <p className="text-sm font-bold text-slate-900">Under 30 Mins</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/60 shadow-xl py-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-emerald-600 text-white p-3 rounded-2xl shadow-md">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Free Shipping</h4>
                <p className="text-sm text-slate-500 font-medium">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-emerald-600 text-white p-3 rounded-2xl shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">100% Secure</h4>
                <p className="text-sm text-slate-500 font-medium">We ensure secure payment</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-emerald-600 text-white p-3 rounded-2xl shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">24/7 Support</h4>
                <p className="text-sm text-slate-500 font-medium">Dedicated support anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 flex-1 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-800 mb-2">Featured Products</h2>
              <p className="text-slate-500 font-medium">Handpicked fresh items for you</p>
            </div>
            <Link to="/products" className="text-emerald-700 font-bold hover:underline flex items-center gap-1 bg-white/40 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/60 shadow-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="flex overflow-x-auto pb-4 mb-6 gap-3 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('All')}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-bold transition-colors shadow-sm ${
                activeCategory === 'All' 
                  ? 'bg-emerald-600 text-white shadow-emerald-200 shadow-lg' 
                  : 'bg-white/60 backdrop-blur-md text-slate-700 border border-white hover:bg-white/80'
              }`}
            >
              All Items
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-bold transition-colors shadow-sm ${
                  activeCategory === category 
                    ? 'bg-emerald-600 text-white shadow-emerald-200 shadow-lg' 
                    : 'bg-white/60 backdrop-blur-md text-slate-700 border border-white hover:bg-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
            {featuredProducts.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500 font-medium">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 max-w-7xl mx-auto w-full">
        <div className="bg-emerald-600 rounded-[2.5rem] relative overflow-hidden shadow-xl p-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-white">
            <div className="space-y-4 max-w-xl text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-black leading-tight">Get 20% off your first order!</h2>
              <p className="text-emerald-100 text-lg font-medium">Use code <span className="font-mono bg-white text-emerald-700 px-3 py-1 rounded-xl font-bold ml-1 shadow-sm">FRESH20</span> at checkout.</p>
            </div>
            <Link to="/products" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-2xl font-bold text-lg transition-transform active:scale-95 shadow-lg flex-shrink-0">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
