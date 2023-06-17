import { FiHome, FiPackage, FiInbox, FiUsers, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const home = "/home"
  const product = "/product"
  const stock = "/stock"
  const users = "/users"
  const profile = "/profile"

  return (
    <div className="flex flex-col bg-[#101540] w-24 h-screen text-white text-xs pt-5 gap-8">
      <Link to="/home">
        <div
          id={home}
          className={`flex flex-col justify-center items-center ${
            home === props.path ? "border-l-2 border-white" : null
          }`}
        >
          <FiHome className="text-3xl" />
          <p>Dashboard</p>
        </div>
      </Link>
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
      <Link to='/profile'>
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
    </div>
  );
}

export default SideBar