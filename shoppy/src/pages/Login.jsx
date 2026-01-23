import React, { useState } from 'react';

const Login = ({ isOpen, setIsOpen }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      console.log('Login attempt:', { username, password });
      alert('Login successful!');
      setUsername('');
      setPassword('');
      setIsOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Login Modal */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-2xl max-h-screen overflow-y-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Blue Section */}
          <div className="bg-blue-500 text-white p-6 md:p-12 w-full md:w-1/2 flex flex-col justify-between md:min-h-screen">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Login</h1>
              <p className="text-sm md:text-lg text-blue-100 mb-4 md:mb-8">
                Get access to your Orders, Wishlist and Recommendations
              </p>
            </div>

            {/* Illustration Placeholder */}
            <div className="flex justify-center hidden md:flex">
              <svg
                className="w-48 h-48 text-blue-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-6 md:p-12 w-full md:w-1/2 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>

            <form onSubmit={handleLogin}>
              {/* Username Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                  Username or Email
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username or email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm"
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
                <label className="flex items-center text-gray-600 text-sm">
                  <input type="checkbox" className="mr-2" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-semibold">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 mb-4 text-sm md:text-base"
              >
                Login
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-gray-600 text-sm">
                New to Shoppy?{' '}
                <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
                  Create an account
                </a>
              </p>
            </form>

            {/* Terms & Conditions */}
            <p className="text-xs text-gray-500 text-center mt-6">
              By continuing, you agree to Shoppy's{' '}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
