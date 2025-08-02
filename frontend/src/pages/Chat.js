import React, { useState, useEffect } from 'react';
import Sidebar from '../components/common/Sidebar';
import Navbar2 from '../components/chat/Navbar2';
import ChatColumn from '../components/chat/ChatColumn';
// import ChatRightColumn from '../components/chat/ChatRightColumn';
import ExploreRightColumn from '../components/explore/ExploreRightColumn';
import geocodingService from '../services/geocodingService';

function Chat() {
  const [dynamicMarkers, setDynamicMarkers] = useState([]);
  const [isProcessingLocations, setIsProcessingLocations] = useState(false);
  const [maxMarkers, setMaxMarkers] = useState(2); // Default to 3 markers max

  // Verify API key on component mount
  useEffect(() => {
    const verifyApiKey = async () => {
      console.log('🔑 Checking Google Maps API key status...');
      const status = geocodingService.getApiKeyStatus();
      console.log('📊 API Key Status:', status);
      
      if (status.hasKey) {
        const isWorking = await geocodingService.verifyApiKey();
        if (!isWorking) {
          console.warn('⚠️ Google Maps API key is not working. Using fallback geocoding.');
        }
      } else {
        console.warn('⚠️ No Google Maps API key found. Using fallback geocoding.');
      }
    };

    verifyApiKey();
    
    // Make geocodingService available globally for testing
    if (typeof window !== 'undefined') {
      window.geocodingService = geocodingService;
      console.log('🌐 geocodingService made available globally for testing');
    }
  }, []);

  // Function to process chatbot response and extract locations
  const processChatbotResponse = async (responseText) => {
    console.log('🔄 Chat.js: processChatbotResponse called with:', responseText);
    
    if (!responseText || typeof responseText !== 'string') {
      console.log('❌ Chat.js: Invalid response text');
      return;
    }

    try {
      setIsProcessingLocations(true);
      console.log('🔍 Chat.js: Processing chatbot response for locations:', responseText);
      
      // Extract locations from the response
      const locations = await geocodingService.getLocationsFromText(responseText);
      console.log('📍 Chat.js: Geocoding service returned:', locations);
      
      if (locations && locations.length > 0) {
        console.log('✅ Chat.js: Setting dynamic markers:', locations);
        setDynamicMarkers(locations);
        console.log('🎯 Chat.js: Found locations:', locations);
      } else {
        // Clear markers if no locations found
        console.log('❌ Chat.js: No locations found, clearing markers');
        setDynamicMarkers([]);
        console.log('🗑️ Chat.js: No locations found in response');
      }
    } catch (error) {
      console.error('💥 Chat.js: Error processing locations:', error);
      setDynamicMarkers([]);
    } finally {
      setIsProcessingLocations(false);
      console.log('🏁 Chat.js: Location processing completed');
    }
  };

  // Function to clear markers (called when user starts new query)
  const clearMarkers = () => {
    console.log('🧹 Chat.js: Clearing markers');
    setDynamicMarkers([]);
    console.log('🗑️ Chat.js: Markers cleared');
  };

  // Debug effect to log state changes
  useEffect(() => {
    console.log('📊 Chat.js: dynamicMarkers state changed:', dynamicMarkers);
  }, [dynamicMarkers]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <Sidebar />
      <div className="flex-1 pl-16">
        {/* <Navbar2 /> */}
        <main className="flex h-full">
          <ChatColumn 
            onBotResponse={processChatbotResponse}
            onUserQuery={clearMarkers}
          />
          <div className="w-1/2 border-l border-gray-200 relative">
            {/* <ChatRightColumn /> */}
            
            {/* Max Markers Control */}
            <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
              <div className="text-xs font-semibold text-cyan-300 mb-2">
                🎯 Max Markers: {maxMarkers}
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 5, 10].map((value) => (
                  <button
                    key={value}
                    onClick={() => setMaxMarkers(value)}
                    className={`px-2 py-1 text-xs rounded ${
                      maxMarkers === value 
                        ? 'bg-cyan-600 text-white' 
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            
            <ExploreRightColumn 
              dynamicMarkers={dynamicMarkers}
              isProcessing={isProcessingLocations}
              maxMarkers={maxMarkers}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Chat; 