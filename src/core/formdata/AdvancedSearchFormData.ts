import { DONAME } from "../../types/administrativeDivision";
import { AdvancedSearchFormInterface } from "../../types/searchFormType";

export const AdvancedSearchFormParams: AdvancedSearchFormInterface = {
  region: {
    content: [
      { id: "category_region_1", name: "region", value: DONAME.Seoul },
      { id: "category_region_2", name: "region", value: DONAME.Busan },
      { id: "category_region_3", name: "region", value: DONAME.Daegu },
      { id: "category_region_4", name: "region", value: DONAME.Incheon },
      { id: "category_region_5", name: "region", value: DONAME.Gwangju },
      { id: "category_region_6", name: "region", value: DONAME.Daejeon },
      { id: "category_region_7", name: "region", value: DONAME.Ulsan },
      { id: "category_region_8", name: "region", value: DONAME.Sejong },
      { id: "category_region_9", name: "region", value: DONAME.Gyeonggi },
      { id: "category_region_10", name: "region", value: DONAME.Gangwon },
      { id: "category_region_11", name: "region", value: DONAME.Chungcheongbuk },
      { id: "category_region_12", name: "region", value: DONAME.Chungcheongnam },
      { id: "category_region_13", name: "region", value: DONAME.Jeollabuk },
      { id: "category_region_14", name: "region", value: DONAME.Jeollanam },
      { id: "category_region_15", name: "region", value: DONAME.Gyeongsangbuk },
      { id: "category_region_16", name: "region", value: DONAME.Gyeongsangnam },
      { id: "category_region_17", name: "region", value: DONAME.Jeju },
    ],
    id: "category_region",
    title: "지역",
    name: "region",
    className: "",
    warningMsg: "",
  },
  campsite: {
    content: [
      { id: "category_campingsitetype_1", name: "campsite", value: "일반야영장" },
      { id: "category_campingsitetype_2", name: "campsite", value: "자동차야영장" },
      { id: "category_campingsitetype_3", name: "campsite", value: "카라반" },
      { id: "category_campingsitetype_4", name: "campsite", value: "글램핑" },
    ],
    id: "category_campingsitetype",
    title: "숙소유형",
    name: "campsite",
    className: "",
    warningMsg: "",
  },
  location: {
    content: [
      { id: "category_locationtype_1", name: "location", value: "해변" },
      { id: "category_locationtype_2", name: "location", value: "섬" },
      { id: "category_locationtype_3", name: "location", value: "산" },
      { id: "category_locationtype_4", name: "location", value: "숲" },
      { id: "category_locationtype_5", name: "location", value: "계곡" },
      { id: "category_locationtype_6", name: "location", value: "호수" },
      { id: "category_locationtype_7", name: "location", value: "도심" },
    ],
    id: "category_locationtype",
    title: "자연환경",
    name: "location",
    className: "",
    warningMsg: "",
  },
  theme: {
    content: [
      { id: "category_theme_1", name: "theme", value: "일출명소" },
      { id: "category_theme_2", name: "theme", value: "일몰명소" },
      { id: "category_theme_3", name: "theme", value: "수상레저" },
      { id: "category_theme_4", name: "theme", value: "항공레저" },
      { id: "category_theme_5", name: "theme", value: "스키" },
      { id: "category_theme_6", name: "theme", value: "낚시" },
      { id: "category_theme_7", name: "theme", value: "액티비티" },
      { id: "category_theme_8", name: "theme", value: "봄꽃여행" },
      { id: "category_theme_9", name: "theme", value: "여름물놀이" },
      { id: "category_theme_10", name: "theme", value: "가을단풍명소" },
      { id: "category_theme_11", name: "theme", value: "겨울눈꽃명소" },
      { id: "category_theme_12", name: "theme", value: "걷기길" },
    ],
    id: "category_theme",
    title: "테마",
    name: "theme",
    className: "",
    warningMsg: "",
  },
  facility: {
    content: [
      { id: "category_facility_1", name: "facility", value: "전기" },
      { id: "category_facility_2", name: "facility", value: "무선인터넷" },
      { id: "category_facility_3", name: "facility", value: "장작판매" },
      { id: "category_facility_4", name: "facility", value: "온수" },
      { id: "category_facility_5", name: "facility", value: "트렘폴린" },
      { id: "category_facility_6", name: "facility", value: "물놀이장" },
      { id: "category_facility_7", name: "facility", value: "놀이터" },
      { id: "category_facility_8", name: "facility", value: "산책로" },
      { id: "category_facility_9", name: "facility", value: "운동장" },
      { id: "category_facility_10", name: "facility", value: "운동시설" },
      { id: "category_facility_11", name: "facility", value: "마트.편의점" },
    ],
    id: "category_facility",
    title: "부대시설",
    name: "facility",
    className: "",
    warningMsg: "",
  },
  operation: {
    content: [
      { id: "category_opstype_1", name: "operation", value: "지자체" },
      { id: "category_opstype_2", name: "operation", value: "국립공원" },
      { id: "category_opstype_3", name: "operation", value: "자연휴양림" },
      { id: "category_opstype_4", name: "operation", value: "국민여가" },
      { id: "category_opstype_5", name: "operation", value: "민간" },
    ],
    id: "category_opstype",
    title: "운영방식",
    name: "operation",
    className: "",
    warningMsg: "",
  },
  floor: {
    content: [
      { id: "category_floortype_1", name: "floor", value: "잔디" },
      { id: "category_floortype_2", name: "floor", value: "데크" },
      { id: "category_floortype_3", name: "floor", value: "파쇄석" },
      { id: "category_floortype_4", name: "floor", value: "자갈" },
      { id: "category_floortype_5", name: "floor", value: "맨흙" },
    ],
    id: "category_floortype",
    title: "바닥형태",
    name: "floor",
    className: "",
    warningMsg: "",
  },
  etcinfo: {
    content: [
      { id: "category_etcinfo_1", name: "etcinfo", value: "개인 트레일러 입장가능" },
      { id: "category_etcinfo_2", name: "etcinfo", value: "개인 캠핑카 입장가능" },
      { id: "category_etcinfo_3", name: "etcinfo", value: "반려동물 동반가능" },
    ],
    id: "category_etcinfo",
    title: "기타",
    name: "etcinfo",
    className: "",
    warningMsg: "(※ 실제 결과는 현장사정 및 계절에 따라 달라질수 있으니 캠핑장 사업주에 직접 확인 후 이용바랍니다.)",
  },
};
