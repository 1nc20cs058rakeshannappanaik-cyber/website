import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ChevronDown } from 'lucide-react';

const Explore = () => {
  const [sortBy, setSortBy] = useState('Relevance');

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
    <div className="flex bg-gray-50 min-h-screen">
       
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header with Title and Sort */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Products For You</h1>
          
          {/* Sort Dropdown */}
          <div className="flex items-center">
            <span className="text-gray-600 font-medium mr-3">Sort by :</span>
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2 pr-8 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
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
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2 line-clamp-2 hover:text-gray-900">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-xl font-bold text-gray-900 mb-2">
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
