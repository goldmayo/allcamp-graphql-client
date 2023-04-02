import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import { UrlObject } from "url";

interface AnchorProps extends LinkProps {
  href: string | UrlObject;
  className: string;
  children: React.ReactNode;
  as?: string;
}

const Anchor: FC<AnchorProps> = ({ href, className, children, ...props }) => {
  return (
    <Link href={href} {...props}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default Anchor;
