import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "./Button";

export default function LogIn() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-lg">
          <div className="mb-4 flex justify-end">
            <button className="text-primary">
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
            <h1 className="mb-3 text-4xl font-bold">Log in to</h1>
            <img src={Logo} alt="" />
          </div>

          <div className="mt-2 flex items-center justify-center gap-1">
            <p className="text-base  text-black">Don&apos;t have an account?</p>
            <NavLink to="/sign-up" className="text-base underline">
              Sign Up
            </NavLink>
          </div>

          <form className="mt-6 flex flex-col" action="">
            <input
              className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-3 placeholder-black/50"
              type="email"
              placeholder="Email"
            />
            <input
              className="mt-4  rounded-lg border-[1.5px] border-black/50 px-5 py-3 placeholder-black/50"
              type="password"
              placeholder="Password"
            />

            <div className="mt-2 flex justify-end">
              <NavLink to="/" className="text-sm underline">
                Forgot password?
              </NavLink>
            </div>

            <Button variant="primary" className={"mt-8 px-5 py-3"}>
              Log In
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
