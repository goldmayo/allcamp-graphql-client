import { ComponentMeta, ComponentStory } from "@storybook/react";
import SpanIconItem from "./SpanIconItem";

import {
  FaWifi,
  FaPlug,
  FaSwimmingPool,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaRegCalendarCheck,
  FaGithub,
  FaTags,
} from "react-icons/fa";
import { GiWoodPile, GiKidSlide, GiCementShoes, GiSoccerField, GiTrail } from "react-icons/gi";
import {
  MdOutlineLocalConvenienceStore,
  MdSportsTennis,
  MdHotTub,
  MdSearch,
  MdMap,
  MdClose,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { ImNewTab } from "react-icons/im";

export default {
  title: "Molecules/SpanIconItem",
  Component: SpanIconItem,
} as ComponentMeta<typeof SpanIconItem>;

const Template: ComponentStory<typeof SpanIconItem> = (args) => <SpanIconItem {...args} />;

export const Search = Template.bind({});
Search.args = {
  children: <MdSearch className="" size={"35px"} />,
  iconName: "검색",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const PhoneAlt = Template.bind({});
PhoneAlt.args = {
  children: <FaPhoneAlt className="" size={"35px"} />,
  iconName: "전화번호",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const LocationOn = Template.bind({});
LocationOn.args = {
  children: <FaMapMarkerAlt className="" size={"35px"} />,
  iconName: "주소",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const Home = Template.bind({});
Home.args = {
  children: <HiHome className="" size={"35px"} />,
  iconName: "홈페이지",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const Plug = Template.bind({});
Plug.args = {
  children: <FaPlug className="" size={"35px"} />,
  iconName: "전기",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const Wifi = Template.bind({});
Wifi.args = {
  children: <FaWifi className="" size={"35px"} />,
  iconName: "무선인터넷",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const WoodPile = Template.bind({});
WoodPile.args = {
  children: <GiWoodPile className="" size={"35px"} />,
  iconName: "장작판매",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const HotWater = Template.bind({});
HotWater.args = {
  children: <MdHotTub className="" size={"35px"} />,
  iconName: "온수",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const SwimmingPool = Template.bind({});
SwimmingPool.args = {
  children: <FaSwimmingPool className="" size={"35px"} />,
  iconName: "물놀이장",
  //   className: "text-black font-medium text-center px-1 py-.5",
};
export const Trail = Template.bind({});
Trail.args = {
  children: <GiTrail className="" size={"35px"} />,
  iconName: "산책로",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const Trampoline = Template.bind({});
Trampoline.args = {
  children: <GiCementShoes className="" size={"35px"} />,
  iconName: "트렘폴린",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const PlayGround = Template.bind({});
PlayGround.args = {
  children: <GiKidSlide className="" size={"35px"} />,
  iconName: "놀이터",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const OpenSpace = Template.bind({});
OpenSpace.args = {
  children: <GiSoccerField className="" size={"35px"} />,
  iconName: "운동장",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const SportsFacility = Template.bind({});
SportsFacility.args = {
  children: <MdSportsTennis className="" size={"35px"} />,
  iconName: "운동시설",
  //   className: "text-black font-medium text-center px-1 py-.5",
};

export const MarketAndConvenienceShop = Template.bind({});
MarketAndConvenienceShop.args = {
  children: <MdOutlineLocalConvenienceStore className="" size={"35px"} />,
  iconName: "마트.편의점",
  //   className: "text-black font-medium text-center px-1 py-.5",
};
