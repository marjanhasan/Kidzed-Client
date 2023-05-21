import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const SingleToys = () => {
  useTitle("Toy Details");
  const data = useLoaderData();
  const {
    photo,
    toyName,
    sellerName,
    email,
    price,
    ratings,
    quantity,
    description,
  } = data[0];
  return (
    <div className="">
      <div className="title-body">
        <h1 className="title">Toy Details</h1>
      </div>
      <div className="max-w-3xl my-12 mx-2 sm:mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-current md:flex gap-4">
        <img
          src={photo}
          alt=""
          className="w-full md:h-80 md:w-80 object-cover"
        />
        <div className="flex flex-col gap-y-2 justify-center ">
          <div className="text-xl text-gray-600">
            <span className="font-semibold">Toy Name:</span> {toyName}
          </div>
          <div className="text-xl text-gray-600">
            <span className="font-semibold">Seller Name: </span> {sellerName}
          </div>
          <div className="text-xl text-gray-600">
            <span className="font-semibold">Seller Email: </span> {email}
          </div>
          <div className="text-lg text-gray-500 flex justify-between">
            <div className="">
              <span className="font-medium">Price: </span>${price}
            </div>
            <div className="">
              <span className="font-medium">Ratings: </span>
              {ratings}
            </div>
            <div className="">
              <span className="font-medium">Quantity: </span>
              {quantity}
            </div>
          </div>
          <p className="text-base text-gray-400">
            <span className="text-lg font-medium">Description:</span>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleToys;
