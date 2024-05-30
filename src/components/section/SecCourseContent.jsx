import VideoCourse from "../ui/VideoCourse";

export default function SecCourseContent() {
  return (
    <section className="container my-12 pt-10">
      <div className="flex w-1/2 flex-col gap-6">
        <h2 className="text-xl font-medium">Course Content</h2>
        <VideoCourse />
        <VideoCourse />
        <VideoCourse />
        <VideoCourse />
      </div>
    </section>
  );
}
