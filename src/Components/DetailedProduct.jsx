import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../Context/AppContext";
import { useParams } from "react-router";
import axios from "axios";
import Navbar from "./Navbar";

const DetailedProduct = () => {
  let { id } = useParams();
  let [singleProduct,setSingleProduct] = useState({});

  let getSingleProduct = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("error in single singleProduct ->", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
    <Navbar/>
    <section className="bg-[#0F0F0F] min-h-screen text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="bg-white rounded-[35px] p-8 flex justify-center items-center h-137.5">
            <img
              src={singleProduct.thumbnail}
              alt={singleProduct.title}
              className="max-h-105 object-contain"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="w-fit px-4 py-1 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/20 text-sm">
              {singleProduct.category}
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex text-yellow-400 text-xl">★★★★★</div>

              <span className="font-semibold">{singleProduct.rating}</span>

              <span className="text-gray-500">
                ({singleProduct.reviews.length} reviews)
              </span>
            </div>

            <hr className="border-gray-700 my-7" />

            <h2 className="text-6xl font-bold text-lime-400">
              ${singleProduct.price}
            </h2>

            <hr className="border-gray-700 my-7" />

            <p className="text-gray-400 leading-8 text-lg">
              {singleProduct.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <button className="flex-1 bg-lime-400 text-black rounded-2xl py-5 font-semibold text-xl hover:bg-lime-300 duration-300">
                🛒 Add to Cart
              </button>

              <button className="w-16 rounded-2xl border border-gray-700 text-2xl">
                ♡
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="border border-gray-700 rounded-2xl py-6 text-center">
                <p className="text-lime-400 text-xl">🚚</p>
                <h3 className="font-semibold mt-3">Free Delivery</h3>
                <p className="text-sm text-gray-500">On orders $50+</p>
              </div>

              <div className="border border-gray-700 rounded-2xl py-6 text-center">
                <p className="text-lime-400 text-xl">🛡️</p>
                <h3 className="font-semibold mt-3">Secure Pay</h3>
                <p className="text-sm text-gray-500">256-bit SSL</p>
              </div>

              <div className="border border-gray-700 rounded-2xl py-6 text-center">
                <p className="text-lime-400 text-xl">↩️</p>
                <h3 className="font-semibold mt-3">Easy Returns</h3>
                <p className="text-sm text-gray-500">30-day policy</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button className="py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 duration-300">
                ← Previous
              </button>

              <button className="py-4 rounded-2xl bg-lime-400 text-black font-semibold hover:bg-lime-300 duration-300">
                Next →
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mt-28">Related Products</h2>
      </div>
    </section>
    </div>
  );
};

export default DetailedProduct;
