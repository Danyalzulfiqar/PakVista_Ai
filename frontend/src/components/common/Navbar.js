import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaGlobe } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src="/logo.png"
                alt="PakVista"
              />
              <span className="text-2xl font-bold text-teal-500">PakVista</span>
            </Link>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            {/* Get Started Button */}
            <button
              onClick={() => navigate('/chat')}
              className="hidden md:block px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
            >
              Get Started
            </button>

            {/* Language Button */}
            <button className="p-2 rounded-full hover:bg-gray-100 relative group">
              <FaGlobe className="h-5 w-5 text-gray-600" />
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 px-4 right-0 mt-2">
                <span className="text-sm text-gray-700">Translate</span>
              </div>
            </button>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <FaUser className="h-4 w-4 text-gray-600" />
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 md:hidden"
              >
                <FaBars className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className="block px-3 py-2 rounded-md text-base font-medium text-teal-500 hover:text-teal-600 hover:bg-gray-50"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 