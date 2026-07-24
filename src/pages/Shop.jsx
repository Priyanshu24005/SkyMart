import Input from "../Components/Input";
import Products from "../Components/Products";
import Cart from "../Components/Cart";
import { useContext } from "react";
import { MyStore } from "../Context/AppContext";

const Shop = () => {
  const { isCartOpen, setIsCartOpen } = useContext(MyStore);

  return (
    <div className="py-4">
      <div className="relative">
        {/* Products */}
        <div
          className={`flex flex-col px-3 sm:px-5 md:px-8 lg:px-10
          transition-all duration-300 ${
            isCartOpen ? "blur-sm brightness-50" : ""
          }`}
        >
          <Input />
          <Products />
        </div>

        {/* Overlay */}
        <div
          onClick={() => setIsCartOpen(false)}
          className={`fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300 ${
            isCartOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Cart */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            fixed top-0 right-0 h-screen z-50
            w-full sm:w-[400px] md:w-[450px]
            bg-white shadow-lg
            transition-transform duration-300 ease-in-out
            ${
              isCartOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Shop;