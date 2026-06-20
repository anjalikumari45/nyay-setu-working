import { create } from 'zustand';

/**
 * NyaySetu Phase 2 Global UI State Store
 * Replaces bulky prop-drilling configurations with optimized Zustand reactive tokens.
 */
export const useUIStore = create((set) => ({
  // Navigation & Space Control States
  isSidebarOpen: true,
  activeNavbarLink: 'home',
  currentFlowStep: 0,
  
  // Theme Controls (Aligning Login and Home views)
  darkMode: false,
  
  // Actions
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setNavbarLink: (link) => set({ activeNavbarLink: link }),
  nextStep: () => set((state) => ({ currentFlowStep: state.currentFlowStep + 1 })),
  prevStep: () => set((state) => ({ currentFlowStep: Math.max(0, state.currentFlowStep - 1) })),
  resetFlow: () => set({ currentFlowStep: 0 }),
  
  toggleDarkMode: () => set((state) => {
    const nextMode = !state.darkMode;
    if (nextMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { darkMode: nextMode };
  }),
}));
