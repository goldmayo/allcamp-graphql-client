import { ComponentMeta, ComponentStory } from "@storybook/react";
import CategoryDisplayContainer from "./CategoryDisplayContainer";
import { AdvancedSearchParamsContextProvider } from "../../../context/AdvancedSearchParamsContext";

export default {
  title: "organisms/CategoryDisplayContainer",
  Component: CategoryDisplayContainer,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof CategoryDisplayContainer>;

const Template: ComponentStory<typeof CategoryDisplayContainer> = (args) => {
  return (
    <AdvancedSearchParamsContextProvider>
      <CategoryDisplayContainer {...args} />
    </AdvancedSearchParamsContextProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  category: {
    region: "지역",
    campsite: "숙소유형",
    location: "자연환경",
    theme: "테마",
    facility: "부대시설",
    operation: "운영방식",
    floor: "바닥형태",
    etcinfo: "기타",
  },
};
