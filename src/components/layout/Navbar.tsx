import { profileDetails } from "@/constants/profile";
import { ThemeToggler } from "../theme-toggler";
import Section from "./Section";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const { contactInfo } = profileDetails;
  return (
    <header className="w-full">
      <Section className="relative">
        <nav className="grid grid-cols-3 items-center py-5">
          {/* Left Side */}
          <div className="md:hidden"></div>
          <div className="hidden md:flex justify-start items-center flex-wrap max-w-full">
            <Link
              href={`mailto:${contactInfo.email}`}
              className="relative inline-block text-sm sm:text-base break-all whitespace-normal after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-200 hover:after:w-full"
            >
              {contactInfo.email}
            </Link>
          </div>

          {/* Middle */}
          <div className="justify-self-center">
            <h1 className="text-shadows font-pixelify-sans font-bold text-4xl">win</h1>
          </div>

          {/* Right Side */}
          <div className="justify-self-end">
            <ThemeToggler />
          </div>
        </nav>
      </Section>
    </header>
  );
};

export default Navbar;
