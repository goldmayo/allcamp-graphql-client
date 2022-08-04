import React, { FC } from "react";

interface SpanProps {
  className?: string | undefined;
  content: React.ReactElement | string;
}

const Span: FC<SpanProps> = ({ content, className }) => {
  return <span className={className}>{content}</span>;
};

export default Span;
