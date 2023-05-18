const Banner = () => {
  return (
    <div className="min-h-fit w-full">
      <div className="relative">
        <div className="">
          <img
            src="https://thumbs.dreamstime.com/b/baby-kids-toys-banner-background-wooden-educational-natural-light-green-top-view-flat-lay-180323902.jpg"
            alt="Background Image"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 left-1/2 w-2/5 bg-purple-500 h-full text-white p-6 sm:p-10">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-center">
            WELCOME TO Kidzed TOY STORE
          </h1>
          <p className="py-4 text-base sm:text-lg md:text-xl text-center">
            Be sure to check out our newly expanded puzzles and games for both
            kids and adults, including cooperative games for the whole family!
          </p>
          <p className="text-sm md:text-lg font-medium text-center">
            You will find the best classic, whimsical and educational toys for
            kids of all ages at kidzed Toy Store. Whether you are looking for a
            game or puzzle, a lovable stuffed animal, a musical instrument or
            science kit to foster creativity, our experienced staff of Toy
            Geniuses helps you find the right toy for your child. Be sure to
            check out our expanded puzzles and games for both kids and adults,
            including cooperative games for the whole family!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
