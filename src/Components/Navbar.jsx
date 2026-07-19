import React from "react";
import { NavLink, useNavigate } from "react-router";
import {
  Zap,
  ShoppingCart,
  LogOut,
  Menu,
} from "lucide-react";

const Navbar = () => {

  let navigate = useNavigate();


  const Logout =() => {
    navigate("/login")
  }

  return (
    <nav className="w-full bg-black border-b border-zinc-900 px-4 sm:px-6 lg:px-10 py-4">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to={"/Home"}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap className="text-black" size={20} />
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">

          <NavLink
            to={"/Home"}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-medium"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-medium"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-medium"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            About
          </NavLink>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-3">

          <div className="flex items-center gap-3 px-3 lg:px-4 py-2 rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold">
              A
            </div>

            <p className="text-white text-sm lg:text-base">
              Username
            </p>
          </div>

          <button className="h-12 w-12 rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white hover:border-lime-400 hover:text-lime-400 transition">
            <ShoppingCart size={20} />
          </button>

          <button className="h-12 w-12 rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white hover:border-red-500 hover:text-red-500 transition" onClick={Logout}>
            <LogOut size={20} />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;