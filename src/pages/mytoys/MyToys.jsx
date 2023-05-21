import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [updatedQuantity, setUpdatedQuantity] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [control, setControl] = useState(false);
  const updateToys = {};
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user.displayName}`)
      .then((res) => res.json())
      .then((result) => setToys(result));
  }, [user.displayName, control]);

  const handleUpdateClick = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
    setUpdatedPrice(toy.price);
    setUpdatedQuantity(toy.quantity);
    setUpdatedDescription(toy.description);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedToy(null);
    setUpdatedPrice("");
    setUpdatedQuantity("");
    setUpdatedDescription("");
  };
  const handleUpdateToy = () => {
    // Perform the update logic here with the updated values
    // You can use the selectedToy object and the updatedPrice, updatedQuantity, updatedDescription states
    updateToys._id = selectedToy._id;
    updateToys.price = updatedPrice;
    updateToys.quantity = updatedQuantity;
    updateToys.description = updatedDescription;
    // console.log(updateToys);
    fetch(`http://localhost:5000/updateToys/${updateToys._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToys),
    })
      .then((res) => res.json())
      .then((result) => {
        setControl(!control);
        if (result.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toys Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
    // After performing the update, close the modal
    handleModalClose();
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteToys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            setControl(!control);
            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Toy has been deleted.",
                icon: "success",
                confirmButtonText: "Done",
              });
            }
          });
      }
    });
  };
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center">My Toys</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Picture</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Seller Name</th>
            <th className="border px-4 py-2">Seller Email</th>
            <th className="border px-4 py-2">Sub-category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Rating</th>
            <th className="border px-4 py-2">Available Quantity</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">
                <img
                  src={toy.photo}
                  alt={toy.name}
                  className="h-10 w-10 rounded"
                />
              </td>
              <td className="border px-4 py-2">{toy.toyName}</td>
              <td className="border px-4 py-2">{toy.sellerName}</td>
              <td className="border px-4 py-2">{toy.email}</td>
              <td className="border px-4 py-2">{toy.subCategory}</td>
              <td className="border px-4 py-2">${toy.price}</td>
              <td className="border px-4 py-2">{toy.ratings}</td>
              <td className="border px-4 py-2">{toy.quantity}</td>
              <td className="border px-4 py-2">{toy.description}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleUpdateClick(toy)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full my-1"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full my-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* modal */}
      {showModal && selectedToy && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* <div className="absolute inset-0 bg-gray-500 opacity-75"></div> */}
          <div className="bg-white rounded-lg p-8 w-1/2 border-2 border-purple-600 ">
            <h2 className="text-2xl font-bold mb-4">Update Toy Information</h2>
            {/* Update form */}
            <form>
              <div className="mb-4">
                <label htmlFor="price" className="block font-bold mb-2">
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  className="rounded w-full outline-2 outline-purple-600 border-gray-600 border-2 p-2"
                  value={updatedPrice}
                  onChange={(e) => setUpdatedPrice(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="quantity" className="block font-bold mb-2">
                  Available Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="rounded w-full outline-2 outline-purple-600 border-gray-600 border-2 p-2"
                  value={updatedQuantity}
                  onChange={(e) => setUpdatedQuantity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block font-bold mb-2">
                  Description:
                </label>
                <textarea
                  id="description"
                  className="rounded w-full outline-2 outline-purple-600 border-gray-600 border-2 p-2"
                  rows="4"
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  type="button"
                  onClick={handleUpdateToy}
                >
                  Update
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
