import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [hover, setHover] = useState(false);
  const user = false;
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverOut = () => {
    if (hover) {
      setHover(false);
    }
  };
  document.onclick = handleHoverOut;
  return (
    <div className="">
      <div className="container flex items-center p-5 min-h-16 w-full bg-slate-100">
        <div className="">
          <a className=" normal-case text-3xl font-bold">Chef Hub</a>
        </div>
        <div className="text-center flex-1">
          <NavLink className="mr-3 text-xl font-semibold">Home</NavLink>
          <NavLink className="text-xl font-semibold">Blog</NavLink>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user ? (
                <div className="w-10 rounded-full" onMouseOver={handleHover}>
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              ) : (
                <button class="btn btn-success">Login</button>
              )}
            </label>
            <ul
              tabIndex={0}
              className={`mt-3 p-5 ${
                hover ? "block absolute top-12 right-7" : "hidden"
              } shadow bg-base-100 rounded-box w-52 `}
            >
              <li>
                <a className="justify-between">mame</a>
              </li>

              <li>
                <button className="btn btn-error">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
