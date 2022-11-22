import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CampSiteType } from "@/core/card_list_data/CardListData";
import CardList from "@/components/molecules/card_list/CardList";

export default {
  title: "Molecules/CardList",
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
