"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/types/projects";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsGridProps {
  projects: Project[];
  defaultGrid?: number; // default: 3 columns
  noOfItems?: number; // items per page on desktop
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, defaultGrid = 3, noOfItems = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : noOfItems;
  const totalPages = Math.ceil((projects?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = (projects ?? []).slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const swipeThreshold = 100;
  const handleSwipe = (offsetX: number) => {
    if (offsetX > swipeThreshold && currentPage > 1) {
      prevPage();
    } else if (offsetX < -swipeThreshold && currentPage < totalPages) {
      nextPage();
    }
  };

  return (
    <div className="relative flex flex-col gap-4">
      <AnimatePresence mode="wait">
        {currentProjects && currentProjects.length > 0 ? (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`grid gap-4 ${
              isMobile
                ? "grid-cols-1"
                : defaultGrid === 1
                ? "grid-cols-1"
                : defaultGrid === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            }`}
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.name}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => isMobile && handleSwipe(info.offset.x)}
                className="touch-pan-y"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty-state"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center py-10"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {currentProjects && currentProjects.length > 0 && totalPages > 1 && (
        <>
          {currentPage > 1 && (
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <Button
                onClick={prevPage}
                className="rounded-full h-auto bg-background hover:bg-slate-100 text-foreground shadow-lg p-3 cursor-pointer"
                aria-label="Previous Page"
              >
                <FaChevronLeft size={16} />
              </Button>
            </motion.div>
          )}

          {currentPage < totalPages && (
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 30, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
            >
              <Button
                onClick={nextPage}
                className="rounded-full h-auto bg-background hover:bg-slate-100 hover:dark:bg-slate-500 text-foreground shadow-lg p-3 cursor-pointer"
                aria-label="Next Page"
              >
                <FaChevronRight size={16} />
              </Button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectsGrid;
