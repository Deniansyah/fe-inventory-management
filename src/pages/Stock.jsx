import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Stock = () => {
  const currentPath = window.location.pathname;

  return (
    <div className=" bg-gray-200 h-screen relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-10">Management Stock</h1>
          <div className="bg-white w-full min-h-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
