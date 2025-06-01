import { IconType } from "react-icons";

export type TechStacks = {
  category: string;
  techs: Tech[];
};

export type Tech = {
  name: string;
  icon?: IconType;
};
