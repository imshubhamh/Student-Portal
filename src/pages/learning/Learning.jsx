import { useParams, Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import TabsSection from "./TabSection";
import Courses from "./Courses";
import Notes from "./Notes";
import Assignments from "./Assignments";

const Learning = () => {
  const { slug } = useParams();

  // default tab
  if (!slug) {
    return <Navigate to="/learning/courses" replace />;
  }

  return (
    <div>
      <HeroSection />
      <TabsSection slug={slug} />
      
      {/* TAB CONTENT */}
      <div className="mt-10">
        {slug === "courses" && <Courses />}
        {slug === "notes" && <Notes />}
        {slug === "assignments" && <Assignments />}
      </div>
    </div>
  );
};

export default Learning;
