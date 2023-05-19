import Banner from "../../components/Banner";
import About from "../../components/about/About";
import Collection from "../../components/collection/Collection";
import Gallary from "../../components/gallary/Gallary";

const Home = () => {
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
