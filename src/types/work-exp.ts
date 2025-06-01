import { Tech } from "./tech-stacks";

export type WorkExperience = {
  company: string;
  location: string;
  position: string;
  workSetup: string;
  startDate: Date;
  endDate: Date | string;
  techsUsed: Tech[];
};
