import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-700 dark:bg-black text-white text-center py-4 mt-auto shadow-inner">
      <p className="text-sm">
        © {new Date().getFullYear()} LIQ 🍾 — All Rights Reserved.
      </p>
      <p className="text-xs mt-1 text-amber-200 dark:text-gray-400">
        Drink responsibly. Liquor delivery made simple.
      </p>
    </footer>
  );
};

export default Footer;
