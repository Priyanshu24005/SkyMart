import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const MyStore = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [registeredUsser, setRegisteredUser] = useState(
    () => JSON.parse(localStorage.getItem("registeredUser")) || []
  );

  const [loggedInUsers, setLoggedInUsers] = useState(
    () => JSON.parse(localStorage.getItem("LoggedInUser")) || {}
  );

  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cartItem")) || []
  );

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products?limit=50"
      );
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cart));
  }, [cart]);

  const addTocart = (id) => {
    const product = filteredProducts.find((item) => item.id === id);

    if (!product) return;

    const alreadyExists = cart.find((item) => item.id === id);

    if (alreadyExists) {
      setIsCartOpen(true);
      return;
    }

    setCart([...cart, { ...product, quauntity: 1 }]);
    setIsCartOpen(true);
    toast.success("Item Added To Cart",{
      theme:"dark"
    })
  };

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
        cart,
        setCart,
        isCartOpen,
        setIsCartOpen,
        addTocart,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};