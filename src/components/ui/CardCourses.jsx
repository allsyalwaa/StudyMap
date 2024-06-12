/* eslint-disable react/prop-types */
export default function CardCourses({ image }) {
  return (
    <div className="flex flex-col gap-4">
      <img src={image} alt="" />
      <h1 className="break-words text-xl font-medium text-secondary">
        hfcuerdgbufcbswbdehgsqvl
      </h1>
      <p className="break-words text-base text-black/50">
        hfcuerdgbufcbswbdehgshqvlhfcuerdgbufcbswbdehgshqvlhfcuerdgbufcbswbdehsed...
      </p>
    </div>
  );
}
