import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaEllipsisV, FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip } from "react-tooltip";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="my-container">
      <div className="md:flex justify-between items-center h-fit font-semibold bg-gray-100 p-2">
        <div className="flex gap-1 items-center ">
          <FaPhoneSquareAlt className="text-indigo-500" />
          <span>Call Us:</span>
          <span className="text-indigo-500">719.578.5549</span>
        </div>
        <div className="flex gap-1 items-center">
          <FaMapMarkerAlt className="text-indigo-500" />
          <span>324 North Tejon, Colorado Springs, CO 80903</span>
        </div>
      </div>
      <div className="flex items-center justify-between relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* logo section  */}
        <Link to="/" className="">
          <span className="ml-2 text-2xl font-bold ">
            <span className="text-fuchsia-700 underline decoration-wavy">
              Kidzed
            </span>
          </span>
        </Link>
        <div className="flex">
          {/* nav section  */}
          <ul className="items-center hidden space-x-8 mx-4 lg:flex font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="alltoys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="mytoys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="addtoys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Add Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          {/* button section  */}

          {/* {user ? (
            <div className="hidden lg:flex items-center gap-4 ">
              <Link to="/profile">
                <img
                  className="h-14 w-14 rounded-full"
                  src={`${user?.photoURL}`}
                  alt=""
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                />
              </Link>
              <Tooltip id="my-tooltip" />
              <button onClick={logOut} className="btn">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden lg:flex">
              <button className="btn">Login</button>
            </Link>
          )} */}
        </div>
        {/* mobile navbar section  */}
        <div className="lg:hidden">
          {/* dropdown open button  */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaEllipsisV className=" text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-1/2 z-10">
              <div className="p-5  border rounded shadow-sm bg-white">
                {/* logo & button section  */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {/* {user ? (
                        <Link to="/profile">
                          <img
                            className="h-14 w-14 rounded-full"
                            src={`${user?.photoURL}`}
                            alt=""
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={user.displayName}
                          />
                        </Link>
                      ) : (
                        <Link to="/" className="inline-flex items-center">
                          <span className="ml-2 text-2xl font-bold ">
                            only<span className="text-lime-400">Chefs</span>
                          </span>
                        </Link>
                      )} */}
                  </div>
                  {/* dropdown menu close button  */}
                </div>
                {/* mobile nav items section  */}
                <nav className="ml-2">
                  <ul className="space-y-4 font-medium">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="alltoys"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        All Toys
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="mytoys"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        My Toys
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="addtoys"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Add Toys
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="blog"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      {/* {user ? (
                          <span onClick={logOut}>Logout</span>
                        ) : (
                          <Link to="/login">Login</Link>
                        )} */}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="bg-gray-50" />
    </div>
  );
};

export default Header;
