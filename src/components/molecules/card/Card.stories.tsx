import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "@/components/molecules/card/Card";

export default {
  title: "Molecules/Card",
  Component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args}></Card>;
};
const defaultData = {
  contentId: 7767,
  firstImageUrl: "https://gocamping.or.kr/upload/camp/7767/thumb/thumb_720_6897zhFRTiMXgMH1DUbtVRcI.jpg",
  doNm: "충청남도",
  sigunguNm: "보령시",
  facltNm: "대천용두야영장",
};

export const Default = Template.bind({});
Default.args = {
  className: "",
  data: {
    title: `${defaultData.facltNm}`,
    subTitle: `${defaultData.doNm} ${defaultData.sigunguNm}`,
    thumbnailUrl: `${defaultData.firstImageUrl}`,
    thumnailAlt: `${defaultData.facltNm}`,
    contentId: defaultData.contentId,
  },
  linkpath: {
    pathname: `/`,
  },
};
