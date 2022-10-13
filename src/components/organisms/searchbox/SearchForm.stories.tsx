import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useRef, useState } from "react";
import SearchForm from "./SearchForm";
import { doSelectData } from "../../../core/formdata/SearchFormData";
import { campThemeSelectData, sigunguNmOptionsData } from "../../../core/formdata/SearchFormData";

export default {
  title: "organisms/SearchForm",
  Component: SearchForm,
  argTypes: {
    onSubmit: { action: "SearchForm submitted" },
    onChange: { action: "Select changed" },
  },
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args) => {
  return <SearchForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  doSelectData: doSelectData,
  campThemeSelectData: campThemeSelectData,
};
