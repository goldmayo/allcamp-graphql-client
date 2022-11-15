import React, { FC } from "react";
import { CampInfoEdge } from "../../../types/campType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Icon from "../../atoms/icon/Icon";
import ListItem from "../../atoms/list_item/ListItem";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Span from "../../atoms/span/Span";
import AmenityList from "../amenity_list/AmenityList";
import Anchor from "../../atoms/anchor/Anchor";

interface CampListItemInterface {
  content: CampInfoEdge;
}

const CampListItem: FC<CampListItemInterface> = (props) => {
  return (
    <ListItem key={`camp_list_item_${props.content?.node?.contentId}`} className={""}>
      <FlexBox className="flex flex-row p-2.5 border justify-space bg-mono-white border-primary-bordergray rounded-md">
        <Anchor href={`/about/${props.content?.node?.contentId}`} className={""}>
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

export default CampListItem;
