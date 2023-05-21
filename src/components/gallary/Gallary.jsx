import { useEffect, useState } from "react";
import GallaryCards from "./GallaryCards";
const Gallary = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((result) => setToys(result));
  }, []);
  return (
    <div className="bg-purple-200">
      <div className="my-container py-12 ">
        <div className="title-body">
          <h1 className="title">Popular Toys</h1>
          <p className="para">
            We strive to have a positive impact on our customers and our
            community
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {toys.map((toy) => (
            <GallaryCards key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
