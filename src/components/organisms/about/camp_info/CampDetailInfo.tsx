import React, { FC } from "react";
import { FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { ImNewTab } from "react-icons/im";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import Anchor from "@/components/atoms/anchor/Anchor";
import Icon from "@/components/atoms/icon/Icon";

interface CampDetailInfoInterface {
  content: {
    campImage: string;
    campName: string;
    lineIntro: string;
    tel: string;
    address: string;
    reservation: string;
    reservationUrl: string;
    homepage: string;
  };
  campNameTextStyle: string;
  TextStyle: string;
}

const CampDetailInfo: FC<CampDetailInfoInterface> = (props) => {
  const defaultCampImage = "/defaultCamp.svg";
  return (
    <section className="flex flex-row justify-start w-6/12 p-4 mb-4 border rounded-md bg-mono-white border-primary-bordergray">
      <FlexBox className="relative w-5/12">
        {/* Image > Icon CampCard로 통합하기위해 변경 */}
        <Icon
          src={props.content.campImage ? props.content.campImage : defaultCampImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={`${props.content.campName}`}
          className={"rounded-md"}
        />
      </FlexBox>
      <article className={`${props.TextStyle} flex flex-col p-4`}>
        <h1 className={`${props.campNameTextStyle} mb-1`}>{props.content.campName}</h1>
        <Span className="mb-1 ">{props.content.lineIntro}</Span>
        <Span className="flex flex-row items-center mb-1">
          <FaPhoneAlt className="mx-1.5" size={"1rem"} />
          {props.content.tel}
        </Span>
        <Span className="flex flex-row items-center mb-1">
          <MdLocationOn className="mx-1" size={"1.2rem"} />
          {props.content.address}
        </Span>
        <Span className="flex flex-row items-center mb-1">
          <FaRegCalendarCheck className="mx-1" size={"1.2rem"} />
          {props.content.reservation}
          <Anchor href={props.content.reservationUrl} className={""}>
            (바로가기)
          </Anchor>
          <ImNewTab size={"1rem"} />
        </Span>
        <Span className="flex flex-row items-center mb-1">
          <HiHome className="mx-1.5" size={"1rem"} />
          <Anchor href={props.content.homepage} className={""}>
            홈페이지
          </Anchor>
          <ImNewTab size={"1rem"} />
        </Span>
      </article>
    </section>
  );
};

export default CampDetailInfo;
