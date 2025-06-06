import Section from "@/components/layout/Section";
import ExperienceTimeline from "./ExperienceTimeline";
import IntroAndSkills from "./IntroAndSkills";

const HeroSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-3 lg:flex-row justify-center items-center lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3 w-full lg:w-1/2">
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
