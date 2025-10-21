import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-amber-700 dark:bg-black text-white shadow-md relative">
      <Link to="/" className="text-2xl font-extrabold">
        LIQ
      </Link>

      <div className="hidden md:flex gap-8 text-lg">
        <Link to="/" className="hover:text-amber-300">Home</Link>
        <Link to="/deals" className="hover:text-amber-300">Hot Deals</Link>
        <Link to="/newarrivals" className="hover:text-amber-300">New Arrivals</Link>
        <Link to="/wishlist" className="hover:text-amber-300">Wishlist</Link>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode}>
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        <Link to="/cart">
          <ShoppingCart size={22} />
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-amber-700 dark:bg-black flex flex-col items-center py-8 gap-6 text-lg md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/deals" onClick={() => setOpen(false)}>Hot Deals</Link>
          <Link to="/newarrivals" onClick={() => setOpen(false)}>New Arrivals</Link>
          <Link to="/wishlist" onClick={() => setOpen(false)}>Wishlist</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
