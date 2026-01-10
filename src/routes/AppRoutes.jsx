import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
// import Assignments from "../pages/Assignments";
// import Notes from "../pages/Notes";
import MainLayout from "../components/layout/MainLayout";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/assignments" element={<Assignments />} /> */}
        {/* <Route path="/notes" element={<Notes />} /> */}
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
