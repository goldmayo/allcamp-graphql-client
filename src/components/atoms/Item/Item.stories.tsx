import { ComponentMeta, ComponentStory } from "@storybook/react";
import Item from "./Item";
import Image from "../image/Image";
import Span from "../span/Span";

export default {
  title: "Atom/Item",
  Component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Image
        path="/vercel.svg"
        width={50}
        height={50}
        alt={"test alt description"}
        className={"flex w-12 h-12 p-1 justify-center border border-solid rounded-full border-amber-600"}
      />
      <Span content={"vercel"} className={"text-black font-mono text-center"} />
    </>
  ),
  className: "text-black border flex flex-col w-20 justify-center items-center p-1",
};
