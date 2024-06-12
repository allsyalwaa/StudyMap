import { NavLink } from "react-router-dom";
import SecVideoCourse from "../components/section/SecVideoCourse";
import SecVideoPlay from "../components/section/SecVideoPlay";

export default function VideoCourseLayout() {
  return (
    <div className="container my-12">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="flex flex-col gap-6">
          <NavLink to="/course" className="text-xl font-medium">
            Front-End Developer
          </NavLink>
          <div className="border-b-[1px] border-black/50"></div>
          <SecVideoCourse />
        </div>
        <SecVideoPlay />
      </div>
    </div>
  );
}
