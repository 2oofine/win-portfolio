"use client";

import { Project } from "@/types/projects";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaDownload, FaGithub } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { Button } from "./ui/button";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.assets.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.assets.length) % project.assets.length);
  };

  const openPreview = () => setIsPreviewOpen(true);
  const closePreview = () => setIsPreviewOpen(false);

  return (
    <>
      <motion.div
        className="bg-background dark:bg-slate-900 rounded-lg shadow-md p-4 flex flex-col gap-2 h-full"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative w-full h-80 overflow-hidden rounded-md cursor-pointer" onClick={openPreview}>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImage}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={project.assets[currentImage]}
                alt={`${project.name} screenshot`}
                fill
                className={`${
                  project.name === "EASI - Easy Access Smart Inventory" ? "object-contain" : "object-cover"
                }`}
              />
            </motion.div>
          </AnimatePresence>

          {project.assets.length > 1 && (
            <>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-600 hover:bg-transparent hover:text-slate-800 bg-transparent shadow-none cursor-pointer"
                aria-label="Previous image"
              >
                <FiChevronLeft size={24} />
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-600 hover:bg-transparent hover:text-slate-800 bg-transparent shadow-none cursor-pointer"
                aria-label="Next image"
              >
                <FiChevronRight size={24} />
              </Button>
            </>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">{project.name}</h2>
          {project.origin && <p className="text-sm text-gray-600 dark:text-gray-300">{project.origin}</p>}
          <p className="text-sm text-gray-800 dark:text-gray-400">{project.description}</p>
          <p className="text-sm text-gray-600 dark:text-gray-500 italic">{project.contribution}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.techsUsed.map((tech, index) => (
            <span key={index} className="bg-slate-200 dark:bg-slate-600  text-xs px-2 py-1 rounded">
              {tech.name}
            </span>
          ))}
        </div>

        {/* External Links */}
        <div className="mt-auto flex gap-4 pt-4 border-t border-gray-200">
          {project.website && (
            <Link
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1  hover:underline text-sm"
            >
              <FaExternalLinkAlt /> Website
            </Link>
          )}
          {project.repository && (
            <Link
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1  hover:underline text-sm"
            >
              <FaGithub /> Repository
            </Link>
          )}
          {project.downloadLink && (
            <Link
              href={project.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1  hover:underline text-sm"
            >
              <FaDownload /> Download
            </Link>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" // a bit darker bg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className="relative w-full max-w-[90vw] max-h-[90vh] lg:max-w-[70vw] lg:max-h-[70vh] rounded-md overflow-hidden aspect-[3/2]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={project.assets[currentImage]}
                alt={`${project.name} preview`}
                fill
                className="object-contain rounded-md"
              />

              <Button
                onClick={closePreview}
                className="absolute top-3 right-3 p-3 bg-black/40 hover:bg-black/80 h-auto text-white rounded-full shadow-lg cursor-pointer"
                aria-label="Close preview"
              >
                <FiX size={24} />
              </Button>

              {project.assets.length > 1 && (
                <>
                  <Button
                    onClick={prevImage}
                    className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 p-3 h-auto bg-black/40 hover:bg-black/80 text-white rounded-full shadow-lg"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft size={28} />
                  </Button>
                  <Button
                    onClick={nextImage}
                    className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 p-3 h-auto bg-black/40 hover:bg-black/80 text-white rounded-full shadow-lg"
                    aria-label="Next image"
                  >
                    <FiChevronRight size={28} />
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
