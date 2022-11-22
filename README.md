# 올캠핑(AllCamping) Graphql Server

![AllCamping Screen Shot][product-screenshot]

> Figma 목업과 아토믹 디자인 시스템을 적용한 전국의 캠핑장 정보 조회 토이 프로젝트 (한국관광공사 고캠핑 api 활용).

## 기술스택

[![Ubuntu][ubuntu]][ubuntu-url]
[![Next.js][next.js]][next.js-url][![React][react]][react-url][![Typescript][typescript]][typescript-url][![Storybook][storybook]][storybook-url]
[![GraphQL][graphql]][graphql-url][![Relay][relay]][relay-url][![ApolloGraphQL][apollographql]][apollographql-url]
[![Tailwindcss][tailwindcss]][tailwindcss-url][![Figma][figma]][figma-url]

## 설치 방법

※[https://github.com/goldmayo/allcamp-graphql-service](https://github.com/goldmayo/allcamp-graphql-service)를 먼저 설치 후 실행 시켜 주세요.

```sh
> git clone https://github.com/goldmayo/allcamp-graphql-client.git
> npm install
> npm run build
> npm run start
# or
> npm run dev
> npm run storybook
```

## 프로젝트 화면

- 랜딩 페이지
  ![LandingPage Screen Shot1][product-landingpagescreenshot1]

  ![LandingPage Screen Shot2][product-landingpagescreenshot2]

- 검색 결과 페이지
  ![SearchResultPage Screen Shot1][product-searchresultpagescreenshot1]

  ![SearchResultPage Screen Shot2][product-searchresultpagescreenshot2]

- 캠프 정보 페이지
  ![CampInfoPage Screen Shot1][product-campinfopagescreenshot1]

  ![CampInfoPage Screen Shot2][product-campinfopagescreenshot2]

- 스토리북 페이지
  ![storybook-screenshot][storybook-screenshot]

## 주요 기능

- 검색 / 상세검색
  ![SearchResultPage Screen Shot3][product-searchresultpagescreenshot3]
  선택된 검색 조건이 바로 표기됩니다.

- 페이지네이션
  relay-cursor-base형식 페이지네이션을 구현하였습니다.

## 정보

현승재 - dudtod1596@gmail.com

[github repository](https://github.com/goldmayo/allcamp-graphql-client)

[Figma 목업, 프로토타입]([figma-allcamping-design-url])
[Figma 디자인 시스템]([figma-allcamping-design-system-url])

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: public/HighResolutionLogo.png
[product-landingpagescreenshot1]: capture/landing.PNG
[product-landingpagescreenshot2]: capture/landing2.PNG
[product-searchresultpagescreenshot1]: capture/search2.PNG
[product-searchresultpagescreenshot2]: capture/search.PNG
[product-searchresultpagescreenshot3]: capture/search3.PNG
[product-campinfopagescreenshot1]: capture/about2.PNG
[product-campinfopagescreenshot2]: capture/about.PNG
[storybook-screenshot]: capture/storybook.PNG
[ubuntu]: https://img.shields.io/badge/Ubuntu-18.04-E95420?style=flat-square&logo=Ubuntu&logoColor=white
[ubuntu-url]: https://ubuntu.com/
[graphql]: https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=GraphQL&logoColor=white
[graphql-url]: https://graphql.org/
[relay]: https://img.shields.io/badge/Relay-F26B00?style=flat-square&logo=Relay&logoColor=white
[relay-url]: https://relay.dev/
[typescript]: https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[next.js]: https://img.shields.io/badge/next.js-000000?style=flat-square&logo=next.js&logoColor=white
[next.js-url]: https://www.next.jslang.org/
[tailwindcss]: https://img.shields.io/badge/TailwindCSs-06B6D4?style=flat-square&logo=TailwindCSs&logoColor=white
[tailwindcss-url]: https://tailwindcss.com/
[react]: https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white
[react-url]: https://reactjs.org/
[storybook]: https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=Storybook&logoColor=white
[storybook-url]: https://storybook.js.org/
[apollographql]: https://img.shields.io/badge/ApolloGraphQL-311C87?style=flat-square&logo=ApolloGraphQL&logoColor=white
[apollographql-url]: https://www.apollographql.com/docs/react/api/core/ApolloClient/
[figma]: https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white
[figma-url]: https://www.figma.com/
[figma-allcamping-design-url]: https://www.figma.com/file/1ivtyaKdvwzIpYIaEZEt4c/ALLCamping?node-id=0%3A1&t=2sdvxQcWecAW2dPH-1
[figma-allcamping-design-system-url]: https://www.figma.com/file/0ewF1KPQhOy7FPkBOUPNrj/%5BStyleGuide%5DALLCamping?t=2sdvxQcWecAW2dPH-1
