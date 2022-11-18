import { ComponentMeta, ComponentStory } from "@storybook/react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import CampDetailNav from "./CampDetailNav";
import ListItem from "@/components/atoms/list_item/ListItem";

export default {
  title: "organisms/CampDetailNav",
  Component: CampDetailNav,
  argTypes: {},
} as ComponentMeta<typeof CampDetailNav>;

const Template: ComponentStory<typeof CampDetailNav> = (args) => {
  return <CampDetailNav {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  navStyle: "flex flex-row jutify-start items-center bg-mono-white border border-primary-bordergray p-4 rounded-md",
  children: (
    <>
      <ListItem className="mr-8 cursor-pointer">개요 및 주요특징</ListItem>
      <ListItem className="mr-8 cursor-pointer">편의시설 / 서비스</ListItem>
      <ListItem className="mr-8 cursor-pointer">자체 문화 행사 및 체험</ListItem>
    </>
  ),
};
