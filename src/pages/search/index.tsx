import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchTemplate from "@/components/template/search/SearchTemplate";
import { CampSearchParamsDto } from "@/types/campType";
import SeoHead from "@/core/seo/SeoHead";

interface SearchProps {}

const Search: NextPage<SearchProps> = () => {
  const router = useRouter();
  const [params, setParams] = useState<CampSearchParamsDto>();

  useEffect(() => {
    if (!router.isReady) return;

    router.query.searchParams === undefined
      ? setParams({ facltNm: null, doNm: null, sigunguNm: null })
      : setParams(JSON.parse(router.query.searchParams as string));
    console.log(params);
  }, [router, router.isReady]);

  return (
    <>
      <SeoHead title={"검색결과"} description={"올캠핑 검색결과 AllCamping search result"} />
      {params && <SearchTemplate params={params} />}
    </>
  );
};

export default Search;
