import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// HashRouter (not BrowserRouter): this site gets dropped on whatever static
// host is fastest before a client meeting, often with no control over server
// rewrites. Hash-based routing works with zero server config, anywhere.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
