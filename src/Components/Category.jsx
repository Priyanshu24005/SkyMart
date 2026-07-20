import React from "react";

const Category = () => {
  const categories = [
    { icon: "💻", name: "Electronics", items: 17 },
    { icon: "📦", name: "Clothing", items: 2 },
    { icon: "📦", name: "Furniture", items: 3 },
    { icon: "📦", name: "Home", items: 14 },
    { icon: "📦", name: "Sports", items: 8 },
    { icon: "📦", name: "Accessories", items: 6 },
  ];
  return (
    <section className="px-6 py-8 bg-black min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-white">Shop by Category</h2>

        <button className="text-lime-400 font-medium flex items-center gap-2 hover:gap-3 transition-all">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
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
