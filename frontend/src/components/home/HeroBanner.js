import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaGlobeAmericas, FaSuitcase, FaUsers } from 'react-icons/fa';

function HeroBanner() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/chat', { state: { initialQuery: query.trim() } });
    }
  };

  const handleQuickReply = (text) => {
    navigate('/chat', { state: { initialQuery: text } });
  };

  return (
    <section className="relative min-h-[1000px] px-4 py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      {/* Glowing accents */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-40 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="py-20 max-w-6xl mx-auto relative z-10 rounded-2xl shadow-xl border border-gray-200 p-1.5 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-blue-900/80">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-cyan-200 mb-6 max-w-4xl mx-auto leading-tight drop-shadow-lg">
            Hey, I'm your AI travel assistant for exploring Pakistan
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Let me help you discover the perfect destinations - from historic sites to natural wonders. Think of me as your local guide who knows Pakistan inside out.
          </p>
        </div>

        {/* Input and Quick Replies */}
        <div className="max-w-3xl mx-auto">
          {/* Input Container */}
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-800/60 via-gray-900/80 to-gray-800/90 rounded-2xl shadow-lg p-4 mb-6 border border-cyan-700">
            <div className="relative">
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-3 text-cyan-100 border border-cyan-700 bg-gray-900/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-400 resize-none min-h-[120px]"
                placeholder="Tell me about your dream Pakistani adventure..."
              />
              <button 
                type="submit"
                className="absolute bottom-3 right-3 bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                disabled={!query.trim()}
              >
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Quick Replies */}
          <div className="flex flex-wrap gap-3 justify-center">
            <QuickReplyButton icon={<FaGlobeAmericas />} text="Plan a New Trip" onClick={() => handleQuickReply("Plan a New Trip")} />
            <QuickReplyButton icon={<FaSuitcase />} text="Discover Destinations" onClick={() => handleQuickReply("Discover Destinations")} />
            <QuickReplyButton icon={<FaUsers />} text="Family Tours in North" onClick={() => handleQuickReply("Family Tours in North")} />
            <button className="px-6 py-3 bg-gradient-to-br from-gray-800 via-blue-900 to-cyan-900 border border-cyan-700 rounded-full text-cyan-200 hover:shadow-cyan-400/40 shadow-lg transition-colors">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quick Reply Button Component
function QuickReplyButton({ icon, text, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-800/60 via-gray-900/80 to-gray-800/90 border border-cyan-700 rounded-full text-cyan-200 hover:shadow-cyan-400/40 shadow-lg transition-all hover:scale-105"
    >
      <span className="w-4 h-4">{icon}</span>
      <span>{text}</span>
    </button>
  );
}

export default HeroBanner; 