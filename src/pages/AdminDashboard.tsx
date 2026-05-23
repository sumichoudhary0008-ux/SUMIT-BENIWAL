import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  DollarSign,
  Plus,
  Pencil,
  Trash2,
  MoreVertical,
  LogOut
} from 'lucide-react';
import { PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

const stats = [
  { name: 'Total Revenue', value: '$45,231.89', icon: DollarSign, change: '+20.1%', trend: 'up' },
  { name: 'Orders', value: '+573', icon: ShoppingCart, change: '+10.5%', trend: 'up' },
  { name: 'Active Users', value: '2,845', icon: Users, change: '-4.2%', trend: 'down' },
  { name: 'Conversion Rate', value: '3.24%', icon: TrendingUp, change: '+1.2%', trend: 'up' },
];

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen flex flex-col md:flex-row shadow-inner relative z-10">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white/40 backdrop-blur-md border-r border-white/60 md:min-h-screen md:sticky md:top-0 md:h-screen flex flex-col z-20 shadow-xl">
        <div className="p-6 border-b border-white/40 flex items-center justify-between">
          <span className="font-black text-xl tracking-tight text-slate-800">
            Admin<span className="text-emerald-600">Panel</span>
          </span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {['Overview', 'Products', 'Orders', 'Customers', 'Analytics'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeTab === item 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                  : 'text-slate-600 hover:bg-white/60 hover:text-slate-900 border border-transparent blur-0'
              }`}
            >
              {item === 'Overview' && <LayoutDashboard className="w-5 h-5" />}
              {item === 'Products' && <Package className="w-5 h-5" />}
              {item === 'Orders' && <ShoppingCart className="w-5 h-5" />}
              {item === 'Customers' && <Users className="w-5 h-5" />}
              {item === 'Analytics' && <TrendingUp className="w-5 h-5" />}
              {item}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/40">
          <Link 
            to="/"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-red-600 hover:bg-red-50 hover:border hover:border-red-100 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Exit Dashboard
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-800">{activeTab}</h1>
              <p className="text-sm text-slate-500 mt-1 font-medium tracking-wide">
                Manage your store and view insights.
              </p>
            </div>
            
            {activeTab === 'Products' && (
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-bold rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-emerald-200 flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Product
              </button>
            )}
          </div>

          {activeTab === 'Overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={stat.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/40 backdrop-blur-md p-6 rounded-[2rem] shadow-sm border border-white/60 hover:shadow-xl transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600 shadow-inner">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-sm font-black flex items-center gap-1 px-2 py-1 rounded-lg ${
                          stat.trend === 'up' ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'
                        }`}>
                          {stat.change} 
                          <TrendingUp className={`w-3 h-3 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                        </span>
                      </div>
                      <h3 className="text-slate-500 font-bold">{stat.name}</h3>
                      <p className="text-2xl font-black text-slate-900 mt-1">{stat.value}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Recent Orders Overview */}
              <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-xl border border-white/60 overflow-hidden">
                <div className="p-6 border-b border-white/40 flex justify-between items-center">
                  <h2 className="font-black text-xl text-slate-800">Recent Orders</h2>
                  <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline transition-colors">
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/30 text-slate-500 text-sm font-medium border-b border-white/60">
                        <th className="p-4">Order ID</th>
                        <th className="p-4">Customer</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/40 text-sm">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i} className="hover:bg-white/50 transition-colors">
                          <td className="p-4 font-black text-slate-800">#ORD-{1000 + i}</td>
                          <td className="p-4 font-medium text-slate-600">Customer {i}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-xl text-xs font-bold shadow-sm ${
                              i % 3 === 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {i % 3 === 0 ? 'Pending' : 'Delivered'}
                            </span>
                          </td>
                          <td className="p-4 font-black text-slate-800">${(Math.random() * 100 + 20).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Products' && (
            <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-xl border border-white/60 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/30 text-slate-500 text-sm font-medium border-b border-white/60">
                      <th className="p-4 w-16">Image</th>
                      <th className="p-4">Product Name</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Stock</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/40">
                    {PRODUCTS.map((product) => (
                      <tr key={product.id} className="hover:bg-white/50 transition-colors">
                        <td className="p-4">
                          <img src={product.image} alt={product.name} className="w-10 h-10 rounded-2xl object-cover bg-emerald-50 shadow-inner" />
                        </td>
                        <td className="p-4 font-black text-slate-800">{product.name}</td>
                        <td className="p-4 text-slate-600 font-medium text-sm">{product.category}</td>
                        <td className="p-4 font-black text-slate-800 text-sm">${product.price.toFixed(2)}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 shadow-sm">
                            In Stock
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-end gap-2 text-slate-400">
                            <button className="p-1 hover:text-emerald-600 transition-colors bg-white/60 rounded-lg"><Pencil className="w-4 h-4" /></button>
                            <button className="p-1 hover:text-red-600 transition-colors bg-white/60 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                            <button className="p-1 hover:text-slate-800 transition-colors bg-white/60 rounded-lg"><MoreVertical className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {['Orders', 'Customers', 'Analytics'].includes(activeTab) && (
            <div className="bg-white/40 backdrop-blur-md p-12 rounded-[2.5rem] shadow-xl border border-white/60 text-center">
              <Package className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-slate-800 mb-2">Module Under Construction</h3>
              <p className="text-slate-500 font-medium max-w-sm mx-auto">
                The {activeTab.toLowerCase()} functionality is being built and will be available in the next release.
              </p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
