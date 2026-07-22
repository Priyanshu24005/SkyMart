import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let Navigate = useNavigate();
  return (
    <div className="bg-[#111111] rounded-2xl overflow-hidden border border-gray-800 hover:border-lime-400 duration-300">
      {/* Image Section */}
      <div className="relative bg-white h-56 flex items-center justify-center p-5">
        <span className="absolute top-3 left-3 bg-gray-600 text-white text-[10px] px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-36 object-contain"
          onClick={()=>Navigate(`/detail/${product.id}`)}
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <p className="text-gray-500 text-xs capitalize">
          {product.category}
        </p>

        <h2 className="text-white text-lg font-semibold mt-1 line-clamp-2 h-12">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <Star
              key={item}
              size={13}
              className={
                item <= Math.round(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-600"
              }
            />
          ))}

          <span className="text-gray-500 text-xs ml-1">
           ({product.reviews.length} reviews)
          </span>
        </div>

        <hr className="border-gray-700 my-3" />

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-lime-400">
            ${product.price}
          </h2>

          <button className="flex items-center gap-1 bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-xl text-sm font-semibold transition">
            <ShoppingCart size={15} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;