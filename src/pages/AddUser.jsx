import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import http from "../helpers/http";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const AddUser = () => {
  const currentPath = "/users";
  const token = useSelector((state) => state.auth.data);
  const history = useHistory();

  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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
  
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const addUser = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);

    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const data = await http(token).post(
        `http://localhost:3001/users`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("add user succes");
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
          <h1 className="text-3xl font-bold mb-5">Add User</h1>
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <form onSubmit={addUser}>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <td className="py-2 px-4 w-64 bg-gray-100 border-b font-bold">
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
                      <input
                        type="file"
                        name="picture"
                        onChange={handlePictureChange}
                        className="block w-full text-sm text-slate-500 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#101540] hover:file:bg-violet-100"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        className="focus:outline-none"
                        name="name"
                        onChange={handleNameChange}
                        type="text"
                        placeholder="Insert your username"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        className="focus:outline-none"
                        type="text"
                        name="email"
                        onChange={handleEmailChange}
                        placeholder="Insert your email"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        className="focus:outline-none"
                        type="password"
                        name="password"
                        onChange={handlePasswordChange}
                        placeholder="Insert your password"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        className="focus:outline-none w-56"
                        type="number"
                        name="role"
                        onChange={handleRoleChange}
                        placeholder="1 for Admin & 2 for Operator"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                type="submit"
                className="bg-[#101540] mt-5 py-2 px-3 rounded-md text-white w-fit"
              >
                Add New User
              </button>
              <button
                type="reset"
                className="bg-red-500 mt-5 ml-5 py-2 px-3 rounded-md text-white w-fit"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
