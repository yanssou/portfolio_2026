import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import FeaturedEvent from "../components/FeaturedEvent";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";
import { products } from "../constants";

const Home = () => {
  const highlights = products.slice(0, 4);

  return (
    <>
      <Hero />
      <FeaturedEvent />

      <section className="px-5 py-14 md:py-20 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-1">Nouveautés & précommandes</h2>
              <p className="text-[var(--color-muted)]">
                Réservez vos boosters et coffrets avant l'arrivage.
              </p>
            </div>
            <Link
              to="/boutique"
              className="hidden sm:inline-block text-sm font-medium text-[var(--color-primary)] hover:underline shrink-0"
            >
              Voir tout →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <Link
            to="/boutique"
            className="sm:hidden mt-6 block text-center px-6 py-3 rounded-full font-semibold border border-[var(--color-border)]"
          >
            Voir toute la boutique
          </Link>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Home;
