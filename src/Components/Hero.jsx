import React from 'react'
import { useNavigate } from "react-router";

const Hero = () => {
     let user = JSON.parse(localStorage.getItem("user"))
  let navigate = useNavigate();
  return (
    <div>
      <div className="relative w-full rounded-3xl border border-white bg-black p-6 sm:p-10 overflow-hidden">
     
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Left content */}
        <div className="max-w-xl">
          <p className="flex items-center gap-2 text-lime-400 font-semibold tracking-wide text-sm">
            GOOD EVENING <span>👋</span>
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Welcome back,
            <br />
            <span className="text-lime-400">{user.name}!</span>
          </h1>

          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Discover today's picks — hand-curated products across
            electronics, fashion, and more.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center gap-2 bg-lime-400 text-black font-semibold rounded-full px-6 py-3 hover:bg-lime-300 transition-colors" onClick={()=>navigate("/products")}>
              Shop Now
              <span aria-hidden="true">→</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium rounded-full px-6 py-3 hover:bg-white/5 transition-colors" onClick={()=>navigate("/products")}>
              View All Products
            </button>
          </div>
        </div>

        {/* Right stat badges */}
        <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-auto">
          <div className="flex-1 lg:flex-none bg-lime-950/60 rounded-2xl px-6 py-5 text-center lg:min-w-55">
            <p className="text-2xl sm:text-3xl font-extrabold text-lime-400">20+</p>
            <p className="text-gray-400 text-sm mt-1">Products Available</p>
          </div>

          <div className="flex-1 lg:flex-none border border-white/15 rounded-2xl px-6 py-5 text-center lg:min-w-55">
            <p className="text-2xl sm:text-3xl font-extrabold text-white">Free</p>
            <p className="text-gray-400 text-sm mt-1">Delivery on ₹999+</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
