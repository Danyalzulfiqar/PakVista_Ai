import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaClock, FaMapMarkerAlt, FaHeart, FaBookmark, FaShareAlt, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import inspirationData from '../../data/inspiration.json';
import StoryCard from './StoryCard';

function StoryDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [relatedStories, setRelatedStories] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    // Find the current story
    const currentStory = inspirationData.travelStories.find(s => s.id === parseInt(id));
    if (currentStory) {
      setStory(currentStory);
      // Find related stories (excluding current story)
      const related = inspirationData.travelStories
        .filter(s => s.id !== parseInt(id))
        .slice(0, 2);
      setRelatedStories(related);
    }
  }, [id]);

  const showToast = (message, type = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <div className="text-cyan-300">Loading...</div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    showToast(isLiked ? 'Removed from likes' : 'Added to likes', 'success');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    showToast(isSaved ? 'Removed from saved' : 'Added to saved', 'success');
  };

  const handleShare = async () => {
    const shareData = {
      title: story.title,
      text: story.content,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        showToast('Story shared successfully!', 'success');
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!', 'success');
      }
    } catch (error) {
      // Don't show error for user cancellation
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
      <div className="relative h-[60vh] w-full">
        <img
          src={story.image}
          alt={story.title}
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

        {/* Story Title and Author */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{story.title}</h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center">
                <span className="text-cyan-300 font-bold">{story.author.avatar}</span>
              </div>
              <div>
                <h3 className="text-white font-medium">{story.author.name}</h3>
                <p className="text-cyan-300 text-sm">{story.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Story Meta */}
        <div className="flex items-center gap-6 mb-8 text-cyan-300">
          <div className="flex items-center gap-2">
            <FaClock className="text-sm" />
            <span>{story.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-sm" />
            <span>{story.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-sm" />
            <span>{story.date}</span>
          </div>
        </div>

        {/* Story Actions */}
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

        {/* Story Text */}
        <div className="prose prose-invert prose-lg max-w-none">
          {story.fullContent.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-cyan-200 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Stories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">More Stories You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedStories.map(relatedStory => (
              <StoryCard key={relatedStory.id} story={relatedStory} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryDetail; 