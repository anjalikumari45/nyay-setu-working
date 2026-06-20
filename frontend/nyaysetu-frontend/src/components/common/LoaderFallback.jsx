import React from 'react';

/**
 * NyaySetu Phase 4 Layout Loader
 * Accessible, elegant loading canvas built for chunk-loading fallbacks.
 */
export const LoaderFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 w-full animate-fade-in" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: 'var(--primary-color) transparent transparent transparent' }}></div>
      </div>
      <p className="text-sm font-medium tracking-wide animate-pulse" style={{ color: 'var(--text-main)' }}>
        Securing connection to NyaySetu ecosystem...
      </p>
    </div>
  );
};

export default LoaderFallback;
