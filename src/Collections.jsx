import { useState } from "react";
import ProductCard from "./ProductCard";
import { perfumes } from "./data/perfumes";

function Collections() {
  const [activeFilter, setActiveFilter] = useState("all")
  const filters = ["all", "men", "women", "unisex"]
  const displayed = activeFilter === "all"
    ? perfumes
    : perfumes.filter((perfumes) => perfumes.category === activeFilter)
  return ( 
    <section id="collection" className="px-4 sm:px-12 md:px-24 pt-25 pb-20 bg-stone-50">
      <p className="text-sm text-center text-amber-700 font-medium">FULL RANGE</p>
      <h1 className="text-3xl md:text-5xl text-center mt-4 mb-12 font-serif">🌟 Explore Our Collection</h1>

      {/* Filter buttons */}
      <div className="flex mb-10 gap-3 items-center justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 text-sm rounded-full font-semibold transition-colors duration-300 border border-amber-700 hover:bg-amber-700 hover:text-white
              ${activeFilter === filter ? "bg-amber-700 text-white" : "bg-stone-50 text-amber-700"}`}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayed.map((perfume) => (
          <ProductCard
            key={perfume.id}
            name={perfume.name}
            price={"₦" + perfume.price.toLocaleString()}
            image={perfume.image}
            description={perfume.description}
          />
        ))}
      </div>
    </section>
   );
}

export default Collections;