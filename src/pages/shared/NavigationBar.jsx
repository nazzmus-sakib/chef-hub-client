import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { Link, Element } from "react-scroll";

const NavigationBar = () => {
  const [hover, setHover] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverOut = () => {
    if (hover) {
      setHover(false);
    }
  };
  document.onclick = handleHoverOut;
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="">
      <div className="lg:px-[200px] lg:flex items-center p-5 min-h-16 w-full bg-slate-100">
        <div className="text-center lg:mb-0 mb-3">
          <a className=" normal-case text-3xl font-bold  ">Chef Hub</a>
        </div>
        <div className="text-center mx-auto lg:flex-1">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "text-blue-500 mr-2 lg:mr-3 text-lg font-semibold"
                : "lg:mr-3 mr-2 text-lg font-semibold "
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "text-blue-500 mr-2 lg:mr-3 text-lg font-semibold"
                : "mr-2 lg:mr-3 text-lg font-semibold "
            }
            to="/blog"
          >
            Blog
          </NavLink>

          <NavLink className="mr-2 lg:mr-3 text-lg font-semibold">
            <Link to="services" smooth={true}>
              Services
            </Link>
          </NavLink>
          <NavLink className="text-lg font-semibold">
            <Link to="contact" smooth={true}>
              Contact
            </Link>
          </NavLink>
        </div>

        <div className="flex-none gap-2 z-50 lg:mt-0 text-center mt-4">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar block mx-auto"
            >
              {user ? (
                <div className="w-10 rounded-full" onMouseOver={handleHover}>
                  <img src={user && user.photoURL} />
                </div>
              ) : (
                <NavLink to="/login">
                  <button className="btn btn-success  ">Login</button>
                </NavLink>
              )}
            </label>
            <ul
              tabIndex={0}
              className={`mt-3 p-5 ${
                hover ? "block absolute top-12 right-7" : "hidden"
              } shadow bg-base-100 rounded-box w-52 `}
            >
              <li>
                <a className="justify-between">{user && user.displayName}</a>
              </li>

              <li>
                <button
                  className="btn btn-error btn-sm mt-2"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
