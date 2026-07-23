import Input from "../Components/Input";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import { useContext } from "react";
import { MyStore } from "../Context/AppContext";

const Shop = () => {
  const { isCartOpen, setIsCartOpen } = useContext(MyStore);
  return (
    <div>
      <div className="py-4">
        <div className="relative">
          {/* Products */}
          <div
            className={`flex flex-col px-10 transition-all duration-300 ${
              isCartOpen ? "blur-sm brightness-50" : "blur-0 brightness-100"
            }`}
          >
            <Input />
            <Products />
          </div>

          {/* Overlay */}
          <div
            onClick={() => setIsCartOpen(false)}
            className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
              isCartOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          />

          {/* Cart */}
          <div  onClick={(e) => e.stopPropagation()}
            className={`fixed right-0 top-0 h-screen w-105 z-50
      transform transition-transform duration-300 ease-in-out
      ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
