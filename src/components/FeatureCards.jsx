import FeatureCard from "./FeatureCard";

export default function FeatureCards() {
  return (
      <div className="grid md:grid-cols-4 gap-8 mb-28">
           <FeatureCard variant="event" rotate="-rotate-6" />
           <FeatureCard variant="chat" rotate="rotate-2" />
           <FeatureCard variant="graph" rotate="-rotate-6" />
           <FeatureCard variant="chat" rotate="rotate-2" />
         </div>
  );
}
