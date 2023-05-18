import GallaryCards from "./GallaryCards";

const Gallary = () => {
  const chefs = [
    {
      id: 1,
      photo:
        "https://static-01.daraz.com.bd/p/d1f02ba773014486706b8e2691d02f8f.jpg_720x720.jpg_.webp",
    },
    {
      id: 2,
      photo:
        "https://static-01.daraz.com.bd/p/d1f02ba773014486706b8e2691d02f8f.jpg_720x720.jpg_.webp",
    },
    {
      id: 3,
      photo:
        "https://static-01.daraz.com.bd/p/d1f02ba773014486706b8e2691d02f8f.jpg_720x720.jpg_.webp",
    },
    {
      id: 4,
      photo:
        "https://static-01.daraz.com.bd/p/d1f02ba773014486706b8e2691d02f8f.jpg_720x720.jpg_.webp",
    },
    {
      id: 5,
      photo:
        "https://static-01.daraz.com.bd/p/d1f02ba773014486706b8e2691d02f8f.jpg_720x720.jpg_.webp",
    },
    {
      id: 6,
      photo:
        "https://static-01.daraz.com.bd/p/d1f02ba773014486706b8e2691d02f8f.jpg_720x720.jpg_.webp",
    },
    {
      id: 7,
      photo:
        "https://static-01.daraz.com.bd/p/d1f02ba773014486706b8e2691d02f8f.jpg_720x720.jpg_.webp",
    },
    {
      id: 8,
      photo:
        "https://static-01.daraz.com.bd/p/d1f02ba773014486706b8e2691d02f8f.jpg_720x720.jpg_.webp",
    },
  ];
  return (
    <div className="my-container">
      <div className="title-body">
        <h1 className="title">Popular Toys</h1>
        <p className="para">
          We strive to have a positive impact on our customers and our community
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {chefs.map((chef) => (
          <GallaryCards key={chef.id} photo={chef.photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallary;
