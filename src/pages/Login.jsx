import icons_google from "../assets/image/login/icons_google.png";
import cover from "../assets/image/landing/cover.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth/reducer";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [messageError, setMessageError] = useState("Please fill all form");

  const history = useHistory();
  const dispatch = useDispatch();

  const loginRequest = (e) => {
    e.preventDefault();
    const { value: email } = e.target.email;
    const { value: password } = e.target.password;

    if (email.length === 0 || password.length === 0) {
      setShowAlert(true);
    } else {
      const cb = () => {
        history.push("/home")
      };

      const err = (error) => {
        const errMessage = error.response.data.result.message;
        setMessageError(errMessage);
      };

      dispatch(authAction.loginThunk({ email, password, cb, err }));
    }
  };

  return (
    <div className="flex flex-row bg-gradient-to-b from-[#005EB8] to-indigo-500 min-h-screen">
      <div className="basis-2/5">
        <div className="m-5 ml-8">
          <div className="w-7 h-7 bg-[#FBB040] mb-5"></div>
          <h1 className="text-2xl font-semibold mb-5 text-white">Login</h1>
          <p className="text-white">See your growth and get support!</p>
          <div className="border border-white p-2 rounded-full my-5 flex justify-center items-center gap-2">
            <p className="text-white">Sign in with google</p>
            <img src={icons_google} alt="logo-google" />
          </div>
          {showAlert && (
            <div className="bg-red-300 border border-red-600  rounded px-5 py-3 text-center">
              <span>{messageError}</span>
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
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white">Password*</label>
              <input
                className="border border-[#8F8F8F] p-3 rounded-md"
                type="password"
                name="password"
                placeholder="minimum 8 characters"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1">
                <input
                  className="w-10"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                <span className="text-white">Remember me</span>
              </div>
              <div>
                <p className="text-white">Forgot password?</p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#101540] text-white p-3 rounded-2xl"
            >
              Login
            </button>
          </form>
          <p className="mt-5 font-semibold text-white">
            Not regestered yet?{" "}
            <span className="text-[#101540]">Create a new account</span>
          </p>
        </div>
      </div>
      <div className="basis-3/5">
        <img
          className="w-11/12 mt-20 ml-10"
          src={cover}
          alt="vector-ilustration-inventory-management"
        />
      </div>
    </div>
  );
};

export default Login;
