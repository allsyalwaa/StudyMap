import SecTitleCourse from "../components/section/SecTitleCourse";
import CourseContentLayout from "../layout/CourseContentLayout";
import MainLayout from "../layout/MainLayout";

export default function Course() {
  return (
    <MainLayout>
      <SecTitleCourse />
      <CourseContentLayout />
    </MainLayout>
  );
}
