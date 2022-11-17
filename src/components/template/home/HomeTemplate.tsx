import Banner from "../../organisms/banner/Banner";
import Header from "../../organisms/header/Header";
import SearchForm from "../../organisms/searchbox/SearchForm";
import Carousel from "../../organisms/carousel/Carousel";
import CardList from "../../organisms/card_list/CardList";
import Footer from "../../organisms/footer/Footer";
import { RecommandCarouselData } from "../../../core/carousel_data/CarouselRecommandData";
import { CampSiteType } from "../../../core/card_list_data/CardListData";

import Card from "../../molecules/card/Card";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";
import { RecommendCampsiteData, CardData } from "../../../types/cardDataType";
import { FC } from "react";

interface HomeTemplateProps {
  bannerImage: string;
  carouselContent: RecommendCampsiteData[];
  campsiteTypeContent: CardData[];
}
const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  return (
    <main className="flex flex-col items-center justify-around bg-mono-white">
      <section className="mt-1 mb-10">
        <Banner
          imageSrc={`${props.bannerImage}`}
          className={"w-[1440px] h-[340px] flex-col justify-center items-center relative text-mono-white"}
          slogan={"야영장, 차박, 글램핑, 카라반 등 다양한 캠핑장 정보"}
          sloganStyle={"text-headline1 mb-4 "}
          subSlogan={"한국 관광공사에 등록된 캠핑장 정보를 쉽고 빠르게 찾아보세요"}
          subSloganStyle={"text-headline3"}
        />
      </section>
      <section className="drop-shadow-md py-4 px-12 flex items-center justify-center border rounded-md bg-primary-lightgray border-primary-bordergray max-w-[1080px] w-11/12 mb-10">
        <SearchForm
          type={"landing"}
          flexDirection={"col"}
          fontSize={"text-headline3 font-semibold"}
          space={"mb-4"}
          formWidth={"w-10/12"}
          width={{
            keywordInput: "w-full",
            dosiSelect: "w-full",
            button: "w-full",
          }}
          buttonSize={"lg"}
        />
      </section>
      <section className="flex flex-col items-center justify-center mb-10 max-w-[1080px] w-11/12">
        <Span className="p-4 font-semibold text-headline2 text-mono-black">
          다양한 캠핑장에서 만끽하는 더 특별한 추억
        </Span>
        <CardList data={props.campsiteTypeContent} />
      </section>
      <section className="flex flex-col items-center justify-center w-11/12 mb-10 max-w-[1080px]">
        <Span className="p-4 font-semibold text-headline2 text-mono-black">낭만 넘치는 캠핑장 추천</Span>
        <Carousel className="flex-col justify-center w-full bg-mono-white">
          {props.carouselContent.map((camp) => (
            <Card
              key={camp.contentId}
              className=""
              data={{
                title: `${camp.facltNm}`,
                subTitle: `${camp.lineIntro}`,
                thumbnailUrl: `${camp.firstImageUrl}`,
                thumnailAlt: `${camp.facltNm}`,
                contentId: camp.contentId,
              }}
            />
          ))}
        </Carousel>
      </section>
    </main>
  );
};

export default HomeTemplate;
