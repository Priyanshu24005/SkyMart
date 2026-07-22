import React from "react";

const Story = () => {
  return (
    <section className="bg-[#171717] border border-gray-800 rounded-3xl p-6 md:p-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-lime-400/10 text-lime-400 px-4 py-2 rounded-full text-sm font-medium">
            Our Journey
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-5">
            Building the Future of
            <span className="text-lime-400"> Online Shopping</span>
          </h2>

          <p className="text-gray-400 leading-8 mt-6">
            SkyMart started with a simple vision — make online shopping
            faster, smarter, and more enjoyable. We wanted customers to
            discover high-quality products without scrolling through endless
            clutter.
          </p>

          <p className="text-gray-400 leading-8 mt-5">
            Today, SkyMart serves thousands of customers with carefully
            curated collections, lightning-fast delivery, and an experience
            designed around simplicity and trust.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="bg-[#0F0F0F] rounded-3xl h-80 flex items-center justify-center border border-gray-800">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-lime-400/10 mx-auto flex items-center justify-center">
              <span className="text-5xl">🚀</span>
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Since 2022
            </h3>

            <p className="text-gray-400 mt-3">
              Growing with innovation,
              <br />
              passion and our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;