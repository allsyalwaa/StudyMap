import CourseRecommendation from "../ui/CourseRecommendation";

export default function SecCourseRecommendation() {
  return (
    <section className="top-20">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Course Recommendation</h2>
        <CourseRecommendation />
        <CourseRecommendation />
        <CourseRecommendation />
        <CourseRecommendation />
        <CourseRecommendation />
        <CourseRecommendation />
        <CourseRecommendation />
        <CourseRecommendation />
      </div>
    </section>
  );
}
