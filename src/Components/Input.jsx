import React, { useContext, useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { MyStore } from "../Context/AppContext";

const Input = () => {
  const { products, setFilteredProducts } = useContext(MyStore);

  const [clearToggle, setClearToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all categories");
  const [sort, setSort] = useState("featured");

  const handleFilter = (
    searchValue = search,
    categoryValue = category,
    sortValue = sort,
  ) => {
    setClearToggle(true);

    let filtered = products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesCategory =
        categoryValue === "all categories" ||
        product.category.toLowerCase() === categoryValue.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    if (sortValue === "Price: Low → High") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "Price: High → Low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (sortValue === "Top Rated") {
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    if (sortValue === "Lowest Rated") {
      filtered.sort((a, b) => a.rating.rate - b.rating.rate);
    }

    setFilteredProducts([...filtered]);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("all categories");
    setSort("featured");
    setFilteredProducts(products);
  };

  const handleClear = () => {
    setClearToggle(false);
    clearFilters();
  };

  return (
    <div className="px-10 py-6">
      {products.length === 0 ? (
        <div className="text-white text-center py-20">No Products Found</div>
      ) : (
        <>
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-white">All Products</h1>

            <p className="text-gray-400 mt-2">
              {products.length} products found
            </p>
          </div>

          {/* Filter Box */}
          <div className="border border-gray-600 rounded-3xl bg-[#111111] p-5">
            {/* Top Row */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  value={search}
                  placeholder="Search products..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                    handleFilter(e.target.value, category, sort);
                  }}
                  className="w-full h-12 rounded-2xl bg-[#1d1d1d] border border-gray-700 text-white placeholder:text-gray-500 pl-12 pr-12 outline-none focus:border-lime-400 transition"
                />

                {search && (
                  <X
                    size={18}
                    onClick={() => {
                      setSearch("");
                      handleFilter("", category, sort);
                    }}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-white"
                  />
                )}
              </div>

              {/* Category */}
              <div className="relative lg:w-56">
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    handleFilter(search, e.target.value, sort);
                  }}
                  className="appearance-none w-full h-12 rounded-2xl bg-[#1d1d1d] border border-gray-700 text-white px-5 outline-none cursor-pointer"
                >
                  <option value="all categories">All Categories</option>
                  <option value="beauty">Beauty</option>
                  <option value="fragrances">Fragrances</option>
                  <option value="furniture">Furniture</option>
                  <option value="groceries">Groceries</option>
                  <option value="home-decoration">Home Decoration</option>
                  <option value="kitchen-accessories">
                    Kitchen Accessories
                  </option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                />
              </div>

              {/* Sort */}
              <div className="relative lg:w-56">
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                    handleFilter(search, category, e.target.value);
                  }}
                  className="appearance-none w-full h-12 rounded-2xl bg-[#1d1d1d] border border-gray-700 text-white px-5 outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="Price: Low → High">Price: Low → High</option>
                  <option value="Price: High → Low">Price: High → Low</option>
                  <option value="Top Rated">Top Rated</option>
                  <option value="Lowest Rated">Lowest Rated</option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                />
              </div>

              {/* Clear Button */}
              {clearToggle && (
                <button
                  onClick={handleClear}
                  className="flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-red-900/30 border border-red-800 text-red-400 hover:bg-red-900/50 transition"
                >
                  <X size={18} />
                  Clear
                </button>
              )}
            </div>

            {/* Divider */}
            {clearToggle && (
              <>
                <div className="border-t border-gray-700 my-4"></div>

                {/* Active Filters */}
                <div className="flex flex-wrap gap-3">
                  {search && (
                    <div className="flex items-center gap-2 bg-lime-900/30 border border-lime-500 text-lime-400 px-4 py-1 rounded-full text-sm">
                      "{search}"
                      <X
                        size={14}
                        className="cursor-pointer"
                        onClick={() => {
                          setSearch("");
                          handleFilter("", category, sort);
                        }}
                      />
                    </div>
                  )}

                  {category !== "all categories" && (
                    <div className="flex items-center gap-2 bg-blue-900/30 border border-blue-500 text-blue-400 px-4 py-1 rounded-full text-sm">
                      {category}
                    </div>
                  )}

                  {sort !== "featured" && (
                    <div className="flex items-center gap-2 bg-purple-900/30 border border-purple-500 text-purple-400 px-4 py-1 rounded-full text-sm">
                      {sort}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Input;
