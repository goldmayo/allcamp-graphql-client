import { SelectBoxData, SelectBoxOptionsData } from "../../types/SelectBoxData";
import {
  DONAME,
  DONAME_VALUE,
  SIGUNGUNAME,
  SIGUNGUNAME_VALUE,
  KEY_OF_DONAME,
  KEY_OF_SIGUNGUNAME,
} from "../../types/administrativeDivision";

export const doNmOptionsData: SelectBoxOptionsData[] = [
  { id: "doName0", value: DONAME.All },
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

export const sigunguNmOptionsData = (doName: DONAME_VALUE): SelectBoxOptionsData[] => {
  const sigunguList = SIGUNGUNAME[convertDonameKRtoEN(doName)];
  return sigunguList.map((sigungu, i = 1) => {
    return { id: `sigunguNm${i}`, value: sigungu };
  });
};

export const doSelectData: SelectBoxData = {
  id: "doNm",
  options: doNmOptionsData,
  labelText: "지역",
  name: "시도",
};

const convertDonameKRtoEN = (doNameKR: DONAME_VALUE): KEY_OF_SIGUNGUNAME => {
  switch (doNameKR) {
    case "전체":
      return "All";
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
