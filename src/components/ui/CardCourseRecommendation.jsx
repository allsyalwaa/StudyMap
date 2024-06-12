import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CardCourseRecommendation({
  image,
  title,
  description,
  to,
}) {
  return (
    <NavLink to={to} className=" flex items-center gap-6">
      <img className="h-36" src={image} alt="" />
      <div className="flex flex-col gap-3">
        <h1 className="line-clamp-2 break-words text-xl font-medium text-secondary">
          {title}
        </h1>
        <p className="line-clamp-3 text-ellipsis break-words text-base font-medium text-black/50">
          {description}
        </p>
      </div>
    </NavLink>
  );
}
