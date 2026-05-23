import React from 'react';
import { Star, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { items, addToCart, updateQuantity } = useCart();
  
  const cartItem = items.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white/80 backdrop-blur-md border border-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-all flex flex-col group"
    >
      <div className="relative aspect-square bg-emerald-50 rounded-2xl mb-4 overflow-hidden flex items-center justify-center shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h4 className="font-bold text-slate-900 line-clamp-2 leading-tight flex-1">
            {product.name}
          </h4>
        </div>
        
        <div className="text-xs text-slate-500 mb-2">
          {product.category}, {product.unit}
        </div>
        
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold text-slate-700">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex flex-col">
            <span className="font-black text-emerald-700 text-lg">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {quantity > 0 ? (
            <div className="flex items-center gap-2 bg-emerald-50 rounded-xl p-1 border border-emerald-100">
              <button 
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-7 h-7 flex items-center justify-center bg-white text-emerald-700 rounded-lg shadow-sm hover:bg-emerald-100 transition-colors font-bold"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-sm font-semibold text-slate-900 w-4 text-center">
                {quantity}
              </span>
              <button 
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="w-7 h-7 flex items-center justify-center bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition-colors font-bold"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => addToCart(product)}
              className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold hover:bg-emerald-200 transition-colors shrink-0"
              aria-label="Add to cart"
            >
              <Plus className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
