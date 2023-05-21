import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/allToys/all")
      .then((res) => res.json())
      .then((result) => setToys(result));
  }, []);
  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((result) => setToys(result));
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
      <div className="flex justify-center my-5">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          name="search"
          placeholder="Search By Toy Name"
          className="outline-2 outline-purple-600 border-gray-600 border-2 rounded p-2"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-500 hover:bg-fuchsia-500 px-6 py-2 rounded-md ml-2 text-white font-medium"
        >
          Search
        </button>
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Seller</th>
            <th className="border px-4 py-2">Toy Name</th>
            <th className="border px-4 py-2">Sub-category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Available Quantity</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="border px-4 py-2">{toy.sellerName}</td>
              <td className="border px-4 py-2">{toy.toyName}</td>
              <td className="border px-4 py-2">{toy.subCategory}</td>
              <td className="border px-4 py-2">${toy.price}</td>
              <td className="border px-4 py-2">{toy.quantity}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
