import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DetailedSearchContextProvider } from "../../../context/DetailedSearchContext";
import SelectedOption from "./SelectedOption";

export default {
  title: "organisms/SelectedOption",
  Component: SelectedOption,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof SelectedOption>;

const Template: ComponentStory<typeof SelectedOption> = (args) => {
  return (
    <DetailedSearchContextProvider>
      <SelectedOption {...args} />
    </DetailedSearchContextProvider>
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
