import React from 'react';
import { FaShareAlt, FaEdit, FaTrash } from 'react-icons/fa';

const TripCard = ({ plan, isUser, onDelete, onEdit, onShare, idx }) => (
  <div className="mb-8 rounded-2xl shadow-xl border border-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 p-1.5 relative group hover:scale-[1.02] transition-transform">
    <div className="bg-gradient-to-br from-blue-800/60 via-gray-900/80 to-gray-800/90 rounded-2xl p-6">
      <div className="flex flex-wrap gap-4 items-center mb-2">
        <span className="text-cyan-400 font-bold text-xl tracking-wide drop-shadow">{plan.title}</span>
        <span className="bg-blue-900/60 text-cyan-200 px-2 py-1 rounded text-xs font-semibold shadow">{plan.tripType}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-3 text-cyan-100">
        <div><span className="font-semibold text-cyan-300">Start:</span> {plan.startLocation}</div>
        <div><span className="font-semibold text-cyan-300">Destinations:</span> {plan.destinations.filter(Boolean).join(', ')}</div>
        <div><span className="font-semibold text-cyan-300">Dates:</span> {plan.startDate} to {plan.endDate}</div>
        <div><span className="font-semibold text-cyan-300">Travelers:</span> {plan.travelers}</div>
        <div><span className="font-semibold text-cyan-300">Budget:</span> {plan.budget ? `PKR ${plan.budget}` : 'Not specified'}</div>
        <div><span className="font-semibold text-cyan-300">Gears:</span> {plan.gears && plan.gears.length ? plan.gears.join(', ') : 'None'}</div>
      </div>
      {plan.notes && (
        <div className="bg-cyan-900/40 border-l-4 border-cyan-400 p-3 rounded text-cyan-100 text-sm mb-2">
          <span className="font-semibold text-cyan-300">Notes:</span> {plan.notes}
        </div>
      )}
      <div className="flex justify-end gap-3 mt-4">
        <button
          className="rounded-full p-2 bg-cyan-700/80 hover:bg-cyan-500 text-white shadow transition"
          title="Share"
          onClick={() => onShare && onShare(idx)}
        >
          <FaShareAlt />
        </button>
        <button
          className={`rounded-full p-2 ${isUser ? 'bg-blue-700/80 hover:bg-blue-500' : 'bg-gray-700/40 cursor-not-allowed'} text-white shadow transition`}
          title="Edit"
          onClick={() => isUser && onEdit && onEdit(idx)}
          disabled={!isUser}
        >
          <FaEdit />
        </button>
        <button
          className={`rounded-full p-2 ${isUser ? 'bg-red-700/80 hover:bg-red-500' : 'bg-gray-700/40 cursor-not-allowed'} text-white shadow transition`}
          title="Delete"
          onClick={() => isUser && onDelete && onDelete(idx)}
          disabled={!isUser}
        >
          <FaTrash />
        </button>
      </div>
      <div className="text-right text-xs text-cyan-400 mt-2">Share, Edit & Delete features</div>
    </div>
    <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full w-8 h-8 blur-xl opacity-40 group-hover:opacity-70 transition"></div>
  </div>
);

function CreateRightColumn({ dummyPlans, handleShare }) {
  return (
    <div className="w-full md:w-1/2 max-w-2xl">
      <h2 className="text-lg font-bold mb-4 text-white">Popular & Previous Trip Plans</h2>
      {dummyPlans.length === 0 && (
        <div className="text-gray-500">No previous plans found.</div>
      )}
      {dummyPlans.map((plan, idx) => (
        <TripCard
          key={idx}
          plan={plan}
          isUser={false}
          onDelete={null}
          onEdit={null}
          onShare={handleShare}
        />
      ))}
    </div>
  );
}

export default CreateRightColumn;
