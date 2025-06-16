import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';
import SavedHeader from '../components/saved/SavedHeader';
import SavedDestinations from '../components/saved/SavedDestinations';
import RecentlyViewed from '../components/saved/RecentlyViewed';
import savedData from '../data/saved.json';

function Saved() {
  const [activeTab, setActiveTab] = useState('all');

  const renderContent = () => {
    switch (activeTab) {
      case 'all':
        return (
          <>
            <SavedDestinations destinations={savedData.savedDestinations} />
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-cyan-200 mb-4 px-6">Recently Viewed</h2>
              <RecentlyViewed items={savedData.recentlyViewed} />
            </div>
          </>
        );
      case 'destinations':
        return <SavedDestinations destinations={savedData.savedDestinations} />;
      case 'favorites':
        return <SavedDestinations destinations={savedData.favorites} />;
      case 'recent':
        return <RecentlyViewed items={savedData.recentlyViewed} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <Sidebar />
      <div className="flex-1 pl-16">
        <SavedHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="h-[calc(100vh-64px)] overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Saved; 