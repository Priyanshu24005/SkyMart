import React from "react";
import { Package, TrendingUp, Star, Tag } from "lucide-react";

const Cards = () => {
  const stats = [
    {
      icon: <Package size={28} />,
      value: "0",
      title: "Cart Items",
      subtitle: "In your bag",
      iconBg: "bg-lime-500/10",
      iconColor: "text-lime-400",
    },
    {
      icon: <TrendingUp size={28} />,
      value: "$0.00",
      title: "Cart Value",
      subtitle: "Ready to checkout",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      icon: <Star size={28} />,
      value: "5",
      title: "Top Products",
      subtitle: "Highly rated",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
    },
    {
      icon: <Tag size={28} />,
      value: "6",
      title: "Categories",
      subtitle: "To explore",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="w-full px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-black border border-white rounded-[30px] p-6 flex items-center gap-5 transition-all duration-300 hover:border-lime-400 hover:shadow-[0_0_25px_rgba(200,244,0,0.08)]"
          >
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
            >
              {item.icon}
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">{item.value}</h2>
              <p className="text-xl text-zinc-300">{item.title}</p>
              <p className="text-sm text-zinc-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;