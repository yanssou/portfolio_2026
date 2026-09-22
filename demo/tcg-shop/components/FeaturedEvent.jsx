import { featuredEvent, shop } from "../constants";

const FeaturedEvent = () => {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-surface-alt)] border border-[var(--color-border)]">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-black/30 text-[var(--color-gold)] mb-4">
            {featuredEvent.badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {featuredEvent.title}
          </h2>
          <p className="text-[var(--color-gold)] font-medium mb-3">
            {featuredEvent.date}
          </p>
          <p className="text-[var(--color-muted)] max-w-xl mb-6">
            {featuredEvent.description}
          </p>
          <a
            href={shop.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-full font-semibold text-black bg-[var(--color-gold)] hover:opacity-90 transition-opacity"
          >
            {featuredEvent.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
