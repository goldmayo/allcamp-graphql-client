"use client";
import SearchTemplate from "@/components/template/search/SearchTemplate";
import { CampSearchParamsDto } from "@/types/campType";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const query: CampSearchParamsDto = JSON.parse(decodeURIComponent(searchParams.get("query") as string));
  const params = query === null ? { facltNm: null, doNm: null, sigunguNm: null } : query;
  return (
    <>
      <SearchTemplate params={params} />;
    </>
  );
};

export default Search;
