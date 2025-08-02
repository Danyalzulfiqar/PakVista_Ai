import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Static libraries array to prevent LoadScript reloading
const GOOGLE_MAPS_LIBRARIES = ['places'];

// Global zoom variables
const DEFAULT_ZOOM = 8;
const MARKERS_ZOOM = 9;

const containerStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

// Default center (Lahore)
const defaultCenter = {
  lat: 31.527399,
  lng: 74.33559
};

// Empty markers array - no default markers
const defaultMarkers = [];

const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "#e5e3df" }]
    }
  ],
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false
};

function ExploreRightColumn({ dynamicMarkers = [], center = null, zoom = DEFAULT_ZOOM, maxMarkers = 5 }) {
  const [mapError, setMapError] = useState(null);
  const [currentMarkers, setCurrentMarkers] = useState(defaultMarkers);
  const [currentCenter, setCurrentCenter] = useState(defaultCenter);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const mapRef = useRef(null);

  // Update markers and center when props change
  useEffect(() => {
    console.log('🗺️ ExploreRightColumn: useEffect triggered with dynamicMarkers:', dynamicMarkers);
    
    if (dynamicMarkers && dynamicMarkers.length > 0) {
      // Limit markers based on maxMarkers prop
      const limitedMarkers = dynamicMarkers.slice(0, maxMarkers);
      
      // Convert dynamic markers to the format expected by Google Maps
      const newMarkers = limitedMarkers.map(location => ({
        position: { lat: location.lat, lng: location.lng },
        title: location.name,
        location: location // Store the full location object
      }));
      
      console.log(`📍 ExploreRightColumn: Setting ${newMarkers.length} markers (max: ${maxMarkers}):`, newMarkers);
      setCurrentMarkers(newMarkers);
      
      // Set center to first location
      if (newMarkers.length > 0) {
        console.log('🎯 ExploreRightColumn: Setting center to:', newMarkers[0].position);
        setCurrentCenter(newMarkers[0].position);
        setCurrentZoom(MARKERS_ZOOM); // Zoom out for better overview of locations
      }
      
      console.log('✅ ExploreRightColumn: Map updated with dynamic markers:', newMarkers);
    } else {
      // Reset to default markers and center
      console.log('🔄 ExploreRightColumn: Resetting to default markers');
      setCurrentMarkers(defaultMarkers);
      setCurrentCenter(defaultCenter);
      setCurrentZoom(DEFAULT_ZOOM);
      console.log('🏠 ExploreRightColumn: Map reset to default markers');
    }
  }, [dynamicMarkers, center, maxMarkers]);

  // Handle map load
  const onMapLoad = (map) => {
    mapRef.current = map;
    console.log('Map loaded successfully');
  };

  // Handle map errors
  const onMapError = (error) => {
    console.error('Error with Google Map:', error);
    setMapError('Error with Google Map');
  };

  // Handle script loading errors
  const onScriptError = (error) => {
    console.error('Error loading Google Maps:', error);
    setMapError('Failed to load Google Maps');
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 w-[48%] bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600 z-20">
          {mapError}
        </div>
      )}
      
      {/* Location Info Overlay */}
      {dynamicMarkers && dynamicMarkers.length > 0 && (
        <div className="absolute top-4 left-4 right-4 z-10 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
          <div className="text-sm font-semibold text-cyan-300 mb-1">
            📍 Locations Found:
          </div>
          <div className="text-xs space-y-1">
            {dynamicMarkers.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>{location.name}</span>
                {location.formattedAddress && (
                  <span className="text-gray-300">({location.formattedAddress})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="absolute inset-0">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={GOOGLE_MAPS_LIBRARIES}
          onError={onScriptError}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentCenter}
            zoom={currentZoom}
            options={mapOptions}
            onLoad={onMapLoad}
            onError={onMapError}
          >
            {currentMarkers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                title={marker.title}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default ExploreRightColumn; 