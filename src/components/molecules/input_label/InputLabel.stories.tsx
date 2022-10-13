import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputLabel from "./InputLabel";
import { useState } from "react";

export default {
  title: "Molecules/InputLabel",
  Component: InputLabel,
  argTypes: {
    onChange: { action: "InputLabel changed" },
  },
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => {
  const [value, setValue] = useState(args.value ?? "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    args.onChange(e);
    setValue(e.target.value);
  };
  return (
    <>
      <InputLabel {...args} onChange={onChange} value={value} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  labelTag: "캠핑장이름",
  id: "keyword",
  name: "keyword",
  type: "text",
  placeholder: "캠핑장명을 입력해주세요",
  required: false,
  className: "",
};
