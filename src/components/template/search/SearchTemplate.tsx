import { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Card from "../../molecules/card/Card";
import SearchForm from "../../organisms/searchbox/SearchForm";
import CardListItem from "../../organisms/camp_list_item/CampListItem";
import { CampInfo, CampInfoEdge, CampInfoConnection, PageInfo, CampSearchParamsDto } from "../../../types/campType";
import Anchor from "../../atoms/anchor/Anchor";
import Pagination from "../../molecules/pagination/Pagination";
import SearchResultDisplay from "../../organisms/search_result_display/SearchResultDisplay";
import Span from "../../atoms/span/Span";

interface SearchTemplateProps {
  // edges: CampInfoEdge[];
  // totalCounts: number;
  // pageInfo: PageInfo;
  // page: number;
  params: CampSearchParamsDto;
}

const SearchTemplate: FC<SearchTemplateProps> = (props) => {
  return (
    <FlexBox className="flex-col justify-center">
      {/* <Header /> */}
      <main className="flex flex-col items-center justify-around bg-mono-white">
        <section className="drop-shadow-md py-4 px-12 items-center justify-center border rounded-md bg-primary-lightgray border-primary-bordergray max-w-[1080px] w-11/12 mb-10">
          <SearchForm type={"default"} />
        </section>
        <article className="flex flex-col items-center justify-center w-11/12 mb-10 max-w-[1080px]">
          {props.params !== undefined ? (
            <SearchResultDisplay params={props.params} />
          ) : (
            <Span className="">0개의 검색결과</Span>
          )}
        </article>
      </main>
      {/* <Footer /> */}
    </FlexBox>
  );
};

export default SearchTemplate;
