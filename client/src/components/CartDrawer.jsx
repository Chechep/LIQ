import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    addToCart,
    totalPrice,
    isCartOpen,
    toggleCart,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Background overlay */}
      <div
        onClick={toggleCart}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 sm:w-96 h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-lg transform transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-semibold">Your Cart 🛒</h2>
          <button onClick={toggleCart}>
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1 rounded bg-gray-200 dark:bg-gray-700"
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="p-1 rounded bg-gray-200 dark:bg-gray-700"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex justify-between mb-3">
              <p>Total:</p>
              <p className="font-semibold">${totalPrice}</p>
            </div>
            <button
              onClick={clearCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg mb-2"
            >
              Clear Cart
            </button>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
