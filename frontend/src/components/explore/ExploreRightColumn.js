import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

const center = {
  lat: 31.527399,
  lng: 74.33559
};

const markers = [
  { position: { lat: 31.5097989, lng: 74.3410679 }, title: "Monal Lahore" },
  { position: { lat: 31.5227299, lng: 74.3543015 }, title: "Spice Bazaar" },
  { position: { lat: 31.5187392, lng: 74.3550669 }, title: "Bamboo Union" },
  { position: { lat: 31.5617123, lng: 74.3300858 }, title: "Luxus Grand Hotel" },
  { position: { lat: 31.5589953, lng: 74.3274878 }, title: "Avari Hotel Lahore" },
  { position: { lat: 31.5385299, lng: 74.3367395 }, title: "Jilani Park" },
  { position: { lat: 31.5071487, lng: 74.3543472 }, title: "The Nishat Hotel" },
  { position: { lat: 31.5070896, lng: 74.3509293 }, title: "Grand Ittehad Boutique Hotel" },
  { position: { lat: 31.5523701, lng: 74.3385315 }, title: "Pearl Continental Lahore" },
  { position: { lat: 31.5821649, lng: 74.3264164 }, title: "Dehli Gate" },
  { position: { lat: 31.5843201, lng: 74.3827802 }, title: "Shalamar Garden" },
  { position: { lat: 31.5925148, lng: 74.309485 }, title: "Minar-e-Pakistan" }
];

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

function ExploreRightColumn() {
  const [mapError, setMapError] = useState(null);

  return (
    <div className="fixed top-0 right-0 bottom-0 w-[43%] bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600 z-20">
          {mapError}
        </div>
      )}
      <div className="absolute inset-0">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={['places']}
          onError={(error) => {
            console.error('Error loading Google Maps:', error);
            setMapError('Failed to load Google Maps');
          }}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11.9}
            options={mapOptions}
            onLoad={() => console.log('Map loaded successfully')}
            onError={(error) => {
              console.error('Error with Google Map:', error);
              setMapError('Error with Google Map');
            }}
          >
            {markers.map((marker, index) => (
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