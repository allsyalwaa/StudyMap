import { useState } from "react";
import Button from "../ui/Button";
import ScoreQuiz from "../ui/ScoreQuiz";

export default function SecQuiz() {
  const [isScoreVisible, setScoreVisible] = useState(false);

  const handleSubmit = () => {
    setScoreVisible(true);
  };

  return (
    <section className="container my-12">
      <div>
        <h2 className="text-xl font-medium">Front-End Developer</h2>
        <div className="mt-4 border-b-[1px] border-black/50"></div>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <h1 className="mt-6 text-center text-xl font-medium">Quiz 1</h1>
        <div className="flex flex-col gap-3 border-[1.5px] p-4">
          <p>
            1. Apa fungsi utama dari Virtual DOM dalam framework seperti React?
          </p>
          <div className="flex items-center gap-2">
            <input type="radio" name="question1" id="option1" />
            <label htmlFor="option1">Mengatur state aplikasi</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="question1" id="option2" />
            <label htmlFor="option2">
              Mengoptimalkan rendering UI dengan meminimalkan manipulasi
              langsung pada DOM nyata
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="question1" id="option3" />
            <label htmlFor="option3">
              Menyediakan penyimpanan data sementara di sisi klien
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="question1" id="option4" />
            <label htmlFor="option4">Mengelola routing dalam aplikasi</label>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-[1.5px] p-4">
          <p>
            2. Manakah dari berikut ini yang merupakan keuntungan utama
            menggunakan TypeScript dalam pengembangan front-end?
          </p>
          <div className="flex items-center gap-2">
            <input type="radio" name="question2" id="option1" />
            <label htmlFor="option1">
              Kemampuan untuk menulis kode dengan performa lebih tinggi
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="question2" id="option2" />
            <label htmlFor="option2">
              Dukungan untuk pemrograman berbasis objek
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="question2" id="option3" />
            <label htmlFor="option3">
              Kemampuan untuk mendeteksi kesalahan tipe pada waktu kompilasi
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="question2" id="option4" />
            <label htmlFor="option4">Dukungan untuk arsitektur mikro</label>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="btn-primary mt-6" onClick={handleSubmit}>
          <Button className={"mt-6"} variant="primary">
            Submit
          </Button>
        </button>
      </div>
      {isScoreVisible && <ScoreQuiz />}
    </section>
  );
}
