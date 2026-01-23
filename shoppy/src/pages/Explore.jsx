import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ChevronDown, Menu } from 'lucide-react';

const Explore = () => {
  const [sortBy, setSortBy] = useState('Relevance');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Superior Unique Lipstick...',
      image:  '/src/assets/product1.jpg',
      price: '₹138',
      rating: 4.0,
      reviews: '6021 Reviews',
      delivery: 'Free Delivery'
    },
    {
      id: 2,
      name: 'Latest Attractive Women...',
      image: '',
      price: '₹154',
      rating: 3.9,
      reviews: '2150 Reviews',
      delivery: 'Free Delivery'
    },
    {
      id: 3,
      name: 'Trimmers',
      image: '',
      price: '₹187',
      rating: 4.0,
      reviews: 'Supplier',
      delivery: 'Free Delivery'
    },
    {
      id: 4,
      name: 'Bluetooth Headphones...',
      image: '',
      price: '₹298',
      rating: 4.3,
      reviews: '1178 Reviews',
      delivery: 'Free Delivery'
    },
    {
      id: 5,
      name: 'Premium Wireless Earbuds',
      image:  '/src/assets/product1.jpg',
      price: '₹249',
      rating: 4.2,
      reviews: '3245 Reviews',
      delivery: 'Free Delivery'
    },
    {
      id: 6,
      name: 'Smart Watch Pro',
      image: '',
      price: '₹299',
      rating: 4.4,
      reviews: '1890 Reviews',
      delivery: 'Free Delivery'
    },
    {
      id: 7,
      name: 'Designer Sunglasses',
      image: '',
      price: '₹199',
      rating: 4.1,
      reviews: '2567 Reviews',
      delivery: 'Free Delivery'
    },
    {
      id: 8,
      name: 'Stylish Backpack',
      image: '',
      price: '₹349',
      rating: 4.5,
      reviews: '4123 Reviews',
      delivery: 'Free Delivery'
    }
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen relative">
       
      {/* Overlay for mobile menu */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Header with Title and Sort */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Menu size={20} />
              <span className="text-sm">Filters</span>
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Products For You</h1>
          </div>
          
          {/* Sort Dropdown */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <span className="text-gray-600 font-medium text-sm">Sort by:</span>
            <div className="relative inline-block w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full sm:w-auto px-4 py-2 pr-8 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sm"
              >
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Sellers</option>
                <option>Top Rated</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative bg-gray-100 h-35 sm:h-48 md:h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="p-2 md:p-4">
                <h3 className="text-xs md:text-sm font-medium text-gray-700 mb-2 line-clamp-2 hover:text-gray-900">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {product.price}
                </p>

                {/* Delivery */}
                <p className="text-xs font-semibold text-green-600 mb-3">
                  {product.delivery}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    {product.rating}★
                  </span>
                  <span className="text-xs text-gray-600">
                    {product.reviews}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Explore;
