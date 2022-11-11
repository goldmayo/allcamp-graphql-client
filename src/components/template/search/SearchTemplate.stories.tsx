import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchTemplate from "./SearchTemplate";
import { RecommandCarouselData } from "../../../core/carousel_data/CarouselRecommandData";
import { CampSiteType } from "../../../core/card_list_data/CardListData";

export default {
  title: "templates/SearchTemplate",
  Component: SearchTemplate,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof SearchTemplate>;

const Template: ComponentStory<typeof SearchTemplate> = (args) => {
  return <SearchTemplate {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // edges: ,
  // totalCounts:,
  // pageInfo:,
  // page: 1,
};
