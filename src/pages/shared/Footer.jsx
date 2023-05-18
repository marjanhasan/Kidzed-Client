import {
  FaBookReader,
  FaBusinessTime,
  FaClock,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaPizzaSlice,
  FaRegClock,
  FaRegCopyright,
  FaWarehouse,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="my-container bg-purple-100">
        <div className=" md:flex  pb-6 pt-6">
          <div className=" md:w-1/3">
            <div className="py-4">
              <Link to="/">
                <span className="text-2xl font-bold text-fuchsia-700 underline decoration-wavy">
                  Kidzed
                </span>
              </Link>
            </div>
            <div className="flex gap-1 items-center">
              <FaMapMarkedAlt className="text-purple-800" />
              <span>324 North Tejon, Colorado Springs, CO 80903</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaPhoneAlt className="text-purple-800" />
              <span>719.578.5549</span>
            </div>
          </div>
          <div className=" md:w-1/3">
            <h2 className="text-gray-400 text-2xl py-4">Visit Us</h2>
            <div className="flex gap-1 items-center">
              <FaWarehouse className="text-purple-800" />
              <span>Kidzed Downtown</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaPizzaSlice className="text-purple-800" />
              <span>Kidzed Restaurant</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaBookReader className="text-purple-800" />
              <span>Kidzed Bookstore</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaWarehouse className="text-purple-800" />
              <span>Kidzed Gift Store</span>
            </div>
          </div>
          <div className=" md:w-1/3 ">
            <h2 className="text-gray-400 text-2xl py-4">STORE HOURS</h2>
            <div className="flex gap-1 items-center">
              <FaBusinessTime className="text-purple-800" />
              <span>Open 7 Days</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaClock className="text-purple-800" />
              <span>Mon - Sat : 10AM - 7PM</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegClock className="text-purple-800" />
              <span>Sundays 11AM - 6PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container flex bg-blue-400 text-white items-center justify-center gap-1 py-4">
        <FaRegCopyright />
        <div className="text-white">
          2023 Kidzed Store. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
