/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ name }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative flex items-center justify-between gap-3 rounded-lg px-8 py-2 hover:bg-purple-800 hover:text-white"
      >
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
          className={`mt-1 rotate-180 transform ${showDropdown ? "rotate-0 transition-all duration-300" : "rotate-180 transition-all duration-300"}`}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="m112 328l144-144l144 144"
          />
        </svg>
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
