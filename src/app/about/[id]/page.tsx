import { Metadata } from "next";
import { CampInfo } from "@/types/campType";
import { RecommandCarouselData } from "@/core/carousel_data/CarouselRecommandData";
import AboutTemplate from "@/components/template/about/AboutTemplate";
import { getClient } from "@/lib/apolloClient";
import searchDetailById from "@/lib/query/searchDetailById";

const getStaticParams = async () => {
  const paths = RecommandCarouselData.map((el) => {
    return { params: { id: el.contentId } };
  });

  return {
    paths,
  };
};

const getCampDetail = async (campId: number) => {
  const apolloClient = getClient();
  const { data } = await apolloClient.query({
    query: searchDetailById,
    variables: {
      contentId: campId,
    },
  });
  const campDetail: CampInfo = await data.findCampById;
  return campDetail;
};

export async function generateMetadata({ params }: { params: { id: number } }): Promise<Metadata> {
  const campDetail: CampInfo = await getCampDetail(params.id);
  return {
    title: `AllCamping | ${campDetail.facltNm}`,
    description: `allcamping about page 올캠핑 ${campDetail.facltNm} 정보 페이지`,
  };
}

const CampDetail = async ({ params }: { params: { id: number } }) => {
  const campDetail = await getCampDetail(params.id);
  return (
    <>
      <AboutTemplate content={campDetail} />
    </>
  );
};

export default CampDetail;
