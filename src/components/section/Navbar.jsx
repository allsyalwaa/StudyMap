import { NavLink } from "react-router-dom";
import Dropdown from "../ui/Dropdown";

import Logo from "../../assets/logo.svg";
import Button from "../ui/Button";
import SignUp from "../ui/SignUp";
import LogIn from "../ui/LogIn";

import { useState } from "react";

export default function Navbar() {
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isLogInPopupOpen, setIsLogInPopupOpen] = useState(false);

  const handleOpenSignUpPopup = () => {
    setIsSignUpPopupOpen(true);
  };
  const handleOpenLogInPopup = () => {
    setIsLogInPopupOpen(true);
  };

  const handleCloseSignUpPopup = () => {
    setIsSignUpPopupOpen(false);
  };
  const handleCloseLogInPopup = () => {
    setIsLogInPopupOpen(false);
  };

  return (
    <nav>
      <div className=" container fixed grid h-[72px] grid-cols-3 items-center bg-white">
        {/* logo */}
        <NavLink to="/" className={"text-xl font-bold"}>
          <img className="h-16" src={Logo} alt="" />
        </NavLink>

        {/* menus */}
        <div className="flex justify-center">
          <ul className="flex items-center justify-center rounded-lg bg-primary/5">
            <li className="flex items-center gap-1 text-base font-medium text-secondary">
              <Dropdown name="Course" />
            </li>
            <li>
              <NavLink to="/">
                <button className="rounded-lg px-8 py-2 text-base font-medium text-secondary hover:bg-purple-800 hover:text-white">
                  About
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <button className="rounded-lg px-8 py-2 text-base font-medium text-secondary hover:bg-purple-800 hover:text-white">
                  Contact
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* action */}
        <ul className="ml-auto flex ">
          <li onClick={handleOpenLogInPopup}>
            <Button
              className={"border-none text-sm text-black"}
              variant="white-primary"
            >
              Log In
            </Button>
          </li>
          <li onClick={handleOpenSignUpPopup}>
            <Button className={"text-sm"} variant="primary">
              Sign Up
            </Button>
          </li>
        </ul>
      </div>

      {isSignUpPopupOpen && <SignUp onClose={handleCloseSignUpPopup} />}
      {isLogInPopupOpen && <LogIn onClose={handleCloseLogInPopup} />}
    </nav>
  );
}
