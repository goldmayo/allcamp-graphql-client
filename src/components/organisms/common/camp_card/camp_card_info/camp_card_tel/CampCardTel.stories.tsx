import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardTel from "./CampCardTel";
import CampCardDetorator from "../../context/CampCardContextDecorator";
import { FaPhoneAlt } from "react-icons/fa";

export default {
  title: "organisms/common/campcard/tel",
  Component: CampCardTel,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardTel>;

const Template: ComponentStory<typeof CampCardTel> = (args) => {
  return <CampCardTel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
  icon: <FaPhoneAlt className="mx-1.5" size={"1rem"} />,
};
