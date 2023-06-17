import icons_google from "../assets/image/login/icons_google.png";
import cover from "../assets/image/landing/cover.svg";

const Login = () => {
  return (
    <div className="flex flex-row bg-gradient-to-b from-[#005EB8] to-indigo-500 min-h-screen text-white">
      <div className="basis-2/5">
        <div className="m-5 ml-8">
          <div className="w-7 h-7 bg-[#FBB040] mb-5"></div>
          <h1 className="text-2xl font-semibold mb-5">Login</h1>
          <p>See your growth and get support!</p>
          <div className="border border-white p-2 rounded-full my-5 flex justify-center items-center gap-2">
            <p>Sign in with google</p>
            <img src={icons_google} alt="logo-google" />
          </div>
          <form action="login" className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label>Email*</label>
              <input
                className="border border-[#8F8F8F] p-3 rounded-md"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label>Password*</label>
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
                <span>Remember me</span>
              </div>
              <div>
                <p>Forgot password?</p>
              </div>
            </div>
            <button className="bg-[#101540] text-white p-3 rounded-2xl">
              Login
            </button>
          </form>
          <p className="mt-5 font-semibold">
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
