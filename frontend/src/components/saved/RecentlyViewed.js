import React from 'react';
import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import savedData from '../../data/saved.json';

function RecentlyViewed({ items }) {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    // Find the full destination data from saved destinations
    const fullDestination = savedData.savedDestinations.find(d => d.id === item.id) ||
                          savedData.favorites.find(d => d.id === item.id);

    // Navigate to detail page with the complete destination data
    navigate(`/destination/${item.id}`, {
      state: {
        destination: fullDestination || {
          ...item,
          description: "Experience the beauty and culture of this amazing destination.",
          category: "Featured"
        }
      }
    });
  };

  return (
    <div className="p-6 pt-20">
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors cursor-pointer group"
            >
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <FaClock className="text-sm" />
                    <span className="text-sm">{item.viewedAt}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">{item.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-cyan-300/70">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>{item.bestTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mb-4">
            <FaClock className="mx-auto h-12 w-12 text-cyan-400/50" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-200 mb-2">No Recent Views</h3>
          <p className="text-cyan-300/70">
            Your recently viewed destinations will appear here.
          </p>
        </div>
      )}
    </div>
  );
}

export default RecentlyViewed; 