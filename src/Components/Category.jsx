import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/AppContext";

const Category = () => {
  let { selectedCategory, setSelectedCategory } = useContext(MyStore);
  const categories = [
    { name: "Beauty", slug: "beauty", icon: "💄" },
    { name: "Fragrances", slug: "fragrances", icon: "🌸" },
    { name: "Furniture", slug: "furniture", icon: "🛋️" },
    { name: "Groceries", slug: "groceries", icon: "🛒" },
    { name: "Home Decoration", slug: "home-decoration", icon: "🏠" },
    { name: "Kitchen Accessories", slug: "kitchen-accessories", icon: "🍽️" },
  ];


  

  const changePage = (category) => {
    setSelectedCategory(category)
    Navigate("/main/products");
  };

  let Navigate = useNavigate();
  return (
    <section className="px-4 py-4 bg-black mb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white mb-6">Shop by Category</h2>

        <button
          className="text-lime-400 font-medium flex items-center gap-2 hover:gap-3 transition-all"
          onClick={()=>Navigate("/main/products")}
        >
          View All →
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            onClick={() => changePage(category.name)}
            key={category.name}
            className="group bg-white rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(200,244,0,0.15)]"
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
              {category.icon}
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              {category.name}
            </h3>

            <p className="text-gray-500 mt-2 text-lg">{category.items} items</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
