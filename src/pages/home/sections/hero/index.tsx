import Section from "@/components/layout/Section";
import { profileDetails } from "@/constants/profile";

const HeroSection = () => {
  const { name, description } = profileDetails;
  return (
    <Section>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1>Hi! I&apos;m {name}</h1>
          <h3>{description}</h3>
          <ul className="list-none"></ul>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
