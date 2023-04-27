"use client";
import Carousel from "@/components/molecules/carousel/Carousel";
import { CampInfo } from "@/types/campType";
import React, { FC } from "react";
import CampCard from "../camp_card/CampCard";

interface CampCarouselProps {
  carouselContent: CampInfo[];
}

const CampCarousel: FC<CampCarouselProps> = (props) => {
  return (
    <Carousel className="flex-col justify-center w-full">
      {props.carouselContent.map((camp) => (
        <CampCard
          key={camp.contentId}
          className="flex-col mx-1 border bg-mono-white border-primary-bordergray"
          campsite={camp}
          image={<CampCard.ImageAnchor className="flex items-center justify-center h-[150px] relative" />}
          info={
            <CampCard.Info className="flex-col text-center">
              <CampCard.Name className="px-2 pt-1 font-semibold truncate text-body1" link={true} />
              <CampCard.LineIntro className="px-4 pb-1 truncate text-body3" />
            </CampCard.Info>
          }
        />
      ))}
    </Carousel>
  );
};

export default CampCarousel;
