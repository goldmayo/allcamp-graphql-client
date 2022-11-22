import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from "@/components/molecules/banner/Banner";

export default {
  title: "Molecules/Banner",
  Component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => {
  return <Banner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  imageSrc: "/defaultCamp.svg",
  className: "w-[1440px] h-[340px] flex-col justify-center items-center relative text-mono-black",
  slogan: "야영장, 차박, 글램핑, 카라반 등 다양한 캠핑장 정보",
  sloganStyle: "text-headline1 mb-4 ",
  subSlogan: "한국 관광공사에 등록된 캠핑장 정보를 쉽고 빠르게 찾아보세요",
  subSloganStyle: "text-headline3 ",
};

export const LandingPage = Template.bind({});
LandingPage.args = {
  imageSrc: "/LandingBanner.jpg",
  className: "w-[1440px] h-[340px] flex-col justify-center items-center relative text-mono-white",
  slogan: "야영장, 차박, 글램핑, 카라반 등 다양한 캠핑장 정보",
  sloganStyle: "text-headline1 mb-4 ",
  subSlogan: "한국 관광공사에 등록된 캠핑장 정보를 쉽고 빠르게 찾아보세요",
  subSloganStyle: "text-headline3 ",
};
