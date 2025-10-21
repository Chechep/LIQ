import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen"
    >
      <div className="max-w-3xl mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {product.description}
        </p>
        <p className="text-2xl font-semibold mt-4 text-amber-600 dark:text-amber-400">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
