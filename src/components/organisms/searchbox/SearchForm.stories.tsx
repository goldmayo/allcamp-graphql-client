import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SearchForm from "./SearchForm";
import FlexBox from "../../atoms/flexbox/FlexBox";

export default {
  title: "organisms/SearchForm",
  Component: SearchForm,
  argTypes: {
    onSubmit: { action: "SearchForm submitted" },
    onChange: { action: "Select changed" },
  },
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args) => {
  return (
    <FlexBox
      className={
        args.type === "landing"
          ? "drop-shadow-md py-4 px-12 items-center justify-center border rounded-md bg-primary-lightgray border-primary-bordergray max-w-[1080px]"
          : "items-center p-3 justify-center w-full bg-primary-navy max-w-[1080px]"
      }
    >
      <SearchForm {...args} />
    </FlexBox>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: "default",
};

export const Landing = Template.bind({});
Landing.args = {
  type: "landing",
};
