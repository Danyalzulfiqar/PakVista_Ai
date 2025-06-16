import React from 'react';
import { FaUsers, FaPlus } from 'react-icons/fa';

function Navbar2() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-4 bg-gray-800/90 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b border-cyan-900/50">
      <div className="flex-1">
        <h1 className="text-xs font-semibold xl:text-base text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
          New chat
        </h1>
      </div>
      
      <div className="max-w-[42%] shrink-0">
        <div className="flex divide-x divide-cyan-900/50 rounded-full border border-cyan-900/50 bg-gray-800/50 py-1 text-xs font-medium text-cyan-300">
          <div className="min-w-0">
            <button className="relative z-1 -my-1 -mr-px flex h-8 items-center rounded-l-full pl-4 pr-3 transition-colors hover:bg-cyan-600/20 hover:text-cyan-400">
              <span className="truncate">Where</span>
            </button>
          </div>
          <div className="shrink-0">
            <button className="relative z-1 -mx-px -my-1 block h-8 px-3 transition-colors hover:bg-cyan-600/20 hover:text-cyan-400">
              When
            </button>
          </div>
          <div className="shrink-0">
            <button className="relative z-1 -mx-px -my-1 block h-8 px-3 transition-colors hover:bg-cyan-600/20 hover:text-cyan-400">
              2 travelers
            </button>
          </div>
          <div className="shrink-0">
            <button className="relative z-1 -my-1 -ml-px block h-8 rounded-r-full pl-3 pr-4 transition-colors hover:bg-cyan-600/20 hover:text-cyan-400">
              Budget
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <button className="px-4 py-1.5 border border-cyan-900/50 rounded-full text-xs font-medium bg-gray-800/50 hover:bg-cyan-600/20 hover:border-cyan-500/50 transition-colors text-cyan-300 hover:text-cyan-400 flex items-center gap-2">
          <FaUsers className="w-3.5 h-3.5" />
          <span>Invite</span>
        </button>
        <button className="px-4 py-1.5 border border-cyan-900/50 rounded-full text-xs font-medium bg-cyan-600/20 hover:bg-cyan-600/30 hover:border-cyan-500/50 transition-colors text-cyan-300 hover:text-cyan-400 flex items-center gap-2">
          <FaPlus className="w-3.5 h-3.5" />
          <span>Create a trip</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar2; 