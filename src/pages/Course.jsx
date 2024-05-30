import SecCourseContent from "../components/section/SecCourseContent";
import SecTitleCourse from "../components/section/SecTitleCourse";
import MainLayout from "../layout/MainLayout";

export default function Course() {
  return (
    <MainLayout>
      <SecTitleCourse />
      <SecCourseContent />
    </MainLayout>
  );
}
