import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import Navbar from "../components/Navbar";
import ProgramSection from "../components/Program/ProgramSection";
import CTASection from "../components/CTASection";
import LearningPath from "../components/LearningPath";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* <Hero />
      <FeatureCards />
      <ProgramSection /> */}
        {/* <Navbar /> */}
        <Hero />
        <FeatureCards />
        <ProgramSection />
        <LearningPath />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
    </div>
  );
}
