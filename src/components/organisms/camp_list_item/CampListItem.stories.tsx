import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CampInfoEdge } from "../../../types/campType";
import CampListItem from "./CampListItem";

export default {
  title: "organisms/CampListItem",
  Component: CampListItem,
  argTypes: {},
} as ComponentMeta<typeof CampListItem>;

const Template: ComponentStory<typeof CampListItem> = (args) => {
  return <CampListItem {...args} />;
};

const defaultData: CampInfoEdge = {
  __typename: "CampInfoEdge",
  node: {
    __typename: "CampInfo",
    contentId: 100464,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/100464/thumb/thumb_720_33104csvDChBO86DeGMGo0kw.jpeg",
    doNm: "충청남도",
    sigunguNm: "당진시",
    facltNm: "도그팰리스 당진점",
    lineIntro: "드넓은 독채 마당이 있는 애견동반 글램핑장",
    addr1: "충남 당진시 고대면 탕주막길 116-11",
    tel: "010-3533-5292",
    sbrsCl: "전기,무선인터넷,장작판매,온수,물놀이장",
  },
  cursor: "MTAwNDY0",
};
export const Default = Template.bind({});
Default.args = {
  content: defaultData,
};
