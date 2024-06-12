import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CardVideoCourse({ image, title, to }) {
  return (
    <NavLink to={to} className=" flex items-center gap-6">
      <img className="h-20" src={image} alt="" />
      <div className="flex w-1/3 flex-col">
        <h1 className="line-clamp-2 text-ellipsis break-words text-lg font-medium text-secondary">
          {title}
        </h1>
      </div>
    </NavLink>
  );
}
