import { stats } from "../constants";

const StatsBar = () => {
  return (
    <section className="px-5 py-10 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)] text-center">
        {stats.map(({ value, label }) => (
          <div key={label} className="px-4">
            <p className="font-display text-3xl md:text-4xl text-[var(--color-primary)]">
              {value}
            </p>
            <p className="text-xs uppercase tracking-wide text-[var(--color-muted)] mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
