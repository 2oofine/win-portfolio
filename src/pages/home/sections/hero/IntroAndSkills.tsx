import { profileDetails } from "@/constants/profile";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const IntroAndSkills = () => {
  const { name, profession, techStacks, socials, contactInfo } = profileDetails;
  return (
    <>
      <div className="mb-5">
        <span className="md:hidden flex items-center justify-center my-5">
          <Image
            src="/profile.jpg"
            width={80}
            height={80}
            alt="Sherwin Romero"
            className="rounded-3xl border-[3px] border-slate-300"
          />
        </span>
        <h1 className="font-bold text-4xl flex items-center gap-2">
          Hi,{" "}
          <span className="hidden md:block">
            <Image
              src="/profile.jpg"
              width={80}
              height={80}
              alt="Sherwin Romero"
              className="rounded-3xl border-[3px] border-slate-300"
            />
          </span>
          I&apos;m {name}!
        </h1>
        <h1 className="font-bold text-4xl ">
          <span className="text-steel">I&apos;m a </span>
          {profession}.
        </h1>
      </div>

      <div className="flex gap-3 mb-10">
        {socials.map((platform, index) =>
          platform.icon ? (
            <Link
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-500 hover:text-slate-800 dark:text-background dark:hover:text-slate-400 transition-colors duration-200"
              key={index}
            >
              {React.createElement(platform.icon)}
            </Link>
          ) : null
        )}

        <div className="block md:hidden ">
          <Link
            href={`mailto:${contactInfo.email}`}
            className="relative inline-block text-sm break-all whitespace-normal after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-200 hover:after:w-full"
          >
            {contactInfo.email}
          </Link>
        </div>
      </div>

      {techStacks.map((techStack, index) => (
        <div key={index} className="mb-5">
          <h6 className="text-base mb-2 font-semibold">{techStack.category}:</h6>
          <ul className="list-none flex flex-wrap gap-3">
            {techStack.techs.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="group flex items-center gap-2 text-sm px-3 py-2 border border-slate-400 rounded-lg bg-white hover:bg-slate-100 shadow-md transition-transform transform hover:scale-105"
              >
                {tech.icon && (
                  <span
                    className={`text-lg ${tech.baseColor} md:text-current ${
                      tech.hoverColor && tech.hoverColor
                    } transition-colors duration-200`}
                  >
                    {React.createElement(tech.icon)}
                  </span>
                )}
                <span className="font-medium">{tech.name}</span>
              </Badge>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default IntroAndSkills;
