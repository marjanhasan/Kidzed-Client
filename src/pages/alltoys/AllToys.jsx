import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const toys = [
    {
      id: 1,
      seller: "John",
      name: "Toy 1",
      subCategory: "Category A",
      price: 10,
      quantity: 5,
    },
    {
      id: 2,
      seller: "Jane",
      name: "Toy 2",
      subCategory: "Category B",
      price: 15,
      quantity: 3,
    },
    {
      id: 3,
      seller: "Mike",
      name: "Toy 3",
      subCategory: "Category A",
      price: 20,
      quantity: 8,
    },
    // ... more toys
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
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
            <tr key={toy.id}>
              <td className="border px-4 py-2">{toy.seller}</td>
              <td className="border px-4 py-2">{toy.name}</td>
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
