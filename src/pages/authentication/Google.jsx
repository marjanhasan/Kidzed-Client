import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Google = ({ signInWithGoogle, setUser }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setErrorMessage("");
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="max-w-sm mx-auto py-6">
      {errorMessage && (
        <span className="text-red-500 text-lg font-medium">{errorMessage}</span>
      )}{" "}
      <br />
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center w-full p-2 bg-purple-500 gap-2 rounded-md text-white font-semibold mt-3"
      >
        <FaGoogle />
        Google Sign In
      </button>
    </div>
  );
};

export default Google;
