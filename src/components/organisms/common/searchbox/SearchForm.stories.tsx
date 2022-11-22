import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchForm from "@/components/organisms/common/searchbox/SearchForm";
import FlexBox from "@/components/atoms/flexbox/FlexBox";

export default {
  title: "organisms/common/SearchForm",
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
