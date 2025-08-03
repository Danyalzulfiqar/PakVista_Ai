import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaClock, FaMapMarkerAlt, FaHeart, FaBookmark, FaShareAlt, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import inspirationData from '../../data/inspiration.json';
import StoryCard from './StoryCard';
import { db } from '../../firebase';
import { collection, addDoc, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';

function StoryDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [relatedStories, setRelatedStories] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true);
      
      // First try to find in local JSON data (seeded stories)
      const currentStory = inspirationData.travelStories.find(s => s.id === parseInt(id));
      
      if (currentStory) {
        setStory(currentStory);
        // Find related stories (excluding current story)
        const related = inspirationData.travelStories
          .filter(s => s.id !== parseInt(id))
          .slice(0, 2);
        setRelatedStories(related);
      } else {
        // If not found in JSON, try to fetch from Firestore
        try {
          const q = query(collection(db, 'travelStories'), where('id', '==', parseInt(id)));
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            const storyDoc = querySnapshot.docs[0];
            const storyData = storyDoc.data();
            setStory(storyData);
            
            // Get related stories from Firestore
            const allStoriesSnapshot = await getDocs(collection(db, 'travelStories'));
            const allStories = allStoriesSnapshot.docs
              .map(doc => doc.data())
              .filter(s => s.id !== parseInt(id))
              .slice(0, 2);
            setRelatedStories(allStories);
          } else {
            console.log('Story not found with ID:', id);
          }
        } catch (error) {
          console.error('Error fetching story from Firestore:', error);
        }
      }
      
      setLoading(false);
    };

    if (id) {
      fetchStory();
    }
  }, [id]);

  const showToast = (message, type = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  // Helper to send notification to story author with logging
  const sendNotificationToAuthor = async (type) => {
    if (!story || !user) {
      console.log('No story or user, skipping notification');
      return;
    }
    try {
      // Find author by displayName
      const q = query(collection(db, 'users'), where('displayName', '==', story.author.name));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const authorDoc = snap.docs[0];
        const authorUid = authorDoc.data().uid;
        let actionText = '';
        if (type === 'like') actionText = 'liked';
        if (type === 'save') actionText = 'saved';
        if (type === 'share') actionText = 'shared';
        console.log('Attempting to add notification for authorUid:', authorUid);
        await addDoc(collection(db, 'notifications'), {
          userId: authorUid,
          type,
          status: 'unread',
          title: `New ${type.charAt(0).toUpperCase() + type.slice(1)}`,
          message: `${user.displayName || user.email} ${actionText} your story '${story.title}'`,
          time: 'just now',
          action: false,
        });
        console.log('Notification added for authorUid:', authorUid);
      } else {
        console.log('No author found with displayName:', story.author.name);
      }
    } catch (err) {
      console.error('Notification error:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <div className="text-cyan-300">Loading...</div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <div className="text-cyan-300">Story not found</div>
      </div>
    );
  }

  const handleLike = async () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    showToast(newLiked ? 'Added to likes' : 'Removed from likes', 'success');
    if (newLiked) {
      try {
        await sendNotificationToAuthor('like');
        console.log('Notification sent');
      } catch (err) {
        console.error('Notification error:', err);
      }
    }
  };

  const handleSave = async () => {
    setIsSaved(!isSaved);
    showToast(isSaved ? 'Removed from saved' : 'Added to saved', 'success');
    if (!isSaved) await sendNotificationToAuthor('save');
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
      await sendNotificationToAuthor('share');
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