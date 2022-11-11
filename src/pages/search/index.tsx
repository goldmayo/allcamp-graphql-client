import { useLazyQuery, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { searchAllCampsBackward, searchAllCampsForward } from "../../lib/query/searchAllcamps";
import { CampInfoEdge } from "../../types/campType";

interface SearchProps {}

const Search: NextPage<SearchProps> = () => {
  const router = useRouter(); //검색 파라미터 타입 유니온으로 정의
  const params = JSON.parse(router.query.searchParams as string);
  const { loading, error, data } = useQuery(searchAllCampsForward, {
    variables: { first: 10, after: null, params: params },
  });
  // const [handleQueryForward, { loading, error, data }] = useLazyQuery(searchAllCampsForward, {
  //   variables: {
  //     first: 10,
  //     after: null,
  //     params: params,
  //   },
  // });

  useEffect(() => {
    if (!router.isReady) return;
    console.log(JSON.parse(router.query.searchParams as string));
    if (loading) return;
    console.log(data);
    // }, [data, loading, params, router.isReady]);
  }, [data, loading, router, router.isReady]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // handleQueryForward();
  };
  return <button onClick={handleClick}>query</button>;
};

export default Search;
