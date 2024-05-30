/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ name }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative flex justify-center rounded-lg px-8 py-2 hover:bg-purple-800 hover:text-white"
      >
        {name}
        <div
          className={`absolute -bottom-2 size-10 translate-y-full rotate-45 bg-gray-200 ${
            showDropdown ? "block" : "hidden"
          }`}
        ></div>
      </button>

      {/* menus dropdown */}
      <div
        className={`absolute left-0 top-20 w-screen bg-gray-200 ${
          showDropdown ? "block" : "hidden"
        }`}
      >
        <ul className="container grid grid-cols-3">
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 hover:bg-purple-800 hover:text-white">
                Home
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 hover:bg-purple-800 hover:text-white">
                Home
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 hover:bg-purple-800 hover:text-white">
                Home
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 hover:bg-purple-800 hover:text-white">
                Home
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
