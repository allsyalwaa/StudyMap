import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../ui/Dropdown";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav>
      <div className=" container grid h-20 grid-cols-3 items-center">
        {/* logo */}
        <NavLink to="/" className={"text-xl font-bold"}>
          Logo
        </NavLink>

        {/* menus */}
        <div className="flex justify-center">
          <ul className="flex justify-center rounded-lg bg-purple-200">
            <li>
              <Dropdown name="testing" />
            </li>
            <li>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative flex justify-center rounded-lg px-8 py-2 hover:bg-purple-800 hover:text-white"
              >
                Dropdown
                <div
                  className={`absolute -bottom-2 size-10 translate-y-full rotate-45 bg-gray-200 ${
                    showDropdown ? "block" : "hidden"
                  }`}
                ></div>
              </button>
            </li>
            <li>
              <NavLink to="/">
                <button className="rounded-lg px-8 py-2 hover:bg-purple-800 hover:text-white">
                  Home
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <button className="rounded-lg px-8 py-2 hover:bg-purple-800 hover:text-white">
                  About
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* action */}
        <ul className="ml-auto flex ">
          <li>
            <NavLink to="/">
              <button className="rounded-lg px-8 py-2">Login</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="rounded-lg bg-purple-600 px-8 py-2 text-white">
                Register
              </button>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* menus dropdown */}
      <div
        className={`absolute w-screen bg-gray-200 ${
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
    </nav>
  );
}
