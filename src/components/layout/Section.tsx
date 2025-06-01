import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Section = (props: Props) => {
  const { children, className } = props;
  return <section className={`container mx-auto px-5 md:px-0 ${className}`}>{children}</section>;
};

export default Section;
