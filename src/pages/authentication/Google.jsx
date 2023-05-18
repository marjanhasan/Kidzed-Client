import { FaGoogle } from "react-icons/fa";

const Google = ({ signInWithGoogle }) => {
  return (
    <div className="max-w-sm mx-auto py-6">
      <button className="flex items-center justify-center w-full p-2 bg-purple-500 gap-2 rounded-md text-white font-semibold">
        <FaGoogle />
        Google Sign In
      </button>
    </div>
  );
};

export default Google;
