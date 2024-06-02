import CardVideoCourse from "../ui/CardVideoCourse";

export default function SecVideoCourse() {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium md:hidden">Playlist</h2>
        <div className="border-b-[1px] border-black/50 md:hidden"></div>
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
