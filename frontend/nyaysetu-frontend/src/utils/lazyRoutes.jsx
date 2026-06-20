import React, { lazy } from 'react';

// Dynamically split entry routes to shrink core bundle footprints
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyFAQ = lazy(() => import('../pages/FAQ'));
export const LazyConstitution = lazy(() => import('../pages/Constitution'));
export const LazyVakilFriend = lazy(() => import('../pages/litigant/VakilFriendPage'));
