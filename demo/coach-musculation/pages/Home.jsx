import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import FeaturedOffer from "../components/FeaturedOffer";
import ProgramCard from "../components/ProgramCard";
import Testimonials from "../components/Testimonials";
import { programs } from "../constants";

const Home = () => {
  const highlights = programs.filter((p) => p.badge === "Populaire").slice(0, 3);

  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedOffer />

      <section className="px-5 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl uppercase mb-1">Programmes les plus demandés</h2>
              <p className="text-[var(--color-muted)]">
                Présentiel, en ligne ou hybride — un format pour chaque objectif.
              </p>
            </div>
            <Link
              to="/programmes"
              className="hidden sm:inline-block text-sm font-medium text-[var(--color-primary)] hover:underline shrink-0"
            >
              Voir tout →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>

          <Link
            to="/programmes"
            className="btn-brute sm:hidden mt-6 block text-center px-6 py-3 font-bold uppercase tracking-wide border border-[var(--color-border)]"
          >
            Voir tous les programmes
          </Link>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Home;
