import SecVideoCourse from "../components/section/SecVideoCourse";
import SecVideoPlay from "../components/section/SecVideoPlay";

export default function VideoCourseLayout() {
  return (
    <div className="container my-12">
      <div className="grid grid-cols-3 gap-12">
        <SecVideoCourse />
        <SecVideoPlay />
      </div>
    </div>
  );
}
