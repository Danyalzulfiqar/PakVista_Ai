import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaComments, 
  FaSearch, 
  FaBell, 
  FaBookmark, 
  FaLightbulb, 
  FaPlus,
  FaUser,
  FaInfoCircle,
  FaBars,
  FaSignOutAlt,
  FaCog
} from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const userButtonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

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

  const navItems = [
    { icon: <FaComments />, label: 'Chats', path: '/chat' },
    { icon: <FaSearch />, label: 'Explore', path: '/explore' },
    { icon: <FaBell />, label: 'Notifications', path: '/notifications' },
    { icon: <FaBookmark />, label: 'Saved', path: '/saved' },
    { icon: <FaLightbulb />, label: 'Inspiration', path: '/inspiration' },
    { icon: <FaPlus />, label: 'Create', path: '/create' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed inset-y-0 left-0 z-50 flex w-16 flex-col bg-gray-800/90 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isExpanded ? 'sm:w-64' : ''
      } border-r border-cyan-900/50 shadow-lg`}
    >
      {/* Logo Section */}
      <div className="flex h-16 items-center justify-center border-b border-cyan-900/50">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:bg-cyan-500/30 transition-colors"></div>
          </div>
          <span className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${
            isExpanded ? 'sm:block' : 'hidden'
          }`}>
            PakVista
          </span>
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-1 flex-col px-2 py-4">
        <ul className="space-y-2">
          {/* Expand/Collapse Button */}
          <li>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-full flex items-center rounded-xl p-3 text-cyan-300 transition-all duration-300 hover:bg-cyan-600/10 hover:text-cyan-400`}
            >
              <span className="text-xl"><FaBars /></span>
              <span className={`ml-3 font-medium ${isExpanded ? 'sm:block' : 'hidden'}`}>
                {isExpanded ? 'Collapse' : 'Expand'}
              </span>
            </button>
          </li>

          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center rounded-xl p-3 text-cyan-300 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-cyan-600/20 text-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'hover:bg-cyan-600/10 hover:text-cyan-400'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`ml-3 font-medium ${isExpanded ? 'sm:block' : 'hidden'}`}>
                  {item.label}
                </span>
                {isActive(item.path) && (
                  <div className="absolute left-0 w-1 h-8 bg-cyan-500 rounded-r-full"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* User Section */}
      <div className="border-t border-cyan-900/50 relative">
        <div
          ref={userButtonRef}
          className="flex items-center space-x-3 p-2 rounded-xl hover:bg-cyan-600/10 transition-colors cursor-pointer"
          onClick={() => setIsUserMenuOpen((open) => !open)}
        >
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <FaUser className="h-5 w-5 text-white" />
            </div>
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></div>
          </div>
          <div className={`${isExpanded ? 'sm:block' : 'hidden'}`}>
            <p className="text-sm font-medium text-cyan-200">Traveler</p>
            <p className="text-xs text-cyan-400">Premium Member</p>
          </div>
        </div>
        
        {/* User Dropdown Menu */}
        {isUserMenuOpen && (
          <div
            ref={userMenuRef}
            className="absolute left-2 right-2 bottom-24 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-cyan-900/50 py-2 z-50"
            onClick={e => e.stopPropagation()}
          >
            <button className="w-full flex items-center space-x-2 p-2 rounded-xl text-cyan-300 hover:bg-cyan-600/10 hover:text-cyan-400 transition-colors">
              <FaCog className="h-4 w-4" />
              {isExpanded && <span className="text-sm">Settings</span>}
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-2 p-2 rounded-xl text-cyan-300 hover:bg-cyan-600/10 hover:text-cyan-400 transition-colors"
            >
              <FaSignOutAlt className="h-4 w-4" />
              {isExpanded && <span className="text-sm">Sign Out</span>}
            </button>
          </div>
        )}
        <div className="mt-4 space-y-2 px-3">
        <button 
            className="w-full flex items-center space-x-2 p-2 rounded-xl text-cyan-300 hover:bg-cyan-600/10 hover:text-cyan-400 transition-colors"
        >
          <FaInfoCircle className="h-4 w-4" />
          <span className={`${isExpanded ? 'sm:block' : 'hidden'} text-sm`}>Company Info</span>
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar; 