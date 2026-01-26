import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Hero />
      <FeatureCards />
    </div>
  );
}
