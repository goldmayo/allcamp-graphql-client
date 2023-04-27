import { RecommandCarouselData } from "@/core/carousel_data/CarouselRecommandData";
import { CampSiteType } from "@/core/card_list_data/CardListData";
import HomeTemplate from "@/components/template/home/HomeTemplate";

export default function Page() {
  const landingBannerImage = "/LandingBanner.webp";
  const recommandData = RecommandCarouselData;
  const campTypeData = CampSiteType;
  return (
    <HomeTemplate bannerImage={landingBannerImage} carouselContent={recommandData} campsiteTypeContent={campTypeData} />
  );
}
