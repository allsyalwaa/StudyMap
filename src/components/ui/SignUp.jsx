/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "./Button";
import { useState } from "react";

export default function SignUp({ onClose, onSignup }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Lakukan aksi signup di sini (misalnya mengirim data ke server)
    onSignup();
    closePopup();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-sm rounded-3xl bg-white p-10 shadow-lg md:max-w-2xl">
            <div className="mb-2 flex justify-end">
              <button onClick={closePopup} className="text-black/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="mb-3 text-2xl font-bold md:text-4xl">
                Sign up for
              </h1>
              <img className="w-1/2 md:w-auto" src={Logo} alt="" />
            </div>

            <div className="mt-1 flex items-center justify-center gap-1">
              <p className="text-base text-black">Have an account?</p>
              <NavLink to="/sign-up" className="text-base underline">
                Sign Up
              </NavLink>
            </div>

            <form className="mt-3 flex flex-col" onSubmit={handleSignUp}>
              <input
                className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-1 placeholder-black/50"
                type="text"
                placeholder="Full Name"
                required
              />
              <input
                className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-1 placeholder-black/50"
                type="text"
                placeholder="Username"
                required
              />
              <input
                className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-1 placeholder-black/50"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-1 placeholder-black/50"
                type="password"
                placeholder="Password"
                required
              />

              <div className="mt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded-sm border-[1.2px] border-black/50"
                />
                <div className="flex items-center gap-1">
                  <p className="text-sm text-black">I agree to the</p>
                  <NavLink to="/sign-up" className="text-sm text-primary">
                    terms of service
                  </NavLink>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className={"mt-4 px-5 py-3"}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
