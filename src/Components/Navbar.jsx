import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Zap, ShoppingCart, LogOut, Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  let navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user"));

  const Logout = () => {
    navigate("/register");
  };


  return (
    <nav className="w-full bg-black border-b border-zinc-900 px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to={"/Home"} className="flex items-center gap-2 sm:gap-3">
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
               {user?.name?.[0]?.toUpperCase()}
            </div>

            <p className="text-white text-sm lg:text-base">{user.name}</p>
          </div>

          <button className="h-12 w-12 rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white hover:border-lime-400 hover:text-lime-400 transition">
            <ShoppingCart size={20} />
          </button>

          <button
            className="h-12 w-12 rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white hover:border-red-500 hover:text-red-500 transition"
            onClick={Logout}
          >
            <LogOut size={20} />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-2">
          <button className="h-10 w-10 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white">
            <ShoppingCart size={18} />
          </button>

          <button
            className="h-10 w-10 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>

        {/* Sidebar */}
        <aside
          className={`fixed top-0 right-0 h-full w-full sm:w-105 bg-[#111] border-l border-white/10 z-50 flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-lime-400 flex items-center justify-center">
                <Zap size={18} className="text-black" />
              </div>

              <h2 className="text-white text-xl font-bold">
                Sky<span className="text-lime-400">Mart</span>
              </h2>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* User */}
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold">
                {user?.name?.[0]?.toUpperCase() || "P"}
              </div>

              <div>
                <p className="text-white font-medium">{user?.name}</p>

                <p className="text-zinc-500 text-sm">Welcome back</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col p-5 gap-5">
            <NavLink
              to="/Home"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg"
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg"
            >
              About
            </NavLink>
          </div>

          {/* Bottom Actions */}
          <div className="mt-auto p-5 border-t border-white/10">
            <button
              className="w-full bg-red-500/10 border border-red-500/20 text-red-400 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={Logout}
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
