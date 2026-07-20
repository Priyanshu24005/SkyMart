import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 px-6 py-10 text-center">
      <h2 className="text-2xl font-bold text-lime-400">SkyMart</h2>
      <p className="text-zinc-500 mt-2 text-sm">
        © 2025 SkyMart • Built with React + Redux + TanStack Query
      </p>
    </footer>
  );
};

export default Footer;