import React, { FC } from "react";
import Image from "next/image";

interface IconProps {
  path: string;
  width: number;
  height: number;
  alt: string;
  className: string;
}

const Icon: FC<IconProps> = ({ className, path, width, height, alt }) => {
  return (
    <div className={className}>
      <Image src={path} width={width} height={height} alt={alt} />
    </div>
  );
};

export default Icon;
