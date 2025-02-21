import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroBanner from '../components/home/HeroBanner';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroBanner />
    </div>
  );
}

export default Home; 