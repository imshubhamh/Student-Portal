import Hero from "../components/home/Hero";
import FeatureCards from "../components/home/FeatureCards";
import Navbar from "../components/Navbar";
import ProgramSection from "../components/Program/ProgramSection";
import CTASection from "../components/CTASection";
import LearningPath from "../components/home/LearningPath";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TeamsSection from "../components/home/TeamsSection";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* <Hero />
      <FeatureCards />
      <ProgramSection /> */}
        {/* <Navbar /> */}
        <Hero />
        <FeatureCards />
        {/* <ProgramSection /> */}
        {/* <LearningPath /> */}
        <WhyChooseUs />
        <TeamsSection />
        <Testimonials />
        <CTASection />
    </div>
  );
}
