import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectBoxLabel from "./SelectBoxLabel";
import { campThemeSelectData, doSelectData } from "../../../core/formdata/SearchFormData";

export default {
  title: "Molecules/SelectBoxLabel",
  Component: SelectBoxLabel,
  argTypes: {
    onChange: { action: "SelectBoxLabel changed" },
  },
} as ComponentMeta<typeof SelectBoxLabel>;

const campThemeData = campThemeSelectData;
const doNameData = doSelectData;
const Template: ComponentStory<typeof SelectBoxLabel> = (args) => <SelectBoxLabel {...args} />;

export const DoNanme = Template.bind({});
DoNanme.args = {
  id: doNameData.id,
  name: doNameData.name,
  options: doNameData.options,
  labelTag: doNameData.labelText,
  placeholder: "전체/도",
  className: "",
};

export const CampTheme = Template.bind({});
CampTheme.args = {
  id: campThemeData.id,
  name: campThemeData.name,
  options: campThemeData.options,
  labelTag: campThemeData.labelText,
  placeholder: "전체/테마",
  className: "",
};
