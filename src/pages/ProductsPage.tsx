import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data';

export const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured (default order)
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/60">
          
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-white rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:outline-none text-slate-800 shadow-inner transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-slate-600 mr-2">
              <SlidersHorizontal className="h-5 w-5" />
              <span className="text-sm font-bold">Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white/80 border border-white text-slate-800 text-sm font-semibold rounded-xl py-2.5 pl-3 pr-8 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none shadow-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Categories */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/60 sticky top-24">
              <div className="flex items-center gap-2 font-bold text-emerald-900 mb-6 pb-4 border-b border-white/40">
                <Filter className="h-5 w-5 text-emerald-600" />
                Categories
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory('All')}
                  className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors flex justify-between items-center ${
                    activeCategory === 'All' 
                      ? 'bg-emerald-600 text-white shadow-md' 
                      : 'text-slate-700 hover:bg-white/60'
                  }`}
                >
                  <span>All Products</span>
                  <span className={`text-xs px-2 py-1 rounded-md font-bold ${activeCategory === 'All' ? 'bg-emerald-700 text-white' : 'bg-white/50 text-slate-500'}`}>
                    {PRODUCTS.length}
                  </span>
                </button>
                
                {CATEGORIES.map(category => {
                  const count = PRODUCTS.filter(p => p.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors flex justify-between items-center ${
                        activeCategory === category 
                          ? 'bg-emerald-600 text-white shadow-md' 
                          : 'text-slate-700 hover:bg-white/60'
                      }`}
                    >
                      <span>{category}</span>
                      <span className={`text-xs px-2 py-1 rounded-md font-bold ${activeCategory === category ? 'bg-emerald-700 text-white' : 'bg-white/50 text-slate-500'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 pb-4 border-b border-white/40">
              <h2 className="text-2xl font-black text-slate-800">
                {activeCategory === 'All' ? 'All Products' : activeCategory}
              </h2>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Showing {filteredProducts.length} results
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white/40 backdrop-blur-md rounded-[2rem] shadow-sm border border-white/60">
                <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">No products found</h3>
                <p className="text-slate-500 max-w-sm mx-auto font-medium">
                  We couldn't find any products matching your search. Try checking your spelling or selecting a different category.
                </p>
                <button 
                  onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                  className="mt-6 text-emerald-700 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
