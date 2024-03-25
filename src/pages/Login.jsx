import icons_google from "../assets/image/login/icons_google.png";
import cover from "../assets/image/landing/cover.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth/reducer";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const isError = useSelector((state) => state.auth.isError);
  const message = useSelector((state) => state.auth.errorMessage);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginRequest = (e) => {
    e.preventDefault();
    const { value: email } = e.target.email;
    const { value: password } = e.target.password;

    if (email.length === 0 || password.length === 0) {
      setShowAlert(true);
    } else {
      const cb = () => {
        history.push("/home");
      };

      if (isError) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }

      dispatch(authAction.loginThunk({ email, password, cb }));
    }
  };

  return (
    <div className="flex flex-row bg-gradient-to-b from-[#005EB8] to-indigo-500 min-h-screen">
      <div className="w-screen md:basis-2/5">
        <div className="m-5  md:ml-8">
          <div className="w-7 h-7 bg-[#FBB040] mb-5"></div>
          <h1 className="text-2xl font-semibold mb-5 text-white">Login</h1>
          <p className="text-white">See your growth and get support!</p>
          <button className="border border-white p-2 rounded-full my-5 flex justify-center items-center gap-2 w-full cursor-not-allowed">
            <p className="text-white">Sign in with google</p>
            <img src={icons_google} alt="logo-google" />
          </button>
          {showAlert && (
            <div className="bg-red-300 border border-red-600  rounded px-5 py-3 mb-3 text-center">
              <span>{message}</span>
            </div>
          )}
          <form onSubmit={loginRequest} className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-white">Email*</label>
              <input
                className="border border-[#8F8F8F] p-3 rounded-md"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white">Password*</label>
              <input
                className="border border-[#8F8F8F] p-3 rounded-md"
                type="password"
                name="password"
                placeholder="minimum 8 characters"
                onChange={handlePasswordChange}
              />
            </div>
            <button
              disabled={password.trim() === "" || email.trim() === ""}
              className={
                password.trim() === ""
                  ? "bg-gray-500 p-3 rounded-md text-white cursor-not-allowed"
                  : "bg-[#101540] p-3 rounded-md text-white"
              }
              type="submit"
              // className="bg-[#101540] text-white p-3 rounded-2xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="hidden md:block md:relative md:basis-3/5">
        <div className="absolute top-12 left-24 border-2 border-warning rounded p-3 text-white">
          <p className="text-sm mb-2">
            Untuk mencoba fitur admin login dengan email : admin@mail.com dan
            password : 12345678
          </p>
          <p className="text-sm">
            Untuk mencoba fitur operator login dengan email : operator@mail.com
            dan password : 12345678
          </p>
        </div>
        <img
          className="absolute md:top-36 md:mr-3 lg:top-24 lg:p-10 xl:w-[80%] xl:right-0"
          src={cover}
          alt="vector-ilustration-inventory-management"
        />
      </div>
    </div>
  );
};

export default Login;
