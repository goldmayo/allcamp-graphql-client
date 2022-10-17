import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../../molecules/card/Card";
import Carousel from "./Carousel";
import { RecommandCarouselData } from "../../../core/carousel_data/CarouselRecommandData";

export default {
  title: "organisms/Carousel",
  Component: Carousel,
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
  return <Carousel {...args} />;
};

const defaultData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const Default = Template.bind({});
Default.args = {
  children: defaultData.map((index) => (
    <div key={index}>
      <h3>{index}</h3>
    </div>
  )),
  className: "w-6/12 p-9 bg-slate-400",
  autoplay: false,
  speed: 500,
  loop: false,
};

const SampleData = [
  {
    contentId: 7767,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/7767/thumb/thumb_720_6897zhFRTiMXgMH1DUbtVRcI.jpg",
    doNm: "충청남도",
    sigunguNm: "보령시",
    facltNm: "대천용두야영장",
  },
  {
    contentId: 8014,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/8014/thumb/thumb_720_4703Qm7QalwokiTMJMJJxt8m.jpg",
    doNm: "인천시",
    sigunguNm: "서구",
    facltNm: "수도권매립지 캠핑장",
  },
  {
    contentId: 2672,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/2672/thumb/thumb_720_8622MUgbQjvlvxxPtpZckjRE.jpg",
    doNm: "강원도",
    sigunguNm: "삼척시",
    facltNm: "장호비치캠핑장",
  },
  {
    contentId: 6787,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/6787/thumb/thumb_720_4382980LaD7pgCXsyNvl4UkP.jpg",
    doNm: "대전시",
    sigunguNm: "대덕구",
    facltNm: "로하스 가족공원 캠핑장",
  },
  {
    contentId: 6975,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/6975/thumb/thumb_720_8864VHhvenUMGtZByAoSmY82.jpg",
    doNm: "강원도",
    sigunguNm: "정선군",
    facltNm: "동강전망휴양림오토캠핑장",
  },
  {
    contentId: 3120,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/3120/thumb/thumb_720_2230dMoalowTL1SnrYjBhF59.jpg",
    doNm: "경기도",
    sigunguNm: "고양시",
    facltNm: "킨텍스캠핑장 ",
  },
  {
    contentId: 1447,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/1447/thumb/thumb_720_7831YRImoCw9egHpHvfThEbZ.jpg",
    doNm: "경상남도",
    sigunguNm: "사천시",
    facltNm: "비토섬 신우리조트 모던글램핑",
  },
  {
    contentId: 2038,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/2038/thumb/thumb_720_79872wN24Px6afS0mvrhy7AZ.jpg",
    doNm: "경기도",
    sigunguNm: "포천시",
    facltNm: "가래골농원 캠핑장2",
  },
  {
    contentId: 2538,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/2538/thumb/thumb_720_6392TqzWLZaa7aO26szEuJID.jpg",
    doNm: "강원도",
    sigunguNm: "춘천시",
    facltNm: "엘리시안 강촌 캠핑파크",
  },
  {
    contentId: 3105,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/3105/thumb/thumb_720_88096ybOGjPI20shqdQSUPMa.jpg",
    doNm: "강원도",
    sigunguNm: "홍천군",
    facltNm: "석산계곡 코코비발디 글램핑  카라반 오토캠핑장 ",
  },
  {
    contentId: 8029,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/8029/thumb/thumb_720_06451bwXakERFfx0EdjH0sCu.jpg",
    doNm: "인천시",
    sigunguNm: "강화군",
    facltNm: "강화카라반해변",
  },
  {
    contentId: 7635,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/7635/thumb/thumb_720_3686hrSi0AhEPk2vQMgJ20ao.jpg",
    doNm: "경기도",
    sigunguNm: "포천시",
    facltNm: "산중호걸 글램핑",
  },
];

export const FamillyRecommended = Template.bind({});
FamillyRecommended.args = {
  children: RecommandCarouselData.map((camp) => (
    <Card
      key={camp.contentId}
      className=""
      data={{
        title: `${camp.facltNm}`,
        subTitle: `${camp.lineIntro}`,
        // subTitle: `${camp.doNm} ${camp.sigunguNm}`,
        thumbnailUrl: `${camp.firstImageUrl}`,
        thumnailAlt: `${camp.facltNm}`,
        contentId: camp.contentId,
      }}
    />
  )),
  // className: "w-8/12 pt-3 pb-6 px-7 bg-mono-white flex-col justify-center",
  className: "w-full bg-mono-white flex-col justify-center",
  autoplay: false,
  speed: 500,
  loop: false,
};
