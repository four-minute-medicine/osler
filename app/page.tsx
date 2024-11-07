import HeroSection from "./components/landing/hero";
import SolutionSection from "./components/landing/solution_section";
import FeaturesSection from "./components/landing/features";
import GetStartedSection from "./components/landing/get_started";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <SolutionSection />
      <FeaturesSection/>
      <GetStartedSection />
    </div>
  );
}
