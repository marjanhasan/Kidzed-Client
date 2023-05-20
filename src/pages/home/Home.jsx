import Banner from "../../components/Banner";
import About from "../../components/about/About";
import Category from "../../components/category/Category";
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
      <Category />
      <About></About>
    </div>
  );
};

export default Home;
