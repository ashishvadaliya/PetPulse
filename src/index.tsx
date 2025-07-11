import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage";
import { registerPWA } from './pwa';

// Initialize PWA support
registerPWA();

// Create React root and render app
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
