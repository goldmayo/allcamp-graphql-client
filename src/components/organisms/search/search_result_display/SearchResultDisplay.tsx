import { FC } from "react";
import { useQuery } from "@apollo/client";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import Pagination from "@/components/molecules/pagination/Pagination";
import CampListItem from "@/components/organisms/search/camp_list_item/CampListItem";
import { searchAllCamps } from "@/lib/query/searchAllcamps";
import { CampInfoConnection, CampInfoEdge, CampSearchParamsDto, Maybe, PageInfo } from "@/types/campType";

interface SearchResultDisplayProps {
  announcementStyle: string;
  displayStyle: string;
  params: CampSearchParamsDto;
}

interface queryResultProps {
  searchCamps: CampInfoConnection;
}

const SearchResultDisplay: FC<SearchResultDisplayProps> = (props) => {
  const { loading, error, data, refetch } = useQuery<queryResultProps>(searchAllCamps, {
    variables: { first: 10, after: null, params: props.params },
    onCompleted(data) {
      window.scrollTo(0, 0);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`${error}`}</p>;

  const pageInfo = data?.searchCamps.pageInfo;

  const handlePagination = (direction: "foward" | "backward", cursor: string, limit: number) => {
    switch (direction) {
      case "foward":
        handleForwardQuery(cursor, limit);
        break;
      case "backward":
        handleBackwardQuery(cursor, limit);
        break;
      default:
        handleForwardQuery(cursor, limit);
        break;
    }
  };

  const handleForwardQuery = (cursor: string, limit: number) => {
    if (pageInfo?.hasNextPage) {
      refetch({
        first: limit,
        after: cursor,
        last: null,
        before: null,
        params: props.params,
      });
    }
  };

  const handleBackwardQuery = (cursor: string, limit: number) => {
    if (pageInfo?.hasPreviousPage) {
      refetch({
        first: null,
        after: null,
        last: limit,
        before: cursor,
        params: props.params,
      });
    }
  };

  return (
    <section className={`${props.displayStyle} flex flex-col`}>
      <Span className={`${props.announcementStyle} self-start`}>
        {`${data ? (data.searchCamps.totalCounts as number) : 0}`}개의 검색결과
      </Span>
      <FlexBox className="flex-col items-center justify-center w-full">
        <ul className="w-full">
          {data &&
            data.searchCamps.edges?.map((node: Maybe<CampInfoEdge>, i) => (
              <CampListItem
                key={`camp_list_item_${node?.cursor}_${i}`}
                content={node as CampInfoEdge}
                className={"mb-4"}
              />
            ))}
        </ul>
        {data && (
          <Pagination
            totalCounts={data ? (data.searchCamps.totalCounts as number) : 1}
            pageInfo={data.searchCamps.pageInfo as PageInfo}
            onLoadMore={handlePagination}
          />
        )}
      </FlexBox>
    </section>
  );
};

export default SearchResultDisplay;
