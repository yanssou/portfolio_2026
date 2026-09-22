const Tab = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`shrink-0 pb-2 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${
      active
        ? "border-[var(--color-primary)] text-[var(--color-text)]"
        : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-text)]"
    }`}
  >
    {children}
  </button>
);

const FilterBar = ({ goals, activeGoal, onGoalChange, formats, activeFormat, onFormatChange }) => {
  return (
    <div className="mb-10 space-y-5">
      <div className="flex gap-6 overflow-x-auto border-b border-[var(--color-border)]">
        <Tab active={activeGoal === "Tous"} onClick={() => onGoalChange("Tous")}>
          Tous les objectifs
        </Tab>
        {goals.map((goal) => (
          <Tab key={goal} active={activeGoal === goal} onClick={() => onGoalChange(goal)}>
            {goal}
          </Tab>
        ))}
      </div>

      <div className="flex gap-2">
        {["Tous", ...formats].map((format) => (
          <button
            key={format}
            type="button"
            onClick={() => onFormatChange(format)}
            className={`badge-brute px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
              activeFormat === format
                ? "bg-[var(--color-primary)] text-black"
                : "bg-[var(--color-surface-alt)] text-[var(--color-muted)] border border-[var(--color-border)]"
            }`}
          >
            {format}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
