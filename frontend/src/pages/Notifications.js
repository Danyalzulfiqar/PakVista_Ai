import React, { useState, useEffect } from 'react';
import Sidebar from '../components/common/Sidebar';
import NotificationCard from '../components/notification/NotificationCard';
import NotificationFilter from '../components/notification/NotificationFilter';
import { FaBell, FaCheck, FaTrash } from 'react-icons/fa';
import notificationsData from '../data/notifications.json';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load notifications from data
    setNotifications(notificationsData.notifications);
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      status: 'read'
    })));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = activeFilter === 'all' || 
      (activeFilter === 'unread' && notification.status === 'unread') ||
      (activeFilter === 'mentions' && notification.type === 'mentions') ||
      (activeFilter === 'interactions' && ['like', 'save', 'share'].includes(notification.type)) ||
      (activeFilter === 'updates' && notification.type === 'updates');

    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <Sidebar />
      <div className="flex-1 pl-16">
        <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between bg-gray-800/90 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b border-cyan-900">
          <div className="flex items-center gap-4">
            <h1 className="text-xs font-semibold xl:text-base text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">Notifications</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={handleMarkAllRead}
                className="px-3 py-1 text-sm rounded-full bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 transition-colors flex items-center gap-1"
              >
                <FaCheck className="text-xs" />
                <span>Mark all as read</span>
              </button>
              <button
                onClick={handleClearAll}
                className="px-3 py-1 text-sm rounded-full bg-gray-700/50 hover:bg-gray-700/70 text-cyan-300 transition-colors flex items-center gap-1"
              >
                <FaTrash className="text-xs" />
                <span>Clear all</span>
              </button>
            </div>
          </div>
        </div>
        
        <main className="h-[calc(100vh-64px)] overflow-y-auto">
          <NotificationFilter
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
          />
          
          <div className="p-4 space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(notification => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="mb-4">
                  <FaBell className="mx-auto h-12 w-12 text-cyan-400/50" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-200 mb-2">No Notifications</h3>
                <p className="text-cyan-300/70">
                  {searchQuery ? 'No notifications match your search.' : 'You\'re all caught up!'}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Notifications; 