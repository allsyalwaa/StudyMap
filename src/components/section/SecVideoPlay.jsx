import ImageVideoPlay from "../../assets/illustration-video-play.svg";

export default function SecVideoPlay() {
  return (
    <div className="col-span-2">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <img src={ImageVideoPlay} alt="" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Judul video uhfuirehuycfdeh4</h1>
        <div className="h-64 border-[1px] border-black/50 p-2">
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}
