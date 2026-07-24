import React, { useContext } from "react";
import { Star, ArrowRight, ShoppingBag } from "lucide-react";
import { MyStore } from "../Context/AppContext";
import { useNavigate } from "react-router";

const TopRated = () => {
  const { filteredProducts } = useContext(MyStore);
  let navigate = useNavigate();

  const topRated = [...filteredProducts]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 5);
  

  return (
    <div className="bg-white rounded-3xl md:rounded-[35px] p-4 md:p-8 flex-1">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3">
          <Star className="text-lime-400 fill-lime-400" size={20} />
          <h2 className="text-2xl md:text-4xl font-bold">Top Rated</h2>
        </div>

        <button className="flex items-center gap-1 md:gap-2 text-lime-400 font-medium text-sm md:text-base">
          See all
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-4 md:space-y-5">
        {topRated.map((item) => { 
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-3xl h-24 px-6 flex items-center justify-between hover:border-lime-300 transition-all"
              >
                {/* Left */}
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center cursor-pointer"
                    onClick={() => navigate(`/main/products/${item.id}`)}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <div className="max-w-57.5">
                    <h3 className="text-lg font-semibold text-black line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-lime-400 text-2xl font-bold mt-1">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <button className="w-12 h-12 rounded-2xl bg-lime-50 hover:bg-lime-100 transition flex items-center justify-center">
                  <ShoppingBag className="text-lime-500" size={18} />
                </button>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default TopRated;
