import React, { FC } from "react";

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string | undefined;
  children: React.ReactNode;
}

const Span: FC<SpanProps> = ({ children, className, ...props }) => {
  return <span className={className}>{children}</span>;
};

export default Span;
