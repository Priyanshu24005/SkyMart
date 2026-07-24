import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../Context/AppContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import ProductCard from "./ProductCard";

const DetailedProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const { filteredProducts, addTocart, cart } = useContext(MyStore);

  const Navigate = useNavigate();

  const isAdded = cart.some(
    (item) => item.id === singleProduct.id
  );

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setSingleProduct(res.data);
    } catch (error) {
      console.log(
        "error in fetching singleProduct ->",
        error
      );
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <section className="bg-[#0F0F0F] min-h-screen text-white py-10 px-4 sm:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="bg-white rounded-[35px] p-6 sm:p-8 flex justify-center items-center min-h-[300px] sm:min-h-[450px] lg:min-h-[550px]">
            <img
              src={singleProduct.thumbnail}
              alt={singleProduct.title}
              className="max-h-[250px] sm:max-h-[350px] lg:max-h-[420px] object-contain"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="w-fit px-4 py-1 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/20 text-sm">
              {singleProduct.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-tight">
              {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <div className="flex text-yellow-400 text-xl">
                ★★★★★
              </div>

              <span className="font-semibold">
                {singleProduct.rating}
              </span>

              <span className="text-gray-500">
                ({singleProduct.reviews?.length} reviews)
              </span>
            </div>

            <hr className="border-gray-700 my-7" />

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lime-400">
              ${singleProduct.price}
            </h2>

            <hr className="border-gray-700 my-7" />

            <p className="text-gray-400 leading-7 sm:leading-8 text-base sm:text-lg">
              {singleProduct.description}
            </p>

            {/* Buttons */}
            {isAdded ? (
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button className="flex-1 bg-lime-400 text-black rounded-2xl py-5 font-semibold text-lg sm:text-xl hover:bg-lime-300 duration-300">
                  🛒 Added to Cart
                </button>

                <button className="h-16 sm:w-16 rounded-2xl border border-gray-700 text-2xl">
                  ♡
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button
                  className="flex-1 bg-lime-400 text-black rounded-2xl py-5 font-semibold text-lg sm:text-xl hover:bg-lime-300 duration-300"
                  onClick={() =>
                    addTocart(singleProduct.id)
                  }
                >
                  🛒 Add to Cart
                </button>

                <button className="h-16 sm:w-16 rounded-2xl border border-gray-700 text-2xl">
                  ♡
                </button>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="border border-gray-700 rounded-2xl py-6 text-center">
                <p className="text-lime-400 text-xl">🚚</p>
                <h3 className="font-semibold mt-3">
                  Free Delivery
                </h3>
                <p className="text-sm text-gray-500">
                  On orders $50+
                </p>
              </div>

              <div className="border border-gray-700 rounded-2xl py-6 text-center">
                <p className="text-lime-400 text-xl">🛡️</p>
                <h3 className="font-semibold mt-3">
                  Secure Pay
                </h3>
                <p className="text-sm text-gray-500">
                  256-bit SSL
                </p>
              </div>

              <div className="border border-gray-700 rounded-2xl py-6 text-center">
                <p className="text-lime-400 text-xl">↩️</p>
                <h3 className="font-semibold mt-3">
                  Easy Returns
                </h3>
                <p className="text-sm text-gray-500">
                  30-day policy
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <button
                className="py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 duration-300"
                onClick={() =>
                  Navigate(
                    `/main/products/${
                      singleProduct.id - 1
                    }`
                  )
                }
                disabled={singleProduct.id <= 1}
              >
                ← Previous
              </button>

              <button
                onClick={() =>
                  Navigate(
                    `/main/products/${
                      singleProduct.id + 1
                    }`
                  )
                }
                className="py-4 rounded-2xl bg-lime-400 text-black font-semibold hover:bg-lime-300 duration-300"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-16 sm:mt-28 mb-8 sm:mb-12">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((elem) => {
            if (
              elem.category === singleProduct.category
            ) {
              return (
                <ProductCard
                  product={elem}
                  key={elem.id}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedProduct;