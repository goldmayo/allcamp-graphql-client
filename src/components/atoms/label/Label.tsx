import React, { FC } from "react";

interface LabelProps {
  htmlFor: string;
  content: string;
  className: string | undefined;
}

const Label: FC<LabelProps> = ({ htmlFor, content, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {content}
    </label>
  );
};

export default Label;
