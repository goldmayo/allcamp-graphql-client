import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CampSiteType } from "../../../core/card_list_data/CardListData";
import CardList from "./CardList";

export default {
  title: "organisms/CardList",
  Component: CardList,
  argTypes: {},
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => {
  return <CardList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  data: CampSiteType,
};
