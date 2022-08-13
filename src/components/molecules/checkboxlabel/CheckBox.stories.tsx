import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBoxLabel from "./CheckBoxLabel";

export default {
  title: "Molecules/CheckBoxLabel",
  Component: CheckBoxLabel,
  argTypes: {
    checked: { control: "boolean" },
    onChange: { actions: "onChange" },
  },
} as ComponentMeta<typeof CheckBoxLabel>;

const Template: ComponentStory<typeof CheckBoxLabel> = (args) => {
  return (
    <>
      <CheckBoxLabel
        {...args}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          args.onChange(e);
        }}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "서울시",
  id: "seoulsi",
  className: "text-black font-medium  px-1.5 py-0.5 border border-black",
  required: false,
};
