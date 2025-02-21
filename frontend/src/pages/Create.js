import React from 'react';
import Sidebar from '../components/common/Sidebar';

function Create() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 pl-16">
        <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-2 bg-white/80 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b">
          <div className="-ml-3 min-w-0 flex-1">
            <h1 className="pl-2 text-xs font-semibold xl:text-base">Create New</h1>
          </div>
        </div>
        
        <main className="flex h-[calc(100vh-64px)] items-center justify-center">
          <div className="text-center">
            <div className="mb-6">
              <svg 
                className="mx-auto h-16 w-16 text-gray-400"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create Coming Soon</h2>
            <p className="text-gray-600 max-w-sm mx-auto">
              Soon you'll be able to create and share your own travel stories, itineraries, and recommendations.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Create; 