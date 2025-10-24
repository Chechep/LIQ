import { useNavigate } from "react-router-dom";
import whiskeyImg from "../assets/images/whiskey.jpg";
import wineImg from "../assets/images/wine.jpg";
import vodkaImg from "../assets/images/vodka.jpg";
import rumImg from "../assets/images/rum.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/shop");
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between text-center px-6 py-12 bg-[#9C4232] dark:bg-black text-white transition-colors duration-500">
      {/* Top Text Section */}
      <div className="z-10 max-w-3xl space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Z’s <span className="text-amber-400">Premium</span> Spirits
        </h1>
        <p className="text-lg text-gray-200 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Discover fine whiskeys, smooth vodkas, rich rums, and elegant wines.
          Experience refined taste and craftsmanship in every sip.
        </p>
        <button
          onClick={handleExplore}
          className="bg-white text-[#9C4232] dark:bg-amber-400 dark:text-black font-semibold px-8 py-3 rounded-full hover:bg-amber-300 dark:hover:bg-white transition"
        >
          Explore
        </button>
      </div>

      {/* Images at the Bottom */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-4 md:px-12">
        <img
          src={whiskeyImg}
          alt="Whiskey"
          className="rounded-2xl object-cover w-full h-64 md:h-96 transform hover:scale-105 transition duration-300"
        />
        <img
          src={wineImg}
          alt="Wine"
          className="rounded-2xl object-cover w-full h-64 md:h-96 transform hover:scale-105 transition duration-300"
        />
        <img
          src={vodkaImg}
          alt="Vodka"
          className="rounded-2xl object-cover w-full h-64 md:h-96 transform hover:scale-105 transition duration-300"
        />
        <img
          src={rumImg}
          alt="Rum"
          className="rounded-2xl object-cover w-full h-64 md:h-96 transform hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
