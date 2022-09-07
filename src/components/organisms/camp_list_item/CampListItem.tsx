import React, { FC } from "react";
import { CampInfoEdge } from "../../../types/campType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Icon from "../../atoms/icon/Icon";
import ListItem from "../../atoms/list_item/ListItem";

import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Span from "../../atoms/span/Span";
import AmenityList from "../amenity_list/AmenityList";

interface CampListItemInterface {
  content: CampInfoEdge;
}

const CampListItem: FC<CampListItemInterface> = (props) => {
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
          //   default image(흑백 로고)
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
          {props.content?.node?.sbrsCl && <AmenityList sbrsCl={props.content?.node?.sbrsCl} />}
        </FlexBox>
      </FlexBox>
    </ListItem>
  );
};

export default CampListItem;
