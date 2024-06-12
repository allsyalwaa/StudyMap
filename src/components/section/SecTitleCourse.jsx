import Button from "../ui/Button";
import frontend from "../../assets/frontend.svg";
import { NavLink } from "react-router-dom";

export default function SecTitleCourse() {
  return (
    <section className="container my-12">
      <div className="grid justify-center">
        <img className="mx-auto h-32 md:h-60" src={frontend} alt="" />

        <h1 className="mt-4 text-center text-3xl font-bold">
          Front-End Developer
        </h1>
        <NavLink to="/video">
          <Button className={"mx-auto mt-6"} variant="primary">
            Get Started
          </Button>
        </NavLink>

        <div className="mt-6 flex items-center justify-center space-x-8 text-black/50">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-base font-medium uppercase">Videos</h1>
            <p className="text-2xl font-semibold">10</p>
          </div>
          <div className="h-full border-l border-black/50"></div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-base font-medium uppercase">Quizzes</h1>
            <p className="text-2xl font-semibold">5</p>
          </div>
          <div className="h-full border-l border-black/50"></div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-base font-medium uppercase">Duration</h1>
            <p className="text-2xl font-semibold">8h</p>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="mt-4 w-2/3 text-center text-base text-black/50">
            Front end development covers HTML, CSS, JavaScript, and frameworks
            like React. Learn responsive design, development tools, and testing
            techniques. The course emphasizes performance, accessibility, and
            security, offering hands-on projects and comprehensive learning.
          </p>
        </div>
      </div>
    </section>
  );
}
