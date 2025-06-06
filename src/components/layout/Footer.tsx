import { profileDetails } from "@/constants/profile";
import Link from "next/link";
import React from "react";
import Section from "./Section";
import "./styles.css";

const Footer = () => {
  const { name, socials } = profileDetails;

  return (
    <footer className="w-full bg-white dark:bg-foreground shadow-sm text-sm sm:text-base">
      <Section>
        <nav className="grid grid-cols-3 items-center py-5">
          <div className="flex flex-col justify-self-start space-y-2">
            <blockquote className="italic text-gray-500 dark:text-gray-400 max-w-xs">
              “You see, but you do not observe.”
            </blockquote>
            <cite className="block text-gray-400 dark:text-gray-500 text-xs">— Sherlock Holmes</cite>
          </div>

          <p className="text-gray-600 dark:text-gray-300 select-none justify-self-center text-center">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-6 lg:justify-end relative">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-2xl text-slate-500 hover:text-slate-800 dark:text-background dark:hover:text-slate-400 transition-colors duration-200"
              >
                {social.icon && <span>{React.createElement(social.icon)}</span>}
              </Link>
            ))}
          </div>
        </nav>
      </Section>
    </footer>
  );
};
export default Footer;
