import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        
        // Extract unique categories from products
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="p-6 md:p-10 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-amber-700 dark:text-amber-400">
        🛍️ Shop All Products
      </h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-amber-600 text-white"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900"
          }`}
        >
          All Products
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? "bg-amber-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default Shop;