import HeroSection from "@/pages/home/sections/hero";
import ProjectsSection from "@/pages/home/sections/projects";

export default function Home() {
  return (
    <div className="font-raleway">
      <HeroSection />

      <div className="relative bg-slate-100 dark:bg-slate-800">
        <ProjectsSection />
      </div>
    </div>
  );
}
