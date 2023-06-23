import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { FiEdit } from "react-icons/fi";
import profileDefault from "../assets/image/home/profileDefault.png";

const Profile = () => {
  const currentPath = window.location.pathname;

  return (
    <div className=" bg-gray-200 h-[680px] relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-10">Profile</h1>
          <div className="flex gap-5">
            <img
              className="w-40"
              src={profileDefault}
              alt="profile-picture-user"
            />
            <div className="flex flex-col grow justify-center">
              <h1 className="text-3xl ">User Name</h1>
              <p className="text-xl">email@gmail.com</p>
            </div>
            <div className="mt-3">
              <button className="flex justify-center items-center gap-1 border-2 border-[#101540] px-2 text-[#101540]">
                <FiEdit />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
