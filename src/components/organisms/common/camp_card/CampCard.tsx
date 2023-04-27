"use client";
import React, { ReactNode } from "react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import { CampInfo } from "@/types/campType";
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

// const CampCard = Object.assign(CampCards, {
//   Info: CampCardInfo,
//   Image: CampCardImage,
//   ImageAnchor: CampCardImageAnchor,
//   Title: CampCardTitle,
//   Subtitle: CampCardSubtitle,
//   Name: CampCardName,
//   LineIntro: CampCardLineIntro,
//   Adress: CampCardAdress,
//   Region: CampCardRegion,
//   Tel: CampCardTel,
//   Amenity: CampCardAmenity,
//   Homepage: CampCardHomepage,
//   Reservation: CampCardReservation,
// });

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
