import ImageCourse from "../../assets/illustration-course.svg";
import Button from "../ui/Button";

export default function SecTitleCourse() {
  return (
    <section className="container my-12">
      <div className="grid justify-center">
        <img className="mx-auto h-32 md:h-60" src={ImageCourse} alt="" />

        <h1 className="mt-4 text-center text-3xl font-bold">
          Front-End Developer
        </h1>
        <Button className={"mx-auto mt-6"} variant="primary">
          Get Started
        </Button>

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </p>
        </div>
      </div>
    </section>
  );
}
