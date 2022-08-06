import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Input from "./Input";

export default {
  title: "Atom/Input",
  Component: Input,
  argTypes: {
    onChange: { actions: "onChange" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <>
      <Input
        {...args}
        onChange={(...params) => {
          args.onChange(...params);
          setValue(params[0].target.value);
        }}
        value={value}
      />
      <pre style={{ marginTop: 10 }}>{JSON.stringify({ value }, null, 2)}</pre>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  type: "email",
  placeholder: "email",
  className: "text-black font-medium  px-1.5 py-0.5 border border-black",
  required: true,
};
