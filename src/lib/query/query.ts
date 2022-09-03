import { gql } from "@apollo/client";

export const searchAllCamps = gql`
  query searchAllCamps($first: Int!, params:{}) {
    searchCamps(first: $first) {
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
  }
`;

export const searchCampsByQuery = gql`
  query searchAllCamps($first: Int!, $after: Int, $params: CampSearchParamsDto) {
    searchCamps(first: $first, after: $after, params: $params) {
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
  }
`;
