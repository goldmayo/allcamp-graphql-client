import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardAdress from "./CampCardAdress";
import CampCardDetorator from "../../context/CampCardContextDecorator";
import { FaMapMarkerAlt } from "react-icons/fa";

export default {
  title: "organisms/common/campcard/adress",
  Component: CampCardAdress,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardAdress>;

const Template: ComponentStory<typeof CampCardAdress> = (args) => {
  return <CampCardAdress {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
  icon: <FaMapMarkerAlt className="mx-1" size={"0.875rem"} />,
};
export const handleUndefind = Template.bind({});
handleUndefind.parameters = {
  camp: {
    addr1: "충남 당진시 고대면 탕주막길",
    addr2: " 116-11",
  },
};
handleUndefind.args = {
  className: "flex flex-row items-center mb-1",
  icon: <FaMapMarkerAlt className="mx-1" size={"0.875rem"} />,
};
