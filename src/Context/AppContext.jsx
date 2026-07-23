import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyStore = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [registeredUsser, setRegisteredUser] = useState(
    () => JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [loggedInUsers, setLoggedInUsers] = useState(
    () => JSON.parse(localStorage.getItem("LoggedInUser")) || {},
  );

  const [addedProduct, setAddedProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

   let addTocart = (id) => {
    let AddedProduct = filteredProducts.find((val) => val.id === id);
    setAddedProduct((prev) => [...prev, AddedProduct]);
    setCart((prev) => [...prev, AddedProduct]);
    setIsCartOpen(true);
  };

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
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        registeredUsser,
        setRegisteredUser,
        loggedInUsers,
        setLoggedInUsers,
        addedProduct,
        setAddedProduct,
        cart,
        setCart,
        isCartOpen,
        setIsCartOpen,
        addTocart
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
