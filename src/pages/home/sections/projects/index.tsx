"use client";
import Section from "@/components/layout/Section";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileDetails } from "@/constants/profile";
import ProjectsGrid from "./ProjectsGrid";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection = () => {
  const { projects } = profileDetails;
  const workedWithProjects = projects.filter((p) => p.type === "worked_with");
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <Section className="py-10">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="">
          <h2 className="text-3xl font-bold">A Peek Into My Work</h2>
          <h5 className="mb-6">Some projects I&apos;ve been working on</h5>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex gap-8 !bg-transparent border-none p-0 mb-4">
            <TabsTrigger
              value="all"
              className="shadow-none data-[state=active]:dark:text-white cursor-pointer relative !bg-transparent border-none font-raleway font-bold p-0 hover:bg-transparent data-[state=active]:bg-transparent group"
            >
              All {projects.length > 0 ? `(${projects.length})` : ""}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-data-[state=active]:w-full"></span>
            </TabsTrigger>
            <TabsTrigger
              value="worked_with"
              className="shadow-none cursor-pointer data-[state=active]:dark:text-white relative !bg-transparent border-none font-raleway font-bold p-0 hover:bg-transparent data-[state=active]:bg-transparent group"
            >
              Worked with {workedWithProjects.length > 0 ? `(${workedWithProjects.length})` : ""}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-data-[state=active]:w-full"></span>
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="shadow-none cursor-pointer data-[state=active]:dark:text-white relative !bg-transparent border-none font-raleway font-bold p-0 hover:bg-transparent data-[state=active]:bg-transparent group"
            >
              Personal {personalProjects.length > 0 ? `(${personalProjects.length})` : ""}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-data-[state=active]:w-full"></span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ProjectsGrid projects={projects} defaultGrid={3} noOfItems={6} />
          </TabsContent>
          <TabsContent value="worked_with">
            <ProjectsGrid projects={workedWithProjects} defaultGrid={3} noOfItems={6} />
          </TabsContent>
          <TabsContent value="personal">
            <ProjectsGrid projects={personalProjects} defaultGrid={3} noOfItems={6} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </Section>
  );
};

export default ProjectsSection;
