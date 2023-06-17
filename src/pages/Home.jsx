import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Home = () => {
  const currentPath = window.location.pathname;

  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="w-screen h-screen bg-gray-200"></div>
      </div>
    </>
  );
};

export default Home;
