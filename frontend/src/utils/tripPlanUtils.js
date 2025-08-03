// Utility function to format currency
export const formatCurrency = (amount) => {
  if (!amount && amount !== 0) return 'Not specified';
  
  try {
    // Handle budget object with min/max
    if (typeof amount === 'object' && amount !== null) {
      if (amount.min !== undefined && amount.max !== undefined) {
        return `${new Intl.NumberFormat('en-PK', {
          style: 'currency',
          currency: 'PKR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(amount.min)} - ${new Intl.NumberFormat('en-PK', {
          style: 'currency',
          currency: 'PKR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(amount.max)}`;
      }
      // If it's an object but doesn't have min/max, try to convert to string
      return JSON.stringify(amount);
    }
    
    const numAmount = typeof amount === 'string' ? parseInt(amount) : amount;
    if (isNaN(numAmount)) return 'Invalid amount';
    
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(numAmount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return 'Invalid amount';
  }
};

// Utility function to format date
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

// Utility function to render notes based on their format
export const renderNotes = (notes) => {
  if (!notes) return null;
  
  try {
    // If notes is a string (manually created plans)
    if (typeof notes === 'string') {
      return (
        <div className="bg-cyan-900/40 border-l-4 border-cyan-400 p-3 rounded text-cyan-100 text-sm mb-2">
          <span className="font-semibold text-cyan-300">Notes:</span> {notes}
        </div>
      );
    }
    
    // If notes is an object (chatbot-generated plans)
    if (typeof notes === 'object' && notes !== null && !Array.isArray(notes)) {
      const dayEntries = Object.entries(notes).filter(([key, value]) => {
        // Only include valid day entries
        return key && value && typeof value === 'object' && value !== null;
      });
      
      if (dayEntries.length === 0) {
        return null; // No valid day entries to display
      }
      
      return (
        <div className="bg-cyan-900/40 border-l-4 border-cyan-400 p-3 rounded text-cyan-100 text-sm mb-2">
          <span className="font-semibold text-cyan-300 mb-2 block">Daily Itinerary:</span>
          <div className="space-y-2">
            {dayEntries.map(([dayKey, dayData]) => (
              <div key={dayKey} className="border-l-2 border-cyan-500 pl-3">
                <div className="font-semibold text-cyan-300 text-xs mb-1">{dayKey}</div>
                
                {/* Handle itinerary/description */}
                {dayData && (dayData.itinerary || dayData.description) && (
                  <div className="text-xs text-cyan-100 mb-1">
                    <span className="font-semibold">Plan:</span> {dayData.itinerary || dayData.description}
                  </div>
                )}
                
                {/* Handle activities array */}
                {dayData && dayData.activities && Array.isArray(dayData.activities) && dayData.activities.length > 0 && (
                  <div className="space-y-1 mb-1">
                    <span className="font-semibold text-xs text-cyan-200">Activities:</span>
                    {dayData.activities.map((activity, index) => (
                      <div key={index} className="text-xs text-cyan-100 flex items-start gap-2">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Handle budget - could be number or object */}
                {dayData && dayData.budget && (
                  <div className="text-xs text-cyan-200">
                    <span className="font-semibold">Budget:</span> {
                      typeof dayData.budget === 'number' 
                        ? formatCurrency(dayData.budget)
                        : typeof dayData.budget === 'object' && dayData.budget !== null
                        ? Object.entries(dayData.budget)
                            .filter(([key, value]) => value !== undefined && value !== null)
                            .map(([key, value]) => `${key}: ${typeof value === 'number' ? formatCurrency(value) : String(value)}`)
                            .join(', ')
                        : String(dayData.budget)
                    }
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // If notes is an array (fallback case)
    if (Array.isArray(notes)) {
      const validNotes = notes.filter(note => note !== null && note !== undefined);
      if (validNotes.length === 0) return null;
      
      return (
        <div className="bg-cyan-900/40 border-l-4 border-cyan-400 p-3 rounded text-cyan-100 text-sm mb-2">
          <span className="font-semibold text-cyan-300">Notes:</span> {validNotes.join(', ')}
        </div>
      );
    }
    
    return null;
  } catch (error) {
    console.error('Error rendering notes:', error);
    return (
      <div className="bg-red-900/40 border-l-4 border-red-400 p-3 rounded text-red-100 text-sm mb-2">
        <span className="font-semibold text-red-300">Error:</span> Unable to display notes
      </div>
    );
  }
};

// Utility function to check if a trip plan is chatbot-generated
export const isChatbotGenerated = (tripPlan) => {
  try {
    return tripPlan && tripPlan.notes && typeof tripPlan.notes === 'object' && tripPlan.notes !== null && !Array.isArray(tripPlan.notes);
  } catch (error) {
    console.error('Error checking if trip plan is chatbot-generated:', error);
    return false;
  }
};

// Utility function to get trip plan summary
export const getTripPlanSummary = (tripPlan) => {
  try {
    if (!tripPlan) {
      return {
        title: 'Invalid Trip Plan',
        startLocation: 'Unknown',
        destinations: 'No destinations',
        dates: 'Unknown to Unknown',
        travelers: 0,
        budget: 'Not specified',
        tripType: 'Unknown',
        gears: 'None',
        hasDetailedItinerary: false
      };
    }
    
    const summary = {
      title: tripPlan.title || 'Untitled Trip',
      startLocation: tripPlan.startLocation || 'Unknown',
      destinations: tripPlan.destinations?.filter(Boolean).join(', ') || 'No destinations',
      dates: `${tripPlan.startDate || 'Unknown'} to ${tripPlan.endDate || 'Unknown'}`,
      travelers: tripPlan.travelers || 0,
      budget: formatCurrency(tripPlan.budget),
      tripType: tripPlan.tripType || 'Unknown',
      gears: tripPlan.gears?.join(', ') || 'None',
      hasDetailedItinerary: isChatbotGenerated(tripPlan)
    };
    
    return summary;
  } catch (error) {
    console.error('Error getting trip plan summary:', error);
    return {
      title: 'Error Loading Trip Plan',
      startLocation: 'Unknown',
      destinations: 'Error',
      dates: 'Error',
      travelers: 0,
      budget: 'Error',
      tripType: 'Error',
      gears: 'Error',
      hasDetailedItinerary: false
    };
  }
};

// Utility function to safely access nested object properties
export const safeGet = (obj, path, defaultValue = null) => {
  try {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : defaultValue;
    }, obj);
  } catch (error) {
    console.error('Error accessing nested property:', error);
    return defaultValue;
  }
}; 