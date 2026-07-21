import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyStore = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  let getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
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

  console.log(products);

  return (
    <MyStore.Provider
      value={{ products, setProducts, filteredProducts, setFilteredProducts }}
    >
      {children}
    </MyStore.Provider>
  );
};
