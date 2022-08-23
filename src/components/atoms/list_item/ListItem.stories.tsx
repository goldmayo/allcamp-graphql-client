import { ComponentMeta, ComponentStory } from "@storybook/react";
import ListItem from "./ListItem";
import Icon from "../icon/Icon";
import Span from "../span/Span";

export default {
  title: "Atoms/ListItem",
  Component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <>
      <Icon
        path="/vercel.svg"
        width={50}
        height={50}
        alt={"test alt description"}
        className={"flex w-12 h-12 p-1 justify-center border border-solid rounded-full border-amber-600"}
      />
      <Span className={"text-black font-mono text-center"}>vercel</Span>
    </>,
  ],
  className: "text-black border flex flex-col w-20 justify-center items-center p-1",
};
