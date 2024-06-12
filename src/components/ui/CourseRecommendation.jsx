/* eslint-disable react/prop-types */
import CardCourseRecommendation from "./CardCourseRecommendation";

export default function CourseRecommendation({
  image,
  title,
  description,
  to,
}) {
  return (
    <div>
      <CardCourseRecommendation
        image={image}
        title={title}
        description={description}
        to={to}
      />
    </div>
  );
}
