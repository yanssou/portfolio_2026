import { useMemo, useState } from "react";

import FilterBar from "../components/FilterBar";
import ProgramCard from "../components/ProgramCard";
import { programs, goals, formats } from "../constants";

const Programs = () => {
  const [activeGoal, setActiveGoal] = useState("Tous");
  const [activeFormat, setActiveFormat] = useState("Tous");

  const filtered = useMemo(() => {
    return programs.filter((program) => {
      const matchesGoal = activeGoal === "Tous" || program.goal === activeGoal;
      const matchesFormat = activeFormat === "Tous" || program.format === activeFormat;
      return matchesGoal && matchesFormat;
    });
  }, [activeGoal, activeFormat]);

  return (
    <section className="px-5 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl uppercase mb-2">Les programmes</h1>
        <p className="text-[var(--color-muted)] mb-8">
          {programs.length} formules — filtre par objectif ou par format pour trouver la tienne.
        </p>

        <FilterBar
          goals={goals}
          activeGoal={activeGoal}
          onGoalChange={setActiveGoal}
          formats={formats}
          activeFormat={activeFormat}
          onFormatChange={setActiveFormat}
        />

        {filtered.length === 0 ? (
          <p className="text-center py-16 text-[var(--color-muted)]">
            Aucun programme ne correspond à ces filtres.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {filtered.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;
