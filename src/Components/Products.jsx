import React, { useContext } from "react";
import { Search } from "lucide-react";
import { MyStore } from "../Context/AppContext";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Products = ({ search, handleClear }) => {
  const { filteredProducts ,addedProduct, setAddedProduct, setCart,setIsCartOpen , addTocart } = useContext(MyStore);

 

  return (
    <div className="px-10 pb-10">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addTocart={addTocart}
              AddedProduct={addedProduct}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24">
          {/* Icon */}
          <div className="w-24 h-24 rounded-full bg-[#181818] border border-gray-700 flex items-center justify-center">
            <Search size={40} className="text-gray-500" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-white mt-8">
            No products found
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mt-3">
            No results found for{" "}
            <span className="text-white font-medium">
              "{search || "your search"}"
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
