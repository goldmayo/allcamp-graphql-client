import { ComponentMeta, ComponentStory } from "@storybook/react";
import Carousel from "./Carousel";

export default {
  title: "organisms/Carousel",
  Component: Carousel,
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
  return (
    <Carousel {...args}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
      <div>
        <h3>9</h3>
      </div>
      <div>
        <h3>10</h3>
      </div>
      <div>
        <h3>11</h3>
      </div>
      <div>
        <h3>12</h3>
      </div>
    </Carousel>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "w-6/12 p-9 bg-slate-400",
  autoplay: false,
  speed: 500,
  loop: false,
};
