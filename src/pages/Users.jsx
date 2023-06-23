import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { FiEdit3, FiTrash2, FiSearch, FiChevronLeft, FiChevronRight, FiUpload } from "react-icons/fi";
import profileDefault from "../assets/image/home/profileDefault.png";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "../store/users/reducer";

const Users = () => {
  const currentPath = window.location.pathname;

  const dispatch = useDispatch()
  const listUsers = useSelector((state) => state.users.list)

  useEffect(() => {
    dispatch(usersAction.getListUsersThunk())
  })

  const data = [
    { id: 1, picture: profileDefault, nama: "John Doe", email: "johndoe@example.com", role: 2 },
    { id: 2, picture: profileDefault, nama: "Jane Smith", email: "janesmith@example.com", role: 2 },
    { id: 3, picture: profileDefault, nama: "David Johnson", email: "davidjohnson@example.com", role: 2 },
    { id: 4, picture: profileDefault, nama: "Harun Hajadi", email: "harub@example.com", role: 2 },
    { id: 5, picture: profileDefault, nama: "Edo Korupsi", email: "edo@example.com", role: 2 },
  ];

  return (
    <div className=" bg-gray-200 relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="p-10 ml-24 mt-16 w-full ">
          <div>{JSON.stringify(listUsers)}</div>
          <h1 className="text-3xl font-bold mb-10">Management Users</h1>
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Add User</h2>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
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
                    Password
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Role
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">
                    <button className="border flex justify-center items-center gap-2 py-1 px-3 border-black">
                      <FiUpload />
                      <p>Upload Picture</p>
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      className="focus:outline-none"
                      type="text"
                      placeholder="Name of product"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      className="focus:outline-none"
                      type="text"
                      placeholder="Email"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      className="focus:outline-none"
                      type="password"
                      placeholder="Password"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      className="focus:outline-none"
                      type="number"
                      placeholder="Adm:1 & Operator:2"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="bg-[#101540] py-2 px-3 rounded-md text-white w-fit">
              Add New User
            </button>
            <h2 className="text-2xl font-bold">List of Users</h2>
            {/* filter */}
            <div className="flex gap-5">
              {/* search */}
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
            <p>Total Users : 5</p>
            {/* table */}
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 pl-5 bg-gray-100 border-b"></th>
                  <th className="py-2 pl-5 bg-gray-100 border-b"></th>
                  <td className="py-2 px-2 bg-gray-100 border-b font-bold">
                    Picture
                  </td>
                  <td className="py-2 px-2 bg-gray-100 border-b font-bold">
                    Nama
                  </td>
                  <td className="py-2 px-2 bg-gray-100 border-b font-bold">
                    Email
                  </td>
                  <td className="py-2 px-2 bg-gray-100 border-b font-bold">
                    Role
                  </td>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 pl-5 border-b text-center">
                      <FiEdit3 />
                    </td>
                    <td className="py-2 pl-5 border-b text-center">
                      <FiTrash2 />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <img
                        src={item.picture}
                        alt={item.name}
                        className="h-8 w-8"
                      />
                    </td>
                    <td className="py-2 px-2 border-b">{item.nama}</td>
                    <td className="py-2 px-2 border-b">{item.email}</td>
                    <td className="py-2 px-2 border-b">
                      {item.role !== 1 ? "Operator" : "Admin"}
                    </td>
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
              <div className="bg-gray-500 p-3 rounded-md">Save Changes</div>
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

export default Users;
