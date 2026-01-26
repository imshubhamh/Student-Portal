import { Routes, Route } from "react-router-dom";
import Courses from "../pages/learning/Courses";
import CourseDetail from "../pages/learning/CourseDetail";
import Notes from "../pages/learning/Notes";
import NoteDetail from "../pages/learning/NoteDetail";
import Assignments from "../pages/learning/Assignments";
import AssignmentDetail from "../pages/learning/AssignmentDetail";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Playlists from "../pages/youtube/Playlists";
import PlaylistVideos from "../pages/youtube/PlaylistVideos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />

        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:slug" element={<NoteDetail />} />

        <Route path="/assignments" element={<Assignments />} />
        <Route path="/assignments/:slug" element={<AssignmentDetail />} />

        <Route path="/youtube" element={<Playlists />} />
        <Route path="/youtube/:playlistId" element={<PlaylistVideos />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
