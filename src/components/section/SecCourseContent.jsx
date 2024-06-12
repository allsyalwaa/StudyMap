import { useState } from "react";
import VideoCourse from "../ui/VideoCourse";
// import QuizCourse from "../ui/QuizCourse";
import CardQuizCourse from "../ui/CardQuizCourse";

import video1 from "../../assets/1.svg";
import video2 from "../../assets/2.svg";
import video3 from "../../assets/3.svg";
import video4 from "../../assets/4.svg";
import video5 from "../../assets/5.svg";
import video6 from "../../assets/6.svg";
import video7 from "../../assets/7.svg";
import video8 from "../../assets/8.svg";
import video9 from "../../assets/9.svg";
import video10 from "../../assets/10.svg";

export default function SecCourseContent() {
  const [activeTab, setActiveTab] = useState("Videos");

  return (
    <section className="sticky top-20 h-screen overflow-y-auto">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Course Content</h2>

        <div className="grid grid-cols-2 items-center gap-4 text-lg font-medium">
          <div
            className={`cursor-pointer ${activeTab === "Videos" ? "text-primary" : "text-black"}`}
            onClick={() => setActiveTab("Videos")}
          >
            <h1 className="block">Videos</h1>
            <div
              className={`mt-1 border-b-2 ${activeTab === "Videos" ? "border-primary" : "border-white"}`}
            ></div>
          </div>
          <div
            className={`cursor-pointer ${activeTab === "Quizzes" ? "text-primary" : "text-black"}`}
            onClick={() => setActiveTab("Quizzes")}
          >
            <h1 className="block">Quizzes</h1>
            <div
              className={`mt-1 border-b-2 ${activeTab === "Quizzes" ? "border-primary" : "border-white"}`}
            ></div>
          </div>
        </div>

        {activeTab === "Videos" && (
          <>
            <VideoCourse
              image={video1}
              title={"Frontend | Day 1 | Basics of HTML"}
            />
            <VideoCourse
              image={video2}
              title={"Frontend | Day 2 | Introduction to CSS"}
            />
            <VideoCourse
              image={video3}
              title={"Frontend | Day 3 | Intro to JavaScript"}
            />
            <VideoCourse
              image={video4}
              title={"Frontend | Day 4 | JS: Functions & DOM Manipulation"}
            />
            <VideoCourse
              image={video5}
              title={"Frontend | Day 5 | JS: Event Handling & Forms"}
            />
            <VideoCourse
              image={video6}
              title={"Frontend | Day 6 | Semantic HTML & Positioned Elements"}
            />
            <VideoCourse
              image={video7}
              title={"Frontend | Day 7 | Responsive UI & Flexbox"}
            />
            <VideoCourse
              image={video8}
              title={"Frontend | Day 8 | CSS Grid & Shadows"}
            />
            <VideoCourse
              image={video9}
              title={
                "Frontend | Day 9 | CSS - Grid Areas, JS Execution Context and Scope Chain"
              }
            />
            <VideoCourse
              image={video10}
              title={
                "Frontend | Day 10 | Object creation, this object, closures, prototypal inheritance"
              }
            />
          </>
        )}

        {activeTab === "Quizzes" && (
          <>
            <CardQuizCourse
              number="1"
              description={"Quiz 1 Front-End Development"}
            />
            <CardQuizCourse
              number="2"
              description={"Quiz 2 Front-End Development"}
            />
            <CardQuizCourse
              number="3"
              description={"Quiz 3 Front-End Development"}
            />
            <CardQuizCourse
              number="4"
              description={"Quiz 4 Front-End Development"}
            />
            <CardQuizCourse
              number="5"
              description={"Quiz 5 Front-End Development"}
            />
          </>
        )}
      </div>
    </section>
  );
}
