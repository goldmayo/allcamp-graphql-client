import React, { FC } from "react";
import Anchor from "../../atoms/anchor/Anchor";
import Icon from "../../atoms/icon/Icon";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";

interface CardInterface {
  className: string;
  data: {
    contentId: number;
    firstImageUrl: string;
    doNm: string;
    sigunguNm: string;
    facltNm: string;
    lineIntro: string;
  };
}

const Card: FC<CardInterface> = (props) => {
  return (
    <Anchor href={`${props.data.contentId}`} className={""}>
      <FlexBox className="flex-col">
        <Icon
          path={`${props.data.firstImageUrl}`}
          width={160}
          height={90}
          alt={`${props.data.facltNm}`}
          className={""}
        />
        <FlexBox className="flex-col">
          <Span className="text-xs">{`${props.data.doNm} ${props.data.sigunguNm}`}</Span>
          <Span className="text-sm">{props.data.facltNm}</Span>
        </FlexBox>
      </FlexBox>
    </Anchor>
  );
};

export default Card;
