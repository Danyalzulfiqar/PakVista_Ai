import React from 'react';
import { FaBell, FaHeart, FaBookmark, FaShareAlt, FaMapMarkerAlt, FaCalendarAlt, FaCheck, FaTimes } from 'react-icons/fa';

function NotificationCard({ notification }) {
  const getIcon = () => {
    switch (notification.type) {
      case 'like':
        return <FaHeart className="text-pink-500" />;
      case 'save':
        return <FaBookmark className="text-yellow-500" />;
      case 'share':
        return <FaShareAlt className="text-blue-500" />;
      case 'location':
        return <FaMapMarkerAlt className="text-green-500" />;
      case 'event':
        return <FaCalendarAlt className="text-purple-500" />;
      default:
        return <FaBell className="text-cyan-500" />;
    }
  };

  const getStatusColor = () => {
    switch (notification.status) {
      case 'read':
        return 'bg-gray-800/50';
      case 'unread':
        return 'bg-cyan-900/30';
      default:
        return 'bg-gray-800/50';
    }
  };

  return (
    <div className={`p-4 rounded-xl ${getStatusColor()} hover:bg-gray-800/70 transition-colors cursor-pointer group`}>
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-cyan-200 font-medium mb-1">{notification.title}</p>
              <p className="text-cyan-300/70 text-sm">{notification.message}</p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-xs text-cyan-400">{notification.time}</span>
              {notification.status === 'unread' && (
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              )}
            </div>
          </div>
          {notification.action && (
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1 text-sm rounded-full bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 transition-colors flex items-center gap-1">
                <FaCheck className="text-xs" />
                <span>Accept</span>
              </button>
              <button className="px-3 py-1 text-sm rounded-full bg-gray-700/50 hover:bg-gray-700/70 text-cyan-300 transition-colors flex items-center gap-1">
                <FaTimes className="text-xs" />
                <span>Decline</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificationCard; 