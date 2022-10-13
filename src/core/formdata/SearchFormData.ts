import { SelectBoxData, SelectBoxOptionsData } from "../../types/selectBoxData";
import {
  DONAME,
  DONAME_VALUE,
  SIGUNGUNAME,
  SIGUNGUNAME_VALUE,
  KEY_OF_DONAME,
  KEY_OF_SIGUNGUNAME,
} from "../../types/administrativeDivision";
import { CAMP_THEME } from "../../types/campTheme";

export const doNmOptionsData: SelectBoxOptionsData[] = [
  { id: "doName1", value: DONAME.Seoul },
  { id: "doName2", value: DONAME.Busan },
  { id: "doName3", value: DONAME.Daegu },
  { id: "doName4", value: DONAME.Incheon },
  { id: "doName5", value: DONAME.Gwangju },
  { id: "doName6", value: DONAME.Daejeon },
  { id: "doName7", value: DONAME.Ulsan },
  { id: "doName8", value: DONAME.Sejong },
  { id: "doName9", value: DONAME.Gyeonggi },
  { id: "doName10", value: DONAME.Gangwon },
  { id: "doName11", value: DONAME.Chungcheongbuk },
  { id: "doName12", value: DONAME.Chungcheongnam },
  { id: "doName13", value: DONAME.Jeollabuk },
  { id: "doName14", value: DONAME.Jeollanam },
  { id: "doName15", value: DONAME.Gyeongsangbuk },
  { id: "doName16", value: DONAME.Gyeongsangnam },
  { id: "doName17", value: DONAME.Jeju },
];

export const doSelectData: SelectBoxData = {
  id: "region",
  options: doNmOptionsData,
  labelText: "지역",
  name: "doName",
};

export const sigunguNmOptionsData = (doName: DONAME_VALUE | ""): SelectBoxOptionsData[] => {
  if (doName === "") return [];
  const sigunguList = SIGUNGUNAME[convertDonameKRtoEN(doName)];
  return sigunguList.map((sigungu, i = 1) => {
    return { id: `${doName}sigunguNm${i}`, value: sigungu };
  });
};

const convertDonameKRtoEN = (doNameKR: DONAME_VALUE): KEY_OF_SIGUNGUNAME => {
  switch (doNameKR) {
    case "서울시":
      return "Seoul";
    case "부산시":
      return "Busan";
    case "대구시":
      return "Daegu";
    case "인천시":
      return "Incheon";
    case "광주시":
      return "Gwangju";
    case "대전시":
      return "Daejeon";
    case "울산시":
      return "Ulsan";
    case "세종시":
      return "Sejong";
    case "경기도":
      return "Gyeonggi";
    case "강원도":
      return "Gangwon";
    case "충청북도":
      return "Chungcheongbuk";
    case "충청남도":
      return "Chungcheongnam";
    case "전라북도":
      return "Jeollabuk";
    case "전라남도":
      return "Jeollanam";
    case "경상북도":
      return "Gyeongsangbuk";
    case "경상남도":
      return "Gyeongsangnam";
    case "제주도":
      return "Jeju";
  }
};

export const campThemeOptionsData: SelectBoxOptionsData[] = [
  { id: "campTheme1", value: CAMP_THEME.Beach },
  { id: "campTheme2", value: CAMP_THEME.Island },
  { id: "campTheme3", value: CAMP_THEME.Mountain },
  { id: "campTheme4", value: CAMP_THEME.Forest },
  { id: "campTheme5", value: CAMP_THEME.Velley },
  { id: "campTheme6", value: CAMP_THEME.River },
  { id: "campTheme7", value: CAMP_THEME.Lake },
  { id: "campTheme8", value: CAMP_THEME.Downtown },
];

export const campThemeSelectData: SelectBoxData = {
  id: "campTheme",
  options: campThemeOptionsData,
  labelText: "테마",
  name: "campTheme",
};
