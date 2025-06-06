import { IconType } from "react-icons";
import { Project } from "./projects";
import { TechStacks } from "./tech-stacks";
import { WorkExperience } from "./work-exp";

export type ProfileDetails = {
  name: string;
  profession: string;
  socials: Socials[];
  contactInfo: ContactInfo;
  techStacks: TechStacks[];
  projects: Project[];
  workExps: WorkExperience[];
};

export type Socials = {
  name: string;
  url: string;
  icon?: IconType;
};

export type ContactInfo = {
  email: string;
};
