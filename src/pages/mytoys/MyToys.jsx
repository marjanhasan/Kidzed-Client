import { useState } from "react";
import useTitle from "../../hooks/useTitle";
// Sample toy data
const toysData = [
  {
    id: 1,
    pictureUrl: "https://example.com/toy1.jpg",
    name: "Toy 1",
    sellerName: "John",
    sellerEmail: "john@example.com",
    subCategory: "Math Toys",
    price: 10,
    rating: 4.5,
    quantity: 5,
    description: "This is a great educational toy for learning math.",
  },
  {
    id: 2,
    pictureUrl: "https://example.com/toy2.jpg",
    name: "Toy 2",
    sellerName: "Jane",
    sellerEmail: "jane@example.com",
    subCategory: "Science Toys",
    price: 15,
    rating: 4.2,
    quantity: 3,
    description: "Explore the wonders of science with this toy.",
  },
  // ... more toys
];
const MyToys = () => {
  useTitle("My Toys");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [toys, setToys] = useState(toysData);

  const handleSortChange = (event) => {
    sortToys(event.target.value);
  };

  const sortToys = (order) => {
    const sortedToys = [...toys];

    setSortOrder(order);

    if (order === "ascending") {
      sortedToys.sort((a, b) => a.price - b.price);
    } else if (order === "descending") {
      sortedToys.sort((a, b) => b.price - a.price);
    }

    setToys(sortedToys);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Toys</h1>
      <div className="flex items-center mb-4">
        <label htmlFor="sortOrder" className="mr-2">
          Sort Order:
        </label>
        <select
          id="sortOrder"
          className="px-4 py-2 border rounded"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
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
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="h-10 w-10 rounded"
                />
              </td>
              <td className="border px-4 py-2">{toy.name}</td>
              <td className="border px-4 py-2">{toy.sellerName}</td>
              <td className="border px-4 py-2">{toy.sellerEmail}</td>
              <td className="border px-4 py-2">{toy.subCategory}</td>
              <td className="border px-4 py-2">${toy.price}</td>
              <td className="border px-4 py-2">{toy.rating}</td>
              <td className="border px-4 py-2">{toy.quantity}</td>
              <td className="border px-4 py-2">{toy.description}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
