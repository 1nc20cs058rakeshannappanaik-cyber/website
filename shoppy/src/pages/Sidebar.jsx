import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    'Women T-shirts',
    'Women Tops And Tunics',
    'Analog Watches',
    'Bangles & Bracelets',
    'Backbeats',
    'Belts',
    'Blazers',
    'Bodysuits',
    'Boots',
    'Boxers'
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className={`${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 fixed lg:static top-0 left-0 w-80 bg-white p-6 shadow-sm lg:shadow-none h-screen lg:h-auto overflow-y-auto z-40 transition-transform duration-300`}>
      {/* Mobile Close Button */}
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <X size={24} />
      </button>

      {/* Filters Header */}
      <div className="mb-6 pt-8 lg:pt-0">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Filters
        </h2>
        <p className="text-xs text-gray-500 mt-2">1000+ Products</p>
      </div>

      {/* Category Section */}
      <div className="border-t border-gray-200">
        <button
          onClick={() => setExpandedCategory(!expandedCategory)}
          className="w-full flex items-center justify-between py-4 text-gray-800 font-semibold hover:text-gray-600 transition"
        >
          <span>Category</span>
          <ChevronDown
            size={20}
            className={`transition-transform ${
              expandedCategory ? 'rotate-180' : ''
            }`}
          />
        </button>

        {expandedCategory && (
          <div className="pb-4">
            {/* Search Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            {/* Category Checkboxes */}
            <div className="space-y-3">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Additional Filter Sections can be added here */}
      <div className="border-t border-gray-200 mt-6 pt-4">
        <button className="w-full text-left text-sm font-semibold text-gray-800 hover:text-blue-600 transition py-2">
          Price Range
        </button>
      </div>

      <div className="border-t border-gray-200 mt-6 pt-4">
        <button className="w-full text-left text-sm font-semibold text-gray-800 hover:text-blue-600 transition py-2">
          Brand
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
