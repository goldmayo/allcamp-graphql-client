import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import CheckBox from "./CheckBox";

export default {
  title: "Atoms/CheckBox",
  Component: CheckBox,
  argTypes: {
    onChange: { actions: "onChange" },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <>
      <CheckBox
        {...args}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          args.onChange(e);
          setChecked(!e.target.checked);
        }}
        checked={checked}
      />
      <pre style={{ marginTop: 10 }}>{JSON.stringify({ checked }, null, 2)}</pre>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  name: "default",
  id: "default",
  className: "text-black font-medium  px-1.5 py-0.5 border border-black",
  required: true,
};
