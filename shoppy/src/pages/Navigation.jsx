import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, User, Crown, Watch, Flower, Zap, Droplet, MoreHorizontal } from 'lucide-react';


//hello
export default function Navigation() {
  const navigate = useNavigate();
  const categories = [
    { id: 1, label: 'Men', icon: User, color: 'bg-blue-100' },
    { id: 2, label: 'Women', icon: Users, color: 'bg-pink-100' },
    { id: 3, label: 'Premium', icon: Crown, color: 'bg-yellow-100' },
    { id: 4, label: 'Classic', icon: Watch, color: 'bg-gray-100' },
    { id: 5, label: 'Floral', icon: Flower, color: 'bg-green-100' },
    { id: 6, label: 'Woody', icon: Zap, color: 'bg-orange-100' },
    { id: 7, label: 'Aquatic', icon: Droplet, color: 'bg-cyan-100' },
     { id: 8, label: 'More', icon: MoreHorizontal, color: 'bg-red-100' },
  ];

  const handleCategoryClick = (category) => {
    if (category.label === 'More') {
      navigate('/explore');
    } else {
      console.log('Clicked:', category.label);
    }
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 overflow-x-auto pb-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="flex flex-col items-center gap-2 transition-transform hover:scale-110 focus:outline-none"
              >
                {/* Image Container */}
                <div className={`${category.color} rounded-full p-4 flex items-center justify-center transition-all hover:shadow-lg`}>
                  <IconComponent size={32} className="text-gray-700" />
                </div>
                
                {/* Label */}
                <span className="text-sm font-semibold text-gray-800 text-center">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
