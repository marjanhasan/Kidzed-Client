import { Link, useLocation, useNavigate } from "react-router-dom";
import Google from "./Google";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signInWithGoogle, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    signIn(email, password)
      .then((result) => {
        setErrorMessage("");
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleEmail = (e) => {
    const input = e.target.value;
    setEmail(input);
  };

  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
  };
  return (
    <div className="my-container">
      <h1 className="text-center text-5xl font-semibold mt-6">Login</h1>
      <form onSubmit={handleSubmit} className=" max-w-sm mx-auto mt-12 ">
        <label className="input-txt">Email</label>
        <input
          className="input-field w-full"
          type="email"
          name="email"
          required
          placeholder="Your Email"
          onChange={handleEmail}
        />
        <label className="input-txt">Password</label>
        <input
          className="input-field w-full"
          type="password"
          name="password"
          required
          placeholder="Your Password"
          onChange={handlePassword}
        />
        {errorMessage && (
          <span className="text-red-500 py-2 text-lg font-medium">
            {errorMessage}
          </span>
        )}
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
      <Google signInWithGoogle={signInWithGoogle} setUser={setUser} />
    </div>
  );
};

export default Login;
