import React from 'react';

/**
 * NyaySetu Phase 9 Visual Card Containers
 * Implements micro-interactions and consistent padding structures.
 */
export const UIVisualCard = ({ title, children }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {title && <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-50">{title}</h3>}
      <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export default UIVisualCard;
