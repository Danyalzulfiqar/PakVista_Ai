import React, { useState, useEffect } from 'react';
import Sidebar from '../components/common/Sidebar';
import CreateLeftColumn from '../components/create/CreateLeftColumn';
import CreateRightColumn from '../components/create/CreateRightColumn';
import TripService from '../services/tripService';
import { useAuth } from '../context/AuthContext';

const initialForm = {
  title: '',
  startLocation: '',
  destinations: [''],
  startDate: '',
  endDate: '',
  travelers: 1,
  tripType: 'Adventure',
  budget: '',
  gears: [],
  notes: '',
};

function Create() {
  const { user } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [plans, setPlans] = useState([]);
  const [popularPlans, setPopularPlans] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'gears') {
      setForm((prev) => ({
        ...prev,
        gears: checked
          ? [...prev.gears, value]
          : prev.gears.filter((g) => g !== value),
      }));
    } else if (name === 'travelers' || name === 'budget') {
      setForm((prev) => ({ ...prev, [name]: value.replace(/[^0-9]/g, '') }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDestinationChange = (idx, value) => {
    const newDest = [...form.destinations];
    newDest[idx] = value;
    setForm((prev) => ({ ...prev, destinations: newDest }));
  };

  const addDestination = () => {
    setForm((prev) => ({ ...prev, destinations: [...prev.destinations, ''] }));
  };

  const removeDestination = (idx) => {
    setForm((prev) => ({
      ...prev,
      destinations: prev.destinations.filter((_, i) => i !== idx),
    }));
  };

  // Load user's trips and popular trips on component mount
  useEffect(() => {
    if (user) {
      loadUserTrips();
      loadPopularTrips();
    }
  }, [user]);

  const loadUserTrips = async () => {
    try {
      setLoading(true);
      const userTrips = await TripService.getUserTrips(user.uid);
      setPlans(userTrips);
    } catch (err) {
      console.error('Error loading user trips:', err);
      // setError('Failed to load your trips');
    } finally {
      setLoading(false);
    }
  };

  const loadPopularTrips = async () => {
    try {
      const popular = await TripService.getPopularTrips();
      setPopularPlans(popular);
    } catch (err) {
      console.error('Error loading popular trips:', err);
      // Fallback to empty array
      setPopularPlans([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('Please log in to create a trip plan');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Create trip in Firestore
      const newTrip = await TripService.createTrip(form, user.uid);
      
      // Add to local state
      setPlans((prev) => [newTrip, ...prev]);
      setForm(initialForm);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      console.error('Error creating trip:', err);
      setError('Failed to create trip plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Delete a user-created plan
  const handleDelete = async (tripId) => {
    try {
      await TripService.deleteTrip(tripId);
      setPlans((prev) => prev.filter((plan) => plan.id !== tripId));
    } catch (err) {
      console.error('Error deleting trip:', err);
      setError('Failed to delete trip plan');
    }
  };

  // Handlers for Edit/Share (stub)
  const handleEdit = (idx) => {
    alert('Edit coming soon!');
  };
  const handleShare = (idx) => {
    alert('Share coming soon!');
  };

  return (
    <div className="flex h-screen bg-gray-880">
      <Sidebar />
      <div className="flex-1 pl-16 overflow-y-auto">
        <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center gap-2 bg-gray-800 pr-8 backdrop-blur-md sm:left-16 sm:px-7 border-b">
          <div className="-ml-3 min-w-0 flex-1">
            <h1 className="pl-2 text-xs font-semibold xl:text-base text-cyan-300">Create Your Custom Trip Plan</h1>
          </div>
        </div>
        <main className="flex flex-col md:flex-row gap-8 pt-24 pb-10 min-h-screen bg-gray-800 items-start">
          {/* Left: Form only */}
          <CreateLeftColumn
            form={form}
            loading={loading}
            error={error}
            handleChange={handleChange}
            handleDestinationChange={handleDestinationChange}
            addDestination={addDestination}
            removeDestination={removeDestination}
            handleSubmit={handleSubmit}
            success={success}
          />

          {/* Right: All plans (user-created and popular) */}
          <CreateRightColumn
            userPlans={plans}
            popularPlans={popularPlans}
            loading={loading}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleShare={handleShare}
          />
        </main>
      </div>
    </div>
  );
}

export default Create; 