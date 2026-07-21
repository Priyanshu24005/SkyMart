import React, { useContext } from "react";
import { MyStore } from "../Context/AppContext";
import ProductCard from "./ProductCard";

const Products = () => {
  let { filteredProducts } = useContext(MyStore);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6 px-10 pb-10">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
