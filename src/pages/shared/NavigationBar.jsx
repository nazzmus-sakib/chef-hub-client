import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

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
      <div className="container flex items-center p-5 min-h-16 w-full bg-slate-100">
        <div className="">
          <a className=" normal-case text-3xl font-bold">Chef Hub</a>
        </div>
        <div className="text-center flex-1">
          <NavLink className="mr-3 text-lg font-semibold" to="/home">
            Home
          </NavLink>
          <NavLink className="mr-3 text-lg font-semibold">Blog</NavLink>
          <NavLink className=" mr-3 text-lg font-semibold">Services</NavLink>
          <NavLink className="text-lg font-semibold">Contact</NavLink>
        </div>
        <div className="flex-none gap-2 z-50">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user ? (
                <div className="w-10 rounded-full" onMouseOver={handleHover}>
                  <img src={user && user.photoURL} />
                </div>
              ) : (
                <Link to="/login">
                  <button class="btn btn-success">Login</button>
                </Link>
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
