const GallaryCards = ({ photo }) => {
  return (
    <div
      className={`relative mr-3 h-[300px] w-[200px] inline-block overflow-hidden rounded-2xl border shadow-md shadow-current cursor-pointer justify-self-center`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <img src={photo} className="h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h2 className="text-white text-3xl font-bold uppercase">toys</h2>
      </div>
    </div>
  );
};

export default GallaryCards;
