/* eslint-disable react/prop-types */
export default function CardCourses({ image, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <img src={image} alt="" />
      <h1 className="break-words text-xl font-medium text-secondary">
        {title}
      </h1>
      <p className="line-clamp-2 text-ellipsis break-words text-base text-black/50">
        {description}
      </p>
    </div>
  );
}
