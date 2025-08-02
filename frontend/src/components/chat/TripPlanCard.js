import React from 'react';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaMoneyBillWave, FaHiking, FaLightbulb, FaPlus, FaEdit } from 'react-icons/fa';

function TripPlanCard({ tripPlan, onAddToPlans, onModification }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/80 via-gray-900/90 to-cyan-900/80 border border-cyan-600/50 rounded-2xl p-6 shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-cyan-200 mb-2">{tripPlan.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-cyan-300">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>From {tripPlan.startLocation}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendar className="text-cyan-400" />
            <span>{formatDate(tripPlan.startDate)} - {formatDate(tripPlan.endDate)}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-cyan-400" />
            <span>{tripPlan.travelers} Travelers</span>
          </div>
        </div>
      </div>

      {/* Trip Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Destinations */}
        <div className="bg-gray-800/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-cyan-200 mb-3 flex items-center gap-2">
            <FaMapMarkerAlt />
            Destinations
          </h4>
          <div className="space-y-2">
            {tripPlan.destinations.map((destination, index) => (
              <div key={index} className="flex items-center gap-2 text-cyan-100">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                {destination}
              </div>
            ))}
          </div>
        </div>

        {/* Trip Info */}
        <div className="bg-gray-800/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-cyan-200 mb-3 flex items-center gap-2">
            <FaHiking />
            Trip Details
          </h4>
          <div className="space-y-2 text-cyan-100">
            <div><span className="text-cyan-300">Type:</span> {tripPlan.tripType}</div>
            <div><span className="text-cyan-300">Budget:</span> {formatCurrency(tripPlan.budget)}</div>
          </div>
        </div>
      </div>

      {/* Gear Recommendations */}
      {tripPlan.gears && tripPlan.gears.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-cyan-200 mb-3 flex items-center gap-2">
            <FaHiking />
            Recommended Gear
          </h4>
          <div className="flex flex-wrap gap-2">
            {tripPlan.gears.map((gear, index) => (
              <span key={index} className="bg-cyan-700/30 border border-cyan-500/50 rounded-full px-3 py-1 text-sm text-cyan-200">
                {gear}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Daily Itinerary */}
      {tripPlan.notes && tripPlan.notes.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-cyan-200 mb-3">Daily Itinerary</h4>
          <div className="space-y-4">
            {tripPlan.notes.map((day, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-cyan-200 font-semibold">Day {day.day}</h5>
                  <span className="text-cyan-400 text-sm">{formatDate(day.date)}</span>
                </div>
                
                {/* Activities */}
                <div className="mb-3">
                  <h6 className="text-cyan-300 text-sm font-medium mb-2">Activities:</h6>
                  <div className="space-y-1">
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center gap-2 text-cyan-100 text-sm">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget Breakdown */}
                {day.budget && (
                  <div>
                    <h6 className="text-cyan-300 text-sm font-medium mb-2">Budget Breakdown:</h6>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(day.budget).map(([category, amount]) => (
                        <div key={category} className="flex justify-between">
                          <span className="text-cyan-100">{category}:</span>
                          <span className="text-cyan-200">{formatCurrency(amount)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cultural Notes */}
      {tripPlan.culturalNotes && tripPlan.culturalNotes.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-cyan-200 mb-3 flex items-center gap-2">
            <FaLightbulb />
            Cultural Notes & Tips
          </h4>
          <div className="space-y-2">
            {tripPlan.culturalNotes.map((note, index) => (
              <div key={index} className="flex items-start gap-2 text-cyan-100">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 border-t border-cyan-600/30">
        <button
          onClick={onAddToPlans}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <FaPlus className="w-4 h-4" />
          Add to Plans
        </button>
        <button
          onClick={onModification}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <FaEdit className="w-4 h-4" />
          Modification
        </button>
      </div>
    </div>
  );
}

export default TripPlanCard; 