import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaHeart, FaBookmark, FaShareAlt, FaInfoCircle, FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import inspirationData from '../../data/inspiration.json';
import savedData from '../../data/saved.json';

function DestinationDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [destination, setDestination] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    // First check if we have data in the navigation state
    if (location.state?.destination) {
      setDestination(location.state.destination);
      setIsLiked(location.state.destination.isFavorite);
      return;
    }

    // If not, look for the destination in our data sources
    const currentDestination = 
      inspirationData.featuredDestinations.find(d => d.id === parseInt(id)) ||
      savedData.savedDestinations.find(d => d.id === parseInt(id)) ||
      savedData.favorites.find(d => d.id === parseInt(id));

    if (currentDestination) {
      setDestination(currentDestination);
      setIsLiked(currentDestination.isFavorite);
    }
  }, [id, location.state]);

  const showToast = (message, type = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <div className="text-cyan-300">Loading...</div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    showToast(isLiked ? 'Removed from favorites' : 'Added to favorites', 'success');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    showToast(isSaved ? 'Removed from saved' : 'Added to saved', 'success');
  };

  const handleShare = async () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-y-0 ${
          toast.type === 'error' ? 'bg-red-500' : 'bg-cyan-600'
        } text-white z-50`}>
          {toast.message}
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900/80 text-white transition-colors"
        >
          <FaArrowLeft />
        </button>

        {/* Destination Title and Location */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{destination.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-cyan-300">
                <FaMapMarkerAlt />
                <span>{destination.location}</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <FaCalendarAlt />
                <span>Best Time: {destination.bestTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isLiked ? 'bg-cyan-600 text-white' : 'bg-cyan-600/20 text-cyan-300'
            } hover:bg-cyan-600/40 transition-colors`}
          >
            <FaHeart />
            <span>{isLiked ? 'Liked' : 'Like'}</span>
          </button>
          <button 
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isSaved ? 'bg-cyan-600 text-white' : 'bg-cyan-600/20 text-cyan-300'
            } hover:bg-cyan-600/40 transition-colors`}
          >
            <FaBookmark />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 transition-colors"
          >
            <FaShareAlt />
            <span>Share</span>
          </button>
        </div>

        {/* Description */}
        <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
            <FaInfoCircle />
            About {destination.title}
          </h2>
          <p className="text-cyan-200 leading-relaxed">
            {destination.description}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button className="flex items-center justify-center gap-2 p-4 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 transition-colors">
            <FaMapMarkedAlt className="text-xl" />
            <span>View on Map</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 transition-colors">
            <FaCalendarAlt className="text-xl" />
            <span>Plan a Visit</span>
          </button>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-800/50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Travel Tips</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>
              <span>Best time to visit: {destination.bestTime}</span>
            </li>
            <li className="flex items-start gap-3 text-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>
              <span>Category: {destination.category}</span>
            </li>
            <li className="flex items-start gap-3 text-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>
              <span>Location: {destination.location}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail; 