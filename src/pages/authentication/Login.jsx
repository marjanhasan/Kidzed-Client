import { Link } from "react-router-dom";
import Google from "./Google";

const Login = () => {
  return (
    <div className="my-container">
      <h1 className="text-center text-5xl font-semibold mt-6">Login</h1>
      <form className=" max-w-sm mx-auto mt-12 ">
        <label className="input-txt">Email</label>
        <input className="input-field w-full" type="email" name="email" id="" />
        <label className="input-txt">Password</label>
        <input
          className="input-field w-full"
          type="password"
          name="password"
          id=""
        />
        <p className="mb-4 font-medium">
          Do not have an account?{" "}
          <Link to="/register" className="text-purple-600">
            Please Register
          </Link>
        </p>
        <input
          className="w-full p-2 bg-purple-500 gap-2 rounded-md text-white font-semibold cursor-pointer mt-4"
          type="submit"
          value="Login"
        />
      </form>
      <Google />
    </div>
  );
};

export default Login;
