import ImageCourse from "../../assets/illustration-course.svg";

export default function CardCourseRecommendation() {
  return (
    <div className=" flex items-center gap-6">
      <img className="h-36" src={ImageCourse} alt="" />
      <div className="flex w-1/3 flex-col gap-3">
        <h1 className="break-words text-xl font-medium text-secondary">
          hfcuerdgbufcfytcehgsqvl
        </h1>
        <p className="break-words text-base font-medium text-black/50">
          hfcuerdgbufcbhqvlhfcuerdgbufcbswbdehsed...
        </p>
      </div>
    </div>
  );
}
