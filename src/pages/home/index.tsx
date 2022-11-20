import type { GetStaticProps, NextPage } from "next";
import HomeTemplate from "@/components/template/home/HomeTemplate";
import { RecommandCarouselData } from "@/core/carousel_data/CarouselRecommandData";
import { CampSiteType } from "@/core/card_list_data/CardListData";
import { CardData, RecommendCampsiteData } from "@/types/cardDataType";
import SeoHead from "@/core/seo/SeoHead";

interface HomeInterface {
  data: {
    landingBannerImage: string;
    recommandData: RecommendCampsiteData[];
    campTypeData: CardData[];
  };
}

const Home: NextPage<HomeInterface> = ({ data }) => {
  return (
    <>
      <SeoHead title={"홈"} description={"allcamping main page 올캠핑 메인 페이지"} />
      <HomeTemplate
        bannerImage={data.landingBannerImage}
        carouselContent={data.recommandData}
        campsiteTypeContent={data.campTypeData}
      />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
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
