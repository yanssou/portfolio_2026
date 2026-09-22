import { Link } from "react-router-dom";

import { hero, stats } from "../constants";

const BarbellIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute -right-10 top-1/2 -translate-y-1/2 w-[26rem] h-[26rem] text-black/10 rotate-12 pointer-events-none"
  >
    <path d="M2 12h2" />
    <path d="M6 8v8" />
    <path d="M8 6v12" />
    <rect x="10" y="10" width="4" height="4" />
    <path d="M16 6v12" />
    <path d="M18 8v8" />
    <path d="M20 12h2" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="diagonal-split absolute inset-y-0 right-0 w-full md:w-2/3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] overflow-hidden">
        <BarbellIcon />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-xl">
          <p className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent)] mb-5">
            {hero.badge}
          </p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] mb-6">
            {hero.title}
          </h1>
          <p className="text-base md:text-lg text-[var(--color-muted)] mb-9 max-w-lg">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
            <Link
              to={hero.primaryCta.to}
              className="btn-brute text-center px-7 py-3.5 font-bold uppercase tracking-wide text-black bg-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              to="/programmes"
              className="btn-brute text-center px-7 py-3.5 font-bold uppercase tracking-wide border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--color-border)] pt-6">
            {stats.slice(0, 2).map(({ value, label }) => (
              <div key={label}>
                <span className="font-display text-2xl text-[var(--color-accent)] mr-2">
                  {value}
                </span>
                <span className="text-sm text-[var(--color-muted)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
