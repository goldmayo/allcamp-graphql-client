import React, { FC } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { ImNewTab } from "react-icons/im";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import Anchor from "@/components/atoms/anchor/Anchor";
import Icon from "@/components/atoms/icon/Icon";
import Image from "next/image";
import { CardData } from "@/types/cardDataType";
import { UrlObject } from "url";
import ListItem from "@/components/atoms/list_item/ListItem";
import { CampInfoEdge } from "@/types/campType";
import AmenityList from "@/components/molecules/amenity_list/AmenityList";
// CampListItemInterface > CampDetailInfoInterface > CardInterface >
// type integrete = {
//   title: string;
//   subTitle: string;
//   thumbnailUrl: string;
//   thumnailAlt: string;
//   contentId: number;
//   lineIntro?: string;

//   contentId: number;
//   firstImageUrl: string;
//   doNm: string;
//   sigunguNm: string;
//   facltNm: string;
//   lineIntro: string;

//   className: string;
//   data: {
//     title: string;
//     subTitle: string;
//     thumbnailUrl: string;
//     thumnailAlt: string;
//     contentId: number;
//     lineIntro?: string;
//   }
//   linkpath: UrlObject;

//   // content: 필요한것만 전달될것;
//   content: CampInfoEdge;
//   className: string;

//   content: {
//     campImage: string;
//     campName: string;
//     lineIntro: string;
//     tel: string;
//     address: string;
//     reservation: string;
//     reservationUrl: string;
//     homepage: string;
//   };
//   campNameTextStyle: string;
//   TextStyle: string;
// }

type CardData2 = {
  title: string;
  subTitle: string;
  thumbnailUrl: string;
  thumnailAlt: string;
  contentId: number;
  lineIntro?: string;
};
type RecommendCampsiteData2 = {
  contentId: number;
  firstImageUrl: string;
  doNm: string;
  sigunguNm: string;
  facltNm: string;
  lineIntro: string;
};

interface CardInterface {
  className: string;
  data: CardData;
  linkpath: UrlObject;
}

interface CampListItemInterface {
  content: CampInfoEdge;
  className: string;
}

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
  return (
    <section className="flex flex-row justify-start w-6/12 p-4 mb-4 border rounded-md bg-mono-white border-primary-bordergray">
      {props.content.campImage !== "" ? (
        <FlexBox className="relative w-5/12">
          <Image
            src={props.content.campImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={`${props.content.campName}`}
            className={"rounded-md"}
          />
        </FlexBox>
      ) : (
        <FlexBox className="relative w-5/12">
          <Image
            src={"/defaultCamp.svg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={`${props.content.campName}`}
            className={"rounded-md"}
          />
        </FlexBox>
      )}
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

const Card: FC<CardInterface> = (props) => {
  return (
    <Anchor href={`${props.linkpath}`} className="">
      <FlexBox className="flex-col mx-1 border bg-mono-white border-primary-bordergray">
        <Icon
          src={props.data.thumbnailUrl !== null ? `${props.data.thumbnailUrl}` : "/defaultCamp.svg"}
          width={250}
          height={150}
          alt={`${props.data.thumnailAlt}`}
          className="flex items-center justify-center"
        />
        <FlexBox className="flex-col text-center">
          {props.data.title && (
            <Span className="px-2 pt-1 font-semibold truncate text-body1">{`${props.data.title}`}</Span>
          )}
          {props.data.subTitle && <Span className="px-4 pb-1 truncate text-body3">{props.data.subTitle}</Span>}
        </FlexBox>
      </FlexBox>
    </Anchor>
  );
};

const CampListItem: FC<CampListItemInterface> = (props) => {
  const defaultCampImage = "/defaultCamp.svg";
  return (
    <ListItem key={`camp_list_item_${props.content?.node?.contentId}`} className={props.className}>
      <FlexBox className="flex flex-row p-2.5 border justify-space bg-mono-white border-primary-bordergray rounded-md">
        <Anchor href={`/about/${props.content?.node?.contentId}`} className={""}>
          <Icon
            src={props.content?.node?.firstImageUrl ? `${props.content?.node?.firstImageUrl}` : defaultCampImage}
            width={300}
            height={210}
            alt={`${props.content?.node?.facltNm} cover image`}
            className={""}
          />
        </Anchor>
        <FlexBox className="flex flex-col justify-around ml-5 ">
          <Anchor href={`/about/${props.content?.node?.contentId}`} className={""}>
            <Span className="font-bold text-title1">{`${props.content?.node?.facltNm}`}</Span>
          </Anchor>
          {props.content?.node?.doNm && props.content?.node?.sigunguNm && (
            <p className="text-body2">{`${props.content?.node?.doNm} ${props.content?.node?.sigunguNm}`}</p>
          )}
          {props.content?.node?.tel && (
            <Span className="flex flex-row items-center text-body3">
              <FaPhoneAlt className="mx-1.5" size={"0.875rem"} />
              {`${props.content?.node?.tel}`}
            </Span>
          )}
          {props.content?.node?.addr1 && (
            <Span className="flex flex-row items-center text-body3">
              <FaMapMarkerAlt className="mx-1" size={"0.875rem"} />
              {`${props.content?.node?.addr1} `}
            </Span>
          )}
          {props.content?.node?.sbrsCl && (
            <FlexBox className={"p-2 rounded-sm border border-primary-bordergray bg-primary-lightgray"}>
              <AmenityList
                sbrsCl={props.content?.node?.sbrsCl}
                gap={"mr-4"}
                contentId={`${props.content?.node?.contentId}`}
              />
            </FlexBox>
          )}
        </FlexBox>
      </FlexBox>
    </ListItem>
  );
};

interface CampCardInfoInterface {
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

const CampCardInfo: FC<CampCardInfoInterface> = (props) => {
  return <></>;
};

export default CampCardInfo;
