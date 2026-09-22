const Pill = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
      active
        ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-black"
        : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)]"
    }`}
  >
    {children}
  </button>
);

const FilterBar = ({
  search,
  onSearchChange,
  games,
  activeGame,
  onGameChange,
  types,
  activeType,
  onTypeChange,
}) => {
  return (
    <div className="mb-8 space-y-4">
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Rechercher une carte, un coffret..."
        className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface-alt)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
      />

      <div className="flex gap-2 overflow-x-auto pb-1">
        <Pill active={activeGame === "Tous"} onClick={() => onGameChange("Tous")}>
          Tous les jeux
        </Pill>
        {games.map((game) => (
          <Pill key={game} active={activeGame === game} onClick={() => onGameChange(game)}>
            {game}
          </Pill>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        <Pill active={activeType === "Tous"} onClick={() => onTypeChange("Tous")}>
          Tous les types
        </Pill>
        {types.map((type) => (
          <Pill key={type} active={activeType === type} onClick={() => onTypeChange(type)}>
            {type}
          </Pill>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
