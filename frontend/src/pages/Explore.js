import React from 'react';
import Sidebar from '../components/common/Sidebar';
import ExploreLeftColumn from '../components/explore/ExploreLeftColumn';
import ExploreRightColumn from '../components/explore/ExploreRightColumn';

function Explore() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 pl-16">
        <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-2 bg-white/80 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b">
          <div className="-ml-3 min-w-0 flex-1">
            <h1 className="pl-2 text-xs font-semibold xl:text-base">Explore Pakistan</h1>
          </div>
        </div>
        
        <main className="flex h-[calc(100vh-64px)] mt-16">
          {/* Left Column */}
          <div className="w-1/2 bg-white">
            <ExploreLeftColumn />
          </div>
          
          {/* Right Column */}
          <div className="w-1/2 bg-gray-50">
            <ExploreRightColumn />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Explore; 