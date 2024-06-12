import CardCourses from "../ui/CardCourses";
import frontend from "../../assets/frontend.svg";
import backend from "../../assets/backend.svg";
import fullstack from "../../assets/fullstack.svg";
import uiux from "../../assets/uiux.svg";
import api from "../../assets/api.svg";
import websecurity from "../../assets/websecurity.svg";

export default function SecCourses() {
  return (
    <section className="container my-12 py-10">
      <h2 className="text-3xl font-medium">Courses</h2>

      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
        <CardCourses image={frontend} />
        <CardCourses image={backend} />
        <CardCourses image={fullstack} />
        <CardCourses image={uiux} />
        <CardCourses image={api} />
        <CardCourses image={websecurity} />
      </div>
    </section>
  );
}
