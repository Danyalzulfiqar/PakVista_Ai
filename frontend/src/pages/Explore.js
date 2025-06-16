import React from 'react';
import Sidebar from '../components/common/Sidebar';
import ExploreLeftColumn from '../components/explore/ExploreLeftColumn';
import ExploreRightColumn from '../components/explore/ExploreRightColumn';

function Explore() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <Sidebar />
      <div className="flex-1 pl-16">
        <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-2 bg-gray-800 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b">
          <div className="-ml-3 min-w-0 flex-1">
            <h1 className="pl-2 text-xs font-semibold xl:text-base text-cyan-300">Explore Pakistan</h1>
          </div>
        </div>
        
        <main className="flex h-[calc(100vh-64px)] mt-16">
          {/* Left Column */}
          <div className="w-[55%] bg-transparent">
            <ExploreLeftColumn />
          </div>
          
          {/* Right Column */}
          <div className="w-3/2 bg-transparent">
          
            <ExploreRightColumn />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Explore; 