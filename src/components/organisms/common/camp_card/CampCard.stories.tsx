import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCard from "./CampCard";
import CampCardDetorator from "./context/CampCardContextDecorator";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import { CampInfo } from "@/types/campType";
import { CampSiteType } from "@/core/card_list_data/CardListData";
import Anchor from "@/components/atoms/anchor/Anchor";

const TestCampInfo: CampInfo = {
  __typename: "CampInfo",
  contentId: 100464,
  firstImageUrl: "https://gocamping.or.kr/upload/camp/100464/thumb/thumb_720_33104csvDChBO86DeGMGo0kw.jpeg",
  doNm: "충청남도",
  sigunguNm: "당진시",
  facltNm: "도그팰리스 당진점",
  lineIntro: "드넓은 독채 마당이 있는 애견동반 글램핑장",
  addr1: "충남 당진시 고대면 탕주막길 116-11",
  tel: "010-3533-5292",
  sbrsCl: "전기,무선인터넷,장작판매,온수,물놀이장",
  homepage: "https://www.dogpalace.kr/",
  resveCl: "온라인실시간예약",
  resveUrl: "https://pension.onda.me/bp/130723/calendar",
};

export default {
  title: "organisms/common/card",
  Component: CampCard,
} as ComponentMeta<typeof CampCard>;

const Template: ComponentStory<typeof CampCard> = (args, className) => {
  return (
    <FlexBox className={`${className}`}>
      <CampCard {...args} />
    </FlexBox>
  );
};

export const CampItemList = Template.bind({});
CampItemList.args = {
  className: "flex flex-row p-2.5 border justify-space bg-mono-white border-primary-bordergray rounded-md",
  campsite: TestCampInfo,
  image: <CampCard.ImageAnchor className="" width={300} height={210} />,
  info: (
    <CampCard.Info className="flex flex-col justify-around ml-5 ">
      <CampCard.Name className="font-bold text-title1" link={true} />
      <CampCard.Region className="text-body2" />
      <CampCard.Adress
        className="flex flex-row items-center text-body3"
        icon={<FaMapMarkerAlt className="mx-1" size={"0.875rem"} />}
      />
      <CampCard.Tel
        className="flex flex-row items-center text-body3"
        icon={<FaPhoneAlt className="mx-1.5" size={"1rem"} />}
      />
      <CampCard.Amenity className="p-2 border rounded-sm border-primary-bordergray bg-primary-lightgray" gap="mr-4" />
    </CampCard.Info>
  ),
};

export const CampDetail = Template.bind({});
CampDetail.args = {
  className: "flex flex-row justify-start w-6/12 p-4 mb-4 border rounded-md bg-mono-white border-primary-bordergray",
  campsite: TestCampInfo,
  image: <CampCard.Image className="relative w-5/12" />,
  info: (
    <CampCard.Info className="flex flex-col p-4 font-medium text-body3">
      <CampCard.Name className="mb-1 font-semibold text-headline3" />
      <CampCard.LineIntro className="mb-1" />
      <CampCard.Tel
        className="flex flex-row items-center mb-1"
        icon={<FaPhoneAlt className="mx-1.5" size={"1rem"} />}
      />
      <CampCard.Adress
        className="flex flex-row items-center mb-1"
        icon={<MdLocationOn className="mx-1" size={"1.2rem"} />}
      />
      <CampCard.Reservation
        className="flex flex-row items-center mb-1"
        icon={<FaRegCalendarCheck className="mx-1" size={"1.2rem"} />}
      />
      <CampCard.Homepage
        className="flex flex-row items-center mb-1"
        icon={<HiHome className="mx-1.5" size={"1rem"} />}
      />
    </CampCard.Info>
  ),
};

export const RecomandedCampsiteList = Template.bind({});
RecomandedCampsiteList.args = {
  className: "flex-col mx-1 border bg-mono-white border-primary-bordergray",
  campsite: {
    __typename: "CampInfo",
    contentId: 100464,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/100464/thumb/thumb_720_33104csvDChBO86DeGMGo0kw.jpeg",
    doNm: "충청남도",
    sigunguNm: "당진시",
    facltNm: "도그팰리스 당진점",
    lineIntro: "드넓은 독채 마당이 있는 애견동반 글램핑장",
    addr1: "충남 당진시 고대면 탕주막길 116-11",
    tel: "010-3533-5292",
    sbrsCl: "전기,무선인터넷,장작판매,온수,물놀이장",
    homepage: "https://www.dogpalace.kr/",
    resveCl: "온라인실시간예약",
    resveUrl: "https://pension.onda.me/bp/130723/calendar",
  },
  image: <CampCard.ImageAnchor className="" width={250} height={150} />,
  info: (
    <CampCard.Info className="flex-col text-center">
      <CampCard.Name className="px-2 pt-1 font-semibold truncate text-body1" link={true} />
      <CampCard.LineIntro className="px-4 pb-1 truncate text-body3" />
    </CampCard.Info>
  ),
};

export const CampTypes = Template.bind({});
CampTypes.args = {
  className: "flex-col mx-1 border bg-mono-white border-primary-bordergray",
  campsite: {
    facltNm: "일반야영장",
    lineIntro: "고인물 캠퍼분들에게 추천",
    firstImageUrl: "/campsiteType/basiccamp.jpeg",
    contentId: 0,
    induty: "일반야영장",
  },
  image: <CampCard.Image className="" width={250} height={150} />,
  info: (
    <CampCard.Info className="flex-col text-center">
      <Anchor
        href={{
          pathname: "/search",
          query: {
            searchParams: JSON.stringify({ induty: "일반야영장" }),
          },
        }}
        className={""}
      >
        <CampCard.Name className="px-2 pt-1 font-semibold truncate text-body1" />
      </Anchor>
      <CampCard.LineIntro className="px-4 pb-1 truncate text-body3" />
    </CampCard.Info>
  ),
};
