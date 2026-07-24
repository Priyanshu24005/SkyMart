import React, { useContext } from "react";
import { Package, TrendingUp, Star, Tag } from "lucide-react";
import { MyStore } from "../Context/AppContext";

const Cards = () => {
  const { cart } = useContext(MyStore);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quauntity,
    0
  );

  const stats = [
    {
      icon: <Package size={24} />,
      value: cart.length,
      title: "Cart Items",
      subtitle: "In your bag",
      iconBg: "bg-lime-500/10",
      iconColor: "text-lime-400",
    },
    {
      icon: <TrendingUp size={24} />,
      value: `$${total.toFixed(2)}`,
      title: "Cart Value",
      subtitle: "Ready to checkout",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      icon: <Star size={24} />,
      value: "5",
      title: "Top Products",
      subtitle: "Highly rated",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
    },
    {
      icon: <Tag size={24} />,
      value: "6",
      title: "Categories",
      subtitle: "To explore",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-black border border-white
              rounded-[30px]
              p-4 sm:p-5 lg:p-6
              flex items-center gap-3 sm:gap-5
              transition-all duration-300
              hover:border-lime-400
              hover:shadow-[0_0_25px_rgba(200,244,0,0.08)]
            "
          >
            {/* Icon */}
            <div
              className={`
                w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
                rounded-2xl
                flex items-center justify-center
                ${item.iconBg}
                ${item.iconColor}
              `}
            >
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {item.value}
              </h2>

              <p className="text-sm sm:text-lg lg:text-xl text-zinc-300">
                {item.title}
              </p>

              <p className="text-xs sm:text-sm text-zinc-500">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;