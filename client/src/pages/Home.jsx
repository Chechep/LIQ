import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ Load products from public/data/products.json
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const hotDeals = products.filter((p) => p.isDeal);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* 🏠 Hero Section */}
      <Hero />

      <div className="p-6 md:p-10">
        {/* 🔥 Hot Deals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-700 dark:text-amber-400 text-center">
            🔥 Hot Deals
          </h2>

          {hotDeals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {hotDeals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No hot deals available right now.</p>
          )}
        </section>

        {/* 🆕 New Arrivals Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-amber-700 dark:text-amber-400 text-center">
            🆕 New Arrivals
          </h2>

          {newArrivals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No new arrivals at the moment.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
