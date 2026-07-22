import React from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="mt-10">
      <div className="bg-linear-to-r from-lime-400 to-lime-500 rounded-3xl p-8 md:p-14 text-center text-black">

        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
          <ShoppingBag size={30} />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mt-8">
          Ready to Start Shopping?
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-black/80 leading-8">
          Explore thousands of premium products, discover amazing deals,
          and experience shopping that's designed around you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

          <Link
            to="/products"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-neutral-900 transition flex items-center justify-center gap-2"
          >
            Browse Products
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTA;