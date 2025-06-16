import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaHeart, FaShareAlt, FaBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function DestinationCard({ destination }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleCardClick = () => {
    navigate(`/destination/${destination.id}`, {
      state: {
        destination: {
          id: destination.id,
          title: destination.title,
          location: destination.location,
          description: destination.description,
          bestTime: destination.bestTime,
          image: destination.image,
          category: destination.category,
          isFavorite: destination.isFavorite
        }
      }
    });
  };

  const handleLike = async (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    showToast(isLiked ? 'Removed from favorites' : 'Added to favorites', 'success');
  };

  const handleSave = async (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    showToast(isSaved ? 'Removed from saved' : 'Added to saved', 'success');
  };

  const handleShare = async (e) => {
    e.stopPropagation();
    const shareData = {
      title: destination.title,
      text: destination.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        showToast('Destination shared successfully!', 'success');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!', 'success');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        showToast('Failed to share. Please try again.', 'error');
      }
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Toast Notification */}
      {toast.show && (
        <div className={`absolute top-4 right-4 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform translate-y-0 ${
          toast.type === 'error' ? 'bg-red-500' : 'bg-cyan-600'
        } text-white z-50 text-sm`}>
          {toast.message}
        </div>
      )}

      <div className="aspect-w-16 aspect-h-9 flex-shrink-0">
        <img
          src={destination.image}
          alt={destination.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-cyan-300 mb-2">
          <FaMapMarkerAlt className="text-sm" />
          <span className="text-sm">{destination.location}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{destination.title}</h3>
        <p className="text-cyan-200 text-sm mb-4 line-clamp-2">{destination.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center gap-2 text-cyan-300">
            <FaCalendarAlt className="text-sm" />
            <span className="text-sm">Best Time: {destination.bestTime}</span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleLike}
              className={`p-2 rounded-full ${
                isLiked ? 'bg-cyan-600 text-white' : 'bg-cyan-600/20 text-cyan-300'
              } hover:bg-cyan-600/40 transition-colors`}
            >
              <FaHeart className="text-sm" />
            </button>
            <button 
              onClick={handleSave}
              className={`p-2 rounded-full ${
                isSaved ? 'bg-cyan-600 text-white' : 'bg-cyan-600/20 text-cyan-300'
              } hover:bg-cyan-600/40 transition-colors`}
            >
              <FaBookmark className="text-sm" />
            </button>
            <button 
              onClick={handleShare}
              className="p-2 rounded-full bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 transition-colors"
            >
              <FaShareAlt className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard; 