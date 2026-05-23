/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/AdminDashboard';

// Layout wrapper to conditionally hide Navigation/Footer on Admin page
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdminOrLoginRoute = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-[#f3fdf6]">
      {/* Background Mesh Gradient Decor */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-60 -mr-48 -mt-48 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-3xl opacity-60 -ml-32 -mb-32 pointer-events-none z-0"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        {!isAdminOrLoginRoute && <Navigation />}
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        {!isAdminOrLoginRoute && <Footer />}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}
