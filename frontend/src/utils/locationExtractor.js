// Predefined Pakistan locations with coordinates
const PAKISTAN_LOCATIONS = {
  // Major Cities
  'islamabad': { lat: 33.6844, lng: 73.0479, name: 'Islamabad' },
  'karachi': { lat: 24.8607, lng: 67.0011, name: 'Karachi' },
  'lahore': { lat: 31.5204, lng: 74.3587, name: 'Lahore' },
  'peshawar': { lat: 34.0150, lng: 71.5249, name: 'Peshawar' },
  'quetta': { lat: 30.1798, lng: 66.9750, name: 'Quetta' },
  'multan': { lat: 30.1575, lng: 71.5249, name: 'Multan' },
  'faisalabad': { lat: 31.4167, lng: 73.0833, name: 'Faisalabad' },
  'rawalpindi': { lat: 33.5651, lng: 73.0169, name: 'Rawalpindi' },
  'gujranwala': { lat: 32.1617, lng: 74.1883, name: 'Gujranwala' },
  'sialkot': { lat: 32.4937, lng: 74.5222, name: 'Sialkot' },
  
  // Tourist Destinations
  'hunza': { lat: 36.3167, lng: 74.6500, name: 'Hunza Valley' },
  'skardu': { lat: 35.2971, lng: 75.6333, name: 'Skardu' },
  'gilgit': { lat: 35.9208, lng: 74.3144, name: 'Gilgit' },
  'chitral': { lat: 35.8511, lng: 71.7864, name: 'Chitral' },
  'swat': { lat: 34.7758, lng: 72.3615, name: 'Swat Valley' },
  'murree': { lat: 33.9077, lng: 73.3904, name: 'Murree' },
  'naran': { lat: 34.9083, lng: 73.6483, name: 'Naran' },
  'kaghan': { lat: 34.8167, lng: 73.5167, name: 'Kaghan Valley' },
  'shogran': { lat: 34.6167, lng: 73.4833, name: 'Shogran' },
  'siri paye': { lat: 34.5833, lng: 73.4667, name: 'Siri Paye' },
  
  // Historical Sites
  'mohenjo daro': { lat: 27.3292, lng: 68.1389, name: 'Mohenjo Daro' },
  'taxila': { lat: 33.7447, lng: 72.8325, name: 'Taxila' },
  'harappa': { lat: 30.6296, lng: 72.8676, name: 'Harappa' },
  'rohtas fort': { lat: 32.9653, lng: 73.5806, name: 'Rohtas Fort' },
  'lahore fort': { lat: 31.5883, lng: 74.3106, name: 'Lahore Fort' },
  'badshahi mosque': { lat: 31.5883, lng: 74.3106, name: 'Badshahi Mosque' },
  'shalimar gardens': { lat: 31.5843, lng: 74.3828, name: 'Shalimar Gardens' },
  'minar e pakistan': { lat: 31.5925, lng: 74.3095, name: 'Minar-e-Pakistan' },
  
  // Natural Attractions
  'k2': { lat: 35.8806, lng: 76.5133, name: 'K2' },
  'nanga parbat': { lat: 35.2375, lng: 74.5892, name: 'Nanga Parbat' },
  'broad peak': { lat: 35.8106, lng: 76.5683, name: 'Broad Peak' },
  'gasherbrum': { lat: 35.7244, lng: 76.6964, name: 'Gasherbrum' },
  'deosai plains': { lat: 35.0167, lng: 75.4167, name: 'Deosai Plains' },
  'fairy meadows': { lat: 35.4167, lng: 74.6000, name: 'Fairy Meadows' },
  'attabad lake': { lat: 36.3167, lng: 74.8167, name: 'Attabad Lake' },
  'saif ul muluk': { lat: 34.8833, lng: 73.7000, name: 'Lake Saif ul Muluk' },
  
  // Coastal Areas
  'gwadar': { lat: 25.1264, lng: 62.3225, name: 'Gwadar' },
  'karachi beaches': { lat: 24.8607, lng: 67.0011, name: 'Karachi Beaches' },
  'hawkes bay': { lat: 24.8167, lng: 66.9833, name: 'Hawkes Bay' },
  'clifton beach': { lat: 24.8167, lng: 66.9833, name: 'Clifton Beach' },
  
  // Religious Sites
  'data darbar': { lat: 31.5883, lng: 74.3106, name: 'Data Darbar' },
  'shah rukn e alam': { lat: 30.1575, lng: 71.5249, name: 'Shah Rukn-e-Alam' },
  'baha ud din zakariya': { lat: 30.1575, lng: 71.5249, name: 'Baha-ud-din Zakariya' },
  
  // Modern Attractions
  'centaurus mall': { lat: 33.6844, lng: 73.0479, name: 'Centaurus Mall' },
  'dolmen mall': { lat: 24.8607, lng: 67.0011, name: 'Dolmen Mall' },
  'emporium mall': { lat: 31.5204, lng: 74.3587, name: 'Emporium Mall' }
};

// Location name variations and aliases
const LOCATION_ALIASES = {
  'hunza valley': 'hunza',
  'hunza valley pakistan': 'hunza',
  'skardu pakistan': 'skardu',
  'gilgit baltistan': 'gilgit',
  'chitral pakistan': 'chitral',
  'swat valley': 'swat',
  'murree hills': 'murree',
  'naran kaghan': 'naran',
  'kaghan valley': 'kaghan',
  'shogran pakistan': 'shogran',
  'siri paye meadows': 'siri paye',
  'mohenjo daro pakistan': 'mohenjo daro',
  'taxila pakistan': 'taxila',
  'harappa pakistan': 'harappa',
  'rohtas fort pakistan': 'rohtas fort',
  'lahore fort pakistan': 'lahore fort',
  'badshahi mosque lahore': 'badshahi mosque',
  'shalimar gardens lahore': 'shalimar gardens',
  'minar e pakistan lahore': 'minar e pakistan',
  'k2 pakistan': 'k2',
  'nanga parbat pakistan': 'nanga parbat',
  'broad peak pakistan': 'broad peak',
  'gasherbrum pakistan': 'gasherbrum',
  'deosai plains pakistan': 'deosai plains',
  'fairy meadows pakistan': 'fairy meadows',
  'attabad lake pakistan': 'attabad lake',
  'lake saif ul muluk': 'saif ul muluk',
  'gwadar pakistan': 'gwadar',
  'karachi pakistan': 'karachi',
  'islamabad pakistan': 'islamabad',
  'lahore pakistan': 'lahore',
  'peshawar pakistan': 'peshawar',
  'quetta pakistan': 'quetta',
  'multan pakistan': 'multan',
  'faisalabad pakistan': 'faisalabad',
  'rawalpindi pakistan': 'rawalpindi',
  'gujranwala pakistan': 'gujranwala',
  'sialkot pakistan': 'sialkot'
};

// Extract location names from text
export const extractLocations = (text) => {
  if (!text || typeof text !== 'string') return [];
  
  const locations = [];
  const lowerText = text.toLowerCase();
  const foundLocations = new Set(); // To track found locations and avoid duplicates
  
  // First, find all locations in order of appearance
  const locationOrder = [];
  
  // Check for exact matches in predefined locations in order of appearance
  for (const [key, location] of Object.entries(PAKISTAN_LOCATIONS)) {
    if (lowerText.includes(key) && !foundLocations.has(location.name)) {
      // Find the position of this location in the text
      const position = lowerText.indexOf(key);
      locationOrder.push({
        position: position,
        location: location
      });
      foundLocations.add(location.name);
    }
  }
  
  // Check for aliases in order of appearance
  for (const [alias, originalKey] of Object.entries(LOCATION_ALIASES)) {
    if (lowerText.includes(alias) && PAKISTAN_LOCATIONS[originalKey]) {
      const location = PAKISTAN_LOCATIONS[originalKey];
      if (!foundLocations.has(location.name)) {
        // Find the position of this alias in the text
        const position = lowerText.indexOf(alias);
        locationOrder.push({
          position: position,
          location: location
        });
        foundLocations.add(location.name);
      }
    }
  }
  
  // Sort by position in text (chronological order)
  locationOrder.sort((a, b) => a.position - b.position);
  
  // Extract just the locations in order
  const orderedLocations = locationOrder.map(item => item.location);
  
  console.log('📍 Locations found in order:', orderedLocations.map(loc => loc.name));
  
  return orderedLocations;
};

// Get location by name
export const getLocationByName = (name) => {
  if (!name) return null;
  
  const lowerName = name.toLowerCase();
  
  // Direct match
  if (PAKISTAN_LOCATIONS[lowerName]) {
    return PAKISTAN_LOCATIONS[lowerName];
  }
  
  // Alias match
  if (LOCATION_ALIASES[lowerName]) {
    return PAKISTAN_LOCATIONS[LOCATION_ALIASES[lowerName]];
  }
  
  return null;
};

// Get all available locations
export const getAllLocations = () => {
  return Object.values(PAKISTAN_LOCATIONS);
};

// Check if a location exists
export const locationExists = (name) => {
  return getLocationByName(name) !== null;
};

// Test function to verify location extraction
export const testLocationExtraction = () => {
  const testCases = [
    "I want to visit Hunza Valley and Skardu",
    "Plan a trip to Islamabad and Karachi",
    "Tell me about Lahore and Peshawar",
    "I'm interested in K2 and Nanga Parbat",
    "Can you help me plan a trip to Gwadar?",
    "I want to explore Mohenjo Daro and Taxila",
    "Plan a trip to Murree and Naran Kaghan",
    "Tell me about the weather in Quetta",
    "I want to visit the Badshahi Mosque in Lahore",
    "Plan a trip to Fairy Meadows and Attabad Lake"
  ];

  console.log('🧪 Testing Location Extraction:');
  testCases.forEach((testCase, index) => {
    const locations = extractLocations(testCase);
    console.log(`Test ${index + 1}: "${testCase}"`);
    console.log(`Found locations:`, locations);
    console.log('---');
  });
};

// Test function for order verification
export const testLocationOrder = () => {
  const testText = `Skardu is a breathtaking destination located in the Gilgit-Baltistan region of Pakistan. 
  It serves as a gateway to some of the world's highest peaks, including K2, and is known for its stunning landscapes. 
  You can also visit Islamabad for more urban experiences.`;
  
  console.log('🧪 Testing Location Order:');
  console.log('Text:', testText);
  const locations = extractLocations(testText);
  console.log('Locations in order:', locations.map(loc => loc.name));
  console.log('Expected order: Skardu, Gilgit, K2, Islamabad');
};

// Test function for Places API integration
export const testPlacesAPI = async () => {
  if (typeof window !== 'undefined' && window.geocodingService) {
    console.log('🧪 Testing Geocoding API Integration:');
    
    const testQueries = [
      "Plan a trip to Hunza",
      "I want to visit Badshahi Mosque",
      "Tell me about Minar-e-Pakistan",
      "How to get to Shalimar Gardens",
      "Visit Data Darbar in Lahore"
    ];

    for (const query of testQueries) {
      console.log(`\n🔍 Testing: "${query}"`);
      try {
        const locations = await window.geocodingService.getLocationsFromText(query);
        console.log(`✅ Results:`, locations);
      } catch (error) {
        console.error(`❌ Error:`, error);
      }
    }
  } else {
    console.log('❌ geocodingService not available in window object');
  }
};

// Run test if this file is executed directly
if (typeof window !== 'undefined') {
  // Only run in browser environment
  window.testLocationExtraction = testLocationExtraction;
  window.testLocationOrder = testLocationOrder;
  window.testPlacesAPI = testPlacesAPI;
} 