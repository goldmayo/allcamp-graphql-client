import Span from "@/components/atoms/span/Span";
import CampDetailInfo from "@/components/organisms/about/camp_info/CampDetailInfo";
import CampDetailNav from "@/components/organisms/about/camp_nav/CampDetailNav";
import CampNavList from "@/components/organisms/about/camp_nav_list/CampNavList";
import { useRef } from "react";
import { FC } from "react";
import CampDetailSectionContainer from "../../organisms/about/camp_section_container/CampDetailSectionContainer";

interface AboutTemplateProps {
  content: {
    campImage: string;
    campName: string;
    lineIntro: string;
    tel: string;
    address: string;
    reservation: string;
    homepage: string;
  };
}

const AboutTemplate: FC<AboutTemplateProps> = (props) => {
  const summaryRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);
  const facilitiesRef = useRef<HTMLElement>(null);
  const ownEventRef = useRef<HTMLElement>(null);
  return (
    <main className="flex flex-col">
      <CampDetailInfo content={props.content} campNameTextStyle={""} TextStyle={""} />
      <CampDetailNav navStyle={""}>
        <CampNavList ref={summaryRef} listStyle={""}>
          개요
        </CampNavList>
        <CampNavList ref={featureRef} listStyle={""}>
          주요 특징
        </CampNavList>
        <CampNavList ref={facilitiesRef} listStyle={""}>
          편의시설 / 서비스
        </CampNavList>
        <CampNavList ref={ownEventRef} listStyle={""}>
          자체 문화 행사 및 체험
        </CampNavList>
      </CampDetailNav>
      <Span className="">
        올캠핑에 등록된 정보는 현장상황과 다소 다를 수 있으니 반려동물 동반 여부, 부가 시설물, 추가차량 등 원활한 캠핑을
        위해 꼭 필요한 사항은 해당 캠핑장에 미리 확인하시기 바랍니다.
      </Span>
      <section ref={summaryRef}>
        <CampDetailSectionContainer title={"개요"} titleStyle={""} containerStyle={""}></CampDetailSectionContainer>
      </section>
      <section ref={featureRef}>
        <CampDetailSectionContainer
          title={"주요 특징"}
          titleStyle={""}
          containerStyle={""}
        ></CampDetailSectionContainer>
      </section>
      <section ref={facilitiesRef}>
        <CampDetailSectionContainer
          title={"편의시설 / 서비스"}
          titleStyle={""}
          containerStyle={""}
        ></CampDetailSectionContainer>
      </section>
      <section ref={ownEventRef}>
        <CampDetailSectionContainer
          title={"자체 문화 행사 및 체험"}
          titleStyle={""}
          containerStyle={""}
        ></CampDetailSectionContainer>
      </section>
    </main>
  );
};

export default AboutTemplate;
