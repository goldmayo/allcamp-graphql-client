import { FC } from "react";
import Span from "@/components/atoms/span/Span";
import Banner from "@/components/molecules/banner/Banner";
import Carousel from "@/components/molecules/carousel/Carousel";
import CardList from "@/components/molecules/card_list/CardList";
import SearchForm from "@/components/organisms/common/searchbox/SearchForm";
import CampCard from "@/components/organisms/common/camp_card/CampCard";
import { CampInfo } from "@/types/campType";

interface HomeTemplateProps {
  bannerImage: string;
  carouselContent: CampInfo[];
  campsiteTypeContent: CampInfo[];
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  return (
    <main className="flex flex-col items-center justify-around bg-mono-white">
      <section className="mt-1 mb-10 max-w-[1080px] w-11/12">
        <Banner
          imageSrc={`${props.bannerImage}`}
          className={" w-full h-[340px] flex-col justify-center items-center relative text-mono-white"}
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
        <Carousel className="flex-col justify-center w-full">
          {props.carouselContent.map((camp) => (
            <CampCard
              key={camp.contentId}
              className="flex-col mx-1 border bg-mono-white border-primary-bordergray"
              campsite={camp}
              image={<CampCard.ImageAnchor className="flex items-center justify-center h-[150px] relative" />}
              info={
                <CampCard.Info className="flex-col text-center">
                  <CampCard.Name className="px-2 pt-1 font-semibold truncate text-body1" link={true} />
                  <CampCard.LineIntro className="px-4 pb-1 truncate text-body3" />
                </CampCard.Info>
              }
            />
          ))}
        </Carousel>
      </section>
    </main>
  );
};

export default HomeTemplate;
