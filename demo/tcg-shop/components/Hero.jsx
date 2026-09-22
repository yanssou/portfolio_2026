import { Link } from "react-router-dom";

import { hero, shop } from "../constants";

const CardFan = () => {
  const cards = [
    { label: "Pokémon", rotate: -12, translate: "-translate-x-10", from: "from-yellow-400", to: "to-amber-600" },
    { label: "Magic", rotate: 0, translate: "translate-x-0", from: "from-[var(--color-primary)]", to: "to-[var(--color-primary-dark)]" },
    { label: "Yu-Gi-Oh", rotate: 12, translate: "translate-x-10", from: "from-orange-400", to: "to-red-600" },
  ];

  return (
    <div className="relative h-72 md:h-96 flex items-center justify-center">
      {cards.map(({ label, rotate, translate, from, to }) => (
        <div
          key={label}
          style={{ transform: `rotate(${rotate}deg)` }}
          className={`absolute ${translate} w-40 h-56 md:w-48 md:h-64 rounded-2xl border-4 border-[var(--color-surface)] shadow-2xl bg-gradient-to-br ${from} ${to} flex items-end p-4`}
        >
          <span className="text-white font-bold text-lg drop-shadow">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-16 md:pt-20 md:pb-24">
      <div
        className="pointer-events-none absolute -top-32 -right-32 size-72 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-primary)" }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium tracking-wide uppercase text-[var(--color-gold)] mb-4">
            {hero.badge}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            <span className="text-gradient">{hero.title}</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--color-muted)] mb-8 max-w-lg mx-auto md:mx-0">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <Link
              to={hero.primaryCta.to}
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full font-semibold text-black bg-[var(--color-primary)] hover:bg-[var(--color-gold)] transition-colors"
            >
              {hero.primaryCta.label}
            </Link>
            <a
              href={shop.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full font-semibold border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <CardFan />
      </div>
    </section>
  );
};

export default Hero;
