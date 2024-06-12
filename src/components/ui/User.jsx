import { useState } from "react";
import ImageUser from "../../assets/illustration-user.svg";
import { NavLink } from "react-router-dom";

export default function User() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="relative flex items-center justify-end">
      <button onClick={toggleMenu} className="flex items-center gap-8">
        <h1 className="text-lg font-medium text-secondary">zulfiasyalwa</h1>
        <img className="h-10" src={ImageUser} alt="" />
      </button>

      {/* menu logout */}
      {isMenuVisible && (
        <div className="absolute right-0 top-14 bg-white p-6">
          <div className="grid grid-cols-3 items-center gap-4 px-2">
            <img className="h-16" src={ImageUser} alt="" />
            <div className="col-span-2 flex flex-col">
              <h1 className="text-xl font-semibold">zulfiasyalwa</h1>
              <p className="text-base text-black/50">zulfiasyal@gmail.com</p>
            </div>
          </div>
          <div className="mt-4 w-full border-b-[1px] border-black/50"></div>
          <div className="mt-4 flex flex-col gap-4">
            <NavLink to="/">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17t-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-9q.65 0 1.075-.425T13.5 9.5t-.425-1.075T12 8t-1.075.425T10.5 9.5t.425 1.075T12 11m0 7.5"
                  />
                </svg>
                <h1 className="text-base font-medium">Account</h1>
              </div>
            </NavLink>
            <NavLink to="/">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                  />
                </svg>
                <h1 className="text-base font-medium">Log Out</h1>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
