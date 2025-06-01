import { Tech } from "./tech-stacks";

export type Projects = {
  name: string;
  type?: string;
  origin?: string;
  description: string;
  contribution: string;
  repository?: string;
  website?: string;
  downloadLink?: string;
  techsUsed: Tech[];
  assets: string[];
};
