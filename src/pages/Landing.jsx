import cover from "../assets/image/landing/cover.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#005EB8] to-indigo-500 min-h-screen flex flex-col justify-center text-white">
      <img className="w-1/2 absolute right-10" src={cover} alt="cover" />
      <div className="absolute left-20 flex flex-col ">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-xl stroke-black">Inventory Management</h1>
        <p className="text-lg mb-8 drop-shadow-xl stroke-black">
          Welcome to our inventory management system.
        </p>
        <Link to='/login' className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded w-40 text-center">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
