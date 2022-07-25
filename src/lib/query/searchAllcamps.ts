import { gql } from "@apollo/client";

const searchAllCamps = gql`
  query search($first: Int!) {
    searchCamps(first: $first, params: {}) {
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

export default searchAllCamps;
