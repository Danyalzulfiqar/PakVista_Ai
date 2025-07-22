import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaGlobe, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const userButtonRef = useRef(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target)
      ) {
        setIsUserMenuOpen(false);
      }
    }
    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/login');
  };

  return (
    <nav className="relative z-50 bg-gray-800/90 backdrop-blur-md border-b border-cyan-900/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
              <img
                  className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110"
                src="/logo.png"
                alt="PakVista"
              />
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:bg-cyan-500/30 transition-colors"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                PakVista
              </span>
            </Link>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            {/* Get Started Button */}
            <button
              onClick={() => navigate('/chat')}
              className="hidden md:flex items-center px-4 py-2 bg-cyan-600/20 text-cyan-300 rounded-full hover:bg-cyan-600/30 hover:text-cyan-400 transition-colors"
            >
              Get Started
            </button>

            {/* Language Button */}
            <div className="relative">
              <button className="p-2 rounded-full text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors">
                <FaGlobe className="h-5 w-5" />
              </button>
              <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-cyan-900/50 py-2">
                <div className="px-4 py-2 text-sm text-cyan-300">Select Language</div>
                <div className="border-t border-cyan-900/50 my-1"></div>
                <button className="w-full px-4 py-2 text-left text-sm text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors">
                  English
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors">
                  اردو
                </button>
              </div>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                ref={userButtonRef}
                onClick={() => setIsUserMenuOpen((open) => !open)}
                className="flex items-center space-x-2 p-2 rounded-full text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors"
              >
                <div className="relative">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <FaUser className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></div>
                </div>
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div
                  ref={userMenuRef}
                  className="absolute right-0 mt-2 w-48 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-cyan-900/50 py-2 z-50"
                  onClick={e => e.stopPropagation()}
                  style={{ display: 'block' }}
                >
                  <div className="px-4 py-2">
                    <p className="text-sm font-medium text-cyan-200">Traveler</p>
                    <p className="text-xs text-cyan-400">Premium Member</p>
                  </div>
                  <div className="border-t border-cyan-900/50 my-1"></div>
                  <button className="w-full px-4 py-2 text-left text-sm text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <FaCog className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <FaSignOutAlt className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors md:hidden"
              >
              <FaBars className="h-5 w-5" />
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/90 backdrop-blur-md border-t border-cyan-900/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-xl text-base font-medium text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className="block px-3 py-2 rounded-xl text-base font-medium text-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors"
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