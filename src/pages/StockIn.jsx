import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const StockIn = () => {
  const currentPath = "/stock"

  return (
    <div className=" bg-gray-200 min-h-screen relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-10">Add Stock In</h1>
          <div className="bg-white w-full p-5 flex flex-col gap-6">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockIn