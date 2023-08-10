import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { FiList, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { usersAction } from "../store/users/reducer";
import { 
  useDispatch, 
  // useSelector 
} from "react-redux";

const Users = () => {
  const currentPath = window.location.pathname;

  const dispatch = useDispatch()
  // const listUsers = useSelector((state) => state.users.list)

  useEffect(() => {
    dispatch(usersAction.getListUsersThunk())
  },[dispatch])

  return (
    <div className=" bg-gray-200 h-screen relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="p-10 ml-24 mt-16 w-full ">
          <h1 className="text-3xl font-bold mb-5">Management Users</h1>
          <div className="w-full flex gap-5">
            <Link
              to="/list-users"
              className="bg-white p-3 rounded-lg flex flex-col justify-center items-center"
            >
              <FiList className="text-5xl" />
              <p className="font-bold">List users</p>
            </Link>
            <Link
              to="/add-user"
              className="bg-white p-3 rounded-lg flex flex-col justify-center items-center"
            >
              <FiPlus className="text-5xl" />
              <p className="font-bold">Add users</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
