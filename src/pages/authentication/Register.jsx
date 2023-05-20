import { Link, useNavigate } from "react-router-dom";
import Google from "./Google";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const { createUser, userProfile, signInWithGoogle, logOut, setUser } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (emailError) {
      e.target.email.focus();
      return;
    } else if (passwordError) {
      e.target.password.focus();
      return;
    }

    createUser(email, password)
      .then((res) => {
        setErrorMessage("");
        const loggedUser = res.user;
        setUser(loggedUser);
        form.reset();
        userProfile(name, photo)
          .then(() => {
            console.log(name, photo);
            setErrorMessage("");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        logOut();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });

    errorMessage || navigate("/login");
  };

  const handleEmail = (e) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const input = e.target.value;
    setEmail(input);
    if (!emailRegex.test(input)) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
    if (input.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else if (!/\d/.test(input)) {
      setPasswordError("Password must contain at least one digit");
    } else if (!/[a-z]/.test(input)) {
      setPasswordError("Password must contain at least one lowercase letter");
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else {
      setPasswordError("");
    }
  };
  return (
    <div className="my-container">
      <h1 className="text-center text-5xl font-semibold mt-6">Register</h1>
      <form onSubmit={handleSubmit} className=" max-w-sm mx-auto mt-12 ">
        <label className="input-txt">Name</label>
        <input
          className="input-field w-full "
          type="text"
          name="name"
          required
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="input-txt">Email</label>
        <input
          className="input-field w-full"
          type="email"
          name="email"
          required
          placeholder="Your Email"
          onChange={handleEmail}
        />
        {emailError && (
          <span className="text-red-500 py-2 text-lg font-medium">
            {emailError}
          </span>
        )}
        <br />
        <label className="input-txt">Password</label>
        <input
          className="input-field w-full"
          type="password"
          name="password"
          required
          placeholder="Your Password"
          onChange={handlePassword}
        />
        {passwordError && (
          <span className="text-red-500 py-2 text-lg font-medium">
            {passwordError}
          </span>
        )}
        <br />
        <label className="input-txt">Photo URL</label>
        <input
          className="input-field w-full"
          type="text"
          name="photos"
          required
          onChange={(e) => setPhoto(e.target.value)}
        />
        {errorMessage && (
          <span className="text-red-500 py-2 text-lg font-medium">
            {errorMessage}
          </span>
        )}
        <p className="mb-4 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600">
            Please Login
          </Link>
        </p>
        <input
          className="w-full p-2 bg-purple-500 gap-2 rounded-md text-white font-semibold cursor-pointer mt-4"
          type="submit"
          value="Register"
        />
      </form>
      <Google signInWithGoogle={signInWithGoogle} setUser={setUser} />
    </div>
  );
};

export default Register;
