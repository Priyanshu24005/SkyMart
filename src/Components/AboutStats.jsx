import React from "react";
import {
  ShoppingBag,
  Users,
  Star,
  Truck,
} from "lucide-react";

const stats = [
  {
    icon: <ShoppingBag size={26} />,
    value: "20K+",
    label: "Products",
  },
  {
    icon: <Users size={26} />,
    value: "50K+",
    label: "Happy Customers",
  },
  {
    icon: <Star size={26} />,
    value: "4.9",
    label: "Average Rating",
  },
  {
    icon: <Truck size={26} />,
    value: "99%",
    label: "On-Time Delivery",
  },
];

const AboutStats = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#171717] border border-gray-800 rounded-3xl p-6 text-center hover:border-lime-400 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-lime-400/10 text-lime-400 flex items-center justify-center mx-auto">
            {item.icon}
          </div>

          <h2 className="text-3xl font-bold mt-5">
            {item.value}
          </h2>

          <p className="text-gray-400 mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AboutStats;