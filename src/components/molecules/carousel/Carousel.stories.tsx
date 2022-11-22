import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "@/components/molecules/card/Card";
import Carousel from "@/components/molecules/carousel/Carousel";
import { RecommandCarouselData } from "@/core/carousel_data/CarouselRecommandData";

export default {
  title: "Molecules/Carousel",
  Component: Carousel,
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
  return <Carousel {...args} />;
};

const defaultData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const Default = Template.bind({});
Default.args = {
  children: defaultData.map((index) => (
    <div key={index}>
      <h3>{index}</h3>
    </div>
  )),
  className: "w-6/12 p-9 bg-slate-400",
  autoplay: false,
  speed: 500,
  loop: false,
};

export const FamillyRecommended = Template.bind({});
FamillyRecommended.args = {
  children: RecommandCarouselData.map((camp) => (
    <Card
      key={camp.contentId}
      className=""
      data={{
        title: `${camp.facltNm}`,
        subTitle: `${camp.lineIntro}`,

        thumbnailUrl: `${camp.firstImageUrl}`,
        thumnailAlt: `${camp.facltNm}`,
        contentId: camp.contentId,
      }}
      linkpath={{}}
    />
  )),
  className: "w-full bg-mono-white flex-col justify-center",
  autoplay: false,
  speed: 500,
  loop: false,
};
