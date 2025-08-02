import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroBanner from '../components/home/HeroBanner';

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/960px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg')`
        }}
      ></div>
      
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroBanner />
      </div>
    </div>
  );
}

export default Home; 