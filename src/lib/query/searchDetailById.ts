import { gql } from "@apollo/client";

const searchDetailById = gql`
  query searchDetailById($contentId: Int!) {
    findCampById(contentId: $contentId) {
      addr1
      addr2
      facltNm
      induty
      lineIntro
      themaEnvrnCl
      firstImageUrl
      tel
      lctCl
      facltDivNm
      gnrlSiteCo
      autoSiteCo
      caravSiteCo
      glampSiteCo
      operPdCl
      operDeCl
      homepage
      resveCl
      resveUrl
      posblFcltyCl
      Intro
      modifiedtime
      sbrsCl
      sbrsEtc
      wtrplCo
      toiletCo
      swrmCo
      trlerAcmpnyAt
      caravAcmpnyAt
      animalCmgCl
      sitedStnc
      posblFcltyEtc
      siteBottomCl1
      siteBottomCl2
      siteBottomCl3
      siteBottomCl4
      siteBottomCl5
      siteMg1Vrticl
      siteMg1Width
      siteMg1Co
      eqpmnLendCl
      brazierCl
      caravInnerFclty
      glampInnerFclty
      extshrCo
      frprvtWrppCo
      frprvtSandCo
      fireSensorCo
      tooltip
    }
  }
`;

export default searchDetailById;
