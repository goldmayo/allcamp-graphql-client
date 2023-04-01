import { CampInfo } from "@/types/campType";
import CampCardContext from "./CampCardContext";
import { useParameter } from "@storybook/addons";
import { useState } from "react";
import { Meta, Story, StoryContext } from "@storybook/react";

export default function CampCardDetorator(Story: Story, context: StoryContext) {
  const initialState = useParameter("camp", {
    __typename: "CampInfo",
    contentId: 100464,
    firstImageUrl: "https://gocamping.or.kr/upload/camp/100464/thumb/thumb_720_33104csvDChBO86DeGMGo0kw.jpeg",
    doNm: "충청남도",
    sigunguNm: "당진시",
    facltNm: "도그팰리스 당진점",
    lineIntro: "드넓은 독채 마당이 있는 애견동반 글램핑장",
    addr1: "충남 당진시 고대면 탕주막길 116-11",
    tel: "010-3533-5292",
    sbrsCl: "전기,무선인터넷,장작판매,온수,물놀이장",
    homepage: "https://www.dogpalace.kr/",
    resveCl: "온라인실시간예약",
    resveUrl: "https://pension.onda.me/bp/130723/calendar",
  }) as CampInfo;

  const [state, setState] = useState<CampInfo>({ ...initialState });

  return (
    <div>
      <CampCardContext.Provider value={state}>
        <Story />
      </CampCardContext.Provider>
    </div>
  );
}
