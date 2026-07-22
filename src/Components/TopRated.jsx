import React from "react";
import { Star, ArrowRight, ShoppingBag } from "lucide-react";

const TopRated = () => {
  return (
    <div className="bg-white rounded-3xl md:rounded-[35px] p-4 md:p-8 flex-1">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3">
          <Star
            className="text-lime-400 fill-lime-400"
            size={20}
          />
          <h2 className="text-2xl md:text-4xl font-bold">
            Top Rated
          </h2>
        </div>

        <button className="flex items-center gap-1 md:gap-2 text-lime-400 font-medium text-sm md:text-base">
          See all
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-4 md:space-y-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="border rounded-2xl md:rounded-3xl h-20 md:h-24 px-4 md:px-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-lg"></div>

              <div>
                <div className="h-3 md:h-4 w-28 md:w-44 bg-gray-100 rounded mb-2"></div>
                <div className="h-3 md:h-4 w-16 md:w-24 bg-gray-100 rounded"></div>
              </div>
            </div>

            <button className="bg-lime-100 p-2 md:p-3 rounded-xl">
              <ShoppingBag
                className="text-lime-500"
                size={18}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;