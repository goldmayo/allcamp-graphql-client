import { ComponentMeta, ComponentStory } from "@storybook/react";
import HomeTemplate from "./HomeTemplate";
import { RecommandCarouselData } from "../../../core/carousel_data/CarouselRecommandData";
import { CampSiteType } from "../../../core/card_list_data/CardListData";

export default {
  title: "templates/HomeTemplate",
  Component: HomeTemplate,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => {
  return <HomeTemplate {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  bannerImage: "/LandingBanner.webp",
  carouselContent: RecommandCarouselData,
  campsiteTypeContent: CampSiteType,
};
