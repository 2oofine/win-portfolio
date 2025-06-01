import Section from "@/components/layout/Section";

const HeroSection = () => {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1>Hi! I&apos;m Sherwin Romero</h1>
          <h3>A front-end web developer</h3>
          <ul className="list-none"></ul>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
