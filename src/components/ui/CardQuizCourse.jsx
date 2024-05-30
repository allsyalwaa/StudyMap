/* eslint-disable react/prop-types */
import ImageQuiz from "../../assets/illustration-quiz.svg";

export default function CardQuizCourse({ number }) {
  return (
    <div className=" flex items-center gap-6">
      <div className="relative">
        <img className="h-20" src={ImageQuiz} alt="" />
        <h1 className="absolute left-5 top-5 text-3xl font-bold text-white">
          {number}
        </h1>
      </div>

      <div className="flex w-1/3 flex-col">
        <h1 className="break-words text-lg font-medium text-secondary">
          hfcuerdgbufcbswbdegfytcehgsqvl
        </h1>
      </div>
    </div>
  );
}
