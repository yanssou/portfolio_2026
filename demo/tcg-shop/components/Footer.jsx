import { Link } from "react-router-dom";

import { shop, navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] px-5 py-12">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="size-9 rounded-full flex items-center justify-center font-bold text-black bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)]">
              {shop.initials}
            </div>
            <span className="font-semibold">{shop.name}</span>
          </div>
          <p className="text-sm text-[var(--color-muted)]">{shop.tagline}</p>
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
            <li>{shop.address}</li>
            <li>
              <a href={shop.phoneHref} className="hover:text-[var(--color-text)] transition-colors">
                {shop.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${shop.email}`} className="hover:text-[var(--color-text)] transition-colors">
                {shop.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-[var(--color-border)] text-xs text-[var(--color-muted)] flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} {shop.name}. Tous droits réservés.</span>
        <span>Site vitrine — démo réalisée par Yanis Ikhenoussene</span>
      </div>
    </footer>
  );
};

export default Footer;
