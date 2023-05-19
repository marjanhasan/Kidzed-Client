import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-1/2 shrink-0">
          <img
            src="https://myfox28columbus.com/resources/media/da94ac95-6b20-43a8-90d0-a6735c39d561-jumbo16x9_GeoffreytheGiraffe.jpg?1658185767863"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="bg-sky-400 w-full flex flex-col justify-center items-center gap-4 text-white py-12">
          <h1 className="text-4xl lg:text-7xl font-bold">Our Values</h1>
          <p className="text-lg font-semibold text-center">
            We strive to have a positive impact on our customers and our
            community
          </p>
          <Link to="/blog">
            <button className="text-base md:text-lg font-semibold px-6 md:px-10 py-2 md:py-4 rounded-xl border-2 md:border-4">
              More About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
