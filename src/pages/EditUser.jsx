import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import profileDefault from "../assets/image/users/ProfileDefault.png";
import http from "../helpers/http";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

const EditUser = () => {
  const currentPath = "/users";
  const token = useSelector((state) => state.auth.data);
  const history = useHistory();

  const [user, setUser] = useState({});
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [hidden, setHidden] = useState(false);

  const pathname = window.location.pathname;
  const parts = pathname.split("/");
  const id = parts[2];

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await http(token).get(
        `${process.env.REACT_APP_URL_BACKEND}/users/${id}`
      );
      setUser(response.data.results);
    } catch (error) {
      setUser({});
    }
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const updateUser = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);

    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const data = await http(token).patch(
        `${process.env.REACT_APP_URL_BACKEND}/users/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Edit user succes");
      history.push("/users");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

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
          <h1 className="text-3xl font-bold mb-5">Edit User</h1>
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <form onSubmit={updateUser}>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    src={user.picture === null ? profileDefault : user.picture}
                    alt={user.name}
                    className="h-60 w-60 rounded-full"
                  />
                  <span
                    onClick={() => setHidden(true)}
                    className="flex justify-center items-center gap-1 cursor-pointer"
                  >
                    <FiEdit />
                    <p>Edit Picture</p>
                  </span>
                  {hidden ? (
                    <input
                      type="file"
                      name="picture"
                      onChange={handlePictureChange}
                      className="block w-[80%] text-sm text-slate-500 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#101540] hover:file:bg-gray-300"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3 justify-center mt-3">
                  <div>
                    <p>Name :</p>
                    <input
                      className="focus:outline-none p-2 border-2 border-black rounded-sm"
                      name="name"
                      type="text"
                      placeholder={user.name}
                      defaultValue={user.name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div>
                    <p>Email :</p>
                    <input
                      className="focus:outline-none p-2 border-2 border-black rounded-sm"
                      type="email"
                      name="email"
                      placeholder="Insert your email"
                      disabled="on"
                      defaultValue={user.email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div>
                    <p>
                      <span className="text-red-500">*</span>Password :
                    </p>
                    <input
                      className="focus:outline-none p-2 border-2 border-black rounded-sm"
                      type="password"
                      name="password"
                      placeholder="Insert your password"
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <p>Role :</p>
                    <div className="relative">
                      <select
                        className="focus:outline-none p-2 border-2 border-black rounded-sm w-full"
                        name="role"
                        id="role"
                        onChange={handleRoleChange}
                      >
                        {user.role === 1 ? (
                          <>
                            <option value="1">Admin</option>
                            <option value="2">Operator</option>
                          </>
                        ) : (
                          <>
                            <option value="2">Operator</option>
                            <option value="1">Admin</option>
                          </>
                        )}
                      </select>
                      <FiChevronDown className="absolute text-black right-2 top-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button
                  disabled={password.trim() === ""}
                  type="submit"
                  className={
                    password.trim() === ""
                      ? "bg-gray-500 py-2 px-3 rounded-md text-white w-fit cursor-not-allowed"
                      : "bg-[#101540] py-2 px-3 rounded-md text-white w-fit"
                  }
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
