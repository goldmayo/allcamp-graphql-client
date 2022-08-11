import React, { FC } from "react";

interface SpanProps {
  className?: string | undefined;
  children: React.ReactNode;
}

const Span: FC<SpanProps> = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default Span;
