import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="relative group cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover transition-transform group-hover:scale-105"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
      </div>

      {/* Hover buttons */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition bg-black/40">
        <button
          className="p-2 bg-white rounded-full"
          onClick={handleCart}
        >
          <ShoppingCart className="text-black" />
        </button>
        <button
          className="p-2 bg-white rounded-full"
          onClick={handleWishlist}
        >
          <Heart
            className={`${
              isInWishlist(product.id)
                ? "text-red-500 fill-red-500"
                : "text-gray-700"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
