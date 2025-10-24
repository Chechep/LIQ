import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      <Hero />
    </div>
  );
};

export default Home;
