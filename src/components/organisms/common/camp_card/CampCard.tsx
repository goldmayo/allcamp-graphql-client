import React, { FC, ReactNode } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { ImNewTab } from "react-icons/im";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import { CampInfo, CampInfoEdge } from "@/types/campType";
import CampCardContext from "./context/CampCardContext";
import CampCardInfo from "./camp_card_info/CampCardInfo";
import CampCardTitle from "./camp_card_info/camp_card_title/CampCardTitle";
import CampCardImage from "./camp_card_info/camp_card_image/CampCardImage";
import CampCardImageAnchor from "./camp_card_info/camp_card_image_anchor/CampCardImageAnchor";
import CampCardSubtitle from "./camp_card_info/camp_card_subtitle/CampCardSubtitle";
import CampCardName from "./camp_card_info/camp_card_name/CampCardName";
import CampCardLineIntro from "./camp_card_info/camp_card_lineintro/CampCardLineIntro";
import CampCardAdress from "./camp_card_info/camp_card_adress/CampCardAdress";
import CampCardRegion from "./camp_card_info/camp_card_region/CampCardRegion";
import CampCardTel from "./camp_card_info/camp_card_tel/CampCardTel";
import CampCardAmenity from "./camp_card_info/camp_card_amenity/CampCardAmenity";
import CampCardHomepage from "./camp_card_info/camp_card_homepage/CampCardHomepage";
import CampCardReservation from "./camp_card_info/camp_card_reservation/CampCardReservation";

interface CampCardContainerInterface {
  cardData: CampInfo;
  className: string;
}

const CampCardContainer: FC<CampCardContainerInterface> = (props) => {
  return (
    <FlexBox className="relative w-5/12">
      {/* 5:30초부터 */}
      <FlexBox className="relative w-5/12">
        <CampCard
          className=""
          campsite={props.cardData}
          image={
            <>
              <CampCard.Image className="" />
              <CampCard.ImageAnchor className="" width={250} height={150} />
              <CampCard.ImageAnchor className="" width={300} height={210} />
            </>
          }
          info={
            <CampCard.Info className="">
              <CampCard.Title className="" title="" />
              <CampCard.Subtitle className="" subtitle="" />
              <CampCard.Name className="" />
              <CampCard.Name className="" link={true} />
              <CampCard.LineIntro className="" />
              <CampCard.Adress className="" icon={<FaMapMarkerAlt className="mx-1" size={"0.875rem"} />} />
              <CampCard.Adress className="" icon={<MdLocationOn className="mx-1" size={"1.2rem"} />} />
              <CampCard.Region className="" />
              <CampCard.Tel className="" icon={<FaPhoneAlt className="mx-1.5" size={"1rem"} />} />
              <CampCard.Amenity className="" gap="mr-4" />
              <CampCard.Homepage className="" icon={<HiHome className="mx-1.5" size={"1rem"} />} />
              <CampCard.Reservation
                className=""
                icon={<FaRegCalendarCheck className="mx-1" size={"1.2rem"} />}
                // { size: 'auto' } https://stackoverflow.com/questions/64142418/react-icons-responsive-size
              />
            </CampCard.Info>
          }
          action={<></>}
        />
      </FlexBox>
    </FlexBox>
  );
};

interface CampCardInterface {
  campsite: CampInfo;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
  className: string;
}

const CampCard = (props: CampCardInterface) => {
  return (
    <CampCardContext.Provider value={props.campsite}>
      <FlexBox className={props.className}>
        {props.image}
        {props.info}
        {props.action}
      </FlexBox>
    </CampCardContext.Provider>
  );
};

CampCard.Info = CampCardInfo;
CampCard.Image = CampCardImage;
CampCard.ImageAnchor = CampCardImageAnchor;
CampCard.Title = CampCardTitle;
CampCard.Subtitle = CampCardSubtitle;
CampCard.Name = CampCardName;
CampCard.LineIntro = CampCardLineIntro;
CampCard.Adress = CampCardAdress;
CampCard.Region = CampCardRegion;
CampCard.Tel = CampCardTel;
CampCard.Amenity = CampCardAmenity;
CampCard.Homepage = CampCardHomepage;
CampCard.Reservation = CampCardReservation;

export default CampCard;
