import { testimonials } from "../constants";

const Testimonials = () => {
  const [featured, ...rest] = testimonials;

  return (
    <section className="px-5 py-14 md:py-20 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl uppercase mb-10">
          Ils ont transformé leur physique
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          <div className="border-l-4 border-[var(--color-primary)] pl-6 md:pl-8">
            <span className="font-display text-6xl text-[var(--color-primary)] leading-none">"</span>
            <p className="font-display text-2xl md:text-3xl uppercase leading-tight -mt-4 mb-4">
              {featured.text}
            </p>
            <p className="text-sm text-[var(--color-muted)]">— {featured.name}</p>
          </div>

          <div className="space-y-6 md:border-l md:border-[var(--color-border)] md:pl-8">
            {rest.map(({ name, text }) => (
              <div key={name}>
                <p className="text-sm text-[var(--color-muted)] mb-2">"{text}"</p>
                <p className="text-xs font-bold uppercase tracking-wide">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
