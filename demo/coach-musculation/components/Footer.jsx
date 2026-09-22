import { Link } from "react-router-dom";

import { coach, navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] px-5 py-12">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="badge-brute size-9 flex items-center justify-center font-bold text-black bg-[var(--color-primary)]">
              {coach.initials}
            </div>
            <span className="font-display text-lg tracking-wide uppercase">{coach.name}</span>
          </div>
          <p className="text-sm text-[var(--color-muted)]">{coach.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Navigation</p>
          <ul className="space-y-2">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            <li>{coach.address}</li>
            <li>
              <a href={coach.phoneHref} className="hover:text-[var(--color-text)] transition-colors">
                {coach.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${coach.email}`} className="hover:text-[var(--color-text)] transition-colors">
                {coach.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-[var(--color-border)] text-xs text-[var(--color-muted)] flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} {coach.brand}. Tous droits réservés.</span>
        <span>Site vitrine — démo réalisée par Yanis Ikhenoussene</span>
      </div>
    </footer>
  );
};

export default Footer;
