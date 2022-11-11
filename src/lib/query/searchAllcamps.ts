import { gql } from "@apollo/client";

const searchAllCamps = gql`
  query search($first: Int!, $after: String, $params: CampSearchParamsDto) {
    searchCamps(first: $first, after: $after, params: $params) {
      totalCounts
      edges {
        node {
          contentId
          firstImageUrl # 대표 이미지
          doNm # 도
          sigunguNm # 시군구
          facltNm # 야영장명
          lineIntro # 한줄소개
          addr1 # 주소
          tel # 연락처
          sbrsCl # 부대시설
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const searchAllCampsForward = gql`
  query searchCampsForward($first: Int!, $after: String, $params: CampSearchParamsDto) {
    searchCampsForward(first: $first, after: $after, params: $params) {
      totalCounts
      edges {
        node {
          contentId
          firstImageUrl # 대표 이미지
          doNm # 도
          sigunguNm # 시군구
          facltNm # 야영장명
          lineIntro # 한줄소개
          addr1 # 주소
          tel # 연락처
          sbrsCl # 부대시설
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
export const searchAllCampsBackward = gql`
  query searchCampsBackward($last: Int!, $before: String, $params: CampSearchParamsDto) {
    searchCampsBackward(last: $last, before: $before, params: $params) {
      totalCounts
      edges {
        node {
          contentId
          firstImageUrl # 대표 이미지
          doNm # 도
          sigunguNm # 시군구
          facltNm # 야영장명
          lineIntro # 한줄소개
          addr1 # 주소
          tel # 연락처
          sbrsCl # 부대시설
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

/**
 * input CampSearchParamsDto {
  facltNm: String
  doNm: String
  sigunguNm: String
  themaEnvrnCl: String
  facltDivNm: String
  lctCl: String
  # facility: FacilityClass
  induty: String
  # floor: floorMaterial
  siteBottomCl1: String #잔디
  siteBottomCl2: String #파쇄석
  siteBottomCl3: String #테크
  siteBottomCl4: String #자갈
  siteBottomCl5: String #맨흙
  sbrsCl: String
  # Etc: EtcInfo
  trlerAcmpnyAt: String #개인 트레일러 동반 여부(Y:사용, N:미사용)
  caravAcmpnyAt: String #개인 카라반 동반 여부(Y:사용, N:미사용)
  animalCmgCl: String #애완동물출입
}
 */
