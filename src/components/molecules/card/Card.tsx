import React, { FC } from "react";
import Anchor from "@/components/atoms/anchor/Anchor";
import Icon from "@/components/atoms/icon/Icon";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import { CardData } from "@/types/cardDataType";
import { UrlObject } from "url";

interface CardInterface {
  className: string;
  data: CardData;
  linkpath: UrlObject;
}

const Card: FC<CardInterface> = (props) => {
  return (
    <Anchor href={`${props.linkpath}`} className="">
      <FlexBox className="flex-col mx-1 border bg-mono-white border-primary-bordergray">
        <Icon
          path={props.data.thumbnailUrl !== null ? `${props.data.thumbnailUrl}` : "/defaultCamp.svg"}
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

export default Card;
