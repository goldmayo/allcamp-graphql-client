import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchTemplate from "../../components/template/search/SearchTemplate";
import { CampSearchParamsDto } from "../../types/campType";

interface SearchProps {}

const Search: NextPage<SearchProps> = () => {
  const router = useRouter();
  const [params, setParams] = useState<CampSearchParamsDto>();

  useEffect(() => {
    if (!router.isReady) return;
    setParams(JSON.parse(router.query.searchParams as string));
  }, [router, router.isReady]);

  return <SearchTemplate params={JSON.parse(router.query.searchParams as string)} />;
};

export default Search;
