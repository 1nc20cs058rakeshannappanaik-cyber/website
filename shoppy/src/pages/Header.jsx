import React, { useState } from 'react';
import { ShoppingCart, LogIn, Search, UserCircle } from 'lucide-react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();
 

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Name - Left */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Shoppy</h1>
          </div>

          {/* Search Bar - Middle (Hidden on mobile) */}
          <form onSubmit={handleSearch} className="flex flex-1 mx-4 md:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
             
            </div>
          </form>

          {/* Cart and Login - Right */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Search Icon for Mobile */}
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>

            {/* Login Button - Hidden on mobile */}
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:flex items-center space-x-1 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <LogIn size={20} />
              <span>Login</span>
            </button>
            
            {/* Cart Button */}
            <button className="relative flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* User Circle - Hidden on small mobile */}
            <button 
              onClick={() => navigate('/profile')}
              className="relative text-gray-700 hover:text-blue-600 transition-colors">
              <UserCircle size={20} />
            </button>

          </div>
        </div>

       
      </div>

      {/* Login Modal */}
      <Login isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </header>
  );
}
