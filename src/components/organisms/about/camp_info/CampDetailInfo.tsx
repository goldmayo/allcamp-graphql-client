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
    homepage: string;
  };
  campNameTextStyle: string;
  TextStyle: string;
}

const CampDetailInfo: FC<CampDetailInfoInterface> = (props) => {
  return (
    <FlexBox className={"flex flex-row"}>
      <Icon
        path={props.content.campImage}
        width={480}
        height={320}
        alt={`${props.content.campName}`}
        className={""}
      ></Icon>
      <section className={`${props.TextStyle} flex flex-col`}>
        <h1 className={props.campNameTextStyle}>{props.content.campName}</h1>
        <Span className="">{props.content.lineIntro}</Span>
        <Span className="flex flex-row items-center">
          <FaPhoneAlt className="mx-1.5" size={"1rem"} />
          {props.content.tel}
        </Span>
        <Span className="flex flex-row items-center">
          <MdLocationOn className="mx-1" size={"1.2rem"} />
          {props.content.address}
        </Span>
        <Span className="flex flex-row items-center">
          <FaRegCalendarCheck className="mx-1" size={"1.2rem"} />
          {props.content.reservation}
        </Span>
        <Span className="flex flex-row items-center">
          <HiHome className="mx-1.5" size={"1rem"} />
          <Anchor href={props.content.homepage} className={""}>
            홈페이지 바로가기
          </Anchor>
          <ImNewTab size={"1rem"} />
        </Span>
      </section>
    </FlexBox>
  );
};

export default CampDetailInfo;
