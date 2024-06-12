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
        <CardCourses
          to={"/course"}
          image={frontend}
          title={"Front-End Development"}
          description={
            "Front end development covers HTML, CSS, JavaScript, and frameworks like React. Learn responsive design, development tools, and testing techniques. The course emphasizes performance, accessibility, and security, offering hands-on projects and comprehensive learning."
          }
        />
        <CardCourses
          to={"/coming-soon"}
          image={backend}
          title={"Back-End Development"}
          description={
            "Back end development covers server-side programming, databases, and APIs. Learn languages like Python, Java, or Node.js, along with tools for database management and server configuration. The course emphasizes performance, security, and scalability, offering hands-on projects and comprehensive learning."
          }
        />
        <CardCourses
          to={"/coming-soon"}
          image={fullstack}
          title={"Full-Stack Development"}
          description={
            "Full stack development covers both front end and back end technologies. Learn HTML, CSS, JavaScript, as well as server-side languages like Python or Node.js, and databases. The course emphasizes building complete applications, focusing on performance, security, and scalability, with hands-on projects for a comprehensive learning experience."
          }
        />
        <CardCourses
          to={"/coming-soon"}
          image={uiux}
          title={"UI/UX Design"}
          description={
            "UI/UX design covers user interface and user experience principles. Learn design tools like Sketch or Figma, prototyping, user research, and usability testing. The course emphasizes creating intuitive, user-friendly designs, focusing on aesthetics, functionality, and user satisfaction, with hands-on projects for a comprehensive learning experience."
          }
        />
        <CardCourses
          to={"/coming-soon"}
          image={api}
          title={"API Development"}
          description={
            "API development covers creating and managing application programming interfaces. Learn RESTful and GraphQL API design, server-side programming with languages like Python or Node.js, and tools for testing and documentation. The course emphasizes performance, security, and scalability, offering hands-on projects for a comprehensive learning experience."
          }
        />
        <CardCourses
          to={"/coming-soon"}
          image={websecurity}
          title={"Web Security"}
          description={
            "Web security covers protecting websites and web applications from cyber threats. Learn about common vulnerabilities like SQL injection, XSS, and CSRF, and how to mitigate them. The course includes secure coding practices, encryption, authentication, and tools for security testing. Emphasizing best practices in safeguarding data and user privacy, it offers hands-on projects for a comprehensive understanding of web security."
          }
        />
      </div>
    </section>
  );
}
