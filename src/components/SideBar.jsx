import { FiHome, FiPackage, FiInbox, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout as LogoutAction } from "../store/auth/reducer";

const SideBar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory()

  const home = "/home"
  const product = "/product"
  const stock = "/stock"
  const users = "/users"
  const profile = "/profile"

  const role = useSelector((state) => state.auth.role);

  const Logout = () => {
    dispatch(LogoutAction());
    return history("/login");
  };

  return (
    <div className="flex flex-col bg-[#101540] basis-[7%] fixed mt-16 w-[7%] h-screen text-white text-xs pt-8 gap-8">
      <Link to="/home">
        <div
          id={home}
          className={`flex flex-col justify-center items-center ${
            home === props.path ? "border-l-2 border-white" : null
          }`}
        >
          <FiHome className="text-3xl" />
          <p>Home</p>
        </div>
      </Link>
      {role !== 1 ? (
        <Link to="/product">
          <div
            id={product}
            className={`flex flex-col justify-center items-center ${
              product === props.path ? "border-l-2 border-white" : null
            }`}
          >
            <FiPackage className="text-3xl" />
            <p>Product</p>
          </div>
        </Link>
      ) : null}
      {role !== 1 ? (
        <Link to="/stock">
          <div
            id={stock}
            className={`flex flex-col justify-center items-center ${
              stock === props.path ? "border-l-2 border-white" : null
            }`}
          >
            <FiInbox className="text-3xl" />
            <p>Stock</p>
          </div>
        </Link>
      ) : null}
      {role === 1 ? (
        <Link to="/users">
          <div
            id={users}
            className={`flex flex-col justify-center items-center ${
              users === props.path ? "border-l-2 border-white" : null
            }`}
          >
            <FiUsers className="text-3xl" />
            <p>Users</p>
          </div>
        </Link>
      ) : null}
      <Link to="/profile">
        <div
          id={profile}
          className={`flex flex-col justify-center items-center ${
            profile === props.path ? "border-l-2 border-white" : null
          }`}
        >
          <FiSettings className="text-3xl" />
          <p>Account</p>
        </div>
      </Link>
      <button className="fixed bottom-0 ml-5 mb-7" onClick={Logout}>
        <div className={`flex flex-col justify-center items-center font-bold text-red-600`} >
          <FiLogOut className="text-3xl" />
          <p>Log Out</p>
        </div>
      </button>
    </div>
  );
}

export default SideBar