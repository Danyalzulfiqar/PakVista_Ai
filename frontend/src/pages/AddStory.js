import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { storage, db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/common/Sidebar';

function AddStory() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    title: '',
    fullContent: '',
    readTime: '5',
    location: '',
    date: ''
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const readTimeOptions = [
    { value: '5', label: '5 minutes' },
    { value: '10', label: '10 minutes' },
    { value: '15', label: '15 minutes' },
    { value: '20', label: '20 minutes' },
    { value: '25', label: '25 minutes' },
    { value: '30', label: '30 minutes' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      setImageFile(file);
      setError('');
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    if (!file) return null;
    
    const imageRef = ref(storage, `travel-stories/${user.uid}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setError('Please login to submit a travel story');
      return;
    }

    if (!imageFile) {
      setError('Please select an image for your story');
      return;
    }

    if (!formData.title.trim() || !formData.fullContent.trim() || !formData.location.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Upload image first
      const imageURL = await uploadImage(imageFile);
      
      if (!imageURL) {
        throw new Error('Failed to upload image');
      }

      // Save story to Firestore with the correct structure
      const storyData = {
        title: formData.title,
        content: formData.fullContent.substring(0, 150) + '...', // Short preview
        fullContent: formData.fullContent,
        image: imageURL, // Use 'image' instead of 'imageURL'
        location: formData.location,
        date: formData.date,
        readTime: formData.readTime + ' min read',
        likes: 0,
        saves: 0,
        author: {
          name: user.displayName || 'Traveler', // Use display name or default
          avatar: (user.displayName || 'Traveler').substring(0, 2).toUpperCase(), // First 2 letters
          role: 'Traveler' // Default role
        },
        authorId: user.uid, // Keep for reference
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'travelStories'), storyData);
      
      // Navigate back to inspiration page
      navigate('/inspiration');
      
    } catch (err) {
      console.error('Error submitting story:', err);
      setError('Failed to submit story. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <Sidebar />
      <div className="flex-1 pl-16 overflow-y-auto">
        {/* Header */}
        <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-2 bg-gray-800/90 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b border-cyan-900">
          <div className="-ml-3 min-w-0 flex-1">
            <h1 className="pl-2 text-xs font-semibold xl:text-base text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">Add Your Travel Story</h1>
          </div>
        </div>

        <main className="pt-24 pb-10 px-8">
          <div className="max-w-4xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Image Upload */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">Story Image</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-cyan-500 rounded-lg cursor-pointer bg-gray-700/50 hover:bg-gray-700/70 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {imagePreview ? (
                          <img src={imagePreview} alt="Preview" className="max-h-48 max-w-full rounded-lg" />
                        ) : (
                          <>
                            <svg className="w-8 h-8 mb-4 text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-cyan-300">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400">PNG, JPG, GIF up to 5MB</p>
                          </>
                        )}
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Story Details */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">Story Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Title */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-cyan-200 mb-2">
                      Story Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your story title..."
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="e.g., Hunza Valley, Pakistan"
                      required
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2">
                      Trip Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  {/* Read Time */}
                  <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2">
                      Read Time
                    </label>
                    <select
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {readTimeOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">Your Story</h3>
                <div>
                  <label className="block text-sm font-medium text-cyan-200 mb-2">
                    Full Story Content *
                  </label>
                  <textarea
                    name="fullContent"
                    value={formData.fullContent}
                    onChange={handleInputChange}
                    rows="12"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical"
                    placeholder="Share your amazing travel experience... Tell us about the places you visited, the people you met, the food you tried, and the memories you made..."
                    required
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 text-red-200">
                  {error}
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/inspiration')}
                  className="px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <span>📝</span>
                      Publish Story
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddStory; 