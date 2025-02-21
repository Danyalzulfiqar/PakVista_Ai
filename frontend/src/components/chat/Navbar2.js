import React from 'react';

function Navbar2() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-2 bg-white/80  pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b">
      <div className="-ml-3 min-w-0 flex-1">
        <h1 className="pl-2 text-xs font-semibold xl:text-base">New chat</h1>
      </div>
      
      <div className="max-w-[42%] shrink-0">
        <div className="flex divide-x divide-gray-200 rounded-full border py-1 text-xs font-medium text-gray-600">
          <div className="min-w-0">
            <button className="relative z-1 -my-1 -mr-px flex h-8 items-center rounded-l-full pl-4 pr-3 transition-colors hover:bg-gray-100">
              <span className="truncate">Where</span>
            </button>
          </div>
          <div className="shrink-0">
            <button className="relative z-1 -mx-px -my-1 block h-8 px-3 transition-colors hover:bg-gray-100">
              When
            </button>
          </div>
          <div className="shrink-0">
            <button className="relative z-1 -mx-px -my-1 block h-8 px-3 transition-colors hover:bg-gray-100">
              2 travelers
            </button>
          </div>
          <div className="shrink-0">
            <button className="relative z-1 -my-1 -ml-px block h-8 rounded-r-full pl-3 pr-4 transition-colors hover:bg-gray-100">
              Budget
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button className="px-4 py-1.5 border rounded-full text-xs font-medium hover:border-gray-400 transition-colors">
          Invite
        </button>
        <button className="px-4 py-1.5 border rounded-full text-xs font-medium hover:border-gray-400 transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M7.62 7.74H5.81c-1 0-1.81.81-1.81 1.81v8.276c0 1 .81 1.81 1.81 1.81h11.38c1 0 1.81-.81 1.81-1.81V9.55c0-1-.81-1.81-1.81-1.81H11.5z"></path>
            <path d="M7.62 7.74V6.447a1.81 1.81 0 0 1 1.811-1.81h4.138a1.81 1.81 0 0 1 1.81 1.81V7.74"></path>
          </svg>
          Create a trip
        </button>
      </div>
    </div>
  );
}

export default Navbar2; 