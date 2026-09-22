import { useMemo, useState } from "react";

import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import { products, games, productTypes } from "../constants";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [activeGame, setActiveGame] = useState("Tous");
  const [activeType, setActiveType] = useState("Tous");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(query);
      const matchesGame = activeGame === "Tous" || product.game === activeGame;
      const matchesType = activeType === "Tous" || product.type === activeType;
      return matchesSearch && matchesGame && matchesType;
    });
  }, [search, activeGame, activeType]);

  return (
    <section className="px-5 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">La boutique</h1>
        <p className="text-[var(--color-muted)] mb-8">
          {products.length} produits — filtrez par jeu, par type ou recherchez directement.
        </p>

        <FilterBar
          search={search}
          onSearchChange={setSearch}
          games={games}
          activeGame={activeGame}
          onGameChange={setActiveGame}
          types={productTypes}
          activeType={activeType}
          onTypeChange={setActiveType}
        />

        {filtered.length === 0 ? (
          <p className="text-center py-16 text-[var(--color-muted)]">
            Aucun produit ne correspond à ta recherche.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
