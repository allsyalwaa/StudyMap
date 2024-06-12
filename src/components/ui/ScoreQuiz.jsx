import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function ScoreQuiz() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold">Your Score</h1>
          <div className="mt-4 flex items-end justify-center gap-2">
            <p className="text-center text-6xl font-bold ">100</p>
            <p className="text-center text-4xl font-bold text-black/50">/100</p>
          </div>
          <div className="mx-auto mb-2 flex flex-row gap-4">
            <NavLink to="/course">
              <Button variant="white-primary" className="mt-6">
                Back
              </Button>
            </NavLink>
            <NavLink to="/coming-soon">
              <Button variant="primary" className="mt-6">
                Continue
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
