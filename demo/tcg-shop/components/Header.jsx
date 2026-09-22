import { useState } from "react";
import { NavLink } from "react-router-dom";

import { shop, navLinks } from "../constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }) =>
    `nav-link text-sm font-medium ${isActive ? "active text-[var(--color-text)]" : "text-[var(--color-muted)]"}`;

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="size-10 rounded-full flex items-center justify-center font-bold text-black bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)]">
            {shop.initials}
          </div>
          <span className="font-semibold text-lg tracking-tight">
            {shop.name}
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <a
          href={shop.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-block text-sm font-medium px-4 py-2 rounded-full bg-[var(--color-primary)] text-black hover:bg-[var(--color-gold)] transition-colors"
        >
          Nous écrire
        </a>

        <button
          type="button"
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 size-10 shrink-0 cursor-pointer"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text)] rounded-full transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text)] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text)] rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <nav
        className={`lg:hidden grid transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
      >
        <ul className="min-h-0 overflow-hidden flex flex-col gap-1 px-5 border-t border-[var(--color-border)] pt-4">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-3 text-lg ${isActive ? "text-[var(--color-text)] font-medium" : "text-[var(--color-muted)]"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={shop.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-block mt-2 px-5 py-2 rounded-full font-medium bg-[var(--color-primary)] text-black"
            >
              Nous écrire
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
