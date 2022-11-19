import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import searchDetailById from "@/lib/query/searchDetailById";
import { initializeApollo } from "@/lib/apolloClient";
import { RecommandCarouselData } from "@/core/carousel_data/CarouselRecommandData";
import { CampInfo } from "@/types/campType";
import AboutTemplate from "@/components/template/about/AboutTemplate";

interface CampDetailProps {
  data: {
    findCampById: CampInfo;
  };
}

const CampDetail: NextPage<CampDetailProps> = ({ data }) => {
  const campDetailInfo: CampInfo = data.findCampById;
  // console.log(campDetailInfo);

  const campsiteBottomType = [
    campDetailInfo.siteBottomCl1 === 0 ? "" : `잔디(${campDetailInfo.siteBottomCl1})`,
    campDetailInfo.siteBottomCl2 === 0 ? "" : `파쇄석(${campDetailInfo.siteBottomCl2})`,
    campDetailInfo.siteBottomCl3 === 0 ? "" : `테크(${campDetailInfo.siteBottomCl3})`,
    campDetailInfo.siteBottomCl4 === 0 ? "" : `자갈(${campDetailInfo.siteBottomCl4})`,
    campDetailInfo.siteBottomCl5 === 0 ? "" : `맨흙(${campDetailInfo.siteBottomCl5})`,
  ];
  return (
    <AboutTemplate content={campDetailInfo} />
    // <div>
    //   <h2>{campDetailInfo.facltNm}</h2>
    //   <h4>{campDetailInfo.lineIntro}</h4>
    //   {/* <h4>{campDetailInfo.themaEnvrnCl}</h4> */}
    //   {campDetailInfo.firstImageUrl && (
    //     <Image
    //       src={`${campDetailInfo.firstImageUrl}`}
    //       alt={`${campDetailInfo.facltNm} cover image`}
    //       width={200}
    //       height={200}
    //     />
    //   )}
    //   <div>
    //     <h3>기본정보 for list component</h3>
    //     {/* <List */}
    //   </div>
    //   <div>
    //     <h3>기본정보</h3>
    //     <p>주소 {`${campDetailInfo.addr1} ${campDetailInfo.addr2}`}</p>
    //     <p>캠핑장 환경 {`${campDetailInfo.lctCl}/${campDetailInfo.facltDivNm}`}</p>
    //     <p>캠핑장 유형 {`${campDetailInfo.induty}`}</p>
    //     <p>운영기간 {`${campDetailInfo.operPdCl}`}</p>
    //     <p>운영일 {`${campDetailInfo.operDeCl}`}</p>
    //     <p>홈페이지 {`${campDetailInfo.homepage}`}</p>
    //     <p>예약방법 {`${campDetailInfo.resveCl}`}</p>
    //     <p>주변이용가능시설 {`${campDetailInfo.posblFcltyCl}`}</p>
    //     <p>문의처 {`${campDetailInfo.tel}`}</p>
    //   </div>
    //   <div>
    //     <h3>캠핑장 소개</h3>
    //     <p>{campDetailInfo.Intro}</p>
    //     <p>최종 정보 수정일 : {campDetailInfo.modifiedtime}</p>
    //   </div>
    //   <div>
    //     <h3>캠핑장 시설정보</h3>
    //     <p>{campDetailInfo.sbrsCl}</p>
    //   </div>
    //   <div>
    //     <h3>기타 주요시설</h3>
    //     <p>주요시설 {`${campDetailInfo.induty}`}</p>
    //     <p>반려동물 동반 반려동물 동반 {`${campDetailInfo.animalCmgCl}`}</p>
    //     <p>개인 트레일러 동반 {`${campDetailInfo.trlerAcmpnyAt === "N" ? "불가능" : "가능"}`}</p>
    //     <p>개인 캠핑카 동반 {`${campDetailInfo.caravAcmpnyAt === "N" ? "불가능" : "가능"}`}</p>
    //     <p>기타 부대시설 {campDetailInfo.sbrsEtc}</p>
    //     <p>기타 주변이용가능시설 {campDetailInfo.posblFcltyEtc}</p>
    //     {campDetailInfo.caravInnerFclty && <p>카라반시설 {campDetailInfo.caravInnerFclty}</p>}
    //     {campDetailInfo.glampInnerFclty && <p>글램핑시설 {campDetailInfo.glampInnerFclty}</p>}
    //     {/* 0 혹은 null 처리 */}
    //     <p>사이트 간격 {campDetailInfo.sitedStnc}M</p>
    //     <p>바닥형태(단위:면){`${campsiteBottomType.join(" ")}`}</p>
    //     <p>
    //       사이트 크기
    //       {` ${campDetailInfo.siteMg1Width} X ${campDetailInfo.siteMg1Vrticl} : ${campDetailInfo.siteMg1Co}개`}
    //     </p>
    //     <p>캠핑장비대여 {campDetailInfo.eqpmnLendCl}</p>
    //     <p>화로대 {`${campDetailInfo.brazierCl}`}</p>
    //     <div>
    //       <h3>안전시설 현황</h3>
    //       <p>소화기{`(${campDetailInfo.extshrCo})`}</p>
    //       <p>방화수{`(${campDetailInfo.frprvtWrppCo})`}</p>
    //       <p>방화사{`(${campDetailInfo.frprvtSandCo})`}</p>
    //       <p>화재감지기{`(${campDetailInfo.fireSensorCo})`}</p>
    //     </div>
    //   </div>
    //   <div>
    //     <h3>정보플러스 툴팁</h3>
    //     <p>{campDetailInfo.tooltip}</p>
    //   </div>
    // </div>
  );
};

export default CampDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();
  //@ts-ignore
  const campId = context?.params.id;
  const { data } = await apolloClient.query({
    query: searchDetailById,
    variables: {
      contentId: campId,
    },
  });
  if (!data.findCampById) {
    return { notFound: true };
  }
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = RecommandCarouselData.map((el) => {
    return { params: { id: el.contentId.toString() } };
  });
  console.log(paths);

  return {
    paths,
    fallback: "blocking",
  };
};
