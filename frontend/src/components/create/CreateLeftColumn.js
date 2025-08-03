import React from 'react';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaMoneyBillWave, FaHiking, FaLightbulb } from 'react-icons/fa';

const gearOptions = [
  'Backpack',
  'Camera',
  'Hiking Shoes',
  'Tent',
  'First Aid Kit',
  'Power Bank',
  'Snacks',
  'Water Bottle',
];

const tripTypes = [
  'Adventure',
  'Family',
  'Solo',
  'Friends',
  'Cultural',
  'Nature',
  'Luxury',
];

function CreateLeftColumn({
  form,
  loading,
  error,
  handleChange,
  handleDestinationChange,
  addDestination,
  removeDestination,
  handleSubmit,
  success,
}) {
  return (
    <div className="w-full md:w-1/2 max-w-2xl md:pl-8">
      <div className="rounded-2xl shadow-xl border border-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 p-1.5 relative group">
        <form
          className="w-full bg-gradient-to-br from-blue-800/60 via-gray-900/80 to-gray-800/90 rounded-2xl p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold mb-6 text-cyan-200 drop-shadow">Create Your Trip Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-cyan-300">Trip Name/Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-400"
                placeholder="e.g. Northern Adventure"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-cyan-300">Start Location</label>
              <input
                type="text"
                name="startLocation"
                value={form.startLocation}
                onChange={handleChange}
                required
                className="w-full border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-400"
                placeholder="e.g. Lahore"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-cyan-300">Destinations</label>
              {form.destinations.map((dest, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    value={dest}
                    onChange={(e) => handleDestinationChange(idx, e.target.value)}
                    required
                    className="flex-1 border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-400"
                    placeholder={`Destination ${idx + 1}`}
                  />
                  {form.destinations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDestination(idx)}
                      className="text-red-400 hover:text-red-600 text-lg"
                      aria-label="Remove destination"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addDestination}
                className="mt-1 text-cyan-400 hover:underline text-sm"
              >
                + Add Destination
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-cyan-300">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
                className="w-full border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-cyan-300">End Date</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
                className="w-full border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-cyan-300">Number of Travelers</label>
              <input
                type="number"
                name="travelers"
                min="1"
                value={form.travelers}
                onChange={handleChange}
                required
                className="w-full border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-cyan-300">Trip Type</label>
              <select
                name="tripType"
                value={form.tripType}
                onChange={handleChange}
                className="w-full border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {tripTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-cyan-300">Budget (PKR)</label>
              <input
                type="number"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-400"
                placeholder="e.g. 50000"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-cyan-300">Planning Gears</label>
              <div className="flex flex-wrap gap-4 mt-1">
                {gearOptions.map((gear) => (
                  <label key={gear} className="flex items-center gap-2 text-sm text-cyan-200">
                    <input
                      type="checkbox"
                      name="gears"
                      value={gear}
                      checked={form.gears.includes(gear)}
                      onChange={handleChange}
                      className="accent-cyan-500"
                    />
                    {gear}
                  </label>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-cyan-300">Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className="w-full border border-cyan-700 bg-gray-900/60 text-cyan-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-400"
                placeholder="Add any special notes, recommendations, or reminders..."
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 rounded shadow transition"
          >
            {loading ? 'Creating Plan...' : 'Create Plan'}
          </button>
          {success && (
            <div className="mt-4 text-green-400 text-center font-medium">Trip plan created successfully! 🎉</div>
          )}
          {error && (
            <div className="mt-4 text-red-400 text-center font-medium">{error}</div>
          )}
        </form>
        <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full w-8 h-8 blur-xl opacity-40 group-hover:opacity-70 transition"></div>
      </div>
    </div>
  );
}

export default CreateLeftColumn;
