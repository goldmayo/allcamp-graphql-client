import React, { FC } from "react";
import Anchor from "../../atoms/anchor/Anchor";
import Icon from "../../atoms/icon/Icon";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";

interface CardInterface {
  className: string;
}

const Card: FC<CardInterface> = (props) => {
  return (
    <Anchor href="" className={""}>
      <FlexBox className="">
        <Icon path={""} width={0} height={0} alt={""} className={""} />
        <Span className="">{}</Span>
        {/* <Icon path={""} width={0} height={0} alt={""} className={""} /> */}
      </FlexBox>
    </Anchor>
  );
};

export default Card;
