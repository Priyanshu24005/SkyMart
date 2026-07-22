import React from "react";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Trust",
    description:
      "Every product on SkyMart is carefully verified to ensure quality and authenticity.",
  },
  {
    icon: <Zap size={28} />,
    title: "Speed",
    description:
      "From browsing to checkout, we focus on delivering a fast and seamless shopping experience.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Customer First",
    description:
      "Our customers are at the center of every decision we make and every feature we build.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Quality",
    description:
      "We believe great products create great experiences, which is why quality always comes first.",
  },
];

const Values = () => {
  return (
    <section>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          What We <span className="text-lime-400">Stand For</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Our values guide every decision we make and define the experience we
          deliver to our customers.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-[#171717] border border-gray-800 rounded-3xl p-7 hover:border-lime-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 text-lime-400 flex items-center justify-center">
              {value.icon}
            </div>

            <h3 className="text-xl font-semibold mt-6">
              {value.title}
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;