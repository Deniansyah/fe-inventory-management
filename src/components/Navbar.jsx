import profileDefault from "../assets/image/home/profileDefault.png";
import { FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="fixed right-0 left-0 z-50 flex p-4 bg-white">
      <div className="flex grow items-center">
        <FiMenu className="text-4xl ml-3" />
      </div>
      <div className="flex gap-5">
        <div className="flex my-3 justify-center items-center gap-2">
          <input type="text" />
          <FiSearch className="text-2xl" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <img
            className="w-10 h-10"
            src={profileDefault}
            alt="profile-default"
          />
          <p>Jhon Doe</p>
          <FiChevronDown className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
