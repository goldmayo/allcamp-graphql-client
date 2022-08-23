import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useRef, useState } from "react";
import SearchBox from "./SearchBox";
import { doSelectData } from "../../../core/formdata/SearchBoxData";

export default {
  title: "organisms/SearchBox",
  Component: SearchBox,
  argTypes: {
    onSubmit: { action: "SearchBox submitted" },
    onChange: { action: "Select changed" },
  },
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => {
  return <SearchBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
