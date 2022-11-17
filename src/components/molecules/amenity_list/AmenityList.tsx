import React, { FC } from "react";
import { FaPlug, FaSwimmingPool, FaWifi } from "react-icons/fa";
import { GiCementShoes, GiKidSlide, GiSoccerField, GiTrail, GiWoodPile } from "react-icons/gi";
import { MdOutlineLocalConvenienceStore, MdSportsTennis, MdHotTub } from "react-icons/md";
import SpanIconItem from "@/components/molecules/span_icon_item/SpanIconItem";

interface AmenityListInterface {
  sbrsCl: string;
  gap: string;
  contentId: string;
}
const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case "전기":
      return <FaPlug className="" size={"35px"} />;
    case "무선인터넷":
      return <FaWifi className="" size={"35px"} />;
    case "장작판매":
      return <GiWoodPile className="" size={"35px"} />;
    case "온수":
      return <MdHotTub className="" size={"35px"} />;
    case "물놀이장":
      return <FaSwimmingPool className="" size={"35px"} />;
    case "산책로":
      return <GiTrail className="" size={"35px"} />;
    case "트렘폴린":
      return <GiCementShoes className="" size={"35px"} />;
    case "놀이터":
      return <GiKidSlide className="" size={"35px"} />;
    case "운동장":
      return <GiSoccerField className="" size={"35px"} />;
    case "운동시설":
      return <MdSportsTennis className="" size={"35px"} />;
    case "마트.편의점":
      return <MdOutlineLocalConvenienceStore className="" size={"35px"} />;
    default:
      break;
  }
};
const AmenityList: FC<AmenityListInterface> = (props) => {
  return (
    <>
      {props.sbrsCl && (
        <ul className="flex flex-row flex-wrap justify-start">
          {props.sbrsCl.split(",").map((el, i) => {
            return (
              <SpanIconItem key={`camp_amenity_list_${props.contentId}_${i}`} iconName={`${el}`} gapSize={props.gap}>
                {getAmenityIcon(el)}
              </SpanIconItem>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default AmenityList;
