import React, { useContext } from "react";
import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import Categoriy from "../Components/Category";
import FeaturedProduct from "../Components/FeaturedProduct";
import Cart from "../Components/Cart";
import { MyStore } from "../Context/AppContext";

const Home = () => {
  const { isCartOpen, setIsCartOpen } = useContext(MyStore);

  return (
    <div onClick={() => setIsCartOpen(false)}>
      <div className="px-3 sm:px-5 md:px-8 lg:px-10">
        <div className="relative">
          {/* Main Content */}
          <div
            className={`transition-all duration-300 ${
              isCartOpen ? "blur-sm brightness-50" : ""
            }`}
          >
            <Hero />
            <Cards />
            <Categoriy />
            <FeaturedProduct />
          </div>

          {/* Cart Drawer */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
              fixed top-0 right-0 h-screen z-50
              w-full sm:w-[400px] md:w-[450px]
              bg-white shadow-lg
              transition-transform duration-300 ease-in-out
              ${isCartOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;