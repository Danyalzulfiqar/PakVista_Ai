import React from 'react';
import { FaArrowRight, FaGlobeAmericas, FaSuitcase, FaUsers } from 'react-icons/fa';

function HeroBanner() {
  return (
    <section className="min-h-[600px] px-4 py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Hey, I'm your AI travel assistant for exploring Pakistan
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let me help you discover the perfect destinations - from historic sites to natural wonders. Think of me as your local guide who knows Pakistan inside out.
          </p>
        </div>

        {/* Input and Quick Replies */}
        <div className="max-w-3xl mx-auto">
          {/* Input Container */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
            <div className="relative">
              <textarea 
                className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 resize-none min-h-[120px]"
                placeholder="Tell me about your dream Pakistani adventure..."
              />
              <button 
                className="absolute bottom-3 right-3 bg-indigo-600 text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Replies */}
          <div className="flex flex-wrap gap-3 justify-center">
            <QuickReplyButton icon={<FaGlobeAmericas />} text="Plan a New Trip" />
            <QuickReplyButton icon={<FaSuitcase />} text="Discover Destinations" />
            <QuickReplyButton icon={<FaUsers />} text="Family Tours in North" />
            <button className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quick Reply Button Component
function QuickReplyButton({ icon, text }) {
  return (
    <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors">
      <span className="w-4 h-4">{icon}</span>
      <span>{text}</span>
    </button>
  );
}

export default HeroBanner; 