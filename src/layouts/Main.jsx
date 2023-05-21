import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
