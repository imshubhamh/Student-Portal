import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import Navbar from "../components/Navbar";
import ProgramSection from "../components/Program/ProgramSection";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* <Hero />
      <FeatureCards />
      <ProgramSection /> */}
        <Navbar />
        <Hero />
        <FeatureCards />
        <ProgramSection />
    </div>
  );
}
