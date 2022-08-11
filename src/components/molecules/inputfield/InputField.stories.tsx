import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputField from "./InputField";
import { useState } from "react";

export default {
  title: "Molecules/InputField",
  Component: InputField,
  argTypes: {
    onChange: { action: "InputField changed" },
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => {
  const [value, setValue] = useState(args.value ?? "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    args.onChange(e);
    setValue(e.target.value);
  };
  return (
    <>
      <InputField {...args} onChange={onChange} value={value} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "keyword",
  value: "",
  name: "캠핑장이름",
  type: "text",
  placeholder: "캠핑장이름",
  required: false,
  className: "",
};
