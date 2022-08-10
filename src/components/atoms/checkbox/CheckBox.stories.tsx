import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import CheckBox from "./CheckBox";

export default {
  title: "Atom/CheckBox",
  Component: CheckBox,
  argTypes: {
    onChange: { actions: "onChange" },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <>
      <CheckBox
        {...args}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          args.onChange(e);
          setValue(e.target.value);
        }}
        value={value}
      />
      <pre style={{ marginTop: 10 }}>{JSON.stringify({ value }, null, 2)}</pre>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "default",
  name: "default",
  id: "default",
  className: "text-black font-medium  px-1.5 py-0.5 border border-black",
  required: true,
};
