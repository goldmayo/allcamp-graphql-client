import { gql } from "@apollo/client";

const searchDetailById = gql`
  query searchDetailById($contentId: Int!) {
    findCampById(contentId: $contentId) {
      firstImageUrl
      facltNm
      lineIntro
      tel
      addr1
      addr2
      resveCl
      resveUrl
      homepage
      modifiedtime

      Intro

      facltDivNm
      featureNm
      induty
      trlerAcmpnyAt
      caravAcmpnyAt
      animalCmgCl
      themaEnvrnCl

      gnrlSiteCo
      autoSiteCo
      indvdlCaravSiteCo
      caravSiteCo
      caravInnerFclty
      glampSiteCo
      glampInnerFclty

      eqpmnLendCl

      sbrsCl

      sbrsEtc
      wtrplCo
      toiletCo
      swrmCo
      brazierCl

      posblFcltyCl
      posblFcltyEtc

      siteBottomCl1
      siteBottomCl2
      siteBottomCl3
      siteBottomCl4
      siteBottomCl5

      extshrCo
      frprvtWrppCo
      frprvtSandCo
      fireSensorCo

      clturEventAt
      clturEvent
      exprnProgrmAt
      exprnProgrm

      tooltip
    }
  }
`;

export default searchDetailById;
