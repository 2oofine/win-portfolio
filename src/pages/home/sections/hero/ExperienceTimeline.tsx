import { profileDetails } from "@/constants/profile";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa6";
import "./styles.css";
const ExperienceTimeline = () => {
  const { workExps } = profileDetails;

  const formatDate = (date: Date | string) => {
    if (date === "Present") return "Present";
    if (!date) return "";
    return date.toLocaleString("default", { month: "short", year: "numeric" });
  };

  // const calculateDuration = (startDate: Date, endDate: Date | string) => {
  //   const end = endDate === "Present" ? new Date() : typeof endDate === "string" ? new Date(endDate) : endDate;
  //   const start = typeof startDate === "string" ? new Date(startDate) : startDate;

  //   const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  //   if (months < 1) return "Less than 1 month";
  //   if (months === 1) return "1 month";
  //   if (months < 12) return `${months} months`;

  //   const years = Math.floor(months / 12);
  //   const remainingMonths = months % 12;

  //   if (years === 1 && remainingMonths === 0) return "1 year";
  //   if (years === 1) return `1 year ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  //   if (remainingMonths === 0) return `${years} years`;

  //   return `${years} years ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  // };

  const calculateTotalExperience = () => {
    let totalMonths = 0;

    workExps.forEach((exp) => {
      const endDateObj =
        exp.endDate === "Present" ? new Date() : typeof exp.endDate === "string" ? new Date(exp.endDate) : exp.endDate;
      const startDateObj = typeof exp.startDate === "string" ? new Date(exp.startDate) : exp.startDate;
      const months =
        (endDateObj.getFullYear() - startDateObj.getFullYear()) * 12 +
        (endDateObj.getMonth() - startDateObj.getMonth());
      totalMonths += months;
    });

    const years = Math.floor(totalMonths / 12);
    return years > 0 ? `${years}+` : "<1";
  };

  const getUniqueCompanies = () => {
    const companies = [...new Set(workExps.map((exp) => exp.company))];
    return companies.length;
  };

  const getUniqueTechnologies = () => {
    const allTechs = workExps.flatMap((exp) => exp.techsUsed.map((tech) => tech.name));
    const uniqueTechs = [...new Set(allTechs)];
    return uniqueTechs.length;
  };

  return (
    <>
      <div className="flex-col justify-center items-center">
        {/* <h1 className="text-3xl font-bold mb-2">My Experiences</h1> */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
          {/* Stats */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 text-center text-lg">
            <div>
              <span className="font-medium">{calculateTotalExperience()}</span> years experience
            </div>
            <div>
              <span className="font-medium">{getUniqueCompanies()}</span> companies
            </div>
            <div>
              <span className="font-medium">{getUniqueTechnologies()}</span> technologies
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-8">
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-gray-300 via-gray-300 to-transparent md:-translate-x-1/2"></div>

        {workExps.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="relative mb-12 w-full flex pl-14 md:pl-0">
              <div className={`w-full md:w-1/2 ${isEven ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                <div className={`flex items-start gap-4 ${isEven ? "md:flex-row-reverse flex-row" : "flex-row"}`}>
                  <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {exp.companyLogo ? (
                      <Image
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <FaBriefcase className="w-5 h-5 text-gray-400" />
                    )}
                  </div>

                  {/* Text Content - always left-aligned on mobile */}
                  <div className={`flex-1 ${isEven ? "md:text-right text-left" : "text-left"}`}>
                    <h3 className="text-lg font-semibold mb-1">{exp.position}</h3>
                    <div className="text-base text-gray-600 dark:text-gray-100 mb-2">{exp.company}</div>
                    <div
                      className={`flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-100 ${
                        isEven ? "md:justify-end justify-start" : "justify-start"
                      }`}
                    >
                      <span>{exp.workSetup}</span>
                      <span>•</span>
                      <span>{exp.jobType}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-100 mt-1">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-2 md:left-1/2 top-2 md:-translate-x-1/2 w-8 h-8 flex items-center justify-center">
                <div className="w-3 h-3 bg-foreground dark:bg-background rounded-full z-10"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExperienceTimeline;
