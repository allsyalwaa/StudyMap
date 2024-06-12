/* eslint-disable react/prop-types */
import ImageQuiz from "../../assets/illustration-quiz.svg";

export default function CardQuizCourse({ number, description }) {
  return (
    <div className=" flex items-center gap-6">
      <div className="relative">
        <img className="h-20" src={ImageQuiz} alt="" />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          {number}
        </h1>
      </div>

      <div className="flex w-1/3 flex-col">
        <h1 className="break-words text-lg font-medium text-secondary">
          {description}
        </h1>
      </div>
    </div>
  );
}
