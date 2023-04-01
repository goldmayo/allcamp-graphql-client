import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardReservation from "./CampCardReservation";
import CampCardDetorator from "../../context/CampCardContextDecorator";
import { FaRegCalendarCheck } from "react-icons/fa";

export default {
  title: "organisms/common/campcard/reservation",
  Component: CampCardReservation,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardReservation>;

const Template: ComponentStory<typeof CampCardReservation> = (args) => {
  return <CampCardReservation {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
  icon: <FaRegCalendarCheck className="mx-1" size={"1.2rem"} />,
};
