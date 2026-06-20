/**
 * NyaySetu Phase 5 Navigation Architecture Layout Configuration
 * Groups repeating links into a single logical cluster to maximize negative space.
 */
export const navigationRoutes = [
  {
    label: 'Home Dashboard',
    path: '/dashboard',
    hasDropdown: true,
    subSections: [
      { name: 'Overview Panel', hash: '#overview' },
      { name: 'Case Metrics', hash: '#metrics' },
      { name: 'Recent Activity', hash: '#activity' }
    ]
  },
  {
    label: 'Legal Ecosystem',
    path: '/ecosystem',
    hasDropdown: false
  },
  {
    label: 'Vakil AI Assistant',
    path: '/ai-assistant',
    hasDropdown: false
  }
];

export default navigationRoutes;
