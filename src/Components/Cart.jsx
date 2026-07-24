import React, { useContext } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  X,
} from "lucide-react";
import { MyStore } from "../Context/AppContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, setCart, setIsCartOpen } = useContext(MyStore);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quauntity,
    0
  );

  const Increament = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quauntity: item.quauntity + 1 }
        : item
    );

    setCart(updatedCart);
  };

  const Decreament = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quauntity: item.quauntity - 1 }
          : item
      )
      .filter((item) => item.quauntity > 0);

    setCart(updatedCart);
  };

  const deletedItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);

    toast.error("🗑️ Item removed from cart", {
      theme: "dark",
    });
    setIsCartOpen(false);
  };

  const clearCart = () => {
    setCart([]);

    toast.error("🗑️ Cart cleared", {
      theme: "dark",
    });
  };

  return (
    <div className="w-105 h-screen bg-[#111111] border-l border-gray-700 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <ShoppingBag className="text-lime-400" size={22} />

          <h2 className="text-3xl font-bold text-white">
            Cart
          </h2>

          <span className="bg-lime-900 text-lime-300 text-xs px-3 py-1 rounded-full">
            {cart.length} Items
          </span>
        </div>

        <button onClick={() => setIsCartOpen(false)}>
          <X className="text-gray-400 cursor-pointer" />
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="w-28 h-28 rounded-3xl border border-gray-700 bg-[#1A1A1A] flex items-center justify-center">
            <ShoppingBag
              size={42}
              className="text-gray-600"
            />
          </div>

          <h2 className="text-white text-4xl font-bold mt-8">
            Cart is empty
          </h2>

          <p className="text-gray-500 text-lg mt-3 text-center">
            Go shop something cool!
          </p>

          <button
            onClick={() => setIsCartOpen(false)}
            className="mt-10 bg-lime-400 hover:bg-lime-500 text-black font-semibold text-lg px-10 py-4 rounded-2xl"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border border-gray-700 rounded-2xl p-4 flex gap-4"
              >
                <div className="bg-white rounded-xl w-24 h-24 flex items-center justify-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-16 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-white text-lg font-medium line-clamp-1">
                    {item.title}
                  </h2>

                  <h1 className="text-lime-400 text-3xl font-bold mt-1">
                    $
                    {(item.price * item.quauntity).toFixed(2)}
                  </h1>

                  <p className="text-gray-500">
                    ${item.price.toFixed(2)} each
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          Decreament(item.id)
                        }
                        className="border border-gray-700 rounded-lg w-9 h-9 flex items-center justify-center text-white"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="text-white font-semibold">
                        {item.quauntity}
                      </span>

                      <button
                        onClick={() =>
                          Increament(item.id)
                        }
                        className="border border-gray-700 rounded-lg w-9 h-9 flex items-center justify-center text-white"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        deletedItem(item.id)
                      }
                    >
                      <Trash2
                        className="text-red-500"
                        size={18}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-300 text-xl">
                Total
              </h2>

              <h1 className="text-white text-4xl font-bold">
                ${total.toFixed(2)}
              </h1>
            </div>

            <button className="w-full bg-lime-400 hover:bg-lime-500 text-black text-xl font-semibold py-4 rounded-2xl transition"
            onClick={()=>toast.info("Order Placed",{
              theme:"dark"
            })}>
              Checkout →
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-4 text-gray-500 hover:text-white transition"
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;