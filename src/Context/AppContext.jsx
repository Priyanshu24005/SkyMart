import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyStore = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);


  let getProducts = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products?limit=50");
      setProducts(res.data.products);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  console.log(filteredProducts);

  return (
    <MyStore.Provider
      value={{ products, setProducts, filteredProducts, setFilteredProducts}}
    >
      {children}
    </MyStore.Provider>
  );
};
