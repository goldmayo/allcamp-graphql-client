import Image from "next/image";
import { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";

interface BannerProps {
  imageSrc: string;
  className: string;
  slogan: string;
  sloganStyle: string;
  subSlogan: string;
  subSloganStyle: string;
}
const Banner: FC<BannerProps> = (props) => {
  return (
    <FlexBox className={`${props.className}`}>
      <FlexBox className={"flex-col justify-center items-center  text-center font-semibold z-10"}>
        <Span className={`${props.sloganStyle}`}>{props.slogan}</Span>
        <Span className={`${props.subSloganStyle}`}>{props.subSlogan}</Span>
      </FlexBox>
      <Image
        className="z-0"
        src={`${props.imageSrc}`}
        alt={"banner image"}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
    </FlexBox>
  );
};

export default Banner;
