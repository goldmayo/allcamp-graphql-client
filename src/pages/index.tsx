import { gql } from "@apollo/client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { initializeApollo } from "../lib/apolloClient";
import { CampInfo, CampInfoConnection } from "../types/campType";
import { searchAllCampsBackward, searchAllCampsForward } from "../lib/query/searchAllcamps";
import HomeTemplate from "../components/template/home/HomeTemplate";
import { RecommandCarouselData } from "../core/carousel_data/CarouselRecommandData";
import { CampSiteType } from "../core/card_list_data/CardListData";
import { CardData, RecommendCampsiteData } from "../types/cardDataType";

interface HomeInterface {
  data: {
    landingBannerImage: string;
    recommandData: RecommendCampsiteData[];
    campTypeData: CardData[];
  };

  // data: {
  //   searchCamps: CampInfoConnection;
  // };
}

const Home: NextPage<HomeInterface> = ({ data }) => {
  return (
    <HomeTemplate
      bannerImage={data.landingBannerImage}
      carouselContent={data.recommandData}
      campsiteTypeContent={data.campTypeData}
    />
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // const apolloClient = initializeApollo();
  const landingBannerImage = "/LandingBanner.webp";
  const recommandData = RecommandCarouselData;
  const campTypeData = CampSiteType;
  return {
    props: {
      data: {
        landingBannerImage,
        recommandData,
        campTypeData,
      },
    },
  };
};
// export const getStaticProps: GetStaticProps = async () => {
//   const apolloClient = initializeApollo();
//   const { data } = await apolloClient.query({
//     query: searchAllCamps,
//     variables: {
//       first: 10,
//       params: {
//         doNm: "경기도",
//         siteBottomCl1: "잔디",
//         siteBottomCl2: "파쇄석",
//         // siteBottomCl3: "테크",
//         // siteBottomCl4: "자갈",
//         // siteBottomCl5: "맨흙",
//         // induty: "자동차야영장,카라반",
//       },
//     },
//   });
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// };
