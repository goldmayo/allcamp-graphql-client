import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MdMap } from "react-icons/md";
import InputLabel from "@/components/molecules/input_label/InputLabel";

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

export const Icon = Template.bind({});
Icon.args = {
  labelTag: <MdMap className="px-1" size={"36px"} />,
  id: "keyword",
  name: "keyword",
  type: "text",
  placeholder: "캠핑장명을 입력해주세요",
  required: false,
  className: "",
};
