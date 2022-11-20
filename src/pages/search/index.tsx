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
    setParams(JSON.parse(router.query.searchParams as string));
  }, [router, router.isReady]);

  return (
    <>
      <SeoHead title={"검색결과"} description={"올캠핑 검색결과 AllCamping search result"} />
      <SearchTemplate params={JSON.parse(router.query.searchParams as string)} />;
    </>
  );
};

export default Search;
