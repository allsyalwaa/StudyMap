import { useState } from "react";
import VideoCourse from "../ui/VideoCourse";
// import QuizCourse from "../ui/QuizCourse";
import CardQuizCourse from "../ui/CardQuizCourse";

export default function SecCourseContent() {
  const [activeTab, setActiveTab] = useState("Videos");

  return (
    <section>
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
            <VideoCourse />
            <VideoCourse />
            <VideoCourse />
            <VideoCourse />
          </>
        )}

        {activeTab === "Quizzes" && (
          <>
            <CardQuizCourse number="1" />
            <CardQuizCourse number="2" />
            <CardQuizCourse number="3" />
            <CardQuizCourse number="4" />
          </>
        )}
      </div>
    </section>
  );
}
