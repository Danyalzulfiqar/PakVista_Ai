import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroBanner from '../components/home/HeroBanner';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <Navbar />
      <HeroBanner />
    </div>
  );
}

export default Home; 