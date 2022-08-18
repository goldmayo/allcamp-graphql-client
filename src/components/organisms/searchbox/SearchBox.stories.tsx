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
  const [formValue, setFormValue] = useState("");
  const onSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    args.onSubmit(e);
  };
  return <SearchBox {...args} onSubmit={onSubmit} />;
};

export const Default = Template.bind({});
Default.args = {};
