import React from 'react';
import { FaSearch, FaFilter, FaBookmark } from 'react-icons/fa';
import DestinationCard from '../inspiration/DestinationCard';

function SavedDestinations({ destinations }) {
  return (
    <div className="p-6">
      {/* Search and Filter Bar */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search saved destinations..."
            className="w-full px-4 py-2 pl-10 bg-gray-800/50 border border-cyan-900/50 rounded-xl text-cyan-200 placeholder-cyan-500 focus:outline-none focus:border-cyan-500"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500" />
        </div>
        <button className="px-4 py-2 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 rounded-xl transition-colors flex items-center gap-2">
          <FaFilter />
          <span>Filter</span>
        </button>
      </div>

      {/* Destinations Grid */}
      {destinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="h-[400px]">
              <DestinationCard 
                destination={{
                  ...destination,
                  // Ensure all required fields are present
                  id: destination.id,
                  title: destination.title,
                  location: destination.location,
                  description: destination.description,
                  bestTime: destination.bestTime,
                  image: destination.image,
                  category: destination.category,
                  isFavorite: destination.isFavorite
                }} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mb-4">
            <FaBookmark className="mx-auto h-12 w-12 text-cyan-400/50" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-200 mb-2">No Saved Destinations</h3>
          <p className="text-cyan-300/70">
            Start saving your favorite destinations to see them here.
          </p>
        </div>
      )}
    </div>
  );
}

export default SavedDestinations; 