import {
  FaChessRook,
  FaDraftingCompass,
  FaLightbulb,
  FaMicroscope,
  FaPuzzlePiece,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Collection = () => {
  return (
    <div className="bg-indigo-500 py-12">
      <div className="my-container py-12 ">
        <div className="title-body">
          <h1 className="title text-white">What We Have</h1>
          <p className="text-base font-medium lg:mx-12 text-white">
            Whether you’re looking for a game or puzzle, a lovable stuffed
            animal, or a musical instrument or science kit to foster creativity,
            our experienced staff of Toy Geniuses helps you find the right toy
            for your child (or you).
          </p>
        </div>
        <div className="flex justify-around flex-wrap">
          <div>
            <div className="bg-purple-900 rounded-full w-32 h-32 flex items-center justify-center">
              <FaDraftingCompass className="text-amber-500 text-6xl" />
            </div>
            <p className="text-center text-2xl font-bold py-6 text-white">
              Education
            </p>
          </div>
          <div>
            <div className="bg-purple-900 rounded-full w-32 h-32 flex items-center justify-center">
              <FaPuzzlePiece className="text-amber-500 text-6xl" />
            </div>
            <p className="text-center text-2xl font-bold py-6 text-white">
              Puzzles
            </p>
          </div>
          <div>
            <div className="bg-purple-900 rounded-full w-32 h-32 flex items-center justify-center">
              <FaMicroscope className="text-amber-500 text-6xl" />
            </div>
            <p className="text-center text-2xl font-bold py-6 text-white">
              Science
            </p>
          </div>
          <div>
            <div className="bg-purple-900 rounded-full w-32 h-32 flex items-center justify-center">
              <FaLightbulb className="text-amber-500 text-6xl" />
            </div>
            <p className="text-center text-2xl font-bold py-6 text-white">
              Creative
            </p>
          </div>
          <div>
            <div className="bg-purple-900 rounded-full w-32 h-32 flex items-center justify-center">
              <FaChessRook className="text-amber-500 text-6xl" />
            </div>
            <p className="text-center text-2xl font-bold py-6 text-white">
              Games
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="alltoys">
            <button className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl text-white font-medium text-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
