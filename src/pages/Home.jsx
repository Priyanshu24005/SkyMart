import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import Categoriy from "../Components/Category";
import Footer from "../Components/Footer";
import FeaturedProduct from "../Components/FeaturedProduct";

let Home = () => {
  return (
    <div>
      <Navbar />

      <div className="px-10 py-4">
        <Hero />
        <Cards/>
        <Categoriy/>
        <FeaturedProduct/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
