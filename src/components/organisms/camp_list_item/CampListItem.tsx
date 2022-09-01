import React, { FC, useId } from "react";
import { CampInfoEdge } from "../../../types/campType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Icon from "../../atoms/icon/Icon";
import ListItem from "../../atoms/list_item/ListItem";
import SpanIconItem from "../../molecules/span_icon_item/SpanIconItem";

import { FaPhoneAlt, FaWifi, FaPlug, FaSwimmingPool } from "react-icons/fa";
import { TbSoup } from "react-icons/tb";
import { GiWoodPile, GiKidSlide, GiCementShoes, GiSoccerField, GiTrail } from "react-icons/gi";
import { MdLocationOn, MdOutlineLocalConvenienceStore, MdSportsTennis } from "react-icons/md";
import Span from "../../atoms/span/Span";

interface CampListItemInterface {
  content: CampInfoEdge;
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
      return <TbSoup className="" size={"35px"} />;
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

const CampListItem: FC<CampListItemInterface> = (props) => {
  const id = useId();
  return (
    <ListItem key={`${props.content?.node?.contentId}`} className={""}>
      <FlexBox className="flex flex-row p-4 justify-space">
        {props.content?.node?.firstImageUrl && (
          <Icon
            path={`${props.content?.node?.firstImageUrl}`}
            width={300}
            height={210}
            alt={`${props.content?.node?.facltNm} cover image`}
            className={""}
          />
        )}
        <FlexBox className="flex flex-col justify-between ml-4 ">
          <Span className="">{`${props.content?.node?.facltNm}`}</Span>
          {props.content?.node?.lineIntro && <p>{`${props.content?.node?.lineIntro}`}</p>}
          {props.content?.node?.sigunguNm && props.content?.node?.addr1 && (
            <Span className="flex flex-row items-center">
              <MdLocationOn className="mx-1" size={"1.2rem"} />
              {`${props.content?.node?.sigunguNm} ${props.content?.node?.addr1} `}
            </Span>
          )}
          {props.content?.node?.tel && (
            <Span className="flex flex-row items-center">
              <FaPhoneAlt className="mx-1.5" size={"1rem"} />
              {`${props.content?.node?.tel}`}
            </Span>
          )}
          {props.content?.node?.sbrsCl && (
            <ul className="flex flex-row justify-around ">
              {props.content?.node?.sbrsCl.split(",").map((el) => {
                return (
                  <SpanIconItem key={id} iconName={`${el}`}>
                    {getAmenityIcon(el)}
                  </SpanIconItem>
                );
              })}
            </ul>
          )}
        </FlexBox>
      </FlexBox>
    </ListItem>
  );
};

export default CampListItem;
