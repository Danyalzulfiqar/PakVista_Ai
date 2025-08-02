import { extractLocations, getLocationByName } from '../utils/locationExtractor';

class GeocodingService {
  constructor() {
    this.apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    this.cache = new Map(); // Simple in-memory cache
    this.placesCache = new Map(); // Cache for Places API results
    this.placesService = null; // Will be set when Google Maps loads
  }

  // Set Places service when Google Maps loads
  setPlacesService(placesService) {
    this.placesService = placesService;
    console.log('✅ Places service initialized');
  }

  // Main method to get coordinates for locations mentioned in text
  async getLocationsFromText(text) {
    if (!text || typeof text !== 'string') {
      return [];
    }

    try {
      console.log('🔍 Processing text for locations:', text);
      
      // First, try to extract locations from our predefined list
      const predefinedLocations = extractLocations(text);
      
      if (predefinedLocations.length > 0) {
        console.log('✅ Found predefined locations:', predefinedLocations);
        return predefinedLocations;
      }

      // If no predefined locations found, try Google Geocoding API
      const geocodedLocations = await this.geocodeText(text);
      
      // Only return locations if we have a reasonable confidence
      if (geocodedLocations.length > 0) {
        console.log('✅ Found geocoded locations:', geocodedLocations);
        return geocodedLocations;
      }
      
      // If no locations found, return empty array
      console.log('❌ No locations found in text');
      return [];
    } catch (error) {
      console.error('Error getting locations from text:', error);
      return [];
    }
  }

  // Geocode text using Google Geocoding API
  async geocodeText(text) {
    if (!this.apiKey) {
      console.warn('Google Maps API key not found. Using fallback geocoding.');
      return this.fallbackGeocoding(text);
    }

    try {
      // Extract potential location names from text
      const locationNames = this.extractLocationNames(text);
      console.log('🔍 Extracted location names for Geocoding API:', locationNames);
      
      if (locationNames.length === 0) {
        console.log('❌ No location names extracted for Geocoding API search');
        return [];
      }
      
      const geocodedLocations = [];

      for (const locationName of locationNames) {
        console.log(`🌍 Geocoding location: ${locationName}`);
        const coordinates = await this.geocodeLocation(locationName);
        if (coordinates) {
          geocodedLocations.push(coordinates);
        }
      }

      console.log('📍 Geocoding API results:', geocodedLocations);
      return geocodedLocations;
    } catch (error) {
      console.error('Error in geocoding text:', error);
      return this.fallbackGeocoding(text);
    }
  }

  // Geocode a single location
  async geocodeLocation(locationName) {
    // Check cache first
    if (this.cache.has(locationName)) {
      return this.cache.get(locationName);
    }

    try {
      const searchQuery = `${locationName}, Pakistan`;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchQuery)}&key=${this.apiKey}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK' && data.results.length > 0) {
        const result = data.results[0];
        
        // Check if the result is actually in Pakistan
        const isInPakistan = this.isLocationInPakistan(result);
        
        if (isInPakistan) {
          const coordinates = {
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng,
            name: locationName,
            formattedAddress: result.formatted_address
          };

          // Cache the result
          this.cache.set(locationName, coordinates);
          console.log(`✅ Geocoded ${locationName}:`, coordinates);
          
          return coordinates;
        } else {
          console.log(`❌ Geocoded result not in Pakistan: ${locationName}`);
          return null;
        }
      } else {
        console.log(`❌ Geocoding failed for ${locationName}:`, data.status);
        return null;
      }
    } catch (error) {
      console.error(`Error geocoding ${locationName}:`, error);
      return null;
    }
  }

  // Check if a geocoding result is in Pakistan
  isLocationInPakistan(geocodingResult) {
    try {
      // Check address components for Pakistan
      if (geocodingResult.formatted_address) {
        const address = geocodingResult.formatted_address.toLowerCase();
        if (address.includes('pakistan')) {
          return true;
        }
      }

      // Check if coordinates are within Pakistan's rough boundaries
      const lat = geocodingResult.geometry.location.lat;
      const lng = geocodingResult.geometry.location.lng;
      
      // Pakistan's approximate boundaries
      const pakistanBounds = {
        north: 37.5, // Northern border
        south: 23.5, // Southern border
        east: 75.0,  // Eastern border
        west: 60.5   // Western border
      };

      const isInBounds = lat >= pakistanBounds.south && 
                        lat <= pakistanBounds.north && 
                        lng >= pakistanBounds.west && 
                        lng <= pakistanBounds.east;

      if (isInBounds) {
        console.log(`✅ Location is within Pakistan bounds`);
        return true;
      } else {
        console.log(`❌ Location is outside Pakistan bounds`);
        return false;
      }
    } catch (error) {
      console.error('Error checking if location is in Pakistan:', error);
      return false;
    }
  }

  // Extract potential location names from text (simple approach)
  extractLocationNames(text) {
    const words = text.toLowerCase().split(/\s+/);
    const locationNames = [];
    const foundNames = new Set(); // To avoid duplicates
    
    // Look for capitalized words that might be locations in order of appearance
    const capitalizedWords = text.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g) || [];
    
    for (const word of capitalizedWords) {
      const cleanWord = word.trim();
      if (cleanWord.length > 2 && !this.isCommonWord(cleanWord) && !foundNames.has(cleanWord.toLowerCase())) {
        locationNames.push(cleanWord);
        foundNames.add(cleanWord.toLowerCase());
      }
    }

    // Also check for common location patterns in order of appearance
    const locationPatterns = [
      /(?:visit|go to|travel to|explore|plan.*trip.*to)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/gi,
      /(?:in|at)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/gi
    ];

    for (const pattern of locationPatterns) {
      const matches = text.match(pattern);
      if (matches) {
        for (const match of matches) {
          const location = match.replace(/(?:visit|go to|travel to|explore|plan.*trip.*to|in|at)\s+/gi, '').trim();
          if (location && !foundNames.has(location.toLowerCase())) {
            locationNames.push(location);
            foundNames.add(location.toLowerCase());
          }
        }
      }
    }

    console.log('🔍 Extracted location names in order:', locationNames);
    return locationNames.slice(0, 5); // Limit to 5 locations
  }

  // Check if a word is a common word (not likely a location)
  isCommonWord(word) {
    const commonWords = [
      'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
      'by', 'from', 'up', 'about', 'into', 'through', 'during', 'before',
      'after', 'above', 'below', 'between', 'among', 'within', 'without',
      'visit', 'go', 'travel', 'explore', 'see', 'visit', 'trip', 'plan',
      'days', 'night', 'morning', 'evening', 'week', 'month', 'year',
      'hotel', 'restaurant', 'park', 'museum', 'beach', 'mountain', 'valley',
      'i', 'am', 'just', 'a', 'program', 'here', 'ready', 'help', 'you',
      'with', 'your', 'needs', 'how', 'can', 'assist', 'today', 'hello',
      'hi', 'hey', 'thanks', 'thank', 'please', 'would', 'could', 'should',
      'will', 'can', 'may', 'might', 'must', 'shall', 'do', 'does', 'did',
      'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
      'this', 'that', 'these', 'those', 'my', 'your', 'his', 'her', 'its',
      'our', 'their', 'me', 'him', 'us', 'them', 'myself', 'yourself',
      'himself', 'herself', 'itself', 'ourselves', 'yourselves', 'themselves'
    ];
    
    return commonWords.includes(word.toLowerCase());
  }

  // Fallback geocoding when API is not available
  fallbackGeocoding(text) {
    console.log('Using fallback geocoding for:', text);
    
    // Try to match with our predefined locations
    const predefinedLocations = extractLocations(text);
    
    if (predefinedLocations.length > 0) {
      return predefinedLocations;
    }

    // If still no matches, return default location (Lahore)
    return [{
      lat: 31.5204,
      lng: 74.3587,
      name: 'Lahore',
      formattedAddress: 'Lahore, Pakistan'
    }];
  }

  // Verify API key is working
  async verifyApiKey() {
    if (!this.apiKey) {
      console.warn('❌ No Google Maps API key found');
      return false;
    }

    try {
      // Test with a simple geocoding request
      const testQuery = 'Lahore, Pakistan';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(testQuery)}&key=${this.apiKey}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK') {
        console.log('✅ Google Maps API key is working');
        return true;
      } else {
        console.error('❌ Google Maps API key error:', data.status, data.error_message);
        return false;
      }
    } catch (error) {
      console.error('❌ Error verifying API key:', error);
      return false;
    }
  }

  // Get API key status
  getApiKeyStatus() {
    return {
      hasKey: !!this.apiKey,
      keyLength: this.apiKey ? this.apiKey.length : 0,
      keyPreview: this.apiKey ? `${this.apiKey.substring(0, 10)}...` : 'None'
    };
  }

  // Clear all caches
  clearCache() {
    this.cache.clear();
    this.placesCache.clear();
    console.log('🗑️ All caches cleared');
  }

  // Clear only Places API cache
  clearPlacesCache() {
    this.placesCache.clear();
    console.log('🗑️ Places API cache cleared');
  }

  // Get cache size
  getCacheSize() {
    return {
      geocoding: this.cache.size,
      places: this.placesCache.size,
      total: this.cache.size + this.placesCache.size
    };
  }
}

// Create singleton instance
const geocodingService = new GeocodingService();

export default geocodingService; 