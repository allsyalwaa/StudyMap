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
      <div className="grid grid-cols-5 items-center justify-center gap-36">
        <div className="col-span-3">
          <h1 className="text-6xl font-bold ">Learn Anywhere, Anytime!</h1>
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
        <img className="col-span-2 w-full" src={ImageHero} alt="" />
      </div>

      {isSignUpPopupOpen && <SignUp onClose={handleCloseSignUpPopup} />}
    </section>
  );
}
