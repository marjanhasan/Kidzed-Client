import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
const CategoryCards = ({ data }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id, photo, toyName, price, ratings } = data;
  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Not Login!",
        text: "Redirecting to the Login Page",
        icon: "info",
        confirmButtonText: "Ok",
      });
    }
    navigate(`/alltoys/${_id}`);
  };
  return (
    <div className="bg-purple-50 border-2 border-purple-600 rounded-md  flex flex-col justify-center overflow-hidden my-6">
      <div className="max-h-64  w-full bg-purple-100 flex items-center justify-center rounded-md">
        <img src={photo} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="py-2 w-full h-full text-center">
        <h2 className="font-bold text-xl mt-5">Toy: {toyName}</h2>
        <div className="flex gap-4 justify-center">
          <span className="text-base text-gray-500 md:text-lg mt-1">
            price: ${price}
          </span>
          <span className="text-base text-gray-500 md:text-lg mt-1">
            Ratings: *{ratings}
          </span>
        </div>

        <button
          onClick={handleDetails}
          className="mt-3 px-8 py-3 bg-purple-600 hover:bg-fuchsia-600 rounded-md text-white font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CategoryCards;
