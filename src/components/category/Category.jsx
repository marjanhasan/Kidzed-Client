import { useEffect, useState } from "react";

const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center font-medium">
        Category{data.length}
      </h1>
    </div>
  );
};

export default Category;
