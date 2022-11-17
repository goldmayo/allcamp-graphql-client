import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBoxLabel from "@/components/molecules/checkbox_label/CheckBoxLabel";

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
  name: "region",
  value: "서울시",
  id: "seoulsi",
  className: "text-black font-medium",
  required: false,
};
