import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atom/Button",
  Component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Default = () => {
//   <Button
//     type={"submit"}
//     size={"md"}
//     textColor={"white"}
//     bgColor={"slate-500"}
//     content={"button"}
//     onClick={() => {
//       console.log("button clicked!");
//     }}
//   />;
// };

export const Default = Template.bind({});
Default.args = {
  type: "submit",
  size: "md",
  textColor: "white",
  bgColor: "slate-500",
  content: "button",
  onClick: () => {
    console.log("button clicked!");
  },
};
