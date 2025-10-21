import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white shadow-md">
      <h2 className="text-2xl font-semibold">LIQ</h2>
      <ul className="flex gap-6">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Shop</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
