import ImageVideo from "../../assets/illustration-video.svg";

export default function CardVideoCourse() {
  return (
    <div className=" flex items-center gap-6">
      <img className="h-20" src={ImageVideo} alt="" />
      <div className="flex w-1/3 flex-col">
        <h1 className="break-words text-lg font-medium text-secondary">
          hfcuerdgbufcbswbdegfytcehgsqvl
        </h1>
      </div>
    </div>
  );
}
