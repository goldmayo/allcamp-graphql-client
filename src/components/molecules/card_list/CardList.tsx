"use client";
import React, { FC } from "react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import ListItem from "@/components/atoms/list_item/ListItem";
import { CampInfo } from "@/types/campType";
import CampCard from "@/components/organisms/common/camp_card/CampCard";
import Anchor from "@/components/atoms/anchor/Anchor";

interface CardListInterface {
  data: CampInfo[];
}

const CardList: FC<CardListInterface> = (props) => {
  return (
    <FlexBox className={""}>
      <ul className="flex flex-row justify-around ">
        {props.data &&
          props.data.map((campType) => (
            <ListItem key={campType.contentId} className={"mx-1"}>
              <Anchor
                href={{
                  pathname: "/search",
                  query: {
                    query: encodeURIComponent(JSON.stringify({ induty: campType.induty })),
                  },
                }}
                className={""}
              >
                <CampCard
                  className="flex-col mx-1 border bg-mono-white border-primary-bordergray"
                  campsite={campType}
                  image={<CampCard.Image className="relative" width={250} height={150} />}
                  info={
                    <CampCard.Info className="flex-col text-center">
                      <CampCard.Name className="px-2 pt-1 font-semibold truncate text-body1" />
                      {/* <CampCard.LineIntro className="px-4 pb-1 truncate text-body3" /> */}
                    </CampCard.Info>
                  }
                />
              </Anchor>
            </ListItem>
          ))}
      </ul>
    </FlexBox>
  );
};

export default CardList;
