import SecCourseContent from "../components/section/SecCourseContent";
import SecCourseRecommendation from "../components/section/SecCourseRecommendation";

export default function CourseContentLayout() {
  return (
    <div className="container my-12 pt-10">
      <div className="grid gap-12 md:grid-cols-2">
        <SecCourseContent />
        <SecCourseRecommendation />
      </div>
    </div>
  );
}
