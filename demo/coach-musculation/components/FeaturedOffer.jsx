import { featuredOffer, coach } from "../constants";

const FeaturedOffer = () => {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden border-l-4 border-[var(--color-primary)] p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-surface-alt)]">
          <span className="badge-brute inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 bg-black/30 text-[var(--color-accent)] mb-4">
            {featuredOffer.badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-2">
            {featuredOffer.title}
          </h2>
          <p className="text-[var(--color-accent)] font-medium mb-3">
            {featuredOffer.date}
          </p>
          <p className="text-[var(--color-muted)] max-w-xl mb-6">
            {featuredOffer.description}
          </p>
          <a
            href={coach.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn-brute inline-block px-6 py-3 font-bold uppercase tracking-wide text-black bg-[var(--color-accent)] hover:opacity-90 transition-opacity"
          >
            {featuredOffer.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffer;
