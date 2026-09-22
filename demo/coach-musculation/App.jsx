import { Routes, Route } from "react-router-dom";

import { theme } from "./constants";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Contact from "./pages/Contact";

const cssVars = {
  "--color-bg": theme.bg,
  "--color-surface": theme.surface,
  "--color-surface-alt": theme.surfaceAlt,
  "--color-primary": theme.primary,
  "--color-primary-dark": theme.primaryDark,
  "--color-accent": theme.accent,
  "--color-text": theme.text,
  "--color-muted": theme.muted,
  "--color-border": theme.border,
};

const App = () => {
  return (
    <div
      style={cssVars}
      className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<Programs />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
