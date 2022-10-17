import React, { FC } from "react";
import { CampInfoEdge } from "../../../types/campType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Icon from "../../atoms/icon/Icon";
import ListItem from "../../atoms/list_item/ListItem";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Span from "../../atoms/span/Span";
import AmenityList from "../amenity_list/AmenityList";

interface CampListItemInterface {
  content: CampInfoEdge;
}

const CampListItem: FC<CampListItemInterface> = (props) => {
  return (
    <ListItem key={`${props.content?.node?.contentId}`} className={""}>
      <FlexBox className="flex flex-row p-2.5 border justify-space bg-mono-white border-primary-bordergray rounded-md">
        {props.content?.node?.firstImageUrl ? (
          <Icon
            path={`${props.content?.node?.firstImageUrl}`}
            width={300}
            height={210}
            alt={`${props.content?.node?.facltNm} cover image`}
            className={""}
          />
        ) : (
          <Icon
            path={`/defaultCamp.svg`}
            width={300}
            height={210}
            alt={`${props.content?.node?.facltNm} cover image`}
            className={""}
          />
        )}
        <FlexBox className="flex flex-col justify-around ml-5 ">
          <Span className="font-bold text-title1">{`${props.content?.node?.facltNm}`}</Span>
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
          <FlexBox className={"p-2 rounded-sm border border-primary-bordergray bg-primary-lightgray"}>
            {props.content?.node?.sbrsCl && <AmenityList sbrsCl={props.content?.node?.sbrsCl} gap={"mr-4"} />}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </ListItem>
  );
};

export default CampListItem;
