"use client";
import Section from "@/components/layout/Section";
import ExperienceTimeline from "./ExperienceTimeline";
import IntroAndSkills from "./IntroAndSkills";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-3 lg:flex-row justify-center items-center lg:items-start lg:justify-between">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 w-full lg:w-1/2"
        >
          <IntroAndSkills />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 w-full md:w-1/2 min-h-0"
        >
          <ExperienceTimeline />
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
