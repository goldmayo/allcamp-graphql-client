import React, { FC } from "react";
import Link from "next/link";
import { UrlObject } from "url";

interface AnchorProps {
  href: string | UrlObject;
  className: string;
  children: React.ReactNode;
}

const Anchor: FC<AnchorProps> = ({ href, className, children }) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default Anchor;
