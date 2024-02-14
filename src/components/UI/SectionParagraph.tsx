import React from "react";

type SectionParagraphProps = {
  addStyles?: string;
  children: React.ReactNode;
};

const SectionParagraph = ({ addStyles, children }: SectionParagraphProps) => {
  return (
    <p
     
      className={addStyles}
    >
      {children}
    </p>
  );
};

export default SectionParagraph;
