import React, { FC } from "react";
import Image from "next/image";

interface IconProps {
  path: string;
  width: number | string;
  height: number | string;
  alt: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Icon: FC<IconProps> = ({ className, path, width, height, alt, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <Image src={path} width={width} height={height} alt={alt} />
    </div>
  );
};

export default Icon;
