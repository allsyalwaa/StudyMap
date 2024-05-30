import Button from "../ui/Button";
import ImageHero from "../../assets/illustration-hero.svg";
import SignUp from "../ui/SignUp";

import { useState } from "react";

export default function SecHero() {
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);

  const handleOpenSignUpPopup = () => {
    setIsSignUpPopupOpen(true);
  };

  const handleCloseSignUpPopup = () => {
    setIsSignUpPopupOpen(false);
  };

  return (
    <section className="container my-12">
      <div className="grid items-center justify-center gap-12 md:grid-cols-5 md:gap-36">
        <div className="text-center md:col-span-3 md:text-start">
          <h1 className="text-4xl font-bold md:text-6xl ">
            Learn Anywhere, Anytime!
          </h1>
          <p className="mt-6 text-lg">
            With access to our online courses, you can learn anytime and
            anywhere. This flexibility allows you to tailor your learning to
            your own schedule.
          </p>

          <button onClick={handleOpenSignUpPopup}>
            <Button className={"mt-6"} variant="primary">
              Get Started
            </Button>
          </button>
        </div>
        <div className="grid justify-center md:col-span-2 md:justify-end">
          <img className="w-64 md:w-full" src={ImageHero} alt="" />
        </div>
      </div>

      {isSignUpPopupOpen && <SignUp onClose={handleCloseSignUpPopup} />}
    </section>
  );
}
