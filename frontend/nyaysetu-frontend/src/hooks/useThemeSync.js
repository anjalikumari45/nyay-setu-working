import { useEffect } from 'react';
import { useUIStore } from '../store/uiStore';

/**
 * NyaySetu Phase 6 Unified Theme Synchronization Hook
 * Standardizes dark/light transitions across Home, Login, and Dashboards.
 */
export const useThemeSync = () => {
  const darkMode = useUIStore((state) => state.darkMode);
  const toggleDarkMode = useUIStore((state) => state.toggleDarkMode);

  useEffect(() => {
    // Sync localStorage context with actual HTML element token classes
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' && !darkMode) {
      toggleDarkMode();
    }
  }, [darkMode, toggleDarkMode]);

  return { darkMode, toggleDarkMode };
};

export default useThemeSync;
