const CategoryCards = ({ data }) => {
  const { photo, toyName, price, ratings } = data;
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
          className="mt-3 px-8 py-3 bg-purple-600 hover:bg-fuchsia-600 rounded-md text-white font-medium"
          //   onClick={() => navigate(`services/${singleInfo.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CategoryCards;
