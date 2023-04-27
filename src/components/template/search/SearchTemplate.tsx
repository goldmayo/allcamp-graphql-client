"use client";
import { FC, useRef } from "react";
import { GoArrowUp } from "react-icons/go";
import Span from "@/components/atoms/span/Span";
import ScrollButton from "@/components/molecules/scrollButton/ScrollButton";
import SearchForm from "@/components/organisms/common/searchbox/SearchForm";
import SearchResultDisplay from "@/components/organisms/search/search_result_display/SearchResultDisplay";
import { CampSearchParamsDto } from "@/types/campType";

interface SearchTemplateProps {
  params: CampSearchParamsDto;
}

const SearchTemplate: FC<SearchTemplateProps> = (props) => {
  const mref = useRef<HTMLElement>(null);
  return (
    <main ref={mref} className="relative flex flex-col items-center justify-around bg-primary-lightgray">
      <section className="sticky top-0 z-40 flex items-center justify-center w-full p-3 bg-primary-navy">
        <SearchForm
          type={"default"}
          flexDirection={"row"}
          fontSize={"text-body1"}
          space={"mx-1"}
          formWidth={"w-9/12"}
          width={{
            keywordInput: "w-3/12",
            dosiSelect: "w-3/12",
            button: "w-2/12",
          }}
          buttonSize={"base"}
        />
      </section>
      <section className="flex flex-col items-center justify-center w-6/12 ">
        {props.params !== undefined ? (
          <SearchResultDisplay
            params={props.params}
            announcementStyle={"p-4 font-semibold text-headline3"}
            displayStyle={"w-full p-1"}
          />
        ) : (
          <Span className="">0개의 검색결과</Span>
        )}
      </section>
      <ScrollButton
        target={mref}
        className="absolute border rounded-lg text-title1 bottom-10 right-10 text-mono-white border-primary-bordergray bg-secondary-lightblue"
      >
        <GoArrowUp size={"2rem"} />
      </ScrollButton>
    </main>
  );
};

export default SearchTemplate;
