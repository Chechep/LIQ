import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Deals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.filter((p) => p.isDeal)))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="p-6 md:p-10 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-amber-700 dark:text-amber-400">
        Hot Deals
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No deals available right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Deals;
