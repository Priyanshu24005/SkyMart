
import React, { useContext, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { MyStore } from "../Context/AppContext";

const Input = () => {
  const { products, setFilteredProducts } = useContext(MyStore);

  const [clearToggle,setClearToggle] = useState(false)
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all categories");
  const [sort, setSort] = useState("featured");

  const handleFilter = (
    searchValue = search,
    categoryValue = category,
    sortValue = sort
  ) => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(searchValue.toLowerCase());

      const matchesCategory =
        categoryValue === "all categories" ||
        product.category.toLowerCase() === categoryValue.toLowerCase();
        setClearToggle(true);

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

  let handleClear = () => {
    setClearToggle(false);
    clearFilters();
  }

  return (
    <div className="px-10 py-6">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          All Products
        </h1>

        <p className="text-gray-400 mt-1">
          {products.length} Products Found
        </p>
      </div>

      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 flex flex-col lg:flex-row gap-4">

        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) => {
              setSearch(e.target.value);
              handleFilter(e.target.value, category, sort);
            }}
            className="w-full h-12 rounded-xl bg-[#1a1a1a] border border-gray-700 pl-11 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-lime-400 transition"
          />
        </div>

        {/* Category */}
        <div className="relative lg:w-56">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleFilter(search, e.target.value, sort);
            }}
            className="appearance-none w-full h-12 rounded-xl bg-[#1a1a1a] border border-gray-700 px-4 text-white outline-none focus:border-lime-400 transition"
          >
            <option value="all categories">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewellery</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
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
            className="appearance-none w-full h-12 rounded-xl bg-[#1a1a1a] border border-gray-700 px-4 text-white outline-none focus:border-lime-400 transition"
          >
            <option value="featured">Featured</option>
            <option value="Price: Low → High">Price: Low → High</option>
            <option value="Price: High → Low">Price: High → Low</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Lowest Rated">Lowest Rated</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>

        {/* Clear */}
        {clearToggle && <button
          onClick={handleClear}
          className="h-12 px-6 rounded-xl bg-red-600 text-white text-black font-semibold hover:opacity-90 transition"
        >
          Clear
        </button>}
      </div>
    </div>
  );
};

export default Input;

