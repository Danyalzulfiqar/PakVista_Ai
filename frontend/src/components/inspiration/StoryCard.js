import React from 'react';
import { useNavigate } from 'react-router-dom';

function StoryCard({ story }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/story/${story.id}`, { state: { story } });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-2xl overflow-hidden shadow-lg">
      {/* Story Image */}
      <div className="relative h-48">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
      </div>
      
      {/* Story Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center">
            <span className="text-cyan-300 font-bold">{story.author.avatar}</span>
          </div>
          <div>
            <h3 className="text-white font-medium">{story.author.name}</h3>
            <p className="text-cyan-300 text-sm">{story.author.role}</p>
          </div>
        </div>
        <h4 className="text-xl font-bold text-white mb-3">{story.title}</h4>
        <p className="text-cyan-200 mb-4">{story.content}</p>
        <div className="flex justify-between items-center">
          <span className="text-cyan-300 text-sm">{story.readTime}</span>
          <button 
            onClick={handleReadMore}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoryCard; 