import profileDefault from "../assets/image/users/ProfileDefault.png";
import http from "../helpers/http";
import jwt_decode from "jwt-decode";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Navbar = () => {
  const urlBackend = process.env.REACT_APP_URL_BACKEND;
  const { name } = useSelector((state) => state.auth);
  const token = useSelector((state) => state.auth.data);
  const { id } = jwt_decode(token);
  const [user, setUser] = useState({});
  const isAdmin = useSelector((state) => state.auth.role)

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await http(token).get(
        `${urlBackend}/${isAdmin === 1 ? "users" : "users-operator"}/${id}`
      );
      setUser(response.data.results);
    } catch (error) {
      setUser({});
    }
  };

  return (
    <div className="fixed right-0 left-0 z-50 flex p-4 bg-white">
      <div className="flex grow items-center">
        <FiMenu className="text-4xl ml-3" />
      </div>
      <div className="flex gap-5 mr-5">
        <div className="flex justify-center items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src={user.picture === null ? profileDefault : user.picture}
            alt="profile-default"
          />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
