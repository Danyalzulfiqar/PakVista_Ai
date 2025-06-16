import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';
import dummyPlansData from '../data/create.json';
import CreateLeftColumn from '../components/create/CreateLeftColumn';
import CreateRightColumn from '../components/create/CreateRightColumn';

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
  const [form, setForm] = useState(initialForm);
  const [plans, setPlans] = useState([]);
  const [success, setSuccess] = useState(false);
  const [dummyPlans] = useState(dummyPlansData);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlans((prev) => [form, ...prev]);
    setForm(initialForm);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  // Delete a user-created plan
  const handleDelete = (idx) => {
    setPlans((prev) => prev.filter((_, i) => i !== idx));
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
          {/* Left: Form and user-created plans */}
          <CreateLeftColumn
            form={form}
            plans={plans}
            handleChange={handleChange}
            handleDestinationChange={handleDestinationChange}
            addDestination={addDestination}
            removeDestination={removeDestination}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleShare={handleShare}
            success={success}
          />

          {/* Right: Dummy plans from JSON */}
          <CreateRightColumn
            dummyPlans={dummyPlans}
            handleShare={handleShare}
          />
        </main>
      </div>
    </div>
  );
}

export default Create; 