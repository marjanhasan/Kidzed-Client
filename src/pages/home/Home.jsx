import Banner from "../../components/Banner";
import About from "../../components/about/About";
import Collection from "../../components/collection/Collection";
import Gallary from "../../components/gallary/Gallary";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <Gallary />
      <Collection />
      <About></About>
    </div>
  );
};

export default Home;
