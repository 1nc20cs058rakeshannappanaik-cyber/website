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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Login Modal */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-2xl">
        <div className="flex">
          {/* Left Side - Blue Section */}
          <div className="bg-blue-500 text-white p-12 w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Login</h1>
              <p className="text-lg text-blue-100 mb-8">
                Get access to your Orders, Wishlist and Recommendations
              </p>
            </div>

            {/* Illustration Placeholder */}
            <div className="flex justify-center">
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
          <div className="p-12 w-1/2">
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
                <label className="block text-gray-700 font-semibold mb-2">
                  Username or Email
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username or email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center text-gray-600">
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
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 mb-4"
              >
                Login
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-gray-600">
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
