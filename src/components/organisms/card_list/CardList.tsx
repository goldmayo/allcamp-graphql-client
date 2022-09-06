import React, { FC, useId } from "react";
import { CardData } from "../../../types/cardDataType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import ListItem from "../../atoms/list_item/ListItem";
import Card from "../../molecules/card/Card";

interface CardListInterface {
  data: CardData[];
}

const CardList: FC<CardListInterface> = (props) => {
  const cardTypeId = useId();
  return (
    <FlexBox className={""}>
      <ul className="flex flex-row">
        {props.data &&
          props.data.map((campType) => (
            <ListItem key={cardTypeId} className={""}>
              <Card className={""} data={campType} />
            </ListItem>
          ))}
      </ul>
    </FlexBox>
  );
};

export default CardList;
