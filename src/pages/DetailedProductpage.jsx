import React, { useContext } from "react";
import DetailedProduct from "../Components/DetailedProduct";
import Cart from "../Components/Cart";
import { MyStore } from "../Context/AppContext";

const DetailedProductpage = () => {
  const { isCartOpen, setIsCartOpen } = useContext(MyStore);

  console.log(isCartOpen);

  return (
    <div className="relative">
      <div
        className={`transition-all duration-300 ${
          isCartOpen ? "blur-sm brightness-50" : "blur-0 brightness-100"
        }`}
      >
        <DetailedProduct />
      </div>


      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

   
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed right-0 top-0 h-screen w-105 z-50
      transform transition-transform duration-300 ease-in-out
      ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Cart />
      </div>
    </div>
  );
};

export default DetailedProductpage;
