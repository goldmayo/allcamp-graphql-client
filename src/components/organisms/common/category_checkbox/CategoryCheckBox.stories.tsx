import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CategoryCheckBox from "@/components/organisms/common/category_checkbox/CategoryCheckBox";
import { AdvancedSearchFormParams } from "@/core/formdata/AdvancedSearchFormData";
import { AdvancedSearchParamsContextProvider } from "@/context/AdvancedSearchParamsContext";

export default {
  title: "organisms/CategoryCheckBox",
  Component: CategoryCheckBox,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof CategoryCheckBox>;

const Template: ComponentStory<typeof CategoryCheckBox> = (args) => {
  return (
    <AdvancedSearchParamsContextProvider>
      <CategoryCheckBox {...args} />
    </AdvancedSearchParamsContextProvider>
  );
};

export const ByRegion = Template.bind({});
ByRegion.args = {
  option: AdvancedSearchFormParams.region.content,
  id: "category_region",
  title: "지역별",
  name: "region",
  className: "",
  warningMsg: "",
};

export const ByOperationType = Template.bind({});
ByOperationType.args = {
  option: AdvancedSearchFormParams.operation.content,
  id: "category_opstype",
  title: "운영형태",
  name: "operation",
  className: "",
  warningMsg: "",
};

export const ByLocationType = Template.bind({});
ByLocationType.args = {
  option: AdvancedSearchFormParams.location.content,
  id: "category_locationtype",
  title: "입지구분",
  name: "location",
  className: "",
  warningMsg: "",
};

export const ByCampingSiteType = Template.bind({});
ByCampingSiteType.args = {
  option: AdvancedSearchFormParams.campsite.content,
  id: "category_campingsitetype",
  title: "주요시설",
  name: "campsite",
  className: "",
  warningMsg: "",
};

export const ByFloorType = Template.bind({});
ByFloorType.args = {
  option: AdvancedSearchFormParams.floor.content,
  id: "category_floortype",
  title: "바닥형태",
  name: "floor",
  className: "",
  warningMsg: "",
};

export const ByTheme = Template.bind({});
ByTheme.args = {
  option: AdvancedSearchFormParams.theme.content,
  id: "category_theme",
  title: "테마별",
  name: "theme",
  className: "",
  warningMsg: "",
};

export const ByFacility = Template.bind({});
ByFacility.args = {
  option: AdvancedSearchFormParams.facility.content,
  id: "category_facility",
  title: "부대시설",
  name: "facility",
  className: "",
  warningMsg: "",
};

export const ByEtcinfo = Template.bind({});
ByEtcinfo.args = {
  option: AdvancedSearchFormParams.etcinfo.content,
  id: "category_etcinfo",
  title: "기타정보",
  name: "etcinfo",
  className: "",
  warningMsg: "(※ 실제 결과는 현장사정 및 계절에 따라 달라질수 있으니 캠핑장 사업주에 직접 확인 후 이용바랍니다.)",
};
