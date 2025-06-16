import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';
import DestinationCard from '../components/inspiration/DestinationCard';
import StoryCard from '../components/inspiration/StoryCard';
import SeasonalCard from '../components/inspiration/SeasonalCard';
import inspirationData from '../data/inspiration.json';

function Inspiration() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'stories', label: 'Travel Stories' },
    { id: 'seasonal', label: 'Seasonal' },
  ];

  const handleLike = (id) => {
    console.log('Liked destination:', id);
  };

  const handleSave = (id) => {
    console.log('Saved destination:', id);
  };

  const handleShare = (id) => {
    console.log('Shared destination:', id);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <Sidebar />
      <div className="flex-1 pl-16 overflow-y-auto">
        {/* Header */}
        <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-2 bg-gray-800/90 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b border-cyan-900">
          <div className="-ml-3 min-w-0 flex-1">
            <h1 className="pl-2 text-xs font-semibold xl:text-base text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">Travel Inspiration</h1>
          </div>
        </div>

        <main className="pt-24 pb-10 px-8">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-12 h-[400px] bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/9f/Shangrila_resort_skardu.jpg')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Discover Pakistan's Hidden Gems</h2>
              <p className="text-cyan-200 max-w-2xl mb-6">Explore breathtaking landscapes, rich culture, and unforgettable experiences across Pakistan.</p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-colors">
                  Start Exploring
                </button>
                <button className="px-6 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-colors">
                  View Map
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Featured Destinations Grid */}
          {(activeTab === 'all' || activeTab === 'destinations') && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-cyan-300 mb-6 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]">Featured Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inspirationData.featuredDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Travel Stories Section */}
          {(activeTab === 'all' || activeTab === 'stories') && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-cyan-300 mb-6 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]">Travel Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inspirationData.travelStories.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Seasonal Recommendations */}
          {(activeTab === 'all' || activeTab === 'seasonal') && (
            <section>
              <h2 className="text-xl font-semibold text-cyan-300 mb-6 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]">Seasonal Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(inspirationData.seasonalRecommendations).map(([season, recommendations]) => (
                  <SeasonalCard
                    key={season}
                    season={season}
                    recommendations={recommendations}
                  />
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Inspiration; 