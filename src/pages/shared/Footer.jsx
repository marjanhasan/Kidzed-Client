import {
  FaBookReader,
  FaBusinessTime,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaPizzaSlice,
  FaRegClock,
  FaRegCopyright,
  FaTwitter,
  FaWarehouse,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-purple-100 py-24">
        <div className="my-container ">
          <div className=" md:flex md:gap-x-6">
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
                <span className="text-lg font-medium break-words">
                  324 North Tejon, Colorado Springs, CO 80903
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <FaPhoneAlt className="text-purple-800" />
                <span className="text-lg font-medium">719.578.5549</span>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex justify-center items-center p-4 bg-purple-600 rounded-full cursor-pointer hover:bg-fuchsia-800">
                  <FaFacebookF className="text-white" />
                </div>
                <div className="flex justify-center items-center p-4 bg-purple-600 rounded-full cursor-pointer hover:bg-fuchsia-800">
                  <FaInstagram className="text-white" />
                </div>
                <div className="flex justify-center items-center p-4 bg-purple-600 rounded-full cursor-pointer hover:bg-fuchsia-800">
                  <FaTwitter className="text-white" />
                </div>
              </div>
            </div>
            <div className=" md:w-1/3">
              <h2 className="text-gray-500 font-semibold text-2xl py-4">
                Visit Us
              </h2>
              <div className="flex gap-1 items-center">
                <FaWarehouse className="text-purple-800" />
                <span className="text-lg font-medium">Kidzed Downtown</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaPizzaSlice className="text-purple-800" />
                <span className="text-lg font-medium">Kidzed Restaurant</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaBookReader className="text-purple-800" />
                <span className="text-lg font-medium">Kidzed Bookstore</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaWarehouse className="text-purple-800" />
                <span className="text-lg font-medium">Kidzed Gift Store</span>
              </div>
            </div>
            <div className=" md:w-1/3 ">
              <h2 className="text-gray-500 font-semibold text-2xl py-4">
                STORE HOURS
              </h2>
              <div className="flex gap-1 items-center">
                <FaBusinessTime className="text-purple-800" />
                <span className="text-lg font-medium">Open 7 Days</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaClock className="text-purple-800" />
                <span className="text-lg font-medium">
                  Mon - Sat : 10AM - 7PM
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <FaRegClock className="text-purple-800" />
                <span className="text-lg font-medium">Sundays 11AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-400">
        <div className="my-container flex  text-white items-center justify-center gap-1 py-4">
          <FaRegCopyright />
          <div className="text-white">
            2023 Kidzed Store. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
