import CardCourses from "../ui/CardCourses";

export default function SecCourses() {
  return (
    <section className="container my-12 py-10">
      <h2 className="text-3xl font-medium">Courses</h2>

      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
        <CardCourses />
        <CardCourses />
        <CardCourses />
        <CardCourses />
        <CardCourses />
        <CardCourses />
      </div>
    </section>
  );
}
