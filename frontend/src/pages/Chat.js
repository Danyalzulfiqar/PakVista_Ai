import React from 'react';
import Sidebar from '../components/common/Sidebar';
import Navbar2 from '../components/chat/Navbar2';
import ChatColumn from '../components/chat/ChatColumn';
import ChatRightColumn from '../components/chat/ChatRightColumn';

function Chat() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 pl-16">
        <Navbar2 />
        <main className="flex h-full">
          <ChatColumn />
          <div className="w-1/2 border-l border-gray-200">
            <ChatRightColumn />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Chat; 