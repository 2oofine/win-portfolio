import Section from "@/components/layout/Section";
import ExperienceTimeline from "./ExperienceTimeline";
import IntroAndSkills from "./IntroAndSkills";

const HeroSection = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          <IntroAndSkills />
        </div>

        <div className="flex flex-col gap-3 w-full md:w-1/2 min-h-0">
          <ExperienceTimeline />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
