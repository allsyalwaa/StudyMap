import CardVideoCourse from "../ui/CardVideoCourse";

import video2 from "../../assets/2.svg";
import video3 from "../../assets/3.svg";
import video4 from "../../assets/4.svg";
import video5 from "../../assets/5.svg";
import video6 from "../../assets/6.svg";
import video7 from "../../assets/7.svg";
import video8 from "../../assets/8.svg";
import video9 from "../../assets/9.svg";
import video10 from "../../assets/10.svg";

export default function SecVideoCourse() {
  return (
    <section className="sticky top-20 h-screen overflow-y-auto">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium md:hidden">Playlist</h2>
        <div className="border-b-[1px] border-black/50 md:hidden"></div>
        <CardVideoCourse
          image={video2}
          title={"Frontend | Day 2 | Introduction to CSS"}
          to={"/coming-soon"}
        />
        <CardVideoCourse
          image={video3}
          title={"Frontend | Day 3 | Intro to JavaScript"}
          to={"/coming-soon"}
        />
        <CardVideoCourse
          image={video4}
          title={"Frontend | Day 4 | JS: Functions & DOM Manipulation"}
          to={"/coming-soon"}
        />
        <CardVideoCourse
          image={video5}
          title={"Frontend | Day 5 | JS: Event Handling & Forms"}
          to={"/coming-soon"}
        />
        <CardVideoCourse
          image={video6}
          title={"Frontend | Day 6 | Semantic HTML & Positioned Elements"}
          to={"/coming-soon"}
        />
        <CardVideoCourse
          image={video7}
          title={"Frontend | Day 7 | Responsive UI & Flexbox"}
          to={"/coming-soon"}
        />
        <CardVideoCourse
          image={video8}
          title={"Frontend | Day 8 | CSS Grid & Shadows"}
          to={"/coming-soon"}
        />
        <CardVideoCourse
          image={video9}
          title={
            "Frontend | Day 9 | CSS - Grid Areas, JS Execution Context and Scope Chain"
          }
          to={"/coming-soon"}
        />
        <CardVideoCourse
          image={video10}
          title={
            "Frontend | Day 10 | Object creation, this object, closures, prototypal inheritance"
          }
          to={"/coming-soon"}
        />
      </div>
    </section>
  );
}
