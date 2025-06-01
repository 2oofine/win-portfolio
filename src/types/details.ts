import { Projects } from "./projects";
import { TechStacks } from "./tech-stacks";
import { WorkExperience } from "./work-exp";

export type ProfileDetails = {
  name: string;
  description: string;
  socials: Socials[];
  contactInfo: ContactInfo;
  techStacks: TechStacks[];
  projects: Projects[];
  workExps: WorkExperience[];
};

export type Socials = {
  name: string;
  url: string;
};

export type ContactInfo = {
  email: string;
};
