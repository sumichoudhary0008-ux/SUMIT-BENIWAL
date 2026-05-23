import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, ArrowLeft, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  
  const deliveryFee = cartTotal > 50 || cartTotal === 0 ? 0 : 5;
  const finalTotal = cartTotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-xl border border-white/60 p-8 text-center space-y-6 relative z-10">
          <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner">
            <ShoppingBag className="h-10 w-10 text-emerald-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-800">Your cart is empty</h2>
            <p className="text-slate-500 font-medium tracking-wide">
              Looks like you haven't added any fresh groceries to your cart yet.
            </p>
          </div>
          <Link 
            to="/products"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-4 rounded-2xl transition-all shadow-lg flex justify-center items-center gap-2 transform active:scale-95 hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" /> Let's go shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/products" className="p-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl text-slate-500 hover:text-slate-800 transition-colors shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-black text-slate-800">Shopping Cart</h1>
          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold ml-auto shadow-sm">
            {items.length} Items
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-xl border border-white/60 overflow-hidden">
              <div className="p-4 md:p-6 border-b border-white/40 flex justify-between items-center">
                <h2 className="font-bold text-xl text-slate-800">Order Summary</h2>
                <button 
                  onClick={clearCart}
                  className="text-sm font-bold text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" /> Clear All
                </button>
              </div>
              <ul className="divide-y divide-white/40">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.li 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, height: 0 }}
                      className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 bg-transparent"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-2xl bg-emerald-50 mix-blend-multiply shrink-0 shadow-inner"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-slate-800 truncate text-lg">{item.name}</h3>
                            <p className="text-sm text-slate-500 mt-1 font-medium">{item.category} • {item.unit}</p>
                          </div>
                          <p className="font-black text-xl text-emerald-700 shrink-0 ml-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-2 bg-white/60 rounded-xl p-1 border border-white border-b-slate-100 shadow-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center bg-white text-emerald-700 rounded-lg shadow-sm font-bold hover:bg-emerald-50 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-bold text-slate-900 w-6 text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center bg-emerald-600 text-white rounded-lg shadow-sm font-bold hover:bg-emerald-700 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 bg-white/40 rounded-xl transition-colors shadow-sm"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-xl border border-white/60 p-6 sticky top-24">
              <h2 className="font-black text-xl text-slate-800 mb-6">Payment Details</h2>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Subtotal</span>
                  <span className="font-black text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Delivery Fee</span>
                  {deliveryFee === 0 ? (
                    <span className="font-bold text-emerald-600">Free</span>
                  ) : (
                    <span className="font-black text-slate-900">${deliveryFee.toFixed(2)}</span>
                  )}
                </div>
                {deliveryFee > 0 && (
                  <div className="text-xs text-emerald-600 font-bold text-right">
                    Add ${(50 - cartTotal).toFixed(2)} more for free delivery
                  </div>
                )}
                
                <div className="pt-4 border-t border-white/40">
                  <div className="flex justify-between items-center text-lg md:text-xl">
                    <span className="font-black text-slate-800">Total</span>
                    <span className="font-black text-emerald-700">${finalTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1 text-right">
                    Includes taxes and fees
                  </p>
                </div>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-4 rounded-2xl transition-all hover:-translate-y-1 active:scale-95 shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Secure checkout
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
