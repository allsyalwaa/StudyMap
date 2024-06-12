import { NavLink } from "react-router-dom";
import Dropdown from "../ui/Dropdown";
import Logo from "../../assets/logo.svg";
import Button from "../ui/Button";
import SignUp from "../ui/SignUp";
import LogIn from "../ui/LogIn";
import { useState } from "react";
import User from "../ui/User";

export default function Navbar() {
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isLogInPopupOpen, setIsLogInPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleCloseLogInPopup();
    handleCloseSignUpPopup();
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    handleCloseLogInPopup();
    handleCloseSignUpPopup();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container fixed left-0 right-0 top-0 z-50 grid h-[72px] grid-cols-3 items-center bg-white">
        {/* logo */}
        <NavLink to="/" className="text-xl font-bold">
          <img className="h-16" src={Logo} alt="" />
        </NavLink>

        {/* menus */}
        <div className="hidden justify-center md:flex">
          <ul className="flex items-center justify-center rounded-lg bg-primary/5">
            <li className="flex items-center gap-1 text-base font-medium text-secondary">
              <Dropdown name="Courses" />
            </li>
            <li>
              <NavLink to="/">
                <button className="rounded-lg px-8 py-2 text-base font-medium text-secondary hover:bg-secondary hover:text-white">
                  About
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <button className="rounded-lg px-8 py-2 text-base font-medium text-secondary hover:bg-secondary hover:text-white">
                  Contact
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        {isLoggedIn ? (
          <User />
        ) : (
          <ul className="ml-auto hidden gap-4 md:flex">
            <li onClick={handleOpenLogInPopup}>
              <Button
                className="border-none text-sm text-black"
                variant="white-primary"
              >
                Log In
              </Button>
            </li>
            <li onClick={handleOpenSignUpPopup}>
              <Button className="text-sm" variant="primary">
                Sign Up
              </Button>
            </li>
          </ul>
        )}
        <button
          className="z-20 col-span-2 ml-auto block text-secondary md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 flex flex-col items-center bg-white md:hidden">
          <ul className="mt-4 flex flex-col items-center gap-4">
            <li className="flex items-center gap-1 text-base font-medium text-secondary">
              <Dropdown name="Courses" />
            </li>
            <li>
              <NavLink to="/">
                <button className="rounded-lg px-8 py-2 text-base font-medium text-secondary hover:bg-secondary hover:text-white">
                  About
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <button className="rounded-lg px-8 py-2 text-base font-medium text-secondary hover:bg-secondary hover:text-white">
                  Contact
                </button>
              </NavLink>
            </li>
            {!isLoggedIn && (
              <>
                <li onClick={handleOpenLogInPopup}>
                  <Button
                    className="border-none text-sm text-black"
                    variant="white-primary"
                  >
                    Log In
                  </Button>
                </li>
                <li onClick={handleOpenSignUpPopup}>
                  <Button className="text-sm" variant="primary">
                    Sign Up
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {isSignUpPopupOpen && (
        <SignUp onClose={handleCloseSignUpPopup} onSignup={handleSignup} />
      )}
      {isLogInPopupOpen && (
        <LogIn onClose={handleCloseLogInPopup} onLogin={handleLogin} />
      )}
    </nav>
  );
}
