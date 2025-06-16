import React from 'react';
import { FaBookmark, FaHeart, FaMapMarkedAlt, FaHistory } from 'react-icons/fa';

function SavedHeader({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'all', label: 'All', icon: FaBookmark },
    { id: 'destinations', label: 'Destinations', icon: FaMapMarkedAlt },
    { id: 'favorites', label: 'Favorites', icon: FaHeart },
    { id: 'recent', label: 'Recently Viewed', icon: FaHistory },
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-2 bg-gray-800/90 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b border-cyan-900">
      <div className="-ml-3 min-w-0 flex-1">
        <h1 className="pl-2 text-xs font-semibold xl:text-base text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">Saved Items</h1>
      </div>
      <div className="flex gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-600 text-white'
                  : 'bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600/40'
              }`}
            >
              <Icon className="text-sm" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SavedHeader; 