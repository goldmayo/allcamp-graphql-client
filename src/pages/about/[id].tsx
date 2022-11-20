import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import searchDetailById from "@/lib/query/searchDetailById";
import { initializeApollo } from "@/lib/apolloClient";
import { RecommandCarouselData } from "@/core/carousel_data/CarouselRecommandData";
import { CampInfo } from "@/types/campType";
import AboutTemplate from "@/components/template/about/AboutTemplate";
import SeoHead from "@/core/seo/SeoHead";

interface CampDetailProps {
  data: {
    findCampById: CampInfo;
  };
}

const CampDetail: NextPage<CampDetailProps> = ({ data }) => {
  const campDetailInfo: CampInfo = data.findCampById;
  return (
    <>
      <SeoHead title={`${campDetailInfo.facltNm}`} description={`${campDetailInfo.facltNm} information page`} />
      <AboutTemplate content={campDetailInfo} />
    </>
  );
};

export default CampDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();
  //@ts-ignore
  const campId = context?.params.id;
  const { data } = await apolloClient.query({
    query: searchDetailById,
    variables: {
      contentId: campId,
    },
  });
  if (!data.findCampById) {
    return { notFound: true };
  }
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = RecommandCarouselData.map((el) => {
    return { params: { id: el.contentId.toString() } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
