import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Course from "./pages/Course";
import Video from "./pages/Video";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}
