import CourseRecommendation from "../ui/CourseRecommendation";

import backend1 from "../../assets/backend1.svg";
import fullstack1 from "../../assets/fullstack1.svg";
import uiux1 from "../../assets/uiux1.svg";

export default function SecCourseRecommendation() {
  return (
    <section className="top-20">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Course Recommendation</h2>
        <CourseRecommendation
          image={backend1}
          title={"Back-End Development"}
          description={
            "Back end development covers server-side programming, databases, and APIs. Learn languages like Python, Java, or Node.js, along with tools for database management and server configuration. The course emphasizes performance, security, and scalability, offering hands-on projects and comprehensive learning."
          }
          to={"/coming-soon"}
        />
        <CourseRecommendation
          image={fullstack1}
          title={"Full-Stack Development"}
          description={
            "Full stack development covers both front end and back end technologies. Learn HTML, CSS, JavaScript, as well as server-side languages like Python or Node.js, and databases. The course emphasizes building complete applications, focusing on performance, security, and scalability, with hands-on projects for a comprehensive learning experience."
          }
          to={"/coming-soon"}
        />
        <CourseRecommendation
          image={uiux1}
          title={"UI/UX Design"}
          description={
            "UI/UX design covers user interface and user experience principles. Learn design tools like Sketch or Figma, prototyping, user research, and usability testing. The course emphasizes creating intuitive, user-friendly designs, focusing on aesthetics, functionality, and user satisfaction, with hands-on projects for a comprehensive learning experience."
          }
          to={"/coming-soon"}
        />
      </div>
    </section>
  );
}
