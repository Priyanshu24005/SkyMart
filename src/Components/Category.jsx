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
    setSelectedCategory(category);
    Navigate("/main/products");
  };

  let Navigate = useNavigate();
  return (
    <section className="px-4 sm:px-6 py-6 bg-black mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Shop by Category
        </h2>

        <button
          className="text-lime-400 font-medium hover:gap-3 transition-all"
          onClick={() => Navigate("/main/products")}
        >
          View All →
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => changePage(category.name)}
            className="
          group bg-white rounded-3xl
          p-4 sm:p-6 lg:p-8
          flex flex-col items-center justify-center
          cursor-pointer transition-all duration-300
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(200,244,0,0.15)]
        "
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              {category.icon}
            </div>

            <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 text-center break-words">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
