import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useRef, useState } from "react";
import CategoryCheckBox from "./CategoryCheckBox";
import { AdvancedSearchFormParams } from "../../../core/formdata/AdvancedSearchFormData";
import { AdvancedSearchParamsContextProvider } from "../../../context/AdvancedSearchParamsContext";

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
const RegionData = [
  { id: "category_region_1", name: "region", value: "서울시" },
  { id: "category_region_2", name: "region", value: "부산시" },
  { id: "category_region_3", name: "region", value: "대구시" },
  { id: "category_region_4", name: "region", value: "인천시" },
  { id: "category_region_5", name: "region", value: "광주시" },
  { id: "category_region_6", name: "region", value: "대전시" },
  { id: "category_region_7", name: "region", value: "울산시" },
  { id: "category_region_8", name: "region", value: "세종시" },
  { id: "category_region_9", name: "region", value: "경기도" },
  { id: "category_region_10", name: "region", value: "강원도" },
  { id: "category_region_11", name: "region", value: "충청북도" },
  { id: "category_region_12", name: "region", value: "충청남도" },
  { id: "category_region_13", name: "region", value: "전라북도" },
  { id: "category_region_14", name: "region", value: "전라남도" },
  { id: "category_region_15", name: "region", value: "경상북도" },
  { id: "category_region_16", name: "region", value: "경상남도" },
  { id: "category_region_17", name: "region", value: "제주도" },
];
export const ByRegion = Template.bind({});
ByRegion.args = {
  option: AdvancedSearchFormParams.region.content,
  // content: RegionData,
  id: "category_region",
  title: "지역별",
  name: "region",
  className: "",
  warningMsg: "",
};

const OperationTypeData = [
  { id: "opstype1", name: "지자체" },
  { id: "opstype2", name: "국립공원" },
  { id: "opstype3", name: "자연휴양림" },
  { id: "opstype4", name: "국민여가" },
  { id: "opstype5", name: "민간" },
];
export const ByOperationType = Template.bind({});
ByOperationType.args = {
  option: AdvancedSearchFormParams.operation.content,
  id: "category_opstype",
  title: "운영형태",
  name: "operation",
  className: "",
  warningMsg: "",
};

const LocationTypeData = [
  { id: "locationtype1", name: "해변" },
  { id: "locationtype2", name: "섬" },
  { id: "locationtype3", name: "산" },
  { id: "locationtype4", name: "숲" },
  { id: "locationtype5", name: "계곡" },
  { id: "locationtype6", name: "호수" },
  { id: "locationtype7", name: "도심" },
];
export const ByLocationType = Template.bind({});
ByLocationType.args = {
  option: AdvancedSearchFormParams.location.content,
  id: "category_locationtype",
  title: "입지구분",
  name: "location",
  className: "",
  warningMsg: "",
};

const CampingSiteTypeData = [
  { id: "campingsitetype1", name: "일반야영장" },
  { id: "campingsitetype2", name: "자동차야영장" },
  { id: "campingsitetype3", name: "카라반" },
  { id: "campingsitetype4", name: "글램핑" },
  { id: "category_campingsitetype_1", name: "campsite", value: "일반야영장" },
  { id: "category_campingsitetype_2", name: "campsite", value: "자동차야영장" },
  { id: "category_campingsitetype_3", name: "campsite", value: "카라반" },
  { id: "category_campingsitetype_4", name: "campsite", value: "글램핑" },
];
export const ByCampingSiteType = Template.bind({});
ByCampingSiteType.args = {
  option: AdvancedSearchFormParams.campsite.content,
  id: "category_campingsitetype",
  title: "주요시설",
  name: "campsite",
  className: "",
  warningMsg: "",
};

const FloorTypeData = [
  { id: "floortype1", name: "잔디" },
  { id: "floortype2", name: "데크" },
  { id: "floortype3", name: "파쇄석" },
  { id: "floortype4", name: "자갈" },
  { id: "floortype5", name: "맨흙" },
];
export const ByFloorType = Template.bind({});
ByFloorType.args = {
  option: AdvancedSearchFormParams.floor.content,
  id: "category_floortype",
  title: "바닥형태",
  name: "floor",
  className: "",
  warningMsg: "",
};

const ThemeData = [
  { id: "theme1", name: "일출명소" },
  { id: "theme2", name: "일몰명소" },
  { id: "theme3", name: "수상레저" },
  { id: "theme4", name: "항공레저" },
  { id: "theme5", name: "스키" },
  { id: "theme6", name: "낚시" },
  { id: "theme7", name: "액티비티" },
  { id: "theme8", name: "봄꽃여행" },
  { id: "theme9", name: "여름물놀이" },
  { id: "theme10", name: "가을단풍명소" },
  { id: "theme11", name: "겨울눈꽃명소" },
  { id: "theme12", name: "걷기길" },
];
export const ByTheme = Template.bind({});
ByTheme.args = {
  option: AdvancedSearchFormParams.theme.content,
  id: "category_theme",
  title: "테마별",
  name: "theme",
  className: "",
  warningMsg: "",
};

const FacilityData = [
  { id: "facility1", name: "전기" },
  { id: "facility2", name: "무선인터넷" },
  { id: "facility3", name: "장작판매" },
  { id: "facility4", name: "온수" },
  { id: "facility5", name: "트렘폴린" },
  { id: "facility6", name: "물놀이장" },
  { id: "facility7", name: "놀이터" },
  { id: "facility8", name: "산책로" },
  { id: "facility9", name: "운동장" },
  { id: "facility10", name: "운동시설" },
  { id: "facility11", name: "마트.편의점" },
];
export const ByFacility = Template.bind({});
ByFacility.args = {
  option: AdvancedSearchFormParams.facility.content,
  id: "category_facility",
  title: "부대시설",
  name: "facility",
  className: "",
  warningMsg: "",
};

const EtcinfoData = [
  { id: "etcinfo1", name: "개인 트레일러 입장가능" },
  { id: "etcinfo2", name: "개인 캠핑카 입장가능" },
  { id: "etcinfo3", name: "반려동물 동반가능" },
];
export const ByEtcinfo = Template.bind({});
ByEtcinfo.args = {
  option: AdvancedSearchFormParams.etcinfo.content,
  id: "category_etcinfo",
  title: "기타정보",
  name: "etcinfo",
  className: "",
  warningMsg: "(※ 실제 결과는 현장사정 및 계절에 따라 달라질수 있으니 캠핑장 사업주에 직접 확인 후 이용바랍니다.)",
};
