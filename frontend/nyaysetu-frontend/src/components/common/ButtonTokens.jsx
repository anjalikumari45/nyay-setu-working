import React from 'react';

/**
 * NyaySetu Phase 8 Button Token Factory
 * Implements strict accessibility focus states and contrast parameters.
 */
export const PrimaryButton = ({ children, onClick, disabled = false }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className="px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 bg-blue-700 hover:bg-blue-800 text-white focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow"
  >
    {children}
  </button>
);
