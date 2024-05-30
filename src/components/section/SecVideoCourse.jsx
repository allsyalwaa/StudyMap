import CardVideoCourse from "../ui/CardVideoCourse";

export default function SecVideoCourse() {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Front-End Developer</h2>
        <div className="border-b-[1px] border-black/50"></div>
        <CardVideoCourse />
        <CardVideoCourse />
        <CardVideoCourse />
        <CardVideoCourse />
        <CardVideoCourse />
        <CardVideoCourse />
      </div>
    </section>
  );
}
