import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CardCourses({ image, title, description, to }) {
  return (
    <NavLink to={to} className="flex flex-col gap-4">
      <img src={image} alt="" />
      <h1 className="break-words text-xl font-medium text-secondary">
        {title}
      </h1>
      <p className="line-clamp-2 text-ellipsis break-words text-base text-black/50">
        {description}
      </p>
    </NavLink>
  );
}
