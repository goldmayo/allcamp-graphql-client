import React, { FC } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import Anchor from "@/components/atoms/anchor/Anchor";
import { MdLocationOn } from "react-icons/md";
import { HiHome } from "react-icons/hi";

interface CampInfoInterface {}

const CampInfo: FC<CampInfoInterface> = (props) => {
  return (
    <FlexBox className={"flex flex-col"}>
      <h1 className="text-lg">제천 화오둥지 캠핑체험장</h1>
      <Span className="flex flex-row items-center">
        <MdLocationOn className="mx-1" size={"1.2rem"} />
        충청북도 제천시 청풍면 비봉5길 45-22
        <Anchor
          href={
            "https://map.kakao.com/?q=%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%B2%AD%ED%92%8D%EB%A9%B4%20%EB%B9%84%EB%B4%895%EA%B8%B8%2045-22"
          }
          className={"text-red-500"}
        >
          지도
        </Anchor>
      </Span>
      <Span className="flex flex-row items-center">
        <FaPhoneAlt className="mx-1.5" size={"1rem"} />
        010-7172-5372
      </Span>
      <Span className="flex flex-row items-center">
        <HiHome className="mx-1.5" size={"1rem"} />
        <Anchor href={""} className={"text-blue-500"}>
          홈페이지
        </Anchor>
      </Span>
    </FlexBox>
  );
};

export default CampInfo;
