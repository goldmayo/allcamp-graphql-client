import { ComponentMeta, ComponentStory } from "@storybook/react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import CampDetailSectionContainer from "./CampDetailSectionContainer";

export default {
  title: "organisms/CampDetailSectionContainer",
  Component: CampDetailSectionContainer,
  argTypes: {},
} as ComponentMeta<typeof CampDetailSectionContainer>;

const Template: ComponentStory<typeof CampDetailSectionContainer> = (args) => {
  return <CampDetailSectionContainer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  containerStyle: "bg-mono-white border border-primary-bordergray p-4 rounded-md",
  title: "개요 및 주요특징",
  titleStyle: "text-body1 font-semibold",
  children: (
    <FlexBox className="flex-col p-2 rounded-md bg-primary-lightgray">
      <Span>탑정호의 아름다운 풍광과 어우러진 글램핑장</Span>
      <Span>일반야영장 자동차야영장사이트 글램핑시설</Span>
      <Span>개인 트레일러 입장가능 개인 캠핑카 입장가능 반려동물 동반 불가능</Span>
      <Span>(※ 실제 결과는 현장사정 및 계절에 따라 달라질 수 있으니 캠핑장 사업주에 직접 확인 후 이용바랍니다.)</Span>
      <Span>테마환경 : 봄꽃여행,여름물놀이,가을단풍명소,겨울눈꽃명소,걷기길</Span>
    </FlexBox>
  ),
};
