import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaComments, 
  FaSearch, 
  FaBell, 
  FaBookmark, 
  FaLightbulb, 
  FaPlus,
  FaUser,
  FaInfoCircle,
  FaBars
} from 'react-icons/fa';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { icon: <FaComments />, label: 'Chats', path: '/chat' },
    { icon: <FaSearch />, label: 'Explore', path: '/explore' },
    { icon: <FaBell />, label: 'Notifications', path: '/notifications' },
    { icon: <FaBookmark />, label: 'Saved', path: '/saved' },
    { icon: <FaLightbulb />, label: 'Inspiration', path: '/inspiration' },
    { icon: <FaPlus />, label: 'Create', path: '/create' },
  ];

  return (
    <nav className={`fixed inset-y-0 left-0 z-50 flex w-16 flex-col bg-white transition-all duration-300 ease-in-out ${isExpanded ? 'sm:w-64' : ''} shadow-md`}>
      {/* Logo Section */}
      <div className="flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className={`text-xl font-bold text-teal-500 ${isExpanded ? 'sm:block' : 'hidden'}`}>PakVista</span>
        </Link>
        {/* <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="hover:bg-gray-100 p-1 rounded-full"
        >
          <FaBars className="h-5 w-5 text-gray-500" />
        </button> */}
      </div>

      {/* Navigation Items */}
      <div className="flex flex-1 flex-col px-2 py-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center rounded-full p-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`ml-3 ${isExpanded ? 'sm:block' : 'hidden'}`}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* User Section */}
      <div className="border-t p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <FaUser className="h-4 w-4 text-gray-600" />
          </div>
          <span className={`${isExpanded ? 'sm:block' : 'hidden'} text-sm font-medium`}>Traveler</span>
        </div>
        <button 
          className="mt-4 w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <FaInfoCircle className="h-4 w-4" />
          <span className={`${isExpanded ? 'sm:block' : 'hidden'} text-sm`}>Company Info</span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar; 