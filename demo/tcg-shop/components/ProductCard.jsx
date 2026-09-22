const gameGradients = {
  "Pokémon": "from-yellow-400/20 to-amber-600/20",
  Magic: "from-[var(--color-primary)]/20 to-[var(--color-primary-dark)]/20",
  "Yu-Gi-Oh": "from-orange-400/20 to-red-600/20",
  Accessoires: "from-slate-400/20 to-slate-600/20",
};

const ProductCard = ({ name, game, type, price, badge }) => {
  return (
    <div className="card-border rounded-xl overflow-hidden bg-[var(--color-surface-alt)] transition-colors">
      <div
        className={`aspect-[3/4] flex items-center justify-center bg-gradient-to-br ${gameGradients[game] ?? gameGradients.Accessoires} text-xs text-[var(--color-muted)]`}
      >
        Photo produit
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-gold)]">
            {game} · {type}
          </span>
          {badge && (
            <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] shrink-0">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm font-medium leading-snug">{name}</p>
        <p className="text-sm font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
