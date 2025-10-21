import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    addToCart,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">My Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl p-4 shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 bg-red-500 text-white rounded-full"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-lg">
                <strong>Total Items:</strong> {totalItems}
              </p>
              <p className="text-xl font-semibold">
                <strong>Total Price:</strong> ${totalPrice}
              </p>
            </div>
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
