import { testimonials } from "../constants";

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="px-5 py-14 md:py-20 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Ils en parlent</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ name, rating, text }) => (
            <div
              key={name}
              className="card-border rounded-xl p-5 bg-[var(--color-surface-alt)] transition-colors"
            >
              <div className="flex gap-1 text-[var(--color-gold)] mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-sm text-[var(--color-muted)] mb-4">"{text}"</p>
              <p className="text-sm font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
