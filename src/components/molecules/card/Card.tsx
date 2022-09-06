import React, { FC } from "react";
import Anchor from "../../atoms/anchor/Anchor";
import Icon from "../../atoms/icon/Icon";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";
import { CardData } from "../../../types/cardDataType";

interface CardInterface {
  className: string;
  data: CardData;
}

const Card: FC<CardInterface> = (props) => {
  return (
    <Anchor href={`${props.data.contentId}`} className={""}>
      <FlexBox className="flex-col mr-1 bg-slate-100">
        {/* <Icon
          path={`${props.data.firstImageUrl}`}
          width={320}
          height={180}
          alt={`${props.data.facltNm}`}
          className={""}
        /> */}
        <Icon
          path={`${props.data.thumbnailUrl}`}
          width={320}
          height={180}
          alt={`${props.data.thumnailAlt}`}
          className={""}
        />
        <FlexBox className="flex-col ">
          {/* <Span className="text-xs">{`${props.data.doNm} ${props.data.sigunguNm}`}</Span>
          <Span className="text-xs truncate ">{props.data.facltNm}</Span> */}
          {props.data.title && <Span className="text-xs">{`${props.data.title}`}</Span>}
          {props.data.subTitle && <Span className="text-xs truncate ">{props.data.subTitle}</Span>}
        </FlexBox>
      </FlexBox>
    </Anchor>
  );
};

export default Card;
