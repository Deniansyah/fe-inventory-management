import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import profileDefault from "../assets/image/users/ProfileDefault.png";
import http from "../helpers/http";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { usersAction } from "../store/users/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  FiPlus,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
  FiTrash2,
  FiEdit3,
} from "react-icons/fi";

const Users = () => {
  const currentPath = window.location.pathname;
  const dispatch = useDispatch()
  const [del, setDel] = useState(false);
  const token = useSelector((state) => state.auth.data);
  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    searchBy: "name",
    search: "",
    sortBy: "createdAt",
    sort: "ASC",
    role: null,
  });

  // Mengambil data dari redux yg di dapat dari database
  const users = useSelector((state) => state.users);
  const data = users.data.results;

  useEffect(() => {
    dispatch(usersAction.getListUsersThunk(query))
    setDel(false);
  },[dispatch, del, query])

  const handleSearchChange = (event) => {
    setQuery((prevData) => ({
      ...prevData,
      search: event.target.value,
    }));
    setQuery((prevData) => ({
      ...prevData,
      page: 1,
    }));
  };

  const deleteUser = async (id) => {
    try {
      const response = await http(token).delete(
        `/users/${id}`
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

  const sortSearch = (value) => {
    if (value === "name") {
      setQuery((prevData) => ({
        ...prevData,
        searchBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "email") {
      setQuery((prevData) => ({
        ...prevData,
        searchBy: "email",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const sortBy = (value) => {
    if (value === "name") {
      setQuery((prevData) => ({
        ...prevData,
        sortBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "createdAt") {
      setQuery((prevData) => ({
        ...prevData,
        sortBy: "createdAt",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const role = (value) => {
    if (value === "1") {
      setQuery((prevData) => ({
        ...prevData,
        role: "1",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "2") {
      setQuery((prevData) => ({
        ...prevData,
        role: "2",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const sort = (value) => {
    if (value === "ASC") {
      setQuery((prevData) => ({
        ...prevData,
        sort: "ASC",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "DESC") {
      setQuery((prevData) => ({
        ...prevData,
        sort: "DESC",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const limit = (value) => {
    if (value === "5") {
      setQuery((prevData) => ({
        ...prevData,
        limit: "5",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "10") {
      setQuery((prevData) => ({
        ...prevData,
        limit: "10",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "20") {
      setQuery((prevData) => ({
        ...prevData,
        limit: "20",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "30") {
      setQuery((prevData) => ({
        ...prevData,
        limit: "30",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const prevPage = () => {
    setQuery((prevData) => ({
      ...prevData,
      page: query.page - 1,
    }));
  };

  const nextPage = () => {
    setQuery((prevData) => ({
      ...prevData,
      page: query.page + 1,
    }));
  };

  return (
    <div className=" bg-gray-200 relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="p-10 ml-24 pt-24 w-full min-h-screen">
          <h1 className="text-3xl font-bold mb-5">Management Users</h1>
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <Link
              to="/add-user"
              className="bg-green-500 text-white pl-2 px-3 py-2 rounded-lg flex items-center gap-1 w-fit"
            >
              <FiPlus className="text-2xl" />
              <p>Add new user</p>
            </Link>
            <div className="flex gap-5">
              <div className="flex border-2 grow justify-center py-1 px-3 items-center gap-4 rounded-md">
                <input
                  className="focus:outline-none w-full border-b-2 pb-1"
                  placeholder="Search user"
                  type="text"
                  onChange={handleSearchChange}
                />
                <FiSearch className="text-2xl" />
                <div className="h-full border-l border-1 my-1" />
                <div className="relative">
                  <select
                    className="focus:outline-none bg-[#101540] text-white p-2 my-1 rounded-md pr-8 pl-3"
                    name="seachBy"
                    id="seachBy"
                    onClick={(e) => sortSearch(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-4 text-white" />
                </div>
                <div className="h-full border-l border-1 my-1" />
                <div className="relative">
                  <select
                    className="focus:outline-none bg-[#101540] text-white p-2 my-1 rounded-md pr-8 pl-3"
                    name="role"
                    id="role"
                    onClick={(e) => role(e.target.value)}
                  >
                    <option className="hidden">Role</option>
                    <option value="1">Admin</option>
                    <option value="2">Operator</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-4 text-white" />
                </div>
              </div>
              {/* sort */}
              <div className="flex justify-center items-center border-2 py-1 px-3 rounded-md gap-3">
                <div className="relative">
                  <select
                    className="focus:outline-none bg-[#101540] text-white p-2 my-1 rounded-md pr-8 pl-3"
                    name="sortBy"
                    id="sortBy"
                    onClick={(e) => sortBy(e.target.value)}
                  >
                    <option value="createdAt">Created At</option>
                    <option value="name">Name</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-4 text-white" />
                </div>
                <div className="relative">
                  <select
                    className="focus:outline-none bg-[#101540] text-white p-2 my-1 rounded-md pr-8 pl-3"
                    name="sort"
                    id="sort"
                    onClick={(e) => sort(e.target.value)}
                  >
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-4 text-white" />
                </div>
              </div>
            </div>
            <p>Total Users : {users?.data?.pageInfo?.totalData}</p>
            {/* table */}
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 pl-7 bg-gray-100 border-b"></th>
                  <th className="py-2 pr-6 bg-gray-100 border-b"></th>
                  <td className="py-2 bg-gray-100 border-b font-bold">ID</td>
                  <td className="py-2 bg-gray-100 border-b font-bold">
                    <div className="flex justify-center">Picture</div>
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Name
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Email
                  </td>
                  <td className="py-2 bg-gray-100 border-b font-bold">
                    Role
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 pl-7 border-b text-center text-green-500">
                      <Link to={"/edit-user/" + item.id}>
                        <FiEdit3 className="text-xl" />
                      </Link>
                    </td>
                    <td className="py-2 pr-6 border-b text-center text-red-500">
                      <button onClick={() => deleteUser(item.id)}>
                        <FiTrash2 className="text-xl" />
                      </button>
                    </td>
                    <td className="py-2 border-b">{item.id}</td>
                    <td className="py-2 border-b">
                      <div className="flex justify-center">
                        <img
                          src={
                            item.picture === null
                              ? profileDefault
                              : item.picture
                          }
                          alt={item.name}
                          className="h-8 w-8 rounded-full"
                        />
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.email}</td>
                    <td className="py-2 border-b">
                      {item.role === 1 ? "Admin" : "Operator"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* next prev page */}
            <div className="flex justify-between items-center gap-5">
              {/* Primary Color : #101540 */}
              <button
                onClick={prevPage}
                disabled={query.page === 1}
                className={
                  query.page === 1
                    ? "bg-gray-500 p-3 rounded-md text-white"
                    : "bg-[#101540] p-3 rounded-md text-white"
                }
              >
                <FiChevronLeft className="text-3" />
              </button>
              <div className="flex justify-center items-center">
                <p>Baris per halaman : </p>
                <div className="relative ml-3">
                  <select
                    className="focus:outline-none border-black border p-1 my-1 rounded-md pr-7 pl-3"
                    name="limit"
                    id="limit"
                    onClick={(e) => limit(e.target.value)}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                  <FiChevronUp className="absolute right-2 top-3" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <p>Halaman :</p>
                <p>
                  {query.page}/{users?.data?.pageInfo?.totalPage}
                </p>
              </div>
              <button
                onClick={nextPage}
                disabled={query.page === users?.data?.pageInfo?.totalPage}
                className={
                  query.page === users?.data?.pageInfo?.totalPage
                    ? "bg-gray-500 p-3 rounded-md text-white"
                    : "bg-[#101540] p-3 rounded-md text-white"
                }
              >
                <FiChevronRight className="text-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
