import Span from "@/components/atoms/span/Span";
import CampDetailInfo from "@/components/organisms/about/camp_info/CampDetailInfo";
import CampDetailNav from "@/components/organisms/about/camp_nav/CampDetailNav";
import CampNavList from "@/components/organisms/about/camp_nav_list/CampNavList";
import { useRef } from "react";
import { FC } from "react";
import CampDetailSectionContainer from "../../organisms/about/camp_section_container/CampDetailSectionContainer";
import { CampInfo } from "@/types/campType";
import AmenityList from "@/components/molecules/amenity_list/AmenityList";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import SearchForm from "@/components/organisms/common/searchbox/SearchForm";

interface AboutTemplateProps {
  content: CampInfo;
}

const AboutTemplate: FC<AboutTemplateProps> = (props) => {
  const summaryRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);
  const facilitiesRef = useRef<HTMLElement>(null);
  const ownEventRef = useRef<HTMLElement>(null);
  const searhBarRef = useRef<HTMLElement>(null);
  return (
    <main className="relative flex flex-col items-center justify-around bg-primary-lightgray">
      <section
        ref={searhBarRef}
        className="sticky top-0 z-50 flex items-center justify-center w-full p-3 mb-4 bg-primary-navy"
      >
        <SearchForm
          type={"default"}
          flexDirection={"row"}
          fontSize={"text-body1"}
          space={"mx-1"}
          formWidth={"w-9/12"}
          width={{
            keywordInput: "w-3/12",
            dosiSelect: "w-3/12",
            button: "w-2/12",
          }}
          buttonSize={"base"}
        />
      </section>
      {/* <section className="w-6/12 p-4 mb-4"> */}
      <CampDetailInfo
        content={{
          campImage: props.content.firstImageUrl ? props.content.firstImageUrl : "",
          campName: props.content.facltNm ? props.content.facltNm : "",
          lineIntro: props.content.lineIntro ? props.content.lineIntro : "",
          tel: props.content.tel ? props.content.tel : "",
          address: props.content.addr1 || props.content.addr2 ? `${props.content.addr1}${props.content.addr2}` : "",
          reservation: props.content.resveCl && props.content.resveUrl ? `${props.content.resveCl}` : "",
          reservationUrl: props.content.resveCl && props.content.resveUrl ? `${props.content.resveUrl}` : "",
          homepage: props.content.homepage ? props.content.homepage : "",
        }}
        campNameTextStyle={"text-headline3 font-semibold"}
        TextStyle={"text-body1 font-medium"}
      />
      {/* </section> */}
      <CampDetailNav
        navStyle={`flex flex-row sticky z-50 top-[${
          searhBarRef.current?.getBoundingClientRect().height
        }px] bg-mono-white border border-primary-bordergray p-4 rounded-md w-6/12 mb-4 leading-relaxed`}
      >
        {props.content.Intro !== "" && (
          <CampNavList ref={summaryRef} listStyle={"mr-4 cursor-pointer text-title3 font-semibold"}>
            개요
          </CampNavList>
        )}
        <CampNavList ref={featureRef} listStyle={"mr-4 cursor-pointer text-title3 font-semibold"}>
          주요 특징
        </CampNavList>
        <CampNavList ref={facilitiesRef} listStyle={"mr-4 cursor-pointer text-title3 font-semibold"}>
          편의시설 / 서비스
        </CampNavList>
        {props.content.clturEventAt === "Y" ||
          (props.content.exprnProgrmAt === "Y" && (
            <CampNavList ref={ownEventRef} listStyle={"mr-4 cursor-pointer text-title3 font-semibold"}>
              자체 문화 행사 및 체험
            </CampNavList>
          ))}
      </CampDetailNav>

      {props.content.Intro !== "" && (
        <section ref={summaryRef} className="w-6/12 mb-4 leading-relaxed">
          <CampDetailSectionContainer
            title={"개요"}
            titleStyle={"text-body1 font-semibold"}
            containerStyle={"bg-mono-white border border-primary-bordergray p-4 rounded-md"}
          >
            <FlexBox className="flex-col p-2 rounded-md bg-primary-lightgray">
              <p className="">{`${props.content.Intro}`}</p>
            </FlexBox>
          </CampDetailSectionContainer>
        </section>
      )}
      <section className="w-6/12 mb-4 leading-relaxed" ref={featureRef}>
        <CampDetailSectionContainer
          title={"주요 특징"}
          titleStyle={"text-body1 font-semibold"}
          containerStyle={"bg-mono-white border border-primary-bordergray p-4 rounded-md"}
        >
          <FlexBox className="flex-col p-2 rounded-md bg-primary-lightgray">
            {props.content.induty !== "" && <Span>{`${props.content.induty}`}</Span>}
            {props.content.featureNm !== "" && <Span>{`${props.content.featureNm}`}</Span>}
            {props.content.tooltip !== "" && <Span>{`${props.content.tooltip}`}</Span>}
            {props.content.themaEnvrnCl !== "" && <Span>{`${props.content.themaEnvrnCl}`}</Span>}
            <Span>{`개인 트레일러 입장 ${props.content.trlerAcmpnyAt === "N" ? "불가능" : "가능"}`}</Span>
            <Span>{`개인 캠핑카 입장 ${props.content.caravAcmpnyAt === "N" ? "불가능" : "가능"}`}</Span>
            <Span>{`반려동물 동반 ${props.content.animalCmgCl}`}</Span>
          </FlexBox>
        </CampDetailSectionContainer>
      </section>
      <section className="w-6/12 mb-4 leading-relaxed" ref={facilitiesRef}>
        <CampDetailSectionContainer
          title={"편의시설 / 서비스"}
          titleStyle={"text-body1 font-semibold"}
          containerStyle={"justify-between items-start bg-mono-white border border-primary-bordergray p-4 rounded-md"}
        >
          <section className="w-full mb-4">
            <CampDetailSectionContainer
              title={"주요시설"}
              titleStyle={"py-2 font-semibold text-body2 font-medium"}
              containerStyle={" p-2 rounded-md bg-primary-lightgray"}
            >
              {props.content.gnrlSiteCo !== 0 && <Span>{`일반야영장(${props.content.gnrlSiteCo})`}</Span>}
              {props.content.autoSiteCo !== 0 && <Span>{`자동차야영장(${props.content.autoSiteCo})`}</Span>}
              {props.content.glampSiteCo !== 0 && <Span>{`글램핑(${props.content.glampSiteCo})`}</Span>}
              {props.content.glampInnerFclty !== "" && (
                <Span>{` - 글램핑내부시설: ${props.content.glampInnerFclty}`}</Span>
              )}
              {props.content.caravSiteCo !== 0 && <Span>{`카라반(${props.content.caravSiteCo})`}</Span>}
              {props.content.caravInnerFclty !== "" && (
                <Span>{` - 카라반내부시설: ${props.content.caravInnerFclty}`}</Span>
              )}
              {props.content.indvdlCaravSiteCo !== 0 && <Span>{`개인카라반(${props.content.indvdlCaravSiteCo})`}</Span>}
            </CampDetailSectionContainer>
          </section>
          {props.content.eqpmnLendCl !== "" && (
            <section className="w-full mb-4">
              <CampDetailSectionContainer
                title={"캠핑장비대여 품목"}
                titleStyle={"py-2 font-semibold text-body2 font-medium"}
                containerStyle={" p-2 rounded-md bg-primary-lightgray"}
              >
                <Span>{`${props.content.eqpmnLendCl}`}</Span>
              </CampDetailSectionContainer>
            </section>
          )}
          {props.content.sbrsCl !== "" && (
            <section className="w-full mb-4">
              <CampDetailSectionContainer
                title={"부대시설"}
                titleStyle={"py-2 font-semibold text-body2 font-medium"}
                containerStyle={" p-2 rounded-md bg-primary-lightgray"}
              >
                <AmenityList
                  sbrsCl={`${props.content.sbrsCl}`}
                  gap={"mx-4"}
                  contentId={`${props.content.contentId}`}
                  textStyle={"text-body3"}
                />
              </CampDetailSectionContainer>
            </section>
          )}
          {(props.content.sbrsEtc !== "" ||
            props.content.wtrplCo !== 0 ||
            props.content.toiletCo !== 0 ||
            props.content.swrmCo !== 0 ||
            props.content.brazierCl !== null) && (
            <section className="w-full mb-4">
              <CampDetailSectionContainer
                title={"기타시설"}
                titleStyle={"py-2 font-semibold text-body2 font-medium"}
                containerStyle={" p-2 rounded-md bg-primary-lightgray"}
              >
                {props.content.sbrsEtc !== "" && <Span>{`기타부대시설:${props.content.sbrsEtc}`}</Span>}
                {props.content.wtrplCo !== 0 && <Span>{`개수대(${props.content.wtrplCo})`}</Span>}
                {props.content.toiletCo !== 0 && <Span>{`화장실(${props.content.toiletCo})`}</Span>}
                {props.content.swrmCo !== 0 && <Span>{`샤워장(${props.content.swrmCo})`}</Span>}
                {props.content.brazierCl !== null && <Span>{`화로형태: ${props.content.brazierCl}`}</Span>}
              </CampDetailSectionContainer>
            </section>
          )}
          {(props.content.posblFcltyCl !== undefined || props.content.posblFcltyClEtc !== undefined) && (
            <section className="w-full mb-4">
              <CampDetailSectionContainer
                title={"주변이용가능시설"}
                titleStyle={"py-2 font-semibold text-body2 font-medium"}
                containerStyle={" p-2 rounded-md bg-primary-lightgray"}
              >
                {props.content.posblFcltyCl !== undefined && <Span>{`${props.content.posblFcltyCl}`}</Span>}
                {props.content.posblFcltyClEtc !== undefined && <Span>{`${props.content.posblFcltyClEtc}`}</Span>}
              </CampDetailSectionContainer>
            </section>
          )}
          {(props.content.siteBottomCl1 !== 0 ||
            props.content.siteBottomCl2 !== 0 ||
            props.content.siteBottomCl3 !== 0 ||
            props.content.siteBottomCl4 !== 0 ||
            props.content.siteBottomCl5 !== 0) && (
            <section className="w-full mb-4">
              <CampDetailSectionContainer
                title={"캠프바닥재질"}
                titleStyle={"py-2 font-semibold text-body2 font-medium"}
                containerStyle={" p-2 rounded-md bg-primary-lightgray"}
              >
                <Span>{`바닥형태(단위:면)`}</Span>
                {props.content.siteBottomCl1 !== 0 && <Span>{`잔디(${props.content.siteBottomCl1})`}</Span>}
                {props.content.siteBottomCl2 !== 0 && <Span>{`폐쇄석(${props.content.siteBottomCl2})`}</Span>}
                {props.content.siteBottomCl3 !== 0 && <Span>{`데크(${props.content.siteBottomCl3})`}</Span>}
                {props.content.siteBottomCl4 !== 0 && <Span>{`자갈(${props.content.siteBottomCl4})`}</Span>}
                {props.content.siteBottomCl5 !== 0 && <Span>{`맨흙(${props.content.siteBottomCl5})`}</Span>}
              </CampDetailSectionContainer>
            </section>
          )}
          {(props.content.extshrCo !== 0 ||
            props.content.frprvtWrppCo !== 0 ||
            props.content.frprvtSandCo !== 0 ||
            props.content.fireSensorCo !== 0) && (
            <section className="w-full mb-4">
              <CampDetailSectionContainer
                title={"소방안정시설현황"}
                titleStyle={"py-2 font-semibold text-body2 font-medium"}
                containerStyle={" p-2 rounded-md bg-primary-lightgray"}
              >
                {props.content.extshrCo !== 0 && <Span>{`소화기(${props.content.extshrCo})`}</Span>}
                {props.content.frprvtWrppCo !== 0 && <Span>{`방화수(${props.content.frprvtWrppCo})`}</Span>}
                {props.content.frprvtSandCo !== 0 && <Span>{`방화사(${props.content.frprvtSandCo})`}</Span>}
                {props.content.fireSensorCo !== 0 && <Span>{`화재감지기(${props.content.fireSensorCo})`}</Span>}
              </CampDetailSectionContainer>
            </section>
          )}
        </CampDetailSectionContainer>
      </section>
      {props.content.clturEventAt === "Y" ||
        (props.content.exprnProgrmAt === "Y" && (
          <section className="w-6/12 mb-4 leading-relaxed" ref={ownEventRef}>
            <CampDetailSectionContainer
              title={"자체 문화 행사 및 체험"}
              titleStyle={"py-2 font-semibold text-body2 font-medium"}
              containerStyle={"bg-mono-white border border-primary-bordergray p-4 rounded-md"}
            >
              <FlexBox className="flex-col p-2 rounded-md bg-primary-lightgray">
                {props.content.clturEventAt === "Y" && <Span>{`자체문화행사 : ${props.content.clturEvent}`}</Span>}
                {props.content.exprnProgrmAt === "Y" && <Span>{`체험프로그램 : ${props.content.exprnProgrm}`}</Span>}
              </FlexBox>
            </CampDetailSectionContainer>
          </section>
        ))}
      <section className="w-6/12 mb-4 leading-relaxed">
        <CampDetailSectionContainer
          title={"주의사항"}
          titleStyle={"text-body1 font-semibold"}
          containerStyle={"bg-mono-white border border-primary-bordergray p-4 rounded-md"}
        >
          <Span className="w-full p-2 rounded-md bg-primary-lightgray">
            ※올캠핑에 등록된 정보는 현장상황과 다소 다를 수 있으니 반려동물 동반 여부, 부가 시설물, 추가차량 등 원활한
            캠핑을 위해 꼭 필요한 사항은 해당 캠핑장에 미리 확인하시기 바랍니다.
          </Span>
        </CampDetailSectionContainer>
      </section>
    </main>
  );
};

export default AboutTemplate;
