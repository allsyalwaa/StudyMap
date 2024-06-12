/* eslint-disable react/prop-types */
import CardVideoCourse from "./CardVideoCourse";

export default function VideoCourse({ image, title, to }) {
  return (
    <div>
      <CardVideoCourse image={image} title={title} to={to} />
    </div>
  );
}
