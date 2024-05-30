/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ name }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative flex items-center justify-between gap-3 rounded-lg px-8 py-2 hover:bg-secondary hover:text-white"
      >
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
          className={`mt-1 transform ${showDropdown ? "rotate-0 transition-all duration-300" : "rotate-180 transition-all duration-300"}`}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="m112 328l144-144l144 144"
          />
        </svg>
      </button>

      {showDropdown && (
        <div
          className="fixed bottom-0 left-0 right-0 top-40 z-40 bg-black opacity-50"
          onClick={() => setShowDropdown(false)}
        ></div>
      )}

      {/* menus dropdown */}
      <div
        className={`absolute left-0 top-[77px] z-50 w-screen bg-white ${
          showDropdown ? "block" : "hidden"
        }`}
      >
        <ul className="container grid grid-cols-3 text-base">
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="w-full px-8 py-2 text-secondary hover:bg-secondary hover:text-white">
                Front-End Developer
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
