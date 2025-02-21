import React from 'react';
import Sidebar from '../components/common/Sidebar';

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
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Explore Coming Soon</h2>
            <p className="text-gray-600 max-w-sm mx-auto">
              We're working on bringing you an amazing exploration experience of Pakistan's beautiful destinations.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Explore; 