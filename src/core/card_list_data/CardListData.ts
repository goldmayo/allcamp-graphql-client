import { CampInfo } from "@/types/campType";
import { CardData } from "../../types/cardDataType";

export const CampSiteType: CardData[] = [
  {
    title: "일반야영장",
    subTitle: "고인물 캠퍼분들에게 추천",
    thumbnailUrl: "/campsiteType/basiccamp.jpeg",
    thumnailAlt: "일반야영장",
    contentId: 0,
  },
  {
    title: "자동차야영장",
    subTitle: "차박러 추천 캠핑장",
    thumbnailUrl: "/campsiteType/autocamp.jpeg",
    thumnailAlt: "자동차야영장",
    contentId: 1,
  },
  {
    title: "카라반",
    subTitle: "캠핑카 고민이라면 일단 자보자",
    thumbnailUrl: "/campsiteType/caravan.jpeg",
    thumnailAlt: "카라반",
    contentId: 2,
  },
  {
    title: "글램핑",
    subTitle: "초보 캠퍼분들에게 추천하는 숙소",
    thumbnailUrl: "/campsiteType/glamping.jpeg",
    thumnailAlt: "글램핑",
    contentId: 3,
  },
];
export const CampSiteType2: CampInfo[] = [
  {
    facltNm: "일반야영장",
    lineIntro: "고인물 캠퍼분들에게 추천",
    firstImageUrl: "/campsiteType/basiccamp.jpeg",
    contentId: 0,
  },
  {
    facltNm: "자동차야영장",
    lineIntro: "차박러 추천 캠핑장",
    firstImageUrl: "/campsiteType/autocamp.jpeg",
    contentId: 1,
  },
  {
    facltNm: "카라반",
    lineIntro: "캠핑카 고민이라면 일단 자보자",
    firstImageUrl: "/campsiteType/caravan.jpeg",
    contentId: 2,
  },
  {
    facltNm: "글램핑",
    lineIntro: "초보 캠퍼분들에게 추천하는 숙소",
    firstImageUrl: "/campsiteType/glamping.jpeg",
    contentId: 3,
  },
];
