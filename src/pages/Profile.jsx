import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import profileDefault from "../assets/image/users/ProfileDefault.png";
import http from "../helpers/http";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  FiEdit,
} from "react-icons/fi";

const Profile = () => {
  const currentPath = window.location.pathname;
  const token = useSelector((state) => state.auth.data);
  const isAdmin = useSelector((state) => state.auth.role);
  const { id } = jwt_decode(token);
  const [user, setUser] = useState({});
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    getUser();
  }, []);

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const getUser = async () => {
    try {
      const response = await http(token).get(
        `http://localhost:3001/${
          isAdmin === 1 ? "users" : "users-operator"
        }/${id}`
      );
      setUser(response.data.results);
    } catch (error) {
      setUser({});
    }
  };

  const updateUser = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const data = await http(token).patch(
        `http://localhost:3001/${
          isAdmin === 1 ? "users" : "users-operator"
        }/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Edit user succes");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  const isButtonDisabled = password === ""

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
          <h1 className="text-3xl font-bold mb-10">Profile</h1>
          <form onSubmit={updateUser}>
            <div className="bg-white w-full p-5 min-h-[80%] flex flex-col gap-6">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2 justify-center items-center">
                  {user.picture ? (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="h-60 w-60 rounded-full border"
                    />
                  ) : (
                    <img
                      src={profileDefault}
                      alt={user.name}
                      className="h-60 w-60 rounded-full border"
                    />
                  )}
                  <span onClick={() => setHidden(true)} className="flex justify-center items-center gap-1">
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
                    <p>User Name :</p>
                    <input
                      className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                      name="name"
                      type="text"
                      placeholder="Input new username"
                      defaultValue={user.name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div>
                    <p>Email :</p>
                    <input
                      className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      defaultValue={user.email}
                      onChange={handleEmailChange}
                      disabled="on"
                    />
                  </div>
                  <div>
                    <p>Password :</p>
                    <input
                      className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                      type="password"
                      name="password"
                      placeholder="Insert your password"
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button
                  disabled={isButtonDisabled}
                  type="submit"
                  className={
                    isButtonDisabled
                      ? "bg-gray-500 py-2 px-3 rounded-md text-white w-fit"
                      : "bg-[#101540] py-2 px-3 rounded-md text-white w-fit"
                  }
                >
                  Save Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
