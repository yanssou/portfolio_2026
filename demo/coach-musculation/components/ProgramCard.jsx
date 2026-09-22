import { coach } from "../constants";

const ProgramCard = ({ name, goal, format, frequency, price, badge, description }) => {
  const isFeatured = badge === "Populaire";

  return (
    <div
      className={`relative flex flex-col border-l-4 p-6 transition-colors ${
        isFeatured
          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
          : "border-[var(--color-border)] bg-[var(--color-surface-alt)]"
      }`}
    >
      {badge && (
        <span className="badge-brute absolute top-0 right-0 text-[10px] font-bold uppercase tracking-wide px-2 py-1 bg-[var(--color-accent)] text-black">
          {badge}
        </span>
      )}

      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] mb-2">
        {goal} · {format}
      </span>

      <h3 className="font-display text-3xl uppercase mb-2">{name}</h3>
      <p className="text-sm text-[var(--color-muted)] mb-5 flex-1">{description}</p>

      <div className="flex items-end justify-between border-t border-[var(--color-border)] pt-4 mb-4">
        <span className="text-xs text-[var(--color-muted)]">{frequency}</span>
        <span className="font-display text-2xl text-[var(--color-accent)]">{price}</span>
      </div>

      <a
        href={coach.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="btn-brute text-center px-4 py-2.5 font-bold uppercase tracking-wide text-black bg-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors"
      >
        Je réserve
      </a>
    </div>
  );
};

export default ProgramCard;
