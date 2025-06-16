import React from 'react';

function SeasonalCard({ season, recommendations }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-4">{season}</h3>
      <ul className="space-y-3">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="flex items-center gap-2 text-cyan-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            {recommendation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SeasonalCard; 