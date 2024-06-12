import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="bg-primary/5">
      <div className="container py-10">
        <NavLink to="/" className={"text-xl font-bold"}>
          <img className="h-12" src={Logo} alt="" />
        </NavLink>

        <div className="mt-5 grid grid-cols-4">
          <div className="flex flex-col text-base font-medium text-secondary">
            <NavLink to="/course">Courses</NavLink>
            <a href="#about" className="mt-4">
              About
            </a>

            <h1 className="mt-4">Contact</h1>
          </div>
          <div className="grid gap-4">
            <NavLink to="/" className="text-base font-bold text-secondary">
              Courses
            </NavLink>

            <NavLink to="/" className="text-base font-medium text-secondary">
              Front-End Development
            </NavLink>
            <NavLink to="/" className="text-base font-medium text-secondary">
              Back-End Development
            </NavLink>
            <NavLink to="/" className="text-base font-medium text-secondary">
              Full-stack Development
            </NavLink>
            <NavLink to="/" className="text-base font-medium text-secondary">
              UI/UX Design
            </NavLink>
            <NavLink to="/" className="text-base font-medium text-secondary">
              API Development
            </NavLink>
            <NavLink to="/" className="text-base font-medium text-secondary">
              Web Security
            </NavLink>
          </div>
          <div className="flex flex-col text-base font-medium text-secondary">
            <NavLink to="/" className="text-base font-bold text-secondary">
              About
            </NavLink>
            <NavLink to="/" className="mt-4">
              Help
            </NavLink>
          </div>
          <div className="text-base font-medium text-secondary">
            <NavLink to="/" className="text-base font-bold text-secondary">
              Contact
            </NavLink>
            <div className="ml-auto mt-4 flex gap-3">
              <a href="https://www.instagram.com/zulfiaasyal_?igsh=eTg1ajVlaWFlY2Nm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </a>
              <NavLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                  />
                </svg>
              </NavLink>
              <a href="https://wa.me/6281225999832">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
