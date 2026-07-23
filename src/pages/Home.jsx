import React, { useContext } from "react";
import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import Categoriy from "../Components/Category";
import Footer from "../Components/Footer";
import FeaturedProduct from "../Components/FeaturedProduct";
import Cart from "../Components/Cart";
import { MyStore } from "../Context/AppContext";

let Home = () => {
  const { isCartOpen, setIsCartOpen } = useContext(MyStore);
  return (
    <div onClick={() => setIsCartOpen(false)}>
      <div className="px-10">
        <div className="relative">
          <div
            className={`px-10 transition-all duration-300 ${
              isCartOpen ? "blur-sm brightness-50" : ""
            }`}
          >
            <Hero />
            <Cards />
            <Categoriy />
            <FeaturedProduct />
          </div>

          <div onClick={(e) => e.stopPropagation()}
            className={`fixed top-0 right-0 h-screen w-105 z-50
                transition-transform duration-300 ease-in-out
                ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
