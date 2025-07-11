// This file handles PWA functionality without relying on virtual imports

// Check if the app is running in a PWA context
export function isPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches || 
         (window.navigator as any).standalone === true;
}

// Handle offline status
export function isOffline(): boolean {
  return !navigator.onLine;
}

// Simple PWA registration that doesn't rely on virtual imports
export function registerPWA(): void {
  // The actual service worker registration is handled by vite-plugin-pwa
  // This function is just a placeholder for additional PWA functionality
  console.log('PWA support initialized');
}
