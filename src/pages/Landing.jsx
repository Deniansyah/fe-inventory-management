import cover from "../assets/image/landing/cover.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#005EB8] to-indigo-500 min-h-screen flex flex-col justify-center text-white">
      <img
        className="w-[80%] absolute right-9 top-10 md:w-1/2 md:top-auto md:right-10"
        src={cover}
        alt="cover"
      />
      <div className="flex flex-col mx-5 mt-24 md:mx-0 md:mt-0 md:absolute md:left-10">
        <h1 className="font-bold mb-4 drop-shadow-2xl stroke-black stroke-2 text-3xl md:text-5xl">
          Inventory Management
        </h1>
        <p className="mb-8 drop-shadow-xl stroke-black text-md md:text-lg">
          Welcome to our inventory management system.
        </p>
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded w-40 text-center"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
