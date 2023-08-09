import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import {
  FiList,
  FiPlus
} from "react-icons/fi";

import { Link } from "react-router-dom";

const Product = () => {
  const currentPath = window.location.pathname;

  return (
    <div className=" bg-gray-200 h-screen relative">
      <Navbar />
      <div className="flex">
        <SideBar path={currentPath} />
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-5">Management Product</h1>
          <div className="w-full flex gap-5">
            <Link to="/list-product" className="bg-white p-3 rounded-lg flex flex-col justify-center items-center"> 
              <FiList className="text-5xl" />
              <p className="font-bold">List product</p>
            </Link>
            <Link to="/add-product" className="bg-white p-3 rounded-lg flex flex-col justify-center items-center"> 
              <FiPlus className="text-5xl" />
              <p className="font-bold">Add product</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
