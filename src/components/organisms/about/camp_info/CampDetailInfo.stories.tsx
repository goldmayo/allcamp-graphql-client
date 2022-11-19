import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampDetailInfo from "./CampDetailInfo";

export default {
  title: "organisms/CampDetailInfo",
  Component: CampDetailInfo,
  argTypes: {},
} as ComponentMeta<typeof CampDetailInfo>;

const Template: ComponentStory<typeof CampDetailInfo> = (args) => {
  return <CampDetailInfo {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    campImage: "https://gocamping.or.kr/upload/camp/2538/thumb/thumb_720_6392TqzWLZaa7aO26szEuJID.jpg",
    campName: "엘리시안 강촌 캠핑파크",
    lineIntro: "엘리시안 강촌리조트에 마련한 캠핑장",
    tel: "033-260-2568",
    address: "주소 강원 춘천시 남산면 북한강변길 688",
    reservation: "온라인실시간예약",
    reservationUrl: "https://home-ticket.co.kr/elysian/mall/?siteFlag=room&id=&com=",
    homepage: "https://www.elysian.co.kr/gangchon/restaurant/restaurant.asp?facility_id=FCT00000000000000201",
  },
  campNameTextStyle: "text-headline3 font-semibold",
  TextStyle: "text-body3",
};
