import { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";

const AddToys = () => {
  useTitle("Add Toys");
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="my-container">
      <div className="title-body">
        <h1 className="title">Add Toys</h1>
      </div>
      <form
        className="max-w-screen-md mx-auto w-2/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-2 w-full m-2 border-gray-600 focus:outline-purple-600 p-2 rounded"
          placeholder="Photo URL of the Toy"
          {...register("photo", { required: true })}
        />
        {errors.photo && (
          <p className="text-red-600 font-medium m-2">*Photo URL is required</p>
        )}
        <input
          className="border-2 w-full m-2 border-gray-600 focus:outline-purple-600 p-2 rounded"
          placeholder="Toy Name"
          {...register("toyName", { required: true })}
        />
        {errors.toyName && (
          <p className="text-red-600 font-medium m-2">*Toy Name is required</p>
        )}
        <input
          className="border-2 w-full m-2 border-gray-600 focus:outline-purple-600 p-2 rounded"
          defaultValue={user.displayName}
          {...register("sellerName", { required: true })}
        />
        {errors.sellerName && (
          <p className="text-red-600 font-medium m-2">
            *Seller Name is required
          </p>
        )}
        <input
          className="border-2 w-full m-2 border-gray-600 focus:outline-purple-600 p-2 rounded"
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-600 font-medium m-2">
            *Seller Email is required
          </p>
        )}
        <select
          className="p-2 focus-visible:outline-purple-600 outline w-full m-2 outline-2 outline-gray-600"
          {...register("subCategory")}
        >
          <option value="math">Math Toys</option>
          <option value="language">Language Toys</option>
          <option value="science">Science Toys</option>
        </select>{" "}
        <br />
        <div className="flex gap-1 m-2">
          <input
            className="border-2 w-full border-gray-600 focus:outline-purple-600 p-2 rounded"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <input
            className="border-2 w-full border-gray-600 focus:outline-purple-600 p-2 rounded"
            placeholder="Ratings"
            {...register("ratings", { required: true })}
          />
          <input
            className="border-2 w-full border-gray-600 focus:outline-purple-600 p-2 rounded"
            placeholder="Available Quantity"
            {...register("quantity", { required: true })}
          />
        </div>
        {errors.price && (
          <span className="text-red-600 font-medium m-2">
            *Toy Price is required
          </span>
        )}
        {errors.ratings && (
          <span className="text-red-600 font-medium m-2">
            *Toy Ratings is required
          </span>
        )}
        {errors.quantity && (
          <span className="text-red-600 font-medium m-2">
            *Toy Quantity is required
          </span>
        )}
        <input
          className="border-2 w-full m-2 border-gray-600 focus:outline-purple-600 p-2 rounded"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p className="text-red-600 font-medium m-2">
            *Toy Description is required
          </p>
        )}
        <input
          className="w-full py-4 rounded-lg bg-purple-500 hover:bg-purple-700 text-white font-medium"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddToys;
