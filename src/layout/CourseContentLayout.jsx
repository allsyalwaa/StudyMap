import SecCourseContent from "../components/section/SecCourseContent";
import SecCourseRecommendation from "../components/section/SecCourseRecommendation";

export default function CourseContentLayout() {
  return (
    <div className="container my-12 pt-10">
      <div className="grid grid-cols-2 gap-12">
        <SecCourseContent />
        <SecCourseRecommendation />
      </div>
    </div>
  );
}
