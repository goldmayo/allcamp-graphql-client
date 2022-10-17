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
    <Anchor href={`${props.data.contentId}`} className="">
      <FlexBox className="flex-col mx-1 border bg-mono-white border-primary-bordergray">
        <Icon
          path={`${props.data.thumbnailUrl}`}
          width={250}
          height={150}
          alt={`${props.data.thumnailAlt}`}
          className="flex items-center justify-center"
        />
        <FlexBox className="flex-col text-center">
          {props.data.title && <Span className="px-2 pt-1 truncate text-body1">{`${props.data.title}`}</Span>}
          {props.data.subTitle && <Span className="px-4 pb-1 truncate text-body3">{props.data.subTitle}</Span>}
        </FlexBox>
      </FlexBox>
    </Anchor>
  );
};

export default Card;
