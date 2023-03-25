import React, { FC } from "react";
import { CardData } from "@/types/cardDataType";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import ListItem from "@/components/atoms/list_item/ListItem";
import Card from "@/components/molecules/card/Card";

interface CardListInterface {
  data: CardData[];
}

const CardList: FC<CardListInterface> = (props) => {
  return (
    <FlexBox className={""}>
      <ul className="flex flex-row justify-around">
        {props.data &&
          props.data.map((campType) => (
            <ListItem key={campType.contentId} className={"mx-2"}>
              <Card
                className={""}
                data={campType}
                linkpath={{
                  pathname: "/search",
                  query: JSON.stringify({ induty: campType.title }),
                  // query: {
                  //   searchParams: JSON.stringify({ induty: campType.title }),
                  // },
                }}
              />
            </ListItem>
          ))}
      </ul>
    </FlexBox>
  );
};

export default CardList;
