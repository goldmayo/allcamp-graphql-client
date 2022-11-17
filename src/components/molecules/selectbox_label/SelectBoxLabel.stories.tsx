import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectBoxLabel from "./SelectBoxLabel";
import { doSelectData } from "@/core/formdata/SearchFormData";

export default {
  title: "Molecules/SelectBoxLabel",
  Component: SelectBoxLabel,
  argTypes: {
    onChange: { action: "SelectBoxLabel changed" },
  },
} as ComponentMeta<typeof SelectBoxLabel>;

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
