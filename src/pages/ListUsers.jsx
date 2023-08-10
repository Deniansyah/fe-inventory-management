import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import profileDefault from "../assets/image/users/ProfileDefault.png";
import http from "../helpers/http";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "../store/users/reducer"
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiTrash2,
  FiEdit3,
} from "react-icons/fi";

const ListUsers = () => {
  const currentPath = "/users";
  const dispatch = useDispatch();
  const [del, setDel] = useState(false);
  const token = useSelector((state) => state.auth.data);
  // Mengambil data dari redux yg di dapat dari database
  const users = useSelector((state) => state.users);
  const data = users.data.results;

  useEffect(() => {
    dispatch(usersAction.getListUsersThunk());
    setDel(false);
  }, [dispatch, del]);

  const deleteUser = async (id) => {
    try {
      const response = await http(token).delete(
        `http://localhost:3001/users/${id}`
      );
      alert("delete user succes");
      setDel(true);
      console.log(response);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  return (
    <div className=" bg-gray-200 relative">
      <Navbar />
      <div className="flex">
        <SideBar path={currentPath} />
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-5">List of Users</h1>
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="flex border-2 grow justify-center py-1 px-3 items-center gap-2">
                <input
                  className="focus:outline-none w-full border-2"
                  type="text"
                />
                <select name="seachBy" id="seachBy">
                  <option value="createdAt">Created At</option>
                  <option value="name">Name</option>
                </select>
                <FiSearch className="text-2xl" />
              </div>
              {/* sort */}
              <div className="flex justify-center items-center border-2 py-1 px-3">
                <select name="sortBy" id="sortBy">
                  <option value="createdAt">Created At</option>
                  <option value="name">Name</option>
                </select>
                <select name="sort" id="sort">
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
                </select>
              </div>
            </div>
            <p>Total Users : {users?.data?.pageInfo?.totalData}</p>
            {/* table */}
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 pl-5 bg-gray-100 border-b"></th>
                  <th className="py-2 pl-5 bg-gray-100 border-b"></th>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    ID
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Picture
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Name
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Email
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Role
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 pl-5 border-b text-center text-green-500">
                      <Link to={"/edit-user/" + item.id}>
                        <FiEdit3 className="text-xl" />
                      </Link>
                    </td>
                    <td className="py-2 pl-5 border-b text-center text-red-500">
                      <button onClick={() => deleteUser(item.id)}>
                        <FiTrash2 className="text-xl" />
                      </button>
                    </td>
                    <td className="py-2 px-4 border-b">{item.id}</td>
                    <td className="py-2 px-4 border-b">
                      <img
                        src={
                          item.picture === null ? profileDefault : item.picture
                        }
                        alt={item.name}
                        className="h-8 w-8"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.email}</td>
                    <td className="py-2 px-4 border-b">{item.role === 1 ? "Admin" : "Operator"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* next prev page */}
            <div className="flex justify-between items-center gap-5 text-white">
              {/* Primary Color : #101540 */}
              <div className="bg-gray-500 p-3 rounded-md">
                <FiChevronLeft className="text-3" />
              </div>
              <div className="bg-gray-500 p-3 rounded-md">
                <FiChevronRight className="text-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
