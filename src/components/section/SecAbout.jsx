import ImageAbout from "../../assets/illustration-about.svg";
import Button from "../ui/Button";

export default function SecAbout() {
  return (
    <section className="container my-12 pt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-medium">About</h1>
        <p className="mt-6 w-4/5 text-center text-lg">
          StudyMap is a free online course platform focused on web programming.
          We offer various courses to enhance your skills in web development,
          including HTML, CSS, JavaScript, and popular frameworks. Join our
          community and start your journey toward success in the digital world.
        </p>
      </div>
      <Button className={"mx-auto mt-8"} variant="primary">
        Join Us
      </Button>
      <div className="flex justify-center">
        <img className="mt-10 w-1/2" src={ImageAbout} alt="" />
      </div>
    </section>
  );
}
