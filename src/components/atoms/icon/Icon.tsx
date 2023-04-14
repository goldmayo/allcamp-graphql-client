import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

interface IconProps extends ImageProps {
  src: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Icon: FC<IconProps> = ({ className, src, width, height, alt, onClick, ...props }) => {
  return (
    // <div className={`${className}`} onClick={onClick}>
    //   <Image src={src} width={width} height={height} alt={alt} {...props} />
    // </div>
    // <Image src={src} width={width} height={height} alt={alt} {...props} className={className} onClick={onClick} />
    <Image src={src} width={width} height={height} alt={alt} {...props} className={className} onClick={onClick} />
  );
};

export default Icon;
