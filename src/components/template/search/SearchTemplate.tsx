import { FC, useRef } from "react";
import SearchForm from "../../organisms/searchbox/SearchForm";
import { CampSearchParamsDto } from "../../../types/campType";
import SearchResultDisplay from "../../organisms/search_result_display/SearchResultDisplay";
import Span from "../../atoms/span/Span";
import ScrollButton from "../../molecules/scrollButton/ScrollButton";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

interface SearchTemplateProps {
  params: CampSearchParamsDto;
}

const SearchTemplate: FC<SearchTemplateProps> = (props) => {
  const mref = useRef<HTMLElement>(null);
  return (
    <main ref={mref} className="relative flex flex-col items-center justify-around bg-primary-lightgray">
      <SearchForm type={"default"} />
      <article className="flex flex-col items-center justify-center w-8/12 ">
        {props.params !== undefined ? (
          <SearchResultDisplay params={props.params} />
        ) : (
          <Span className="">0개의 검색결과</Span>
        )}
        <ScrollButton target={mref} className="">
          <HiOutlineChevronDoubleUp size={"40px"} />
        </ScrollButton>
      </article>
    </main>
  );
};

export default SearchTemplate;
