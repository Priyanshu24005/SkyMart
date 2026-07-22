import React from "react";
import { Zap } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="text-center">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-2xl bg-lime-400 flex items-center justify-center shadow-lg shadow-lime-400/20">
          <Zap className="w-8 h-8 text-black fill-black" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-4xl md:text-5xl font-bold">
        About <span className="text-lime-400">SkyMart</span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto mt-5 text-gray-400 leading-8 text-sm md:text-base">
        SkyMart is a next-generation e-commerce platform built to make
        online shopping fast, fair, and enjoyable for everyone.
      </p>
    </section>
  );
};

export default AboutHero;