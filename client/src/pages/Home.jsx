import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to LIQ</h1>
      <p className="text-lg text-gray-600 mb-6">
        Your favorite drinks delivered fast, fresh, and chilled to your door.
      </p>
      <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Shop Now
      </button>
    </section>
  );
};

export default Home;
