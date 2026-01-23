import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Shoppy</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Returns</a></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Security</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: support@shoppy.com</li>
              <li className="text-gray-300">Phone: 1-800-SHOPPY</li>
              <li className="text-gray-300">Hours: 24/7 Support</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white text-2xl">f</a>
                <a href="#" className="text-gray-300 hover:text-white text-2xl">𝕏</a>
                <a href="#" className="text-gray-300 hover:text-white text-2xl">📷</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Shoppy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition">Sitemap</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition">Accessibility</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition">Manage Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
