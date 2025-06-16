import React from 'react';
import { FaFilter, FaSearch, FaSort } from 'react-icons/fa';

function NotificationFilter({ activeFilter, onFilterChange, onSearch }) {
  return (
    <div className="p-4 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search notifications..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 pl-10 bg-gray-800/50 border border-cyan-900/50 rounded-xl text-cyan-200 placeholder-cyan-500 focus:outline-none focus:border-cyan-500"
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500" />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            activeFilter === 'all'
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-800/50 text-cyan-300 hover:bg-gray-800/70'
          } transition-colors`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('unread')}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            activeFilter === 'unread'
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-800/50 text-cyan-300 hover:bg-gray-800/70'
          } transition-colors`}
        >
          Unread
        </button>
        <button
          onClick={() => onFilterChange('mentions')}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            activeFilter === 'mentions'
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-800/50 text-cyan-300 hover:bg-gray-800/70'
          } transition-colors`}
        >
          Mentions
        </button>
        <button
          onClick={() => onFilterChange('interactions')}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            activeFilter === 'interactions'
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-800/50 text-cyan-300 hover:bg-gray-800/70'
          } transition-colors`}
        >
          Interactions
        </button>
        <button
          onClick={() => onFilterChange('updates')}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            activeFilter === 'updates'
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-800/50 text-cyan-300 hover:bg-gray-800/70'
          } transition-colors`}
        >
          Updates
        </button>
      </div>

      {/* Sort Options */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-cyan-300">
          <FaSort className="text-sm" />
          <span className="text-sm">Sort by:</span>
        </div>
        <select className="bg-gray-800/50 border border-cyan-900/50 rounded-lg px-3 py-1 text-sm text-cyan-300 focus:outline-none focus:border-cyan-500">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="type">Type</option>
        </select>
      </div>
    </div>
  );
}

export default NotificationFilter; 